import { Camper } from "@/types/camper";
import css from "./TruckItem.module.css";
import Image from "next/image";


type TruckItemProps = {
  truck: Camper;
};

const TruckItem = ({ truck }: TruckItemProps) => {


  return (
    <div className={css.card}>
      <Image
        src={truck.gallery?.[0]?.thumb || truck.coverImage }
        alt={truck.name}
        width={292}
        height={320}
        className={css.image}
      />

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{truck.name}</h2>
          <span className={css.price}>€{truck.price.toFixed(2)}</span>
        </div>

        <div className={css.subHeader}>
          <span className={css.rating}>
            ★ {truck.rating} ({truck.reviews?.length || 0} Reviews)
          </span>
          <span className={css.location}>{truck.location}</span>
        </div>

        <p className={css.description}>{truck.description}</p>

        <ul className={css.tags}>
          {truck.transmission && <li>{truck.transmission}</li>}
          {truck.engine && <li>{truck.engine}</li>}
          {truck.AC && <li>AC</li>}
          {truck.kitchen && <li>Kitchen</li>}
        </ul>

        <button
          type="button"
          className={css.button}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default TruckItem;
