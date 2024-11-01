import { Schedules } from "../class";
import { ScheduleBody } from "../models/data";
import { MultiFetcher } from "../utils/Fetcher";

export const getSchedules = async(instanceUrl: string, authToken: string, options: ScheduleBody): Promise<Schedules> => {
  const response = await MultiFetcher(`${instanceUrl}/schedule`, {
    method: "POST",
    body: JSON.stringify({authToken: authToken, startDate: options.startDate, endDate: options.endDate, asUser: options.asUser} as ScheduleBody),
  });
  const raw = (await response.json()) as Schedules;
  const result = new Schedules(raw);
  return result;
}