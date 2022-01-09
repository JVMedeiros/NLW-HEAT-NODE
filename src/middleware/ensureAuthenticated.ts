import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'


interface IPayload {
    sub: string
}

export function ensuredAuthenticated(request: Request, response: Response, next: NextFunction){
    try {
        const authToken = request.headers.authorization

        if(!authToken){
            return response.status(401).json({
                errrorCode: 'Token inválido.'
            })
        }
    
        const [,token] = authToken.split(" ")
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload

        request.user_id = sub

        next()
    } catch (error) {
        console.log(error)
        return response.status(401).json({errorCode: 'Token expirado'})
    }
}