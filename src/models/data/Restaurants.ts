export interface RestaurantsResponse {
  id: number;
  title: string;
  thumbnail_url: string;
  short_desc: string;
  opening: Opening;
  infos: string;
  contact: string;
  lat: number;
  lon: number;
  zone: string;
}
[];

interface Opening {
  [key: string]: {
    label: string;
    isOpen: boolean;
  };
}

export interface RestaurantMenuResponse {
  id: number;
  date: string;
  meal: Array<Meal>;
}

interface Meal {
  name: string;
  foodcategory: Array<Foodcategory>;
}

interface Foodcategory {
  name: string;
  dishes: Array<string>;
}
