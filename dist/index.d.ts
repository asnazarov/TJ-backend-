import { UserEntity } from "./user/entities/user.entity";
import { PostEntity } from "./post/entities/post.entity";
import { CommentEntity } from "./comment/entities/comment.entity";
declare const entities: (typeof PostEntity | typeof UserEntity | typeof CommentEntity)[];
export { UserEntity, PostEntity, CommentEntity };
export default entities;
