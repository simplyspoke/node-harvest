import Harvest from './harvest'

/**
 * Dummy test
 */
describe('Harvest test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Harvest is instantiable', () => {
    expect(new Harvest({})).toBeInstanceOf(Harvest)
  })
})
