
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PeremenSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = PeremenSDK.test()
    equal(testsdk instanceof PeremenSDK, true,
      'PeremenSDK.test() must return a client synchronously')
  })

})
