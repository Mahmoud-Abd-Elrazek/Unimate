interface CommentCardProps {
  name: string;
  comment: string;
  date: string;
  role: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ name, comment, date, role }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex gap-4 items-start">
      <img
        src={role || '/default-avatar.png'}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border"
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <span className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-700 mt-1">{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
