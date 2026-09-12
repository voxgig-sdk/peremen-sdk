import { PeremenEntityBase } from '../PeremenEntityBase';
import type { PeremenSDK } from '../PeremenSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationCreateData } from '../PeremenTypes';
declare class AuthenticationEntity extends PeremenEntityBase<Authentication> {
    constructor(client: PeremenSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    create(this: any, reqdata?: AuthenticationCreateData, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
