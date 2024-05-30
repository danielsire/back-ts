export interface UserEntity {
    id: string;
    name: string;
    email: string;
    age: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}