import { useLoaderData, useParams } from "react-router";
import Header from "../../component/header/Header";
import RightAside from "../../component/homeLayout/RightAside";
import NewsDetailsCard from "../newsDetailsCard/NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
//   console.log(id);
  return (
    <div>
      <header className="py-6">
        <Header></Header>
      </header>
      <main className="max-w-11/12 mx-auto grid grid-cols-12 ">
        <section className="col-span-9">
          <h1>Dragon News </h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>

        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
