import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Helmet>
        <title>File Shuffler | 홈</title>
      </Helmet>
      <div className="grid grid-cols-5 gap-5 text-white font-bold text-2xl text-center p-5">
        <Link to="" className="bg-red-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 1</Link>
        <Link to="" className="bg-blue-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 2</Link>
        <Link to="" className="bg-green-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 3</Link>
        <Link to="" className="bg-yellow-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 4</Link>
        <Link to="" className="bg-orange-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 5</Link>
        <Link to="" className="bg-slate-400 py-28 hover:scale-[1.02] transition shadow-xl">Run 6</Link>
        <Link to="" className="bg-pink-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 7</Link>
        <Link to="" className="bg-gray-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 8</Link>
        <Link to="" className="bg-lime-300 py-28 hover:scale-[1.02] transition shadow-xl">Run 9</Link>
        <Link to="" className="bg-purple-300 py-28 hover:scale-[1.02] transition shadow-xl">Select file 10</Link>
      </div>
    </>
  );
}

export default Home;
