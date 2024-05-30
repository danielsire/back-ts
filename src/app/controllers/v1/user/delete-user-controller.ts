import { RequestProps, ResponseProps } from '@/config';
import { deleteUserService } from '@/domain/user/services';

type ParamsProps = {
  id: string;
};

export default async function deleteUserController(
  request: RequestProps<ParamsProps, unknown, unknown, unknown>,
  response: ResponseProps
) {
  const { id } = request.params;

  await deleteUserService({ id });

  return response.status(204).json();
}