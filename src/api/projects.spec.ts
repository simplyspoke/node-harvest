import Projects from './projects';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Projects test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Projects is instantiable', () => {
    expect(new Projects({})).toBeInstanceOf(Projects);
  });
});
