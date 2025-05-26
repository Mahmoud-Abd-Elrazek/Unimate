export default function CommentCard({
  name = "كوكو أحمد خالد",
  date = "Aug 10, 2023",
  role = "طالب",
  comment = "بصراحه الشقه فخمه يزعيم",
}) {
  return (
    <div className="border rounded-md p-4">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-gray-500 dark:text-secondary_TXD">{date}</span>
      </div>
      <p className="text-gray-600 dark:text-secondary_TXD">{comment}</p>
      <div className="flex justify-end mt-2">
        <span className="text-xs text-gray-500 font-semibold italic dark:text-secondary_TXD">{role}</span>
      </div>
    </div>
  );
}
