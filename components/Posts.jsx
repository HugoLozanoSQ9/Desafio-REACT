import clsx from "clsx";
import { useRouter } from "next/router"

export default function Posts(props) {
    const router = useRouter()
    function handleClick(path) {
        router.push(path)
    }

    function fechaCorta(fecha) {
        const fechaLarga = new Date(fecha)
        const opcionesFecha = {
            year: 'numeric', month: '2-digit', day: '2-digit'
        };
        return fechaLarga.toLocaleDateString('es-ES', opcionesFecha);
    }

    return (
        <>
            {

                props.posts.map((post, i) => {
                    return (
                        <article className={clsx("w-full  bg-white grid  grid-cols-1 mb-2", { "h-[25rem] grid-rows-[60%_1fr]": i === 0 }, { "h-[10rem] grid-rows-1": i != 0 })} key={`post-${i}`}>
                            {
                                i === 0 ? (<div>
                                    <img className="row-start-1 row-end-2 col-start-1 col-end-2 h-full w-full md:rounded object-cover" src={post.image} alt="" />
                                </div>) : null
                            }


                            <section className={clsx("grid grid-cols-2 grid-rows-4 m-4",)}>

                                <div className="flex ">
                                    <img className="rounded-full w-[32px] h-[32px]" src={post.user?.profilePic ?? "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1%2Ff451a206-11c8-4e3d-8936-143d0a7e65bb.png"} alt="" />
                                    <div className="flex flex-col ml-2">
                                        <p className="text-xs ">{post.user?.name ?? 'Roger'}</p>
                                        <p className="text-xs text-[#575757] ">{fechaCorta(post.createdAt)}
                                        </p>
                                    </div>
                                </div>

                                <div className="row-start-2 row-end-3 col-start-1 col-end-3 font-bold">
                                    <a href="" onClick={() => handleClick(`/posts/${post._id}`)}  > {post.title} </a>

                                </div>

                                <div className="row-start-3 row-end-4 col-start-1 col-end-3 text-xs flex gap-2 ">
                                    <a href="#" className="text-blue-600">#<span className="text-black">watercooler</span></a>
                                    <a href="#" className="text-green-400">#<span className="text-black">discuss</span></a>
                                </div>
                                <div className="flex row-start-4 row-end-5 w-full col-start-1 col-end-3 justify-between">
                                    <div className="flex ">
                                        <a href="#">
                                            <span className="flex items-center " >
                                                <span>
                                                    <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" className="w-[28px] h-[28px] bg-slate-100 rounded-full p-1 " />
                                                </span>
                                                <span>
                                                    <img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg" className="w-[28px] h-[28px] bg-slate-100 rounded-full p-1" />
                                                </span>
                                                <span>
                                                    <img src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg" className="w-[28px] h-[28px] bg-slate-100 rounded-full p-1" />
                                                </span>
                                                <span>
                                                    <img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" className="w-[28px] h-[28px] bg-slate-100 rounded-full p-1" />
                                                </span>
                                                <span>
                                                    <img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg" className="w-[28px] h-[28px] bg-slate-100 rounded-full p-1" />
                                                </span>
                                                <span className="text-neutral-600 text-sm text-center">
                                                    19
                                                </span>
                                            </span>
                                        </a>

                                        <a href="#" className="flex gap-1 ml-3 text-sm text-center items-center" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="agwfifbsuo4xrfj2hduully1mtjcfh21" ><title id="agwfifbsuo4xrfj2hduully1mtjcfh21">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                            10
                                        </a>

                                    </div>

                                    <div className="flex items-center gap-3">
                                        <small className=" text-neutral-600 text-sm text-center">
                                            1 min read
                                        </small>
                                        <button type="button" >
                                            <span >
                                                <svg className="hover:bg-blue-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true"><path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path></svg>

                                            </span>

                                        </button>
                                    </div>
                                </div>
                            </section>

                        </article>

                    )

                })
            }
        </>

    )
}