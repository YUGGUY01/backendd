import { Type } from "class-transformer";
import {IsNotEmpty, ValidateNested} from "class-validator";
import { UpdateDateColumn } from "typeorm";


export class CatProfileDTO{
    @IsNotEmpty()
    father : number;

    @IsNotEmpty()
    mother : string;

}
export class UpdateCatDTO{

}

export class CreateCatDTO {

    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    color : string;

    description? : string;

    @Type(()=> CatProfileDTO)
    profile : CatProfileDTO;

    @ValidateNested({ each : true})
    @Type(() => CatFoodDTO)
    food : CatFoodDTO[]
}

export class CatFoodDTO{
    @IsNotEmpty()
    name : string;
    @IsNotEmpty()
    tpye :string;
}
