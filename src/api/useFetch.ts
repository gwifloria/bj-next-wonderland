import { useAuth } from "@/context";
import useSWR, { Fetcher, SWRConfiguration } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";

const useFetch = () => {
  const { token } = useAuth();

  const fetcher = async <T>(
    url: string,
    options?: RequestInit,
    arg?: undefined
  ): Promise<T> => {
    const headers: { [key: string]: string } = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...headers,
          ...(options?.headers || {}),
        },
        body: JSON.stringify(arg),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  return fetcher;
};
const useCustomSWR = <T>(
  key: string,
  fetchOptions?: RequestInit,
  options?: SWRConfiguration
) => {
  const fetcher = useFetch();

  return useSWR(
    key,
    (url: string) => {
      fetcher<T>(url, fetchOptions);
    },
    options
  );
};

const useCustomSWRMutation = <T>(
  key: string,
  fetchOptions?: RequestInit,
  options?: any
) => {
  const fetcher = useFetch();

  return useSWRMutation(
    key,
    (url: string, { arg }: { arg: any }) => {
      fetcher<T>(url, fetchOptions, arg);
    },
    options
  );
};
export { useCustomSWR as useSWR, useCustomSWRMutation as useSWRMutation };
