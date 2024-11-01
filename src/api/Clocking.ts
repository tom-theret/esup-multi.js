import { ClockingResponse } from "../models/data";
import { MultiFetcher } from "../utils/Fetcher";

export const getClocking = async(instanceUrl: string, authToken: string): Promise<ClockingResponse> => {
  const response = await MultiFetcher(`${instanceUrl}/clocking`, {
    method: "POST",
    body: JSON.stringify({authToken: authToken}),
  });
  const raw = (await response.json()) as ClockingResponse;
  return raw;
}