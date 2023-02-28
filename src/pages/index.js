import Layout from "components/layout";
import { createClient } from "contentful";
import MovieCard from "../../components/movieCard";

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold text-center py-3">
          Movies of all the time
        </h1>
        <div className="container mx-auto flex flex-wrap ">
          {data.items.map((item) => {
            return <MovieCard key={item.sys.id} movie={item} />;
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      data: res,
    },
    revalidate: 1,
  };
}
