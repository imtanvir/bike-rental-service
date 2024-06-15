export interface TResponse<T> {
  statusCode: number;
  success: boolean;
  token?: string;
  message: string;
  data: T;
}
