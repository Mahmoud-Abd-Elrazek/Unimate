import React, { useEffect, useState } from "react";
import ApartmentCard from "../../../components/ApartmentCard/ApartmentCard";
import axios from "axios";

interface Apartment {
  id: number;
  title: string;
  price: string;
  image: string;
  address: string;
  gender: string;
  floor: string;
  numberOfRooms: number;
  ownerName: string;
  // Add other fields as needed based on your API response
}

const RealEstateSlider: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://darkteam.runasp.net/GetApartmentEndpoint/GetApartment?PageNumber=1&PageSize=6"
      );

      const data = res.data.data; // assuming data is in res.data
      setApartments(data.apartments || []); // adjust this depending on actual API response
      console.log(res)
    } catch (error) {
      console.log("فشل في جلب البيانات", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-10 w-full px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          عقاراتي
        </h2>
        <div>
          <ApartmentGrid apartments={apartments} />
        </div>
      </div>
    </section>
  );
};

interface ApartmentGridProps {
  apartments: Apartment[];
}

const ApartmentGrid: React.FC<ApartmentGridProps> = ({ apartments }) => {
  return (
    <div
      className="
      grid grid-cols-1 
      gap-y-3 gap-x-1
      md:grid-cols-2 
      lg:grid-cols-2 
      xl:grid-cols-3
      2xl:grid-cols-5
      3xl:grid-cols-6"
      dir="rtl"
    >
      {apartments.map((apt) => (
        <div key={apt.id} dir="ltr">
          <ApartmentCard
            edit={true}
            id={apt.id}
            data={{
              address: apt.address,
              gender: apt.gender,
              floor: apt.floor,
              numberOfRooms: apt.numberOfRooms,
              price: apt.price,
              ownerName: apt.ownerName,
            }}
          />

        </div>
      ))}
    </div>
  );
};

export default RealEstateSlider;
