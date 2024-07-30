import { API_URL } from '@/constants/api';
import { Either, ErrorType, Left, Right } from '@/types/api';

// TODO: we can enforce the parameter to be the type of the routes declared
export const fetchApi = async <T>(
  url: string,
): Promise<Either<ErrorType, T>> => {
  try {
    const response = await fetch(`${API_URL}${url}`);
    console.log('response', response);
    if (response.ok) return Right.create((await response.json()) as T);

    // In case of the response is not ok
    return Left.create({
      code: 'error',
      httpCode: response.status,
      message: response.statusText,
    });
  } catch (error) {
    return Left.create({
      code: 'error',
      // TODO: we can pass the http code from the error object (if available)
      httpCode: 500,
      // TODO: we can pass the error message from the error object (if available)
      message: 'Internal Server Error',
    });
  }
};
