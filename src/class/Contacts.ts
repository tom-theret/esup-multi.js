import type { ContactsResponse } from "../models/data";

export class Contacts implements ContactsResponse {
  public name: string;
  public firstname: string;
  public phoneNumbers: string[];
  public mailAddresses: string[];
  public assignments: string[];

  constructor(data: ContactsResponse) {
    this.name = data.name;
    this.firstname = data.firstname;
    this.phoneNumbers = data.phoneNumbers;
    this.mailAddresses = data.mailAddresses;
    this.assignments = data.assignments;
  }
}
