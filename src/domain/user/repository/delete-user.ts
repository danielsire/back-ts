import { postgresHelper } from "@/infra/postgres";

type Props = {
    id: string;
}

export default async function deleteUserRepository({id}:Props): Promise<void> {
    const db = postgresHelper.getInstance();

    await db('user').update({
        deleted_at: new Date()
    }).where('id', id);
    
}