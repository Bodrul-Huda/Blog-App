import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-50 shadow-md ">
      <nav className="container mx-auto justify-between flex p-2">
        <h6 className=" text-xl uppercase text-blue-800 ">
          <Link href="/">Blog*App</Link>
        </h6>
        <ul className="flex flex-wrap">
          <li className="flex m-1 uppercase hover:text-indigo-700 hover:font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className=" flex m-1 uppercase hover:text-indigo-700 hover:font-bold">
            <Link href="/shop">SignUp</Link>
          </li>
          <li className=" flex m-1 uppercase hover:text-indigo-700 hover:font-bold">
            <Link href="/cart">SignIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
