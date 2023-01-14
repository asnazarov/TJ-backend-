import { UserEntity } from "./user/entities/user.entity";
import {PostEntity} from "./post/entities/post.entity";
import {CommentEntity} from "./comment/entities/comment.entity";

const entities = [UserEntity, PostEntity, CommentEntity];

export {UserEntity, PostEntity, CommentEntity};
export default entities;