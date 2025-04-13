import './profile.css'

export default function Profile() {
    return (
        <div className="text-right min-h-screen flex justify-end">
            <div className="p-6 sm:p-10 w-full">
                <div className="profile-container flex flex-col-reverse lg:flex-row justify-between items-start gap-8">
                    
                    {/* المعلومات */}
                    <div className="profile-info w-full lg:w-2/3">
                        <h1 className="font-semibold text-2xl sm:text-3xl mb-4">اسم المستخدم</h1>

                        <div className="contact-info flex flex-col md:flex-row justify-between gap-6 mb-6">
                            <div>
                                <p className="font-bold mb-1">:وسائل الاتصال</p>
                                <p>رقم الهاتف: 123456789</p>
                                <p>البريد الإلكتروني: example@example.com</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">البيانات الاساسية</p>
                                <p>الجامعة (الكليه): كلية التجارة</p>
                                <p>العنوان: المدينة, الشارع</p>
                            </div>
                        </div>

                        <div className="description">
                            <p className="font-bold mb-1">الوصف</p>
                            <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، فقد تم توليد هذا
                                النص من مولد نص عشوائي، حيث يمكنك أن تولد منه المئات من النصوص
                                الأخرى التي تزيد عدد الحروف التي تريدها أنت.
                            </p>
                        </div>
                    </div>

                    {/* الصورة */}
                    <div className="profile-image w-full lg:w-1/3 flex justify-center items-center">
                        <div className="avatar w-32 h-32 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
