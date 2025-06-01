import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import useAuthStore from "../../../Store/Auth/Auth.store";

// Helper to safely parse JSON strings like "\"text\"" into "text"
const safeParse = (str: string): string => {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
};

export const PropertyForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  const Id = idParam ? Number(idParam) : null;

  const [description, setdescription] = useState("");
  const [descripeLocation, setdescripeLocation] = useState("");
  const [gender, setgender] = useState<string>("");


  const GenderOptions = [
    { id: 0, key: "None", value: "أى نوع" },
    { id: 1, key: "Male", value: "رجال" },
    { id: 2, key: "Female", value: "نساء" },
  ];
  const genderObj = GenderOptions.find((g) => g.key === gender);
  const genderId = genderObj ? genderObj.id : 0; // fallback if not found

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    PostData();
    alert("تم رفع بيانات العقار!");
    console.log("Description:", description);
    console.log("DescribeLocation:", descripeLocation);
    console.log("GenderAcceptance:", gender);
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
      setdescription(data.description || "");
      setdescripeLocation(data.descripeLocation || "");
      setgender(data.gender || "");
    } catch (error) {
      console.error("فشل في جلب بيانات العقار:", error);
    }
  };
  const PostData = async () => {
    try {
      const res = await axios.post("https://darkteam.runasp.net/UpdateApartmentInfoSaveEndpoint/UpdateApartmentInfoSave", {
        apartmentId: Id,
        price: 0,
        description: description,
        descripeLocation: descripeLocation,
        genderAcceptance: genderId,
        durationType: 0,
        apartmentFacilities: {
          "facilities": [
            {
              isSelected: true,
              facilityId: 0
            }
          ],
        }},
         {
          headers: {
            Authorization: `Bearer ${useAuthStore.getState().token}`
          }
        })
      console.log(res)
    } catch (error) {
      console.log("failed to post data", error)
    }
  }
  useEffect(() => {
    if (Id) {
      DisplayData(Id);
    }
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
            onChange={(e) => setdescription(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-secondary_BGD dark:text-secondary_TXD"
          />
        </div>

        <div>
          <label className="block mb-1">وصف الموقع</label>
          <textarea
            value={safeParse(descripeLocation)}
            onChange={(e) => setdescripeLocation(e.target.value)}
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
                    onChange={(e) => setgender(e.target.value)}
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
          {/* <ServiceSelector
            selectedServices={services}
            onChange={setServices}
          /> */}
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
