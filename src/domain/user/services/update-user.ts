import { updateUserValidator } from "@/app/controllers/v1/user/validator";
import AppError from "@/shared/errors/app-errors";
import { updateUserRepository } from "../repository";

type Props ={
    id: string;
    name: string;
    email: string;
    age: number;
}

export default async function updateUserService({id, name, email, age}:Props) {4

    const { error } = updateUserValidator.validate({
        id, name, email, age
    })

    if (error) throw new AppError(error.message)

        await updateUserRepository({
            id, name, email, age
        })
    
}