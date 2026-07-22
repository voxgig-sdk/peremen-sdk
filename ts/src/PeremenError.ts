
import { Context } from './Context'


class PeremenError extends Error {

  isPeremenError = true

  sdk = 'Peremen'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  PeremenError
}

