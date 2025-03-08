import { API_URL } from 'constants/endpoints';
import { ApiResponse } from 'types';
import apiClient from './base.service';

export const authService = {
  login: async (data: any) => {
    await apiClient.post(`${API_URL.AUTH}/login`, data);
  },

  getCurrentProfile: async (): Promise<ApiResponse<any>> => {
    return apiClient.get(`${API_URL.AUTH}/current-profile`);
  },

  refresh: async () => {
    await apiClient.get(`${API_URL.BE_URL}/${API_URL.AUTH}/refresh`);
  },

  logout: async () => {
    await apiClient.get(`${API_URL.BE_URL}/${API_URL.AUTH}/logout`);
  },
};
