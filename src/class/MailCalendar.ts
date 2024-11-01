import type { MailCalendarResponse } from "../models/data";

export class MailCalendar implements MailCalendarResponse {
  public unreadMails: number;
  public events: {
    label: string;
    startDateTime: string;
    endDateTime: string;
    location: string;
  }[];
  
  constructor(data: MailCalendarResponse) {
    this.unreadMails = data.unreadMails;
    this.events = data.events.map((event) => ({
      label: event.label,
      startDateTime: event.startDateTime,
      endDateTime: event.endDateTime,
      location: event.location,
    }));
  }
}