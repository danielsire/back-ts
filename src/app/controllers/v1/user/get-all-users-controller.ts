import { RequestProps, ResponseProps } from '@/config';
import { getAllUserService } from '@/domain/user/services';

export default async function getAllUsersController(
  _: RequestProps<unknown, unknown, unknown, unknown>,
  response: ResponseProps
): Promise<ResponseProps> {
  const result = await getAllUserService();
  return response.json(result);
}