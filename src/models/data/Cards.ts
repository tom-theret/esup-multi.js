export interface CardsResponse {
  lastname: string;
  firstname: string;
  birthdate: unknown;
  gender: unknown;
  affiliation: string;
  photo: string;
  ine: string;
  errors: Array<unknown>;
  card: CardData;
}

interface CardData {
  [key: string]: {
    title: string;
    subtitle: string;
    endDate: string;
    idNumber: string;
    csn?: string;
    ecsn?: string;
    euid?: string;
    qrcode: QrCodeData;
  }
}

interface QrCodeData {
  type: string;
  value: string;
}