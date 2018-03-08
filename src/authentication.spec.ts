import Client from './client'

/**
 * Dummy test
 */
describe('Client test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Client is instantiable', () => {
    expect(new Client({})).toBeInstanceOf(Client)
  })
})
