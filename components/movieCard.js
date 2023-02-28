import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const { movieName, image, director, rating, slug } = movie.fields;

  return (
    <>
      <div className=" bg-slate-100 w-96 h-100 border rounded-md my-3 mx-3 shadow-md hover:scale-105 hover:ease-in-out hover:duration-700 ">
        <h3 className="text-2xl font-semibold text-center">{movieName}</h3>
        <div className="relative w-full h-96">
          <Image
            src={`https:${image.fields.file.url}`}
            layout="fill"
            alt="movies"
          />
        </div>
        <div className="m-2">
          <div className="flex justify-between">
            <div>{director}</div>
            <div>{rating}/10</div>
          </div>
          <div className="flex justify-between">
            <div className="text-blue-400">
              {" "}
              <Link href={`movies/${slug}`}>see details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
