//import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRightCircle, Send } from 'lucide-react';

// import animation file
import "../../../public/animations.css";

export default function Help() {
  return (
    <div className="min-h-lvh py-10 px-4 sm:px-10 text-right slide-in">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white flex items-center justify-end gap-2">
          مركز المساعدة <span className="text-red-500">❓</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">ابحث عن الأسئلة الشائعة وتعرف على كيفية استخدام منصتنا</p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="border rounded-xl p-4   text-gray-800 dark:text-white flex flex-col gap-2 items-end">
            <Phone className="text-red-500" />
            <p className="font-semibold">الهاتف</p>
            <p>اتصل بفريق الدعم لدينا في ساعات العمل (9 صباحًا - 5 مساءً)</p>
            <div className="w-full text-center border rounded-md py-1">+20 11111111111</div>
          </div>
          <div className="border rounded-xl p-4  text-gray-800 dark:text-white flex flex-col gap-2 items-end">
            <Mail className="text-red-500" />
            <p className="font-semibold">البريد الإلكتروني</p>
            <p className='h-[46px]'>أرسل لنا بريد إلكتروني، وسيتم الرد خلال 24 ساعة</p>
            <div className="w-full text-center border rounded-md py-1">unimate@gmail.com</div>
          </div>
          <div className="border rounded-xl p-4  text-gray-800 dark:text-white flex flex-col gap-2 items-end">
            <MessageCircle className="text-red-500" />
            <p className="font-semibold">دعم الدردشة</p>
            <p>تواصل مع فريق الدعم للحصول على مساعدة فورية</p>
            <button className="w-full text-center bg-red-500 text-white py-1 rounded-md">ابدأ الدردشة</button>
          </div>
        </div>

        {/* How to add a property */}
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4"> Unimate كيفية اضافة عقار على  </h2>

        {/* Step 1 */}
        <div className=" border rounded-xl p-4 mb-6">
    <div className="text-right">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 flex items-center gap-2 justify-end">
        <span>الخطوه الاولي: انتقل الي اضافه مسكن</span>
        <span className="text-red-500 text-2xl font-bold">+</span>
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        انتقل الي صفحه “اضافه مسكن” للبدء في انشاء قائمتك
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        سجل حساب علي unimate كا صاحب عقار لاضافه المسكن (تواصل معنا لتفعيل حسابك الان بكل سهوله)
      </p>
    </div>
  <div className="grid md:grid-cols-2 gap-4 items-center">
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
        alt="الخطوة الأولى"
        className="rounded-md border w-full"
      />
    </div>

  </div>
</div>

        {/* Step 2 */}
        <div className="border rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 flex items-center gap-2 justify-end">
            <span>الخطوة الثانية: استيديو اصحاب العقارات</span>
            <ArrowRightCircle className="text-red-500" />
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">ادخل جميع المعلومات المطلوبة عن المسكن</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">اتبع التعليمات بالترتيب حتى يتم عرض مسكنك بشكل احترافي، والوصول إلى الجمهور المستهدف لتلقي طلبات الحجز</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg" alt="الخطوة الثانية - صورة 1" className="rounded-md border w-full" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg" alt="الخطوة الثانية - صورة 2" className="rounded-md border w-full" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="border rounded-xl p-4 mb-6">
  <div className="grid md:grid-cols-2 gap-4 items-center">
    <div className="text-right">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 flex items-center gap-2 justify-end">
        <span>الخطوه الثالثه: أرسل معلومات المسكن</span>
        <Send className="text-red-500" />
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        راجع معلومات المسكن الخاص بك وأرسلها
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        تأكد جيدًا من جميع المعلومات التي أدخلتها ثم اضغط فوق زر “نشر” لإرسال المسكن
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        سيتم مراجعة معلومات مسكنك من قبل فريقنا ونشرها خلال 24 ساعة
      </p>
    </div>
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
        alt="الخطوة الثالثة"
        className="rounded-md border w-full"
      />
    </div>

  </div>
</div>


        {/* Final Contact Box */}
        <div className=" text-center rounded-xl p-6">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">لا تزال لديك أسئلة؟</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">فريق الدعم لدينا جاهز دائمًا لمساعدتك في أي وقت</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">تواصل مع فريقنا</button>
        </div>
      </div>
    </div>
  );
}
