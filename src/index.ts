import { getActualities, getCards, getClocking, getContacts, getFeatures, getImportantsNews, getMailCalendar, getMapCampus, getMapCategories, getMapPoints, getRestaurantMenu, getRestaurants, getSchedules, getSsoTicket, getUsefulInformations } from "./api";
import { authWithRefreshToken } from "./auth";
import type { AuthResponse } from "./models/auth";
import type { ContactsBody, ScheduleBody } from "./models/data";

export * from "./models/data";
export * from "./auth";

export class Multi {
  private tokenExpires: number;
  public constructor(public instanceUrl: string, public userData: AuthResponse) {
    this.userData = userData;
    this.instanceUrl = instanceUrl;
    this.tokenExpires = Date.now() + 1000 * 60 * 5;
  }

  /**
   * Check if the token is expired.
   * @returns True if the token is expired, false otherwise.
   */
  private isTokenExpired() {
    return Date.now() >= this.tokenExpires;
  }

  /**
   * Refresh the token if it is expired.
   * @returns The new user data.
   */
  private async refreshToken(): Promise<boolean> {
    await authWithRefreshToken(
      this.instanceUrl,
      { refreshAuthToken: this.userData.refreshAuthToken! }
    ).then((data) => {
      this.userData.authToken = data.userData.authToken;
      this.tokenExpires = Date.now() + 1000 * 60 * 5; // 5 minutes
    });

    return true;
  }

  /**
   * Get the actualities.
   * @returns The actualities.
   */
  public async getActualities() {
    return await getActualities(this.instanceUrl);
  }

  /** Get the list of contacts.
   * @param options The options to pass to the fetcher.
   * @returns The list of contacts.
   */
  public async getContacts(options: ContactsBody) {
    if (this.isTokenExpired())
      await this.refreshToken
    return await getContacts(this.instanceUrl, this.userData.authToken, options);
  }

  /**
   * Get the list of cards available for the user.
   * @returns The list of cards.
   */
  public async getCards() {
    if (this.isTokenExpired())
      await this.refreshToken();
    return await getCards(this.instanceUrl, this.userData.authToken);
  }

  /** 
   * Get the clocking of the user.
   * @returns The clocking.
   */
  public async getClocking() {
    if (this.isTokenExpired())
      await this.refreshToken();
    return await getClocking(this.instanceUrl, this.userData.authToken);
  }

  /** 
   * Get the list of features available for the user.
   * @returns The list of features.
   */
  public async getFeatures() {
    if (this.isTokenExpired())
      await this.refreshToken();
    return await getFeatures(this.instanceUrl, this.userData.authToken);
  }

  /** 
   * Get the list of important news.
   * @returns The list of important news.
   */
  public async getImportantsNews() {
    if (this.isTokenExpired())
      await this.refreshToken();
    return await getImportantsNews(this.instanceUrl, this.userData.authToken);
  }

  /** 
   * Get Events, count of unread mails)
   * @returns The Zimbra calendar.
   */
  public async getMailCalendar() {
    if (this.isTokenExpired())
      await this.refreshToken();
    return await getMailCalendar(this.instanceUrl, this.userData.authToken);
  }

  /**
   * Get the campus map.
   * @returns Campus shortcuts on the map.
   */
  public async getMapCampus() {
    return await getMapCampus(this.instanceUrl);
  }

  /**
   * Get the map categories.
   * @returns Categories of the map.
   */
  public async getMapCategories() {
    return await getMapCategories(this.instanceUrl);
  }

  /**
   * Get the map points.
   * @returns POIs on the map.
   */
  public async getMapPoints() {
    return await getMapPoints(this.instanceUrl);
  }

  /**
   * Get all restaurants available on this instanceUrl.
   * @returns Restaurants.
   */
  public async getRestaurants() {
    return await getRestaurants(this.instanceUrl);
  }

  /**
   * Get the menu of a restaurant.
   * @param id The restaurant ID.
   * @param date The date of the menu (if not provided, the week menu is returned).
   * @returns The menu.
   */
  public async getRestaurantMenu(id: number, date?: string) {
    return await getRestaurantMenu(this.instanceUrl, id, date);
  }

  /** Get schedules of the user.
   * @param startDate The start date of schedules.
   * @param endDate The end date of schedules.
   * @param asUser The user to get the schedule of. If not provided, the schedule of the current user will be returned.
   * @returns The schedule of the user or user provided.
   */
  public async getSchedules(options: ScheduleBody) {
    if (this.isTokenExpired())
      await this.refreshToken();
    return await getSchedules(this.instanceUrl, this.userData.authToken, { startDate: options.startDate, endDate: options.endDate, asUser: options.asUser });
  }

  /** Get a SSO ticket for a service.
   * @param service The URL of the login page of the service.
   * @returns The URL + ticket to login to the service.
   */
  public async getSsoTicket(service: string) {
    if (this.isTokenExpired())
      await this.refreshToken();
    return await getSsoTicket(this.instanceUrl, this.userData.authToken, service);
  }

  /**
   * Get useful informations.
   * @returns Useful informations.
   */
  public async getUsefulInformations() {
    return await getUsefulInformations(this.instanceUrl);
  }
}