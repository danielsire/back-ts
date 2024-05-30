import { appRoutes } from "@/config";
import createUserController from "./create-user-controller";
import updateUserController from "./update-user-controller";
import deleteUserController from "./delete-user-controller";
import getAllUsersController from "./get-all-users-controller";

const userRouters = appRoutes
    .get('/', getAllUsersController)
    .post('/', createUserController)
    .put('/:id', updateUserController)
    .delete('/:id', deleteUserController);

export default userRouters