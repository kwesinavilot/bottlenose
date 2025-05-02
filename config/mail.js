const mailConfig = {
    provider: process.env.MAIL_PROVIDER || "mailtrap", // mailgun | resend | mailtrap
    mailgun: {
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
        from: process.env.MAILGUN_FROM,
    },
    resend: {
        apiKey: process.env.RESEND_API_KEY,
        from: process.env.RESEND_FROM,
    },
    mailtrap: {
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
        from: process.env.MAILTRAP_FROM,
    },
};

export default mailConfig;
