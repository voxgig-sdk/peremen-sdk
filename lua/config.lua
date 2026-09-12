-- Peremen SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Peremen",
      slug = "peremen",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://peremen.space/api/v2",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["authentication"] = {},
      },
    },
    entity = {
      ["authentication"] = {
        ["fields"] = {
          {
            ["format"] = "email",
            ["name"] = "email",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The email address where the code was sent",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["short"] = "Response message",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "success",
            ["short"] = "Indicates whether the request was successful",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "authentication",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/premium/user-email-verification",
                ["segments"] = {
                  {
                    ["lit"] = "premium",
                  },
                  {
                    ["lit"] = "user-email-verification",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "premium",
                  "user-email-verification",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
