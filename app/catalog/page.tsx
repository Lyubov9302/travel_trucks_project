import TruckList from "@/components/TruckList/TruckList";
import { getTrucks } from "@/lib/api/api";

const Trucks = async () => {
    const response = await getTrucks();
    const trucks = response.items || [];
  
    return (
      <section>
       
{Array.isArray(trucks) && trucks.length > 0 ? (
  <TruckList trucks={trucks} />
) : (
  <p>No campers found.</p>
)}
      </section>
    );
  };

  export default Trucks;
  