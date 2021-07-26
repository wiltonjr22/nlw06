import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryColumn,ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid"
import { Tag } from "./Tag";
import { User } from "./User";


@Entity("Compliments")
class Compliments {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(()=> User)
    usersender : User

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(()=> User)
    userReceiver : User

    @JoinColumn({name: "tag_id"})
    @ManyToOne(()=> Tag)
    tag: Tag;

    @Column()
    tag_id: string;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }






}

export { Compliments };