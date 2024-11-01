import { Actualities } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getActualities = async (instanceUrl: string): Promise<Actualities[]> => {
  const response = await MultiFetcher(`${instanceUrl}/rss`, {
    method: "GET",
  });
  const raw = (await response.json()) as Actualities[];
  const result = raw?.map((actuality) => new Actualities(actuality));
  return result ?? [];
};