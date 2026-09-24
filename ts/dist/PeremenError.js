"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeremenError = void 0;
class PeremenError extends Error {
    isPeremenError = true;
    sdk = 'Peremen';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.PeremenError = PeremenError;
//# sourceMappingURL=PeremenError.js.map