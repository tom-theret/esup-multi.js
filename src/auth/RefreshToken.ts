import { Multi } from "..";
import type { AuthResponse, RefreshBody } from "../models/auth";
import { MultiFetcher } from "../utils/Fetcher";

export const authWithRefreshToken = async (instanceUrl: string, refreshAuthToken: RefreshBody): Promise<Multi> => {
  const response = await MultiFetcher(`${instanceUrl}/keep-auth/reauth`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${refreshAuthToken.refreshAuthToken}`,
    },
  });
    
  const raw = await response.json() as AuthResponse;

  return new Multi(instanceUrl, {
    authToken: raw.authToken,
    displayName: raw.displayName,
    firstname: raw.firstname,
    name: raw.name,
    email: raw.email,
    ine: raw.ine,
    studentNumber: raw.studentNumber,
    staffNumbers: raw.staffNumbers,
    birthDate: raw.birthDate,
    uid: raw.uid,
    roles: raw.roles,
    refreshAuthToken: refreshAuthToken.refreshAuthToken,
  });
}