import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response){
        try {
            const { name, email, admin } = request.body;
    
            const createUserService = new CreateUserService();
            
            const user = await createUserService.execute({ name,email,admin });
    
            return response.json(user);
        } catch (error) {
            return response.status(400).json({ error: error.message })            
        }
    }
}

export { CreateUserController }