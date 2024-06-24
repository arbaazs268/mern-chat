export default function Avatar({ userId, username }) {
  return (
    <div className="w-12 h-12 bg-red-200 rounded-full  flex items-center">
      <div className="text-center text-l font-bold w-full">{username[0]}</div>
    </div>
  );
}
