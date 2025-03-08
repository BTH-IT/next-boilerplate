export interface ApiResponse<T> {
  statusCode: number;
  message?: string;
  result: T;
}

export interface IBaseModel {
  id: string;
  createdAt?: Date;
  updatedAt?: Date | null;
}
