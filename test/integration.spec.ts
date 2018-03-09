import Harvest from '../src/harvest';

const config = {
  subdomain: process.env.SUBDOMAIN,
  userAgent: 'MyApp (yourname@example.com)',
  auth: {
    accessToken: process.env.ACCESS_TOKEN,
    accountId: process.env.ACCOUNT_ID
  }
};

describe('Harvest', () => {
  let instance;

  beforeAll(() => {
    instance = new Harvest(config);
  });

  it('Harvest is instantiable', () => {
    expect(instance).toBeInstanceOf(Harvest);
  });

  it('Can retrieve the me record', () => {
    instance
      .request('GET', 'v2/users/me', {})
      .then(response => {
        console.log(response);
        expect(response).toBeDefined();
      })
      .catch(error => {
        console.log(error);
        expect(error).toBeNull();
      });
  });
});
