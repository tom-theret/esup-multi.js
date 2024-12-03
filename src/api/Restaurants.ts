import { Restaurants, RestaurantMenu } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getRestaurants = async(instanceUrl: string): Promise<Restaurants[]>  => {
  const response = await MultiFetcher(`${instanceUrl}/restaurants`, {
    method: "GET",
  });
  const raw = (await response.json()) as Restaurants[];
  const result = raw?.map((restaurant) => new Restaurants(restaurant));
  return result ?? [];
}

export const getRestaurantMenu = async(instanceUrl: string, idRestaurant: number, date?: string): Promise<RestaurantMenu[]> => {
  const response = await MultiFetcher(`${instanceUrl}/restaurant/menus/?id=${idRestaurant}${date ? `&date=${date}` : ""}`, {
    method: "GET",
  });
  const raw = (await response.json()) as RestaurantMenu[];
  const result = raw?.map((restaurantMenu) => new RestaurantMenu(restaurantMenu));
  return result ?? [];
}