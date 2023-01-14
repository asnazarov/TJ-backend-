import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(dto: CreatePostDto): Promise<import("..").PostEntity>;
    findAll(): Promise<import("..").PostEntity[]>;
    findOne(id: string): Promise<import("..").PostEntity>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
