export interface MailCalendarResponse {
  unreadMails: number;
  events: Array<Event>;
}

interface Event {
  label: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
}
