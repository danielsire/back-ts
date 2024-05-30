import { postgresHelper } from "@/infra/postgres";
import { UserEntity } from "../entity";

type Props = {
    name: string;
    email: string;
    age: number;
}

export default async function createUserRepository({
    name,
    email,
    age
}:Props): Promise<UserEntity> {
    const db = postgresHelper.getInstance();

    const created = await db('user').insert({name, email, age}).returning('*');

    return created[0];
}