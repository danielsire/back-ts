import { UserEntity } from "../entity";
import { getAllUserRepository } from "../repository";

export default async function getAllUserService(): Promise<UserEntity[]> {
    const users = await getAllUserRepository();

    return users;
}