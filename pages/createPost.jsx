import { createPostdb } from "./api/createPost"
import { useForm } from "react-hook-form"
import { toast, Toaster } from "sonner"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function createPost() {
    const { register, handleSubmit, formState: { errors, isValid, isSubmitted }, reset, setFocus } = useForm()

    const router = useRouter()
    function handleClick(path) {
        router.push(path)
    }

    const [token, setToken] = useState()

    const getToken = () => {
        const storedToken = localStorage.getItem('Token');
        if (storedToken) {
            setToken(storedToken);
        }
    }
    useEffect(() => {
        getToken()
    }, [])

    async function onSubmit(data) {

        try {

            const postCreated = await createPostdb({
                title: data.title,
                image: data.image,
                body: data.body,
            }, token.slice(1, -1))

            
            if (postCreated.success) {
                toast.success("Post creado exitosamente")
                setTimeout(() => {
                    handleClick("/")
                }, 3000)

            }

        } catch (error) {
            console.log("Error al crear el post", error)
            alert("Error al crear el post", error)
        }


    }


    return (

        <>

            <Toaster position="top-right" richColors />

            <main className="grid lg:grid-cols-[20%_50%_30%] grid-rows-[3rem_1fr] bg-[rgb(245,245,245)] min-h-svh ">

                <nav className="lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2 flex justify-between mr-2">
                    <h2 className="flex items-center p-2">Create Post</h2>

                    <div className="flex items-center gap-2">
                        <p className="">Edit</p>
                        <p className="text-neutral-600">Preview</p>
                        <button type="button" title="Close the editor" className="hover:bg-blue-100"  >
                            <svg width="24" height="24" >
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z">

                                </path>
                            </svg>
                        </button>
                    </div>

                </nav>

                <main className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3  ">

                    <form className="bg-white w-full flex flex-col  gap-4" onSubmit={handleSubmit(onSubmit)}>

                        <div className="p-4">
                            <div className="w-full ">
                                <input type="text" placeholder="Add a cover image" className="rounded border-2 text-center w-[10rem] p-1 text-black"
                                    {...register('image', {
                                        required: { value: true, message: "Campo image requerido " }
                                    })}
                                />

                            </div>

                            <div className="mt-4">
                                <textarea type="text" className="w-full text-3xl font-bold " placeholder="New post title here..."
                                    {...register('title', {
                                        required: { value: true, message: "Campo title requerido " },
                                        maxLength: { value: 40, message: " El titulo debe tener máximo 40 caracteres" },
                                    })}
                                >
                                </textarea>
                                <p className="text-neutral-600 ">Add up to 4 tags...</p>
                            </div>

                        </div>

                        <div className="bg-[rgb(245,245,245)]  flex h-10 justify-between ">
                            <div className="flex gap-4 ml-4">
                                <button className="w-full h-full" >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z">
                                        </path>
                                    </svg>
                                </button>

                                <button type="button"  >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button" >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button" >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button"  >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button"   >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" >
                                        <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z">
                                        </path>
                                    </svg>
                                </button>
                            </div>

                            <button type="button" className="mr-4" >
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" >
                                    <path d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z">
                                    </path>
                                </svg>
                            </button>

                        </div>

                        <div className="ml-4">
                            <textarea type="text" className="w-full font-bold min-h-[22rem] " placeholder="Write yout post content here..."
                                {...register('body', {
                                    required: { value: true, message: "Campo cuerpo del post es requerido " },
                                    maxLength: { value: 450, message: " El cuerpo del post debe tener máximo 450 caracteres" },
                                })}
                            >
                            </textarea>

                        </div>


                        <div className="flex  bg-[rgb(245,245,245)] h-[4.5rem] items-center ">
                            <div className="h-[60%] flex gap-4  ">
                                <button className="bg-[#3B49DF] rounded p-3 text-white " disabled={isSubmitted ? !isValid : false}>
                                    Publish
                                </button>

                                <button className="text-neutral-600" disabled={true} >
                                    Save draft
                                </button>
                                <button className="ml-4" disabled={true} >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" >
                                        <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z">
                                        </path>
                                    </svg>
                                </button>
                                <button className="text-sm" disabled={true}>|
                                    Revert new changes
                                </button>
                            </div>
                        </div>

                        {
                            errors.title && (
                                toast.error(errors.title?.message)
                            )
                        }
                        {
                            errors.image && (
                                toast.error(errors.image?.message)

                            )
                        }
                        {
                            errors.body && (
                                toast.error(errors.body?.message)
                            )
                        }
                       



                    </form>



                </main>

            </main>
        </>
    )
}