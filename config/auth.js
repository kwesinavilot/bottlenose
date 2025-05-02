const authConfig = {
    google: {
        enabled: !!process.env.AUTH_GOOGLE_CLIENT_ID && !!process.env.AUTH_GOOGLE_CLIENT_SECRET,
        clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    },
    email: {
        enabled: process.env.AUTH_EMAIL_ENABLED === "true",
    },
    magicLink: {
        enabled: process.env.AUTH_MAGIC_LINK_ENABLED === "true",
    },
};

export default authConfig;
