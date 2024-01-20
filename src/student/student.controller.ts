import {Body, Controller , Post} from "@nestjs/common"
import {StudentDto} from "./student.dto";

@Controller('student')
export class StudentCotroller {


    @Post()
    postStudentData(@Body() student : StudentDto) : any{
        let today = new Date();
        let yeardiff = today.getFullYear() - student.birthdate.getFullYear();

        return yeardiff;
    }
}