import {Type} from "class-transformer";
import {IsDefined , IsDate , ValidateNested}  from "class-validator";

export class ActivityDto{

    @IsDefined()
    name : string;
}

export class PetDto {
    name : string ;
    kind : string ;

}

export class StudentDto {
    id : string ;
    name : string ;

    @Type(()=>Date)
    @IsDate()
    birthdate : Date ;

    @Type(()=>PetDto)
    Pet : PetDto ;


    @ValidateNested({each : true})
    @Type(() => ActivityDto)
    activities : [ActivityDto]
}