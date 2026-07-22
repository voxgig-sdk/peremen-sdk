-- Peremen SDK error

local PeremenError = {}
PeremenError.__index = PeremenError


function PeremenError.new(code, msg, ctx)
  local self = setmetatable({}, PeremenError)
  self.is_sdk_error = true
  self.sdk = "Peremen"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PeremenError:error()
  return self.msg
end


function PeremenError:__tostring()
  return self.msg
end


return PeremenError
