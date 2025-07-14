import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import useAuthStore from "../../../Store/Auth/Auth.store";
import ServiceSelector from "./ServiceSelector";

const safeParse = (str: string): string => {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
};

interface Facility {
  facilityId: number;
  facilityName: string;
}

export const PropertyForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  const Id = idParam ? Number(idParam) : null;

  const [description, setDescription] = useState("");
  const [descripeLocation, setDescripeLocation] = useState("");
  const [gender, setGender] = useState<string>("");
  const [services, setServices] = useState<number[]>([]);
  const [, setAllFacilities] = useState<Facility[]>([]);

  const GenderOptions = [
    { id: 0, key: "None", value: "أى نوع" },
    { id: 1, key: "Male", value: "رجال" },
    { id: 2, key: "Female", value: "نساء" },
  ];
  const genderObj = GenderOptions.find((g) => g.key === gender);
  const genderId = genderObj ? genderObj.id : 0;

  // تحميل بيانات من localStorage لو مفيش ID
  useEffect(() => {
    if (!Id) {
      const saved = localStorage.getItem("propertyFormData");
      if (saved) {
        try {
          const data = JSON.parse(saved);
          setDescription(data.Description || "");
          setDescripeLocation(data.DescribeLocation || "");
          setGender(GenderOptions.find((g) => g.id === data.GenderAcceptance)?.key || "");
          setServices(data.services || []);
        } catch (err) {
          console.error("Error parsing localStorage:", err);
        }
      }
    }
  }, [Id]);

  // حفظ البيانات في localStorage دائمًا
  useEffect(() => {
    if (!Id) {
      const formData = {
        Description: description,
        DescribeLocation: descripeLocation,
        GenderAcceptance: genderId,
        services,
      };
      localStorage.setItem("propertyFormData", JSON.stringify(formData));
    }
  }, [description, descripeLocation, genderId, services, Id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await PostData();
    alert("تم رفع بيانات العقار!");
  };

  const DisplayData = async (id: number) => {
    try {
      const res = await axios.get(
        `https://darkteam.runasp.net/UpdateApartmentInfoDisplayEndpoint/GetApartmentInfoDisplay?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`,
          },
        }
      );
      const data = res.data.data;
      setDescription(data.description || "");
      setDescripeLocation(data.descripeLocation || "");
      setGender(data.gender || "");
      setServices(data.apartmentFacilities?.facilities?.map((f: any) => f.facilityId) || []);
    } catch (error) {
      console.error("فشل في جلب بيانات العقار:", error);
    }
  };

  const PostData = async () => {
    try {
      const res = await axios.post(
        "https://darkteam.runasp.net/UpdateApartmentInfoSaveEndpoint/UpdateApartmentInfoSave",
        {
          apartmentId: Id,
          price: 0,
          description,
          descripeLocation,
          genderAcceptance: genderId,
          durationType: 0,
          apartmentFacilities: {
            facilities: services.map((id) => ({
              isSelected: true,
              facilityId: id,
            })),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`,
          },
        }
      );
      console.log("تم الحفظ بنجاح:", res);
    } catch (error) {
      console.log("فشل في إرسال البيانات:", error);
    }
  };

  const fetchAllFacilities = async () => {
    try {
      const res = await axios.get(
        "https://darkteam.runasp.net/FacilityEndpoint/GetAllFacilities",
        {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`,
          },
        }
      );
      setAllFacilities(res.data.data || []);
    } catch (error) {
      console.error("فشل في جلب كل الخدمات:", error);
    }
  };

  useEffect(() => {
    if (Id) {
      DisplayData(Id);
    }
    fetchAllFacilities();
  }, [Id]);

  return (
    <div className="rtl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-primary_TXD">
        تفاصيل العقار
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">وصف العقار</label>
          <textarea
            value={safeParse(description)}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-secondary_BGD dark:text-secondary_TXD"
          />
        </div>

        <div>
          <label className="block mb-1">وصف الموقع</label>
          <textarea
            value={safeParse(descripeLocation)}
            onChange={(e) => setDescripeLocation(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-secondary_BGD dark:text-secondary_TXD"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">نوع السكن</label>
            <div className="flex gap-4">
              {GenderOptions.map((option) => (
                <label key={option.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={option.key}
                    checked={gender === option.key}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {option.value}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-primary_TXD">
            الخدمات الإضافية
          </label>
          <ServiceSelector
            selectedServices={services}
            onChange={setServices}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            حفظ العقار
          </button>
        </div>
      </form>
    </div>
  );
};
