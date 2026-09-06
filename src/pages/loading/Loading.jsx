const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-rose-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-rose-600 border-t-transparent animate-spin"></div>
      </div>

      {/* Label */}
      <p className="text-sm text-gray-500 tracking-wide">{text}</p>
    </div>
  );
};

export default Loading;