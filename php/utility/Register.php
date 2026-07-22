<?php
declare(strict_types=1);

// Peremen SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

PeremenUtility::setRegistrar(function (PeremenUtility $u): void {
    $u->clean = [PeremenClean::class, 'call'];
    $u->done = [PeremenDone::class, 'call'];
    $u->make_error = [PeremenMakeError::class, 'call'];
    $u->feature_add = [PeremenFeatureAdd::class, 'call'];
    $u->feature_hook = [PeremenFeatureHook::class, 'call'];
    $u->feature_init = [PeremenFeatureInit::class, 'call'];
    $u->fetcher = [PeremenFetcher::class, 'call'];
    $u->make_fetch_def = [PeremenMakeFetchDef::class, 'call'];
    $u->make_context = [PeremenMakeContext::class, 'call'];
    $u->make_options = [PeremenMakeOptions::class, 'call'];
    $u->make_request = [PeremenMakeRequest::class, 'call'];
    $u->make_response = [PeremenMakeResponse::class, 'call'];
    $u->make_result = [PeremenMakeResult::class, 'call'];
    $u->make_point = [PeremenMakePoint::class, 'call'];
    $u->make_spec = [PeremenMakeSpec::class, 'call'];
    $u->make_url = [PeremenMakeUrl::class, 'call'];
    $u->param = [PeremenParam::class, 'call'];
    $u->prepare_auth = [PeremenPrepareAuth::class, 'call'];
    $u->prepare_body = [PeremenPrepareBody::class, 'call'];
    $u->prepare_headers = [PeremenPrepareHeaders::class, 'call'];
    $u->prepare_method = [PeremenPrepareMethod::class, 'call'];
    $u->prepare_params = [PeremenPrepareParams::class, 'call'];
    $u->prepare_path = [PeremenPreparePath::class, 'call'];
    $u->prepare_query = [PeremenPrepareQuery::class, 'call'];
    $u->result_basic = [PeremenResultBasic::class, 'call'];
    $u->result_body = [PeremenResultBody::class, 'call'];
    $u->result_headers = [PeremenResultHeaders::class, 'call'];
    $u->transform_request = [PeremenTransformRequest::class, 'call'];
    $u->transform_response = [PeremenTransformResponse::class, 'call'];
});
