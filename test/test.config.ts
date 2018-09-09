import { Config } from '../src/index';

const config: Config = {
  subdomain: process.env.SUBDOMAIN,
  userAgent: 'MyApp (yourname@example.com)',
  concurrency: 1,
  auth: {
    accessToken: process.env.ACCESS_TOKEN,
    accountId: process.env.ACCOUNT_ID
  }
};

export default config;
