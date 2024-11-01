import type { RestaurantsResponse, RestaurantMenuResponse } from "../models/data";

export class Restaurants implements RestaurantsResponse {
  public id: number;
  public title: string;
  public opening: {
    [key: string]: {
      label: string;
      isOpen: boolean;
    }
  }
  public contact: string;
  public infos: string;
  public zone: string;
  public lat: number;
  public lon: number;
  public thumbnail_url: string;
  public short_desc: string;
  
  constructor(data: RestaurantsResponse) {
    this.id = data.id;
    this.title = data.title;
    this.opening = data.opening;
    this.contact = data.contact;
    this.infos = data.infos;
    this.zone = data.zone;
    this.lat = data.lat;
    this.lon = data.lon;
    this.thumbnail_url = data.thumbnail_url;
    this.short_desc = data.short_desc;
  }
}
  
export class RestaurantMenu implements RestaurantMenuResponse {
  public id: number;
  public date: string;
  public meal: {
    name: string;
    foodcategory: {
      name: string;
      dishes: string[];
    }[];
  }[];
  
  constructor(data: RestaurantMenuResponse) {
    this.id = data.id;
    this.date = data.date;
    this.meal = data.meal.map((meal) => ({
      name: meal.name,
      foodcategory: meal.foodcategory.map((foodcategory) => ({
        name: foodcategory.name,
        dishes: foodcategory.dishes,
      })),
    }));
  }
}