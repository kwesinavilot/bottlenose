import mailConfig from "@/../config/mail";
import nodemailer from "nodemailer";

export async function sendMail({ to, subject, html }) {
  const { provider } = mailConfig;

  if (provider === "mailgun") {
    const formData = new URLSearchParams();
    formData.append("from", mailConfig.mailgun.from);
    formData.append("to", to);
    formData.append("subject", subject);
    formData.append("html", html);

    await fetch(`https://api.mailgun.net/v3/${mailConfig.mailgun.domain}/messages`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`api:${mailConfig.mailgun.apiKey}`).toString("base64"),
      },
      body: formData,
    });
    return;
  }

  if (provider === "resend") {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mailConfig.resend.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: mailConfig.resend.from,
        to,
        subject,
        html,
      }),
    });
    return;
  }

  // Default: mailtrap (SMTP)
  const transporter = nodemailer.createTransport({
    host: mailConfig.mailtrap.host,
    port: mailConfig.mailtrap.port,
    auth: {
      user: mailConfig.mailtrap.user,
      pass: mailConfig.mailtrap.pass,
    },
  });

  await transporter.sendMail({
    from: mailConfig.mailtrap.from,
    to,
    subject,
    html,
  });
}
