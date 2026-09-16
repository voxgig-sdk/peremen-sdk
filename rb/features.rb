# Peremen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PeremenFeatures
  def self.make_feature(name)
    case name
    when "base"
      PeremenBaseFeature.new
    when "ratelimit"
      PeremenRatelimitFeature.new
    when "retry"
      PeremenRetryFeature.new
    when "test"
      PeremenTestFeature.new
    when "timeout"
      PeremenTimeoutFeature.new
    else
      PeremenBaseFeature.new
    end
  end
end
