import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";
const NewsDetailsCard = ({ news }) => {
  const {
    image_url,
    title,

    details,
  } = news || {};

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      {/* Hero image */}
      {image_url && (
        <div className="rounded-xl overflow-hidden ring-2 ring-blue-500 ring-offset-0 mb-6">
          <img
            src={image_url}
            alt={title}
            className="w-full h-64 sm:h-80 object-cover block"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-2xl sm:text-[28px] font-bold leading-snug text-gray-900 mb-4">
        {title}
      </h1>

      {/* Body */}
      <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line mb-8">
        {details}
      </p>

      {/* Back to category button */}
      <NavLink
        to={`/categories/${news.category_id}`}
        className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 transition-colors text-white text-sm font-medium px-5 py-3 rounded-lg"
      >
        <ArrowLeft size={16} />
        All news in this category
      </NavLink>
    </div>
  );
};

export default NewsDetailsCard;
