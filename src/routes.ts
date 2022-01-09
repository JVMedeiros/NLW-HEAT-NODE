import { Router  } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensuredAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router()

router.get('/healthCheck', (request, response) => {
    return response.status(200).send({
        app_name: 'NLW HEAT',
        dev_name: 'João Medeiros',
        status: 200
    })
})

router.post('/authenticate', new AuthenticateUserController().handle)
router.post('/messages', ensuredAuthenticated, new CreateMessageController().handle)
router.get('/messages/last3', new GetLast3MessagesController().handle)
router.get('/profile', ensuredAuthenticated ,new ProfileUserController().handle)




export { router }