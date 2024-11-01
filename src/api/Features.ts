import { Features } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getFeatures = async(instanceUrl: string, authToken: string): Promise<Features[]> => {
  const response = await MultiFetcher(`${instanceUrl}/features`, {
    method: "POST",
    body: JSON.stringify({authToken: authToken}),
  });
  const raw = (await response.json()) as Features[];
  const result = raw?.map((feature) => new Features(feature));
  return result ?? [];
}