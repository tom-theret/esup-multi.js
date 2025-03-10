import type { FetcherOptions } from "../models/utils";
import makeFetchCookie from 'fetch-cookie';
const fetchCookie = makeFetchCookie(fetch);

/** Fetcher function to fetch data from the UPHF API.
 * @param url The URL to fetch data from.
 * @param options The options to pass to the fetcher.
 * @returns The response from the fetcher.
 * @throws If the response status code is not a 2xx status code.
 */
export const MultiFetcher = async (url: string, options: FetcherOptions) => {
  const response = await fetchCookie(url, {
    method: options.method,
    headers: {
      ...options.headers,
      "User-Agent": "@npm/esup-multi.js",
      "Content-Type": "application/json",
    },
    body: options.method === "GET" ? undefined : options.body,
    redirect: options.redirect,
  });
  if (!response.status.toString().startsWith("2")) {
    const json = (await response.json()) as {
      message: string;
      statusCode: number;
    };
    throw new Error(`${json.message} (${json.statusCode})`);
  }
  return {
    headers: response.headers,
    text: () => response.text(),
    json: <T>() => response.json() as Promise<T>,
  };
};