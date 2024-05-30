import { appRoutes } from "@/config";
import userRouters from "./user";

const v1Router = appRoutes
    .get('/', (req, res) =>
        res.status(200).json({
            message: 'Version 1',
            data: new Date()
        })
)
.use('/user', userRouters)

export default v1Router;