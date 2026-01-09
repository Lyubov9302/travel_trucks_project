import { Truck } from "@/types/trucks";
import TruckItem from "../TruckItem/TruckItem";

type TruckListProps = {
  trucks: Truck[];
};

const TruckList = ({ trucks }: TruckListProps) => {
  return (
    <ul>
      {trucks.map((truck) => (
        <TruckItem key={truck.id} truck={truck} />
      ))}
    </ul>
  );
}

export default TruckList;
