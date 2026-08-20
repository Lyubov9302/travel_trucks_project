import { Camper } from "@/types/camper";
import axios from "axios";

interface ApiResponse {
  items: Camper[];
  total: number;
}

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";


export const getTrucks = async (): Promise<ApiResponse> => {
  const res = await axios.get<ApiResponse>("/campers");
  return res.data;
};

export const getTruckById = async (id: string): Promise<Camper> => {
  const res = await axios.get<Camper>(`/campers/${id}`);
  return res.data;
};