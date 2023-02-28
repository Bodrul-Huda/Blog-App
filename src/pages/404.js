import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto flex justify-center py-48  ">
      <Image
        src="/jisunpark_404-error.gif"
        width={500}
        height={500}
        alt="404"
      />
    </div>
  );
};

export default error;
