import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "jobs" })
export class Job {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false, type:"text" })
    title: string;

    @Column({ nullable: false, type:"text"  })
    description: string;

    @Column({ nullable: false, type:"text"  })
    director: string;

    @Column({ nullable: true, type:"int"  })
    rating: number;

    @Column({ nullable: true, type:"text"  })
    image: string;

    @CreateDateColumn({type: "timestamptz"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamptz"})
    updatedAt: Date;
}