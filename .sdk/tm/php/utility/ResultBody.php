<?php
declare(strict_types=1);

// Peremen SDK utility: result_body

class PeremenResultBody
{
    public static function call(PeremenContext $ctx): ?PeremenResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
