import { Contacts } from "../class";
import { ContactsBody } from "../models/data";
import { MultiFetcher } from "../utils/Fetcher";

export const getContacts = async(instanceUrl: string, authToken: string, options: ContactsBody): Promise<Contacts[]> => {
  const response = await MultiFetcher(`${instanceUrl}/contacts`, {
    method: "POST",
    body: JSON.stringify({type: options.type, value: options.value, authToken: authToken} as ContactsBody),
  });
  const raw = (await response.json()) as Contacts[];
  const result = raw?.map((contact) => new Contacts(contact));
  return result ?? [];
}