import {Injectable, NotFoundException} from '@nestjs/common';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "./entities/post.entity";
import {Repository} from "typeorm";
import {SearchPostDto} from "./dto/search-post.dto";

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(PostEntity) private repository: Repository<PostEntity>
  ) {
  }

  create(dto: CreatePostDto) {
    const newPost = this.repository.create(dto)
    return this.repository.save(newPost)
    // return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find({
      order: {
        createdAt: "DESC"
      }
    });
  }

  async popular() {
    // return this.repository.find({
    //   order: {
    //     views: "DESC"
    //   }
    // })
    const qb = this.repository.createQueryBuilder()
    qb.orderBy('views', 'DESC')
    qb.limit(10)
    const [items, total] = await qb.getManyAndCount()

    return {items, total}
  }

  async search(dto: SearchPostDto) {
    // return this.repository.find({
    //   order: {
    //     createdAt: "DESC"
    //   }
    // });

    const qb = this.repository.createQueryBuilder('p')
    qb.limit(dto.limit || 0)
    qb.take(dto.take || 10)

    if (dto.views) {
      qb.orderBy('views', dto.views)
    }
    if (dto.body) {
      qb.andWhere(`p.body ILIKE :body`)
    }
    if (dto.title) {
      qb.andWhere("p.title ILIKE :title")
    }
    if (dto.tag) {
      qb.andWhere(`p.tags ILIKE :tag`)
    }


    qb.setParameters({
      title: `%${dto.title}%`,
      body: `%${dto.body}%`,
      tag: `%${dto.tag}%`,
      views: dto.views || '',
    })

    const [items, total] = await qb.getManyAndCount()

    return {items, total}
  }

  async findOne(id: number) {
    const find = await this.repository.findOne({
      where: {id}
    });

    if (!find) {
      throw new NotFoundException('Статья не найдена.')
    }

    find.views++
    await this.repository.save(find)
    return find
  }

  async update(id: number, dto: UpdatePostDto) {
    const find = await this.repository.findOne({where: {id}});
    if (!find) {
      throw new NotFoundException('Статья не найдена.')
    }
    return this.repository.update(id, dto)
  }

  async remove(id: number) {
    const find = await this.repository.findOne({where: {id}})
    if (!find) {
      throw new NotFoundException('Статья не найдена')
    }
    return this.repository.delete(id);
  }
}
