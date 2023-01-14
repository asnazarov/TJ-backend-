import { UserEntity } from "../../user/entities/user.entity";
export declare class CommentEntity {
    id: number;
    user: UserEntity;
    post: UserEntity;
    text: string;
    createdAt: Date;
    updatedAt: Date;
}
