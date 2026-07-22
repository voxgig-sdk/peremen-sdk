# Peremen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PeremenFeatures
  def self.make_feature(name)
    case name
    when "base"
      PeremenBaseFeature.new
    when "test"
      PeremenTestFeature.new
    else
      PeremenBaseFeature.new
    end
  end
end
