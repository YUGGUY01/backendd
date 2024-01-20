import { BaseEntity,Column,Entity,JoinColumn,ManyToOne, OneToOne, PrimaryGeneratedColumn,} from "typeorm";
import { Cat, CatProfile } from "./catentities";

@Entity()
export class CatFood extends BaseEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    type : string;
    
    @OneToOne(() => CatProfile,{
        eager : true
    })

    @JoinColumn()
    profile : CatProfile;

    @ManyToOne(() => CatFood,(catfood) => catfood.cat,{
        eager : true
    })
    cat : CatFood[]
}