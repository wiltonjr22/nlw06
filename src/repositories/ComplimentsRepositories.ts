import { Compliments } from "../entities/Compliment";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Compliments)
class ComplimentsRepositories extends Repository<Compliments> {}

export {  ComplimentsRepositories }