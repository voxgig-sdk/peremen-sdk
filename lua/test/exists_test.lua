-- Peremen SDK exists test

local sdk = require("peremen_sdk")

describe("PeremenSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
