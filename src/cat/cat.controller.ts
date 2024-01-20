import { Controller, Get, Post, Req , Body, Param, Put , Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { Request } from 'express';
import { request } from 'http';
import { CreateCatDTO, CatProfileDTO ,UpdateCatDTO } from './cat.dto';
import { Cat } from './catentities';

/* 
@Controller ('cat')
export class CatController{
    constructor(private readonly catService : CatService){

    }
    @Get()
    getIndex(@Req() request : Request ) : string {
        let name = request.query['name'];
        let color = request.query['color'] ?? "Black";

        let resultString = `cat Listhing with name=${request.query['name']} and color=${request.query['color']}`;
        return resultString
        
    }

    @Post()
    postCreate(@Body() CreateCatDTO : CreateCatDTO) : string {
        let name = CreateCatDTO.name;
        let sex = CreateCatDTO.sex;
        let color = CreateCatDTO.color;
        let age = CreateCatDTO.age;
        let description = CreateCatDTO.description;

        let resultString = `Create Cat with name=${'name'},color=${'color'}`;
        resultString += `<br/>age=${age}`
        resultString += `<br/>sex=${sex}`
        resultString +=  `<br/>description=${description}`

        return resultString
    }
}
*/

@Controller('cat')
export class CatController{
    constructor(private readonly catService : CatService){

    }

    @Get()
    getIndex(@Req() request : Request) : Promise<Cat[]> {
        return this.catService.findALL();
    }

    @Get(":id")
    getCatById(@Param('id') id : number ) : Promise<Cat> {
        return this.catService.findOne(id)
    }

    @Post()
    postCreate(@Body() CreateCatDTO : CreateCatDTO) : any{
        return CreateCatDTO;
        return this.catService.create(CreateCatDTO)
    }                  

    @Put(":id")
    updateCatById(@Param('id') id : number, @Body() UpdateCatDTO: UpdateCatDTO) : Promise<Cat>{
        return this.catService.update(UpdateCatDTO)
    }

    @Delete(":id")
    deleteCatById(@Param('id') id : number) : string {
        this.catService.deleteById(id);
        return "OK"
    }
}
