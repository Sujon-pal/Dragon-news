import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoriesNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNewsData = data.filter((news) => news.others.is_today_pick == true);
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
      <h1>CategoriesNews {categoryNews.length} </h1>
      
    </div>
  );
};

export default CategoriesNews;
