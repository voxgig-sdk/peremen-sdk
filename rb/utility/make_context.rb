# Peremen SDK utility: make_context
require_relative '../core/context'
module PeremenUtilities
  MakeContext = ->(ctxmap, basectx) {
    PeremenContext.new(ctxmap, basectx)
  }
end
