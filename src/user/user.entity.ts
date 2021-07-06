import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column({length: 35, nullable: false}) 
    firstName: string;
    
    @Column({length: 35, nullable: true})
    midlleName?: string;
    
    @Column({length: 35, nullable: false})
    lastName: string;

    @Column({length: 35, nullable: false})
    username: string;
    
    @Column({length: 100, nullable: false}) 
    password: string;
}
