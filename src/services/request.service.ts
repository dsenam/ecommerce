import { formatUrl } from "../utils/formats.utils";
import axios, { AxiosError, AxiosHeaders } from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept-Language": "pt-br",
};
const baseURL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL,
  headers: defaultHeaders,
});

export async function getData<T>(
  url: string,
  params?: string | string[],
  headers?: AxiosHeaders
): Promise<T> {
  try {
    const response = await instance.get<T>(formatUrl(url, params), { headers });

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response;
  }
}

export async function postData<T>(
  url: string,
  data?: unknown,
  params?: string | string[],
  headers?: AxiosHeaders
): Promise<T> {
  try {
    const response = await instance.post<T>(formatUrl(url, params), data, {
      headers,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}

export async function deleteData<T>(
  url: string,
  params?: string | string[],
  headers?: AxiosHeaders
): Promise<T> {
  try {
    const response = await instance.delete<T>(formatUrl(url, params), {
      headers,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}

export async function putData<T>(
  url: string,
  data?: unknown,
  params?: string | string[],
  headers?: AxiosHeaders
): Promise<T> {
  try {
    const response = await instance.put<T>(formatUrl(url, params), data, {
      headers,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}

export async function patchData<T>(
  url: string,
  data: unknown,
  params?: string | string[],
  headers?: AxiosHeaders
): Promise<T> {
  try {
    const response = await instance.patch<T>(formatUrl(url, params), data, {
      headers,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}
