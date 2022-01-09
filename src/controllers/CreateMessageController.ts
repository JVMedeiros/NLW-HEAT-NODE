import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageService } from "../services/CreateMessageService";


class CreateMessageController {
    async handle(request: Request, response: Response) {
        try {
            const { message } = request.body
        
            const { user_id } = request

            const service = new CreateMessageService()

            const result = await service.execute(message, user_id)
    
            return response.status(200).json(result)
        } catch (error) {
            console.log(error)
            return response.status(500).json({error: error.message})
        }
    }
}

export { CreateMessageController }