<?php
declare(strict_types=1);

// Peremen SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PeremenMakeContext
{
    public static function call(array $ctxmap, ?PeremenContext $basectx): PeremenContext
    {
        return new PeremenContext($ctxmap, $basectx);
    }
}
