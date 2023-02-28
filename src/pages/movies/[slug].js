import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blogPost" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  return {
    props: {
      data: res.items[0],
    },
    revalidate: 1,
  };
};

const Slug = ({ data }) => {
  const { movieName, image, director, rating, slug, releaseDate, details } =
    data.fields;

  if (!data) return <h2 className="text-xl">Loding....</h2>;

  return (
    <>
      <div className="container mx-auto py-10 flex justify-center">
        <div className="bg-slate-50 w-2/3">
          <div className="relative w-full h-96">
            <Image
              src={`https:${image.fields.file.url}`}
              layout="fill"
              alt="movies"
            />
          </div>
          <h3 className="font-semibold text-3xl py-2 mx-1">{movieName}</h3>
          <h4 className="font-semibold text-lg mx-1">Director: {director}</h4>
          <h4 className="font-semibold text-lg mx-1">Rating: {rating}</h4>
          <h4 className="font-semibold text-lg mx-1">
            ReleaseDate: {releaseDate}
          </h4>
          <h5 className="mx-1">{documentToReactComponents(details)}</h5>
        </div>
      </div>
    </>
  );
};

export default Slug;
