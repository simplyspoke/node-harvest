import Harvest from '../src/harvest';

console.log(process.env.SUBDOMAIN);

const config = {
  subdomain: process.env.SUBDOMAIN,
  userAgent: 'Harvest API Example',
  auth: {
    accessToken: process.env.ACCESS_TOKEN,
    accountId: process.env.ACCOUNT_ID
  }
};

describe('Harvest', () => {
  it('Harvest is instantiable', () => {
    expect(new Harvest(config)).toBeInstanceOf(Harvest);
  });
});
