import { Bookmark, Share2, Star, Eye } from "lucide-react";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } = news;

  const publishedDate = new Date(author.published_date).toISOString().split("T")[0];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6">
      {/* Header: author info */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm text-gray-900">{author.name}</p>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <Bookmark className="w-5 h-5 cursor-pointer" />
          <Share2 className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold px-4 pt-4 pb-3 leading-snug text-gray-900">
        {title}
      </h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-56 object-cover px-4"
        style={{ borderRadius: "0.5rem" }}
      />

      {/* Meta / details */}
      <div className="px-4 pt-4 text-sm text-gray-600 leading-relaxed">
        <span className="font-medium">{publishedDate}</span>
        {" | "}
        <span>Tag Cloud Tags: {tags.join(", ")}</span>
        {" - "}
        <span>{details.slice(0, 100)}...</span>
        <a href="#" className="block text-orange-500 font-medium mt-1 hover:underline">
          Read More
        </a>
      </div>

      {/* Footer: rating + views */}
      <div className="flex items-center justify-between px-4 py-3 mt-2 border-t">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(rating.number)
                  ? "fill-orange-400 text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-sm font-medium text-gray-700">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;