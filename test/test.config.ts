export default {
  subdomain: process.env.SUBDOMAIN,
  userAgent: 'MyApp (yourname@example.com)',
  auth: {
    accessToken: process.env.ACCESS_TOKEN,
    accountId: process.env.ACCOUNT_ID
  }
};
