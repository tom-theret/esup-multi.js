import type { FeaturesResponse } from "../models/data";

export class Features implements FeaturesResponse {
  public id: string;
  public link: string;
  public menu: string;
  public position: unknown;
  public routerLink: unknown;
  public ssoService: string;
  public statisticName: string;
  public status: string;
  public type: string;
  public settings_by_role: any[];
  public translations: {
    content: unknown;
    features_id: number;
    id: number;
    languages_code: string;
    searchKeywords: string[];
    shortTitle: unknown;
    title: string;
  }[];
  public authorization: {
    id: number;
    roles: string[];
    type: string;
  } | null;

  constructor(data: FeaturesResponse) {
    this.id = data.id;
    this.link = data.link;
    this.menu = data.menu;
    this.position = data.position;
    this.routerLink = data.routerLink;
    this.ssoService = data.ssoService;
    this.statisticName = data.statisticName;
    this.status = data.status;
    this.type = data.type;
    this.settings_by_role = data.settings_by_role;
    this.translations = data.translations.map((translation) => ({
      content: translation.content,
      features_id: translation.features_id,
      id: translation.id,
      languages_code: translation.languages_code,
      searchKeywords: translation.searchKeywords,
      shortTitle: translation.shortTitle,
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
