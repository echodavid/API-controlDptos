import { SetMetadata } from '@nestjs/common';
import { VALID_ROLES } from '../interfaces';

export const META_ROLES = 'rol';

export const RoleProtected = (...args: VALID_ROLES[]) => {


    return SetMetadata(META_ROLES, args);
}
