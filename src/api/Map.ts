import { MapCampus, MapCategories, MapPoints } from "../class";
import { MultiFetcher } from "../utils/Fetcher";

export const getMapCampus = async(instanceUrl: string): Promise<MapCampus[]> => {
  const response = await MultiFetcher(`${instanceUrl}/map/campus`, {
    method: "GET",
  });
  const raw = (await response.json()) as MapCampus[];
  const result = raw?.map((mapCampus) => new MapCampus(mapCampus));
  return result ?? [];
}

export const getMapCategories = async(instanceUrl: string): Promise<MapCategories[]> => {
  const response = await MultiFetcher(`${instanceUrl}/map/categories`, {
    method: "GET",
  });
  const raw = (await response.json()) as MapCategories[];
  const result = raw?.map((mapCategory) => new MapCategories(mapCategory));
  return result ?? [];
}

export const getMapPoints = async(instanceUrl: string): Promise<MapPoints[]> => {
  const response = await MultiFetcher(`${instanceUrl}/map`, {
    method: "GET",
  });
  const raw = (await response.json()) as MapPoints[];
  const result = raw?.map((mapPoint) => new MapPoints(mapPoint));
  return result ?? [];
}