import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<{
        text: string;
        post: {
            id: number;
        };
        user: {
            id: number;
        };
        postId: number;
    } & import("..").CommentEntity>;
    findAll(): Promise<import("..").CommentEntity[]>;
    findOne(id: string): Promise<import("..").CommentEntity>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
