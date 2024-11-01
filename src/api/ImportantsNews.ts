import { ImportantsNews } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getImportantsNews = async(instanceUrl: string, authToken: string): Promise<ImportantsNews[]> => {
  const response = await MultiFetcher(`${instanceUrl}/important-news`, {
    method: "POST",
    body: JSON.stringify({authToken: authToken}),
  });
  const raw = (await response.json()) as ImportantsNews[];
  const result = raw?.map((ImportantNews) => new ImportantsNews(ImportantNews));
  return result ?? [];
}