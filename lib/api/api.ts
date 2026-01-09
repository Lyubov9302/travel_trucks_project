import { Truck } from "@/types/trucks";
import axios from "axios";

interface ApiResponse {
  items: Truck[];
  total: number;
}

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";


export const getTrucks = async () => {
  const res = await axios.get<ApiResponse>("/campers");
  return res.data;
};
