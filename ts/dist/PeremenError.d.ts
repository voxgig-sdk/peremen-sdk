import { Context } from './Context';
declare class PeremenError extends Error {
    isPeremenError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { PeremenError };
