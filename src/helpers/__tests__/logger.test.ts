import log from '../logger'

describe('helpers/logger', () => {
  it('should run logging methods', () => {
    log.error('An error has occured!')
    log.info('Earth is flat')
    log.success('You are not dead :)')
    log.warn('You will die one day :(')
  })
})
