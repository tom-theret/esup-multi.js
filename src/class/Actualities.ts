import type { ActualitiesResponse } from "../models/data";

export class Actualities implements ActualitiesResponse {
  public enclosure: {
    url: string;
    type: string;
  };
  public pubDate: string;
  public title: string;
  public content: string;
  public link: string;

  constructor(data: ActualitiesResponse) {
    this.enclosure = {
      url: data.enclosure.url,
      type: data.enclosure.type,
    };
    this.pubDate = data.pubDate;
    this.title = data.title;
    this.content = data.content;
    this.link = data.link;
  }
}
