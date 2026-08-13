# Peremen SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PeremenUtility.registrar = ->(u) {
  u.clean = PeremenUtilities::Clean
  u.done = PeremenUtilities::Done
  u.make_error = PeremenUtilities::MakeError
  u.feature_add = PeremenUtilities::FeatureAdd
  u.feature_hook = PeremenUtilities::FeatureHook
  u.feature_init = PeremenUtilities::FeatureInit
  u.fetcher = PeremenUtilities::Fetcher
  u.make_fetch_def = PeremenUtilities::MakeFetchDef
  u.make_context = PeremenUtilities::MakeContext
  u.make_options = PeremenUtilities::MakeOptions
  u.make_request = PeremenUtilities::MakeRequest
  u.make_response = PeremenUtilities::MakeResponse
  u.make_result = PeremenUtilities::MakeResult
  u.make_point = PeremenUtilities::MakePoint
  u.make_spec = PeremenUtilities::MakeSpec
  u.make_url = PeremenUtilities::MakeUrl
  u.param = PeremenUtilities::Param
  u.prepare_auth = PeremenUtilities::PrepareAuth
  u.prepare_body = PeremenUtilities::PrepareBody
  u.prepare_headers = PeremenUtilities::PrepareHeaders
  u.prepare_method = PeremenUtilities::PrepareMethod
  u.prepare_params = PeremenUtilities::PrepareParams
  u.prepare_path = PeremenUtilities::PreparePath
  u.prepare_query = PeremenUtilities::PrepareQuery
  u.graphql_body = PeremenUtilities::GraphqlBody
  u.graphql_errors = PeremenUtilities::GraphqlErrors
  u.result_basic = PeremenUtilities::ResultBasic
  u.result_body = PeremenUtilities::ResultBody
  u.result_headers = PeremenUtilities::ResultHeaders
  u.transform_request = PeremenUtilities::TransformRequest
  u.transform_response = PeremenUtilities::TransformResponse
}
