import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export function logError(error: any) {
  console.error(error);

  if (error instanceof AxiosError) {
    toast.error(error.response?.data.message || error.message);
  } else {
    toast.error(`${error}`);
  }
}

export const getClientSideCookie = (name: string): string | undefined => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];

  console.log('cookieValue', document.cookie);

  return cookieValue;
};
