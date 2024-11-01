import { SSO, SSOBody, SSOResponse } from "../models/auth";
import { MultiFetcher } from "../utils/Fetcher";

export const getSsoTicket = async(instanceUrl: string, authToken: string, service: string): Promise<SSO> => {
  const response = await MultiFetcher(`${instanceUrl}/sso-service-token`, {
    method: "POST",
    headers: {
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "cors",
    },
    body: JSON.stringify({authToken: authToken, service: service} as SSOBody),
  });
  const raw = (await response.text()) as string;
  const result = new SSO(service, raw);
  return result as SSOResponse;
}