import type { CardsResponse } from "../models/data"

export class Cards implements CardsResponse {
  public lastname: string;
  public firstname: string;
  public birthdate: unknown;
  public gender: unknown;
  public affiliation: string;
  public photo: string;
  public ine: string;
  public errors: Array<unknown>;
  public card: {
    [key: string]: {
      title: string;
      subtitle: string;
      endDate: string;
      idNumber: string;
      csn?: string;
      ecsn?: string;
      euid?: string;
      qrcode: {
        type: string;
        value: string;
      };
    }
  };

  constructor(data: CardsResponse) {
    this.lastname = data.lastname;
    this.firstname = data.firstname;
    this.birthdate = data.birthdate;
    this.gender = data.gender;
    this.affiliation = data.affiliation;
    this.photo = data.photo;
    this.ine = data.ine;
    this.errors = data.errors;
    this.card = Object.keys(data.card).reduce((acc: { [key: string]: any }, key: string) => {
      acc[key] = {
        title: data.card[key].title,
        subtitle: data.card[key].subtitle,
        endDate: data.card[key].endDate,
        idNumber: data.card[key].idNumber,
        csn: data.card[key].csn,
        ecsn: data.card[key].ecsn,
        euid: data.card[key].euid,
        qrcode: {
          type: data.card[key].qrcode.type,
          value: data.card[key].qrcode.value,
        },
      };
      return acc;
    }, {});
  }
}