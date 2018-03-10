import Authentication from './authentication';

const config = {
  accessToken: process.env.ACCESS_TOKEN,
  accountId: process.env.ACCOUNT_ID
};
/**
 * Dummy test
 */
describe('Authentication test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Authentication is instantiable', () => {
    expect(new Authentication(config)).toBeInstanceOf(Authentication);
  });
});
