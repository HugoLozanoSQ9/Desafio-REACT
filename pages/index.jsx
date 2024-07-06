import { Toaster, toast } from "sonner";
import { useState, useEffect } from "react";
import { getPosts } from "./api/getPosts.js";
import Navbar from "@/components/Navbar.jsx";
import AsideL from "@/components/AsideL.jsx";
import AsideR from "@/components/AsideR.jsx";
import Posts from "@/components/Posts.jsx";

export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then((post) => {
        setPosts(post.data.post)
      })
      .catch((error) => {
        toast.error("Error al obtener los posts")
        console.error("[getPosts error]", error)
      })
  }, [])

 


  return (
    <>
      <Toaster position="top-right" richColors />
      <main className="grid grid-cols-1 grid-rows-[3.5rem_1fr] w-full min-h-svh md:grid-cols-[27%_1fr_3%] bg-[rgb(245,245,245)] lg:grid-cols-[25%_50%_25%]">

        <Navbar />
        <AsideL />



        <main className="col-start-1 col-end-2 bg-[rgb(245,245,245)] grid grid-cols-1 grid-rows-[3.5rem_1fr] md:col-start-2 md:col-end-3 ">

          <div className="row-start-1 row-end-2 flex flex-col gap-4 ">

            <div className="flex gap-4 mt-4 ml-4">
              <a href="#" className="font-bold"> Relevant</a>
              <a href="#" className="text-[#575757]"> Latest</a>
              <a href="#" className="text-[#575757]"> Top</a>
            </div>



            <div className="flex flex-col ">

          <Posts posts={posts}/>
              
            </div>
          </div>


        </main>

        <AsideR/>
      </main>


    </>

  );
}
