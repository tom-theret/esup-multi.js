import type { MapCampusResponse, MapCategoriesResponse, MapPointsResponse } from "../models/data";

export class MapCampus implements MapCampusResponse {
  public id: number;
  public sort: number;
  public name: string;
  public initial: {
    lat: number;
    lng: number;
  };
  public southwest: {
    lat: number;
    lng: number;
  };
  public northeast: {
    lat: number;
    lng: number;
  };
  public photo: string;
  
  constructor(data: MapCampusResponse) {
    this.id = data.id;
    this.sort = data.sort; // Assign the value of data.sort to this.sort
    this.name = data.name;
    this.initial = {
      lat: data.initial.lat,
      lng: data.initial.lng,
    };
    this.southwest = {
      lat: data.southwest.lat,
      lng: data.southwest.lng,
    };
    this.northeast = {
      lat: data.northeast.lat,
      lng: data.northeast.lng,
    };
    this.photo = data.photo;
  }
}
  
export class MapCategories implements MapCategoriesResponse {
  public id: string;
  public sort: number;
  public label: {
    value: string;
    langcode: string;
  }[];
  
  constructor(data: MapCategoriesResponse) {
    this.id = data.id;
    this.sort = data.sort;
    this.label = data.label.map((label) => ({
      value: label.value,
      langcode: label.langcode,
    }));
  }
}

export class MapPoints implements MapPointsResponse {
  public category: string;
  public title: {
    value: string;
    langcode: string;
  }[];
  public description: {
    value: string;
    langcode: string;
  }[];
  public latitude: number;
  public longitude: number;
  public icon: {
    svg: string;
    width: number;
    height: number;
    x: number;
    y: number;
  };
  
  constructor(data: MapPointsResponse) {
    this.category = data.category;
    this.title = data.title.map((title) => ({
      value: title.value,
      langcode: title.langcode,
    }));
    this.description = data.description.map((description) => ({
      value: description.value,
      langcode: description.langcode,
    }));
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.icon = {
      svg: data.icon.svg,
      width: data.icon.width,
      height: data.icon.height,
      x: data.icon.x,
      y: data.icon.y,
    };
  }
}
  