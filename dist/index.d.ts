import { UserEntity } from "./user/entities/user.entity";
import { PostEntity } from "./post/entities/post.entity";
declare const entities: (typeof PostEntity | typeof UserEntity)[];
export { UserEntity, PostEntity };
export default entities;
