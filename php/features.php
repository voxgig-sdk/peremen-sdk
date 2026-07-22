<?php
declare(strict_types=1);

// Peremen SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class PeremenFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new PeremenBaseFeature();
            case "test":
                return new PeremenTestFeature();
            default:
                return new PeremenBaseFeature();
        }
    }
}
