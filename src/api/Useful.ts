import { UsefulInformations } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getUsefulInformations = async(instanceUrl: string): Promise<UsefulInformations[]> => {
  const response = await MultiFetcher(`${instanceUrl}/useful-information`, {
    method: "GET",
  });
  const raw = (await response.json()) as UsefulInformations[];
  const result = raw?.map((usefulInformation) => new UsefulInformations(usefulInformation));
  return result ?? [];
};