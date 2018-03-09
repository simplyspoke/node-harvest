import Authentication from './authentication';

/**
 * Dummy test
 */
describe('Authentication test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Authentication is instantiable', () => {
    expect(new Authentication({})).toBeInstanceOf(Authentication);
  });
});
