import { postgresHelper } from "@/infra/postgres";
import { UserEntity } from "../entity";

export default async function getAllUserRepository(): Promise<UserEntity[]> {
    const db = postgresHelper.getInstance();
    return db('user').whereNull('deleted_at');
}