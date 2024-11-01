import type { UsefulInformationsResponse } from "../models/data";

export class UsefulInformations implements UsefulInformationsResponse {
  public id: number;
  public status: string;
  public sort: number;
  public icon: string;
  public translations: {
    id: number;
    useful_information_id: number;
    languages_code: string;
    title: string;
    description: string;
  }[];
  public phone: string;
  public email: string;

  constructor(data: UsefulInformationsResponse) {
    this.id = data.id;
    this.status = data.status;
    this.sort = data.sort;
    this.icon = data.icon;
    this.translations = data.translations.map((translation) => ({
      id: translation.id,
      useful_information_id: translation.useful_information_id,
      languages_code: translation.languages_code,
      title: translation.title,
      description: translation.description,
    }));
    this.phone = data.phone;
    this.email = data.email;
  }
}
