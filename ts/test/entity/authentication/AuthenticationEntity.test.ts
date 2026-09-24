

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The email address where the code was sent","t":"`$STRING`","key$":"email","index$":0},"message":{"a":true,"h":"Message","n":"message","r":false,"sh":"Response message","t":"`$STRING`","key$":"message","index$":1},"success":{"a":true,"h":"Success","n":"success","r":false,"sh":"Indicates whether the request was successful","t":"`$BOOLEAN`","key$":"success","index$":2}},"name":"authentication","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /premium/user-email-verification","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/premium/user-email-verification","q":{},"r":{},"s":[{"lit":"premium"},{"lit":"user-email-verification"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"authentication","name__orig":"authentication","Name":"Authentication","name_":"authentication","name-":"authentication","NAME":"AUTHENTICATION","index$":0}, {"active":true,"entity":"authentication","key$":"BasicAuthenticationFlow","kind":"basic","name":"BasicAuthenticationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"authentication_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Authentication', {"POST /premium/user-email-verification":{"protocol":"http","operationId":"requestVerificationCode","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"email","description":"The email address to which the verification code will be sent","example":"user@example.com","key$":"email"}},"index$":1},"examples":{"basic":{"summary":"Basic email verification request","value":{"email":"user@example.com"}}}}}},"responses":{"200":{"description":"Verification code successfully sent","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","description":"Indicates whether the request was successful","example":true,"key$":"success"},"message":{"type":"string","description":"Response message","example":"Verification code sent successfully","key$":"message"},"email":{"type":"string","format":"email","description":"The email address where the code was sent","example":"user@example.com","key$":"email"}},"index$":0},"examples":{"success":{"summary":"Successful response","value":{"success":true,"message":"Verification code sent successfully","email":"user@example.com"}}}}}},"400":{"description":"Bad request - Invalid email format or missing required fields","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message describing what went wrong","example":"Invalid email format"}}}}}},"429":{"description":"Too many requests - Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","example":"Rate limit exceeded. Please try again later."}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","example":"An internal error occurred. Please try again later."}}}}}}},"parameters":[],"securitySource":"unspecified"}})
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
  
