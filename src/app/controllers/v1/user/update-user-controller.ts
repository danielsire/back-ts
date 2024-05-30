import { RequestProps, ResponseProps } from '@/config';
import { updateUserService } from '@/domain/user/services';

type ParamsProps = {
  id: string;
};

type BodyProps = {
  name: string;
  email: string;
  age: number;
};

export default async function updateUserController(
  request: RequestProps<ParamsProps, unknown, BodyProps, unknown>,
  response: ResponseProps
) {
  const { id } = request.params;
  const { name, email, age} = request.body;

  await updateUserService({
    id, name, email, age
  });

  return response.status(204).json();
}