import Navbar from "./navbar";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "- BlogApp" : "BlogApp"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="Blog Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between bg-gray-100">
        <Navbar></Navbar>

        <main>{children}</main>

        <footer className=" py-1 text-black text-center flex items-center justify-center h-10 shadow-inner">
          Copyright{" "}
          <span className=" text-blue-800 ">&nbsp; BlogApp &nbsp;</span>{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
};

export default Layout;