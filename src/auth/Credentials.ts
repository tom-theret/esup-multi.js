import { Multi } from "..";
import { AuthResponse, CredentialsBody } from "../models/auth";
import { MultiFetcher } from "../utils/Fetcher";

export const authWithCredentials = async (instanceUrl: string, credentials: CredentialsBody): Promise<Multi> => {
  const response = await MultiFetcher(`${instanceUrl}/keep-auth/auth`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const raw = await response.json() as AuthResponse;
  return new Multi(instanceUrl, raw);
};