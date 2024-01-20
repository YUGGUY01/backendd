import { Type } from 'class-transformer';
import {Entity,Column,PrimaryGeneratedColumn, BaseEntity,OneToOne, JoinColumn} from 'typeorm'


/*
@Entity()
export class Cat {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    color : string;

    @Column()
    description : string;
}
*/

@Entity()
export class CatProfile extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    father : number;

    @Column()
    mother : string;
}
@Entity()
export class catProfile extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    Father : string;

    @Column()
    Mother : string;
}

@Entity()
export class Cat extends BaseEntity{

    @PrimaryGeneratedColumn()
        id : number;

    @Column()
    name : string;

    @Column()
    color : string;

    @Column()
    description : string;

    @OneToOne(() => CatProfile, {
        eager : true
    })
    @JoinColumn()
    profile : CatProfile;
    
}
