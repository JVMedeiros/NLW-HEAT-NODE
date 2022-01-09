import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        try {
            const { code } = request.body
        
            const service = new AuthenticateUserService()
            const result = await service.execute(code)
    
            return response.status(200).json(result)
        } catch (error) {
            console.log(error)
            return response.status(500).json({error: error.message})
        }
    }
}

export { AuthenticateUserController }