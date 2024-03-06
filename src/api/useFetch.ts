import { useAuth } from "@/context";
import useSWR, { SWRConfiguration } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";

export const fetcher = async (
  url: string,
  token: string | null,
  options?: RequestInit
) => {
  const headers: { [key: string]: string } = token
    ? { Authorization: `Bearer ${token}` }
    : {};
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...(options?.headers || {}),
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const useCustomSWR = <T = any>(url: string, options?: SWRConfiguration) => {
  const { token } = useAuth();

  return useSWR<T>(url, () => fetcher(url, token), options);
};

const useCustomSWRMutation = <T>(
  url: string,
  options?: SWRMutationConfiguration<T, any, any, never, T>
) => {
  const { token, setToken } = useAuth();

  return useSWRMutation<T>(url, () => fetcher(url, token), options);
};
export { useCustomSWR as useSWR, useCustomSWRMutation as useSWRMutation };
