import { createUserValidator } from "@/app/controllers/v1/user/validator";
import AppError from "@/shared/errors/app-errors";
import { CreateUserServiceDTO } from "../dto";
import { UserEntity } from "../entity";
import { createUserRepository } from "../repository";

export default async function createUserService({name, email, age}:CreateUserServiceDTO): Promise<UserEntity> {
    const { error } = createUserValidator.validate({
        name, email, age
    });

    if (error) throw new AppError(error.message, 400);

    const newUser = await createUserRepository({
        name, email, age
    });

    return newUser
}