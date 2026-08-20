import { Camper } from "@/types/camper";
import TruckItem from "../TruckItem/TruckItem";

type TruckListProps = {
  trucks: Camper[];
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
