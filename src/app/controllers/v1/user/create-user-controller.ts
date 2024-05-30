import { RequestProps, ResponseProps } from "@/config";
import { createUserService } from "@/domain/user/services";

type BodyProps = {
    name: string;
    email: string;
    age: number;
}

export default async function createUserController(
    request: RequestProps<unknown, unknown, BodyProps, unknown>,
    response: ResponseProps
) {
    const { name, email, age } = request.body

    const user = await createUserService({name, email, age})

    return response.status(201).json(user)
}