

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PeremenSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('AuthenticationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PEREMEN_TEST_LIVE=TRUE.
  afterEach(liveDelay('PEREMEN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PeremenSDK.test()
    const ent = testsdk.Authentication()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PEREMEN_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'authentication.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"email","name":"email","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The email address where the code was sent","type":"`$STRING`","index$":0},{"active":true,"name":"message","req":false,"short":"Response message","type":"`$STRING`","index$":1},{"active":true,"name":"success","req":false,"short":"Indicates whether the request was successful","type":"`$BOOLEAN`","index$":2}],"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /premium/user-email-verification","json":"{\"operationId\":\"requestVerificationCode\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"basic\":{\"summary\":\"Basic email verification request\",\"value\":{\"email\":\"user@example.com\"}}},\"schema\":{\"properties\":{\"email\":{\"description\":\"The email address to which the verification code will be sent\",\"example\":\"user@example.com\",\"format\":\"email\",\"type\":\"string\"}},\"required\":[\"email\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"success\":{\"summary\":\"Successful response\",\"value\":{\"email\":\"user@example.com\",\"message\":\"Verification code sent successfully\",\"success\":true}}},\"schema\":{\"properties\":{\"email\":{\"description\":\"The email address where the code was sent\",\"example\":\"user@example.com\",\"format\":\"email\",\"type\":\"string\"},\"message\":{\"description\":\"Response message\",\"example\":\"Verification code sent successfully\",\"type\":\"string\"},\"success\":{\"description\":\"Indicates whether the request was successful\",\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Verification code successfully sent\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"example\":\"Invalid email format\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid email format or missing required fields\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Rate limit exceeded. Please try again later.\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Too many requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"An internal error occurred. Please try again later.\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/premium/user-email-verification","segments":[{"lit":"premium"},{"lit":"user-email-verification"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":0}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"authentication_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Authentication')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const authentication_ref01_ent = client.Authentication()
    let authentication_ref01_data = setup.data.new.authentication['authentication_ref01']

    authentication_ref01_data = (await authentication_ref01_ent.create(authentication_ref01_data)).data()
    assert(null != authentication_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/authentication/AuthenticationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PeremenSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['authentication01','authentication02','authentication03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PEREMEN_TEST_AUTHENTICATION_ENTID': idmap,
    'PEREMEN_TEST_LIVE': 'FALSE',
    'PEREMEN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PEREMEN_TEST_AUTHENTICATION_ENTID']

  const live = 'TRUE' === env.PEREMEN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PEREMEN_TEST_AUTHENTICATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PeremenSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PEREMEN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
