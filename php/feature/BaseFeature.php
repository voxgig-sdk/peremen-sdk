<?php
declare(strict_types=1);

// Peremen SDK base feature

class PeremenBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(PeremenContext $ctx, array $options): void {}
    public function PostConstruct(PeremenContext $ctx): void {}
    public function PostConstructEntity(PeremenContext $ctx): void {}
    public function SetData(PeremenContext $ctx): void {}
    public function GetData(PeremenContext $ctx): void {}
    public function GetMatch(PeremenContext $ctx): void {}
    public function SetMatch(PeremenContext $ctx): void {}
    public function PrePoint(PeremenContext $ctx): void {}
    public function PreSpec(PeremenContext $ctx): void {}
    public function PreRequest(PeremenContext $ctx): void {}
    public function PreResponse(PeremenContext $ctx): void {}
    public function PreResult(PeremenContext $ctx): void {}
    public function PreDone(PeremenContext $ctx): void {}
    public function PreUnexpected(PeremenContext $ctx): void {}
}
