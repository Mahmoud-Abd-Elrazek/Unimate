import { useState} from "react";
import { LuSend } from "react-icons/lu";

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddComment = () => {
    if (!comment.trim()) return;
    setIsSubmitting(true);
    // هنا ممكن تضيف منطق إرسال التعليق للخادم أو أي حاجة
    setTimeout(() => {
      alert(`تم إضافة التعليق: ${comment}`);
      setComment("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
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
        onClick={handleAddComment}
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
  );
}
