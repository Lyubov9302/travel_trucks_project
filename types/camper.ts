// Опис галереї
export interface CamperGallery {
  original: string;
  thumb: string;
}

// Опис відгуку
export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

// Опис одного об'єкта кемпера
export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  gallery?: CamperGallery[];
  reviews: CamperReview[];
  coverImage?: string;
  description: string;
}

// Опис відповіді від API для списку 
export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  items: Camper[]; 
}

// Опис фільтрів для запиту
export interface FilterParams {
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  page?: number;
  limit?: number;
}

// Опис даних форми бронювання
export interface BookingData {
  name: string;
  email: string;
  bookingDate: string;
  comment?: string;
}