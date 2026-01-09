
import { Truck } from "@/types/trucks";
import css from './TruckItem.module.css';

type TruckItemProps = {
  truck: Truck;
};

const TruckItem = ({ truck }: TruckItemProps) => {
  return (
    <div className={css.truckContainer}>
      <h3 className={css.title}>{truck.name}</h3>
    
    </div>
  );
}

export default TruckItem;
