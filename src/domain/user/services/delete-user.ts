import { deleteUserValidator } from "@/app/controllers/v1/user/validator";
import AppError from "@/shared/errors/app-errors";
import { deleteUserRepository } from "../repository";

type Props = {
    id: string;
}

export default async function deleteUserService({id}:Props): Promise<void> {
    const { error } = deleteUserValidator.validate({id})

    if (error) throw new AppError(error.message);

    await deleteUserRepository({id})
}