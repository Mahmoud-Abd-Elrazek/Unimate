import { useState } from "react";
// import { useEffect } from "react";
import { LuSend } from "react-icons/lu";
// import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";
import { MdModeComment } from "react-icons/md";

interface CommentSectionProps {
  apartmentId: number; // or number, depending on your data model
}

export default function CommentSection({ apartmentId }: CommentSectionProps) {
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const fetchComments = async (apartmentId: number) => {
  //   const response = await fetch(`https://darkteam.runasp.net/GetCommentsEndpoint/GetComments?apartmentId=${apartmentId}`);
  //   const data = await response.json();
  //   setComments(data);
  //   console.log(comments)
  // };

  // useEffect(() => {
  //   fetchComments(apartmentId);
  // }, [apartmentId]);

  const handleAddComment = async (apartmentId: number) => {
    if (!comment.trim()) return;
    const token = localStorage.getItem('token');
    try {
      setIsSubmitting(true);
      const response = await fetch('https://darkteam.runasp.net/AddCommentEndpoint/AddComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          "message": comment,
          "apartmentId": apartmentId
        })
      });

      if (!response.ok) {
        throw new Error('فشل في إرسال التعليق');
      }
      const result = await response.json();
      console.log('تم إضافة التعليق:', result);
      setComment('');
      // await fetchComments(apartmentId);

    } catch (error) {
      console.error('حدث خطأ أثناء إرسال التعليق:', error);
    }
    finally {
      setIsSubmitting(false);
    }
  };

  if (!localStorage.getItem('token')) {
    return null;
  }

  return (
    <div dir="rtl" className="w-full">
      <h2 className="flex items-center gap-2 text-lg py-3 font-semibold mt-5 mb-2">
        <MdModeComment />
        التعليقات (5)
      </h2>
      <div className="mb-6">
        <textarea
          placeholder="اكتب تعليق عن هذا العقار"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="
          text-right
          flex
          min-h-[80px]
          w-full
          rounded-md
          border
          border-gray-300
          px-3
          py-2
          text-sm
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-[#d32f2f]
          focus:ring-offset-2
          focus:ring-offset-white
          disabled:cursor-not-allowed
          disabled:opacity-50
          dark:bg-secondary_BGD
          mb-2
        "
          disabled={isSubmitting}
        />
        <button
          // onClick={handleAddComment}
          onClick={() => handleAddComment(apartmentId)}
          disabled={isSubmitting || !comment.trim()}
          className="
          inline-flex
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          rounded-md
          text-sm
          font-medium
          ring-offset-white
          transition-colors
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2
          disabled:pointer-events-none
          disabled:opacity-50
          bg-blue-600
          text-white
          hover:bg-blue-700
          h-10
          px-4
          py-2
        "
        >
          <LuSend size={18} />
          اضافه تعليق
        </button>
      </div>
    </div>
  );
}
