import { useLoaderData } from "react-router";
import NewsCard from "../../component/newsCard/NewsCard";

const Home = () => {
  const newsData = useLoaderData();

  return (
    <div>
       <h1 className="font-bold text-2xl">Dragon News Home</h1>
     <div className="my-5">
       {newsData.map((news) => (
        <div key={news.id}>
          <NewsCard news={news} />
        </div>
      ))}
     </div>
    </div>
  );
};

export default Home;