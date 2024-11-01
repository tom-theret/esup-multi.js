import { MailCalendar } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getMailCalendar= async(instanceUrl: string, authToken: string): Promise<MailCalendar> => {
  const response = await MultiFetcher(`${instanceUrl}/mail-calendar`, {
    method: "POST",
    body: JSON.stringify({authToken: authToken}),
  });
  const raw = (await response.json()) as MailCalendar;
  const result = new MailCalendar(raw);
  return result;
}