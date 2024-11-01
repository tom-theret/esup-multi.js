import type { ImportantsNewsResponse } from "../models/data";

export class ImportantsNews implements ImportantsNewsResponse {
  public color: string;
  public id: number;
  public image: string;
  public link: string;
  public sort: number;
  public statisticName: string;
  public status: string;
  public translations: {
    buttonLabel: string;
    content: string;
    id: number;
    important_news_id: number;
    languages_code: string;
    title: string;
  }[];
  public authorization: {
    id: number;
    roles: string[];
    type: string;
  } | null;
  
  constructor(data: ImportantsNewsResponse) {
    this.color = data.color;
    this.id = data.id;
    this.image = data.image;
    this.link = data.link;
    this.sort = data.sort;
    this.statisticName = data.statisticName;
    this.status = data.status;
    this.translations = data.translations.map((translation) => ({
      buttonLabel: translation.buttonLabel,
      content: translation.content,
      id: translation.id,
      important_news_id: translation.important_news_id,
      languages_code: translation.languages_code,
      title: translation.title,
    }));
    this.authorization = data.authorization?.id
      ? {
        id: data.authorization.id,
        roles: data.authorization.roles,
        type: data.authorization.type,
      }
      : null;
  }
}