import { Request, Response } from "express";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";
import { ProfileUserService } from "../services/ProfileUserService";


class ProfileUserController {
    async handle(request: Request, response: Response) {
        try {
            const { user_id} = request
            const service = new ProfileUserService()

            const result = await service.execute(user_id)
    
            return response.status(200).json(result)
        } catch (error) {
            console.log(error)
            return response.status(500).json({error: error.message})
        }
    }
}

export { ProfileUserController }