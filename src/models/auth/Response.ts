export interface AuthResponse {
  authToken: string;
  displayName: string;
  name: string;
  firstname: string;
  email: string;
  roles: Array<string>;
  ine?: string;
  studentNumber?: number;
  staffNumbers?: Array<number>; // Not sure if this is the correct type.
  birthDate?: string;
  uid?: string;
  refreshAuthToken?: string | ""; // If use refresh token, the API response return a "" string.
}
