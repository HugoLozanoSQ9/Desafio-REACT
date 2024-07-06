import { getPostById } from "../api/getPostById"
import Navbar from "@/components/Navbar"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router';


export default function GetPosts() {
    const router = useRouter();
    const [post, setPost] = useState(null)
    const [id, setId] = useState(null)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (router.query.id) {
            setId(router.query.id);
        }
    }, [router.query.id]);

    // Este useEffect se dispara cuando cambia id y solo si id no es null
    useEffect(() => {
        if (id) {
            getPostById(id)
                .then((post) => {
                    setPost(post);
                    setLoading(false)
                })
                .catch((error) => {
                    console.error("[getPostById error]", error);
                    setLoading(false)
                });
        }
    }, [id]);

    function fechaCorta(fecha) {
        const fechaLarga = new Date(fecha)
        const opcionesFecha = {
            year: 'numeric', month: '2-digit', day: '2-digit'
        };
        return fechaLarga.toLocaleDateString('es-ES', opcionesFecha);
    }

    // useEffect(() => {
    //     setId(router.query.id)
    // }, [router.query.id])

    // useEffect(() => {
    //     getPostById(id)
    //         .then((post) => {
    //             setPost(post)
    //         })
    //         .catch((error) => {
    //             console.error("[getPostById error]", error)
    //         })

    // }, [id ? true : false])


    // {
    //     "post": {
    //       "_id": "668836e7b7fba28da6dce9e6",
    //       "title": "regresamos a esta alch",
    //       "image": "https://i.pinimg.com/736x/fc/fc/08/fcfc0851f6068d1bbd49892e077e04c9.jpg",
    //       "body": "fdsfsdhuuifshkfsdhklf njklxcuilxsdcdcdsf",
    //       "user": {
    //         "_id": "66877e093010b314fac8696a",
    //         "name": "bonita uwu 33 ",
    //         "profilePic": "data:image/jpeg;base64,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",
    //         "email": "shinobu@gmail.com",
    //         "password": "$2a$10$g1zodDtDaSXkDY.k7CdyQ.hva3JAwMpbSJRZeEtnHOoKb1MMkiS9a",
    //         "createdAt": "2024-07-05T05:00:57.226Z",
    //         "updatedAt": "2024-07-05T05:00:57.226Z",
    //         "__v": 0
    //       },
    //       "createdAt": "2024-07-05T18:09:43.862Z",
    //       "updatedAt": "2024-07-05T18:09:43.862Z",
    //       "__v": 0
    //     }
    //   }

    return (
        <>
            <div>
                {loading ? (
                    <></>
                ) : (
                    post ? (
                        <>
                            <Navbar />

                            <main className="grid grid-cols-1 grid-rows-[1fr_3.5rem] md:grid-cols-[3.5rem_1fr] lg:grid-cols-[20%_50%_1fr]  bg-[rgb(245,245,245)] min-h-screen ">

                                <section className="col-start-1 col-end-2 md:col-start-2 md:col-end-3  row-start-1 row-end-2  grid-cols-1 grid grid-rows-[15rem_1fr]">

                                    <div className="col-start-1 col-end-2 row-start-1 row-end-2   ">
                                        <img src={post.data.post.image ?? "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7h2brs4m67objavyf31h.png"} className="h-full object-cover w-full md:rounded-t" />

                                    </div>

                                    <article className="col-start-1 col-end-2 row-start-2 row-end-3 flex p-4 bg-white ">

                                        <div className="flex text-xs  flex-col gap-4 bg-white ">
                                            <div className="flex gap-2">
                                                <img className="rounded-full w-[32px] h-[32px] object-cover" src={post.data.post.user.profilePic ?? "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1%2Ff451a206-11c8-4e3d-8936-143d0a7e65bb.png"} alt="" />

                                                <div className="flex flex-col">
                                                    <div className="flex gap-1">
                                                        <p className="font-bold">{post.data.post.user.name ?? "no se logró cargar el nombre"}</p><span className="text-[#717171]">for ToolJet</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-[#717171]">
                                                            {fechaCorta(post.data.post.createdAt)} - Originally published at <span className="text-blue-500 "><a href="#">blog.tooljet.com</a></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-9">
                                                <span className="flex items-center gap-1" >
                                                    <img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg" width="24" height="24" />
                                                    <span id="reaction_engagement_like_count">22</span>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" width="24" height="24" />
                                                    <span id="reaction_engagement_unicorn_count">16</span>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <img src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg" width="24" height="24" />
                                                    <span id="reaction_engagement_exploding_head_count">16</span>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg" width="24" height="24" />
                                                    <span id="reaction_engagement_raised_hands_count">17</span>
                                                </span>
                                                <span className="flex items-center gap-1" >
                                                    <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="24" height="24" />
                                                    <span id="reaction_engagement_fire_count">17</span>
                                                </span>
                                            </div>

                                            <div className="flex flex-col gap-4 mr-10">
                                                <div className="" >
                                                    <h1 className="text-3xl font-bold">
                                                        {post.data.post.title}
                                                    </h1>
                                                </div>

                                                <div className="flex gap-4">

                                                    <a href="#" className="text-blue-600">#<span className="text-black">watercooler</span></a>
                                                    <a href="#" className="text-green-400">#<span className="text-black">discuss</span></a>

                                                </div>

                                                <div className="h-full">
                                                    <p className="text-lg">
                                                        {post.data.post.body}
                                                    </p>
                                                </div>
                                            </div>



                                        </div>




                                    </article>

                                </section>


                                <aside className=" h-[3.5rem] border-2 flex  justify-center items-center md:col-start-1 md:col-end-2 md:h-full md:border-none md:p-4 md:items-start ">

                                    <div className="flex w-full justify-evenly md:flex-col md:gap-10 lg:items-end ">
                                        <a href="#" className="flex items-center gap-1 md:flex-col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
                                                <g >
                                                    <path d="M19 14V17H22V19H18.999L19 22H17L16.999 19H14V17H17V14H19ZM20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.992L19.059 11.574C20.39 10.05 20.32 7.65998 18.827 6.16998C17.324 4.67098 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09103 4.60598 6.67503 4.66798 5.17203 6.17198C3.68203 7.66198 3.60703 10.047 4.98003 11.623L13.412 20.069L12 21.485L3.52003 12.993C1.41603 10.637 1.49503 7.01898 3.75603 4.75698C6.02103 2.49298 9.64403 2.41698 12 4.52898C14.349 2.41998 17.979 2.48998 20.242 4.75698H20.243Z" fill="#525252">

                                                    </path>
                                                </g>

                                            </svg>
                                            <span className="text-xs text-[#717171]">88</span>
                                        </a>

                                        <a href="#" className="flex items-center gap-1  md:flex-col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
                                                <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                                            </svg>
                                            <span className="text-xs text-[#717171]">1</span>

                                        </a>
                                        <a href="#" className="flex items-center gap-1  md:flex-col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" >
                                                <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z">

                                                </path>
                                            </svg>
                                            <span className="text-xs text-[#717171]">21</span>


                                        </a>
                                        <a href="#" className="flex items-center gap-1  md:flex-col">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" >
                                                <path d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z">

                                                </path>
                                            </svg>

                                        </a>
                                    </div>

                                </aside>

                                <section className="hidden lg:col-start-3 lg:col-end-4  p-4 lg:flex lg:w-full  lg:flex-col gap-4">

                                    <div className="flex w-full h-[16rem] border-2 rounded flex-col max-w-[18rem] bg-white">
                                        <div className="bg-black w-full h-6 rounded-t">

                                        </div>
                                        <div className="p-2 flex gap-2 items-center">
                                            <img className="h-[48px] w-[48px] " src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F5047%2F35515bdc-548e-43eb-af01-3d9d58a27e2b.png" alt="" />
                                            <span>ToolJet</span>
                                        </div>

                                        <div className="flex justify-center flex-wrap gap-2">
                                            <button name="button" type="button" className="bg-[rgb(59,73,223)] hover:bg-[rgb(33,40,118)] rounded text-white text-sm p-2 w-[80%]" >
                                                Follow
                                            </button>
                                            <p className="text-sm text-[#717171]">
                                                Build &amp; deploy internal tools.
                                            </p>
                                            <p className="text-sm ">
                                                Sign in to start building!
                                            </p>
                                            <button name="button" type="button" className="rounded border text-sm p-2 w-[80%]" >
                                                Sign up!
                                            </button>
                                        </div>

                                    </div>

                                    <div className="flex w-full  border-2 rounded flex-col max-w-[18rem] bg-white ">

                                        <div className=" flex gap-2 items-center border-b">
                                            <p className="p-3">More from <span className="text-[rgb(59,73,223)]">ToolJet</span></p>
                                        </div>

                                        <div className="flex justify-center flex-wrap  border-b ">

                                            <p className="text-sm text-[#676565] p-3">

                                                Build an AI BPMN Diagram Analyzer using ToolJet 🛠️
                                            </p>
                                            <span className="text-xs text-[#717171]">
                                                #javascript #webdev #programming #coding
                                            </span>

                                        </div>
                                        <div className="flex justify-center flex-wrap  border-b ">

                                            <p className="text-sm text-[#676565] p-3">


                                                Building a Mock Data Generator with Google Sheets, Gemini AI & ToolJet ⚙️
                                            </p>
                                            <span className="text-xs text-[#717171]">
                                                #javascript #webdev #programming #coding
                                            </span>

                                        </div>
                                        <div className="flex justify-center flex-wrap  border-b ">

                                            <p className="text-sm text-[#676565] p-3">



                                                Create a QR Code Generator Using ToolJet and Python in 5 Minutes! 🛠️
                                            </p>
                                            <span className="text-xs text-[#717171] mb-3">
                                                #javascript #webdev #programming #coding
                                            </span>

                                        </div>
                                    </div>


                                </section>


                            </main>

                        </>




                    ) : (
                        <p>No post found</p> // Muestra un mensaje si no se encuentra el post
                    )
                )}
            </div >


        </>







    )

}