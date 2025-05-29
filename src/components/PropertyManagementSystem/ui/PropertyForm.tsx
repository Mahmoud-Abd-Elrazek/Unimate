import React from 'react';
import { usePostsStore } from '../../../Store/Owner/posts.store';

export const PropertyForm: React.FC = () => {
  const {
    Description,
    DescribeLocation,
    Floor,
    Capecity,
    Location,
    GenderAcceptance,
    setCapecity,
    setDescription,
    setLocation,
    setDescribeLocation,
    setFloor,
    setGenderAcceptance,
    // AddPost,
  } = usePostsStore();

  const areas = [
    { id: 0, key: 'AlMasaken', value: 'المساكن' },
    { id: 1, key: 'Darda', value: 'دردشه' },
    { id: 2, key: 'Shooun', value: 'الشؤون' },
    { id: 3, key: 'WastElBalad', value: 'وسط البلد' },
    { id: 4, key: 'ALKnooz', value: 'الكنوز' },
    { id: 5, key: 'ALMoataqal', value: 'المعتقل' },
    { id: 6, key: 'ALBank', value: 'البنك' },
    { id: 7, key: 'ALTameen', value: 'التأمين' },
    { id: 8, key: 'ALMahatta', value: 'المحطه' },
    { id: 9, key: 'ALSayyedaAisha', value: 'السيدة عايشة' },
    { id: 10, key: 'ALShahba', value: 'الشهباء' },
    { id: 11, key: 'ALKods', value: 'القدس' },
    { id: 12, key: 'ALMana', value: 'المعنا' },
    { id: 13, key: 'ALRamla', value: 'الرملة' },
    { id: 14, key: 'Dandara', value: 'دندرة' },
    { id: 15, key: 'QenaUniversity', value: 'جامعة جنوب الوادي' },
  ];

  const GenderOptions = [
    { id: 0, key: "None", value: "أى نوع" },
    { id: 1, key: "Male", value: "رجال" },
    { id: 2, key: "Female", value: "نساء" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await AddPost();
    console.log('تم حفظ بيانات العقار:', {
      Description,
      DescribeLocation,
      Floor,
      Capecity,
      Location,
      GenderAcceptance,
    });
    alert('تم حفظ بيانات العقار!');
  };

  return (
    <div className="rtl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-primary_TXD">
        تفاصيل العقار
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">وصف العقار</label>
          <textarea
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1">وصف الموقع</label>
          <textarea
            value={DescribeLocation}
            onChange={(e) => setDescribeLocation(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">المنطقة</label>
            <select
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">اختر منطقة</option>
              {areas.map((area) => (
                <option key={area.id} value={area.key}>
                  {area.value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1">الطابق</label>
            <input
              type="text"
              min={0}
              value={Floor || ''}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">عدد الأفراد</label>
            <input
              type="number"
              min={1}
              value={Capecity || ''}
              onChange={(e) => setCapecity(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">نوع السكن</label>
            <div className="flex gap-4">
              {GenderOptions.map((gender) => (
                <label key={gender.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={gender.key}
                    checked={GenderAcceptance === gender.key}
                    onChange={(e) => setGenderAcceptance(e.target.value)}
                  />
                  {gender.value}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* <div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">
            حفظ العقار
          </button>
        </div> */}
      </form>
    </div>
  );
};
