import { postgresHelper } from "@/infra/postgres";

type Props = {
    id: string,
    name: string;
    email: string;
    age: number;
}

export default async function updateUserRepository({
    id,
    name,
    email,
    age
}:Props): Promise<void> {
    const db = postgresHelper.getInstance();

    await db('user').update({name, email, age}).where('id', id);
}