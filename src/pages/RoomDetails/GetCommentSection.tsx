import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Comment {
   id: number;
   message: string;
   studentName: string;
   studentImage: string;
   createdDate: string;
}

interface ApiResponse {
   data: Comment[];
   isSuccess: boolean;
   message: string;
   errorCode: number;
}

const getComments = async (apartmentId: number): Promise<ApiResponse> => {
   try {
      const response = await axios.get<ApiResponse>(
         `https://darkteam.runasp.net/GetCommentEndpoint/GetComments?ApartmentId=${apartmentId}`
      );
      return response.data;
   } catch (error) {
      console.error('حدث خطأ أثناء جلب التعليقات:', error);
      return {
         data: [],
         isSuccess: false,
         message: 'فشل في جلب التعليقات',
         errorCode: -1,
      };
   }
};

interface CommentSectionProps {
   apartmentId: number;
}

const getTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  
  now.setHours(now.getHours() - 1);
  
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'الآن';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `منذ ${diffInMinutes} دقيقة`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `منذ ${diffInHours} ساعة`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `منذ ${diffInDays} يوم`;
};

const CommentsPage: React.FC<CommentSectionProps> = ({ apartmentId }) => {
   const [commentsData, setCommentsData] = useState<ApiResponse | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);
   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true);
            const data = await getComments(apartmentId);
            setCommentsData(data);
            if (!data.isSuccess) {
               setError(data.message || 'حدث خطأ غير متوقع');
            }
         } catch (err) {
            setError('حدث خطأ في الاتصال بالخادم');
            console.error(err);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [apartmentId]);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-64">
            <p className="text-gray-600">جاري تحميل التعليقات...</p>
         </div>
      );
   }

   if (error) {
      return (
         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
         </div>
      );
   }

   return (
      <div className="max-w-2xl p-4">
         <div className="space-y-4">
            {commentsData?.data?.length ? (
               commentsData.data.map((comment) => (
                  <div key={comment.id} className="border rounded-md p-4 shadow-sm">
                     <div className="flex justify-between mb-2">
                        <span className="font-semibold">{comment.studentName}</span>
                        <span className="text-sm text-gray-500">
                           {getTimeAgo(comment.createdDate)}
                        </span>
                     </div>
                     <p className="text-gray-600 my-3">{comment.message}</p>
                     <div className="flex justify-end">
                        <span className="text-xs text-gray-500 font-semibold italic">
                           طالب
                        </span>
                     </div>
                  </div>
               ))
            ) : (
               <div className="text-right py-8 bg-gray-50 rounded-lg ">
                  <p className="text-gray-500 text-sm">لا توجد تعليقات حتى الآن</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default CommentsPage;