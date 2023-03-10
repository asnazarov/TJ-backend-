import {Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {SearchPostDto} from "./dto/search-post.dto";

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  create(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }

  @Get()
  findAll() {
    return this.postService.findAll()
  }

  @Get('/popular')
  getPopularPosts() {
    return this.postService.popular()
  }

  @Get('/search')
  searchPosts(@Query() dto: SearchPostDto) {
    return this.postService.search(dto)
  }

  @Get(':id')
   findOne(@Param('id') id: number) {
    return this.postService.findOne(+id);
  }

  @Patch('id/:id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
