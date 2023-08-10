import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001/",
});

export const apiGet = async (url: string) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    // Handle error
  }
};

export const apiPost = async (url: string, data: any) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    // Handle error
  }
};

export const apiDelete = async (url: string) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    // Handle error
  }
};
