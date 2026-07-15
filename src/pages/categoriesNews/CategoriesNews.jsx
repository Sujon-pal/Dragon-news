import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../component/newsCard/NewsCard";

const CategoriesNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNewsData = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filterNewsData);
    } else {
      const filterNewsData = data.filter((news) => news.category_id == id);

      setCategoryNews(filterNewsData);
    }
    // console.log("data:", data, "id:", id);
    console.log(data[0]);
  }, [data, id]);
  return (
    <div>
      <h1 className="font-bold text-2xl">CategoriesNews {categoryNews.length} </h1>
      <div className="my-5 ">
      {categoryNews.map((news) => (
        <div key={news.id}>
          <NewsCard news={news}></NewsCard>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CategoriesNews;
