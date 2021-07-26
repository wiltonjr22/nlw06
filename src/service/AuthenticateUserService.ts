import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/password incorrect")
        }
        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch) {
            throw new Error("Email/password incorrect")
        }
        const token = sign(
        {
            email: user.email,
        },
        "46f08c7a910bb02374634cd4f7d06118", {
            subject : user.id,
            expiresIn: "1D"
        }
        );  
        return token;
    }
}

export { AuthenticateUserService};