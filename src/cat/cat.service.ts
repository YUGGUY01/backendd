import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat, CatProfile } from "./catentities";
import { CreateCatDTO, UpdateCatDTO } from "./cat.dto";
import { Logger } from '@nestjs/common';

@Injectable()
export class CatService {

    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
        @InjectRepository(CatProfile)
        private catProfileRepository: Repository<CatProfile>,
    ) {}

    async findALL(): Promise<Cat[]> {
        return this.catRepository.find();
    }

    async findOne(id : any): Promise<Cat | null> {
        return this.catRepository.findOne(id);
    }

    async update(updateCatDTO: UpdateCatDTO): Promise<Cat | null> {
        return this.catRepository.save(updateCatDTO);
    }

    async deleteById(id: number): Promise<void> {
        await this.catRepository.delete(id);
    }

    async create(cat: CreateCatDTO): Promise<Cat | null> {
        Logger.log(JSON.stringify(cat));

        let catProfile = new CatProfile();
        catProfile.father = cat.profile.father;
        catProfile.mother = cat.profile.mother;
        await this.catProfileRepository.save(catProfile);

        Logger.log(JSON.stringify(catProfile));

        let catEntity = new Cat();
        catEntity.name = cat.name;
        catEntity.description = cat.description;
        catEntity.color = cat.color;
        catEntity.profile = catProfile;

        Logger.log(JSON.stringify(catEntity));

        return this.catRepository.save(catEntity);
    }
}
