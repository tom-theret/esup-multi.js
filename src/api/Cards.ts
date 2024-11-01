import { Cards } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getCards = async(instanceUrl: string, authToken: string): Promise<Cards[]> => {
  const response = await MultiFetcher(`${instanceUrl}/cards`, {
    method: "POST",
    body: JSON.stringify({authToken: authToken}),
  });
  const raw = (await response.json()) as Cards[];
  const result = raw?.map((card) => new Cards(card));
  return result ?? [];
}