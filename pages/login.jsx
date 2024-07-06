import { useState, useEffect } from "react"
import clsx from "clsx"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { login } from "./api/login"
import { toast, Toaster } from "sonner"
import Navbar from "@/components/Navbar"
export default function Login() {
    const logOp = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" >
                <path d="M12.38 6.615c.901 0 2.033-.61 2.707-1.423.61-.738 1.056-1.768 1.056-2.798 0-.14-.013-.28-.04-.394-1.004.038-2.21.673-2.936 1.525-.572.65-1.094 1.667-1.094 2.71 0 .152.026.304.038.354.064.013.166.026.267.026h.001ZM9.2 22c1.234 0 1.78-.827 3.319-.827 1.564 0 1.906.802 3.28.802 1.348 0 2.25-1.246 3.102-2.467.954-1.4 1.349-2.772 1.373-2.836-.089-.025-2.67-1.08-2.67-4.042 0-2.569 2.034-3.726 2.149-3.815-1.348-1.933-3.395-1.983-3.954-1.983-1.514 0-2.746.915-3.522.915-.84 0-1.946-.865-3.255-.865C6.529 6.882 4 8.942 4 12.832c0 2.416.94 4.972 2.097 6.625C7.088 20.857 7.954 22 9.2 22Z" fill="#000"></path>
            </svg>,
            text: "Sign up with Apple",
            in: "Continue with Apple"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" >
                <path d="M18.5 2.5a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h13Z" fill="#1877F2"></path>
                <path d="M16.12 12h-2.636v-1.781c0-.754.368-1.485 1.544-1.485h1.2V6.395s-1.087-.184-2.126-.184c-2.167 0-3.586 1.312-3.586 3.693V12H8.105v2.75h2.41v6.75h2.97v-6.757h2.214L16.115 12h.006Z" fill="#fff"></path>
            </svg>,
            text: "Sign up with Facebook",
            in: "Continue with Facebook"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" >
                <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="#022830"></rect>
                <path d="M12.326 15.382a.229.229 0 0 1 .27.131 1.804 1.804 0 0 0 2.157 1.096c.887-.254 1.467-1.129 1.316-2.042a.217.217 0 0 1 .169-.248l.745-.2a.232.232 0 0 1 .277.16l.004.015a3.084 3.084 0 0 1-2.186 3.526 2.997 2.997 0 0 1-3.631-1.92.223.223 0 0 1 .142-.289l.015-.004.722-.225Z" fill="#E9F0E8"></path>
                <path d="M10.673 9.915a.229.229 0 0 1-.27-.131 1.804 1.804 0 0 0-2.157-1.096A1.818 1.818 0 0 0 6.93 10.73a.217.217 0 0 1-.168.248l-.745.2a.232.232 0 0 1-.278-.16l-.004-.015a3.084 3.084 0 0 1 2.187-3.526 2.997 2.997 0 0 1 3.63 1.92.223.223 0 0 1-.142.289l-.014.004-.723.225Z" fill="#4CFCA7"></path>
                <path d="m14.936 8.584-.774.208a.232.232 0 0 1-.278-.16l-.317-1.182a.233.233 0 0 1 .16-.278l.79-.211a.232.232 0 0 0 .16-.278l-.2-.744a.223.223 0 0 0-.277-.16l-1.954.54a.233.233 0 0 0-.16.277l.258.963.316 1.181.317 1.182.012.044.88 3.283c.03.117.146.195.263.164l.73-.196a.233.233 0 0 0 .16-.277l-.73-2.729c-.024-.087.019-.161.107-.185l.862-.23a.233.233 0 0 0 .16-.278l-.2-.744c-.039-.146-.168-.221-.285-.19Zm.986-.06a.24.24 0 0 1 .116-.266.871.871 0 0 0 .428-.975.828.828 0 0 0-.839-.62.212.212 0 0 1-.23-.157l-.2-.744c-.03-.117.044-.246.157-.292l.03-.008a2.02 2.02 0 0 1 2.251 1.508 2.058 2.058 0 0 1-1.192 2.446.235.235 0 0 1-.3-.123l-.007-.03-.214-.74Z" fill="#FBC1F5"></path>
            </svg>,
            text: "Sign up with Forem",
            in: "Continue with Forem"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" >
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" fill="#171717"></path>
            </svg>,
            text: "Sign up with GitHub",
            in: "Continue with GitHub"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" >
                <path d="M18.09 18.75c2.115-1.973 3.052-5.25 2.49-8.393h-8.392v3.473h4.777a3.945 3.945 0 0 1-1.777 2.67l2.902 2.25Z" fill="#4285F4"></path>
                <path d="M4.215 15.982A9 9 0 0 0 18.09 18.75l-2.902-2.25a5.37 5.37 0 0 1-8.018-2.813l-2.955 2.296Z" fill="#34A853"></path>
                <path d="M7.17 13.687c-.375-1.17-.375-2.25 0-3.42L4.215 7.965a9.06 9.06 0 0 0 0 8.025l2.955-2.303Z" fill="#FBBC02"></path>
                <path d="M7.17 10.267c1.035-3.24 5.438-5.115 8.393-2.347l2.58-2.528A8.85 8.85 0 0 0 4.215 7.965l2.955 2.302Z" fill="#EA4335"></path>
            </svg>,
            text: "Sign up with Google",
            in: "Continue with Google"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
            </svg>,
            text: "Sign up with Twitter (X)",
            in: "Continue with Twitter (X)"
        },



    ]

    const { register, handleSubmit, formState: { errors, isValid, isSubmitted }, reset, setFocus } = useForm()

    const router = useRouter()
    function handleClick(path) {
        router.push(path)
    }
    const [token, setToken] = useState(null)

    useEffect(() => {
        document.title = "Welcome! - DEV Community"
    }, [])

    async function onSubmit(data) {

        try {

            const userToken = await login({
                email: data.email,
                password: data.password
            })

            reset()

            if (userToken.success) {
                toast.success("Log-in exitoso")
                setTimeout(() => {

                    handleClick("/")
                }, 1000)
                localStorage.setItem("Token", JSON.stringify(userToken.data.token))
                setToken(userToken)


            } else {
                toast.error("Usuario o contraseña incorrecta, intentalo nuevamente")
            }


        } catch (error) {
            console.log("Error al iniciar sesión", error)
            alert("Error al iniciar sesión", error)
        }


    }

    const [account, setAccount] = useState(false)
    return (
        <>
            <Toaster position="top-right" richColors />

            <Navbar  />
            <main className="flex justify-center flex-wrap items-center">

                <div className="w-full flex justify-center pt-6 flex-wrap">
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png" className="h-[48px]" alt="" />
                    <h1 className="font-bold w-full text-center pt-4 text-2xl "> Join the DEV Comunnity </h1>
                    <p className="text-xs pt-2 text-center"> DEV Community is a community of 1,684,869 amazing developers </p>

                </div>

                <div className="w-full gap-2 flex items-center pt-6 flex-wrap flex-col  ">

                    {
                        logOp.map((op, i) => {
                            return (
                                <article key={`Article - ${i}`} className="w-[90%] border-2  hover:bg-gray-50 p-3  rounded flex sm:w-[60%] max-w-xl cursor-pointer " onClick={() => { toast.error("No se ha habilitado esta opción") }}>
                                    {op.svg}
                                    <span className="w-full flex justify-center" >{account ? op.in : op.text}</span>

                                </article>
                            )
                        })
                    }


                </div>

                <div className={clsx("w-full gap-2 flex items-center pt-2 flex-wrap flex-col", { "hidden": account })}>

                    <article className="w-[90%] border-2  hover:bg-gray-50 p-3  rounded flex sm:w-[60%] max-w-xl cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" >
                            <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001z"></path>
                        </svg>
                        <span className="w-full flex justify-center" onClick={() => handleClick("/signUp")} > Sign up with Email </span>

                    </article>

                </div>



                <div className={clsx("w-full flex flex-col items-center gap-2", { "hidden": !account })}>

                    <div className="flex items-center justify-center w-[90%] max-w-xl sm:w-[60%] mt-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2">OR</span>
                        <hr className="flex-grow border-gray-300" />

                    </div>

                    <div className="w-full"></div>

                    <form className="w-[90%]  max-w-xl sm:w-[60%] gap-2 flex items-center  flex-wrap flex-col text-sm" onSubmit={handleSubmit(onSubmit)} >
                        <p className="self-start">Email</p>
                        <input type="text" className="border-2 w-full rounded max-w-xl p-2" required
                            {...register('email', {
                                required: { value: true, message: "Campo email requerido" },
                                minLength: { value: 7, message: "El email debe tener minimo 7 caracteres" },
                                maxLength: { value: 50, message: " El email debe tener máximo 50 caracteres" },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Formato incorrecto de E-mail"
                                }
                            })} />
                        <p className="self-start">Password</p>
                        <input type="password" className="border-2 w-full rounded max-w-xl p-2 " required

                            {...register('password', {
                                required: { value: true, message: "Campo password requerido" }
                            })} />

                        <div className="flex items-center w-full">
                            <input type="checkbox" placeholder="Hola" className="mr-2 cursor-pointer"
                                {...register('check', {
                                    required: { value: false },
                                    defaultValue: { value: false }
                                })} />
                            <span className="flex justify-between w-full">
                                Remember me
                                <span className="text-blue-500 cursor-pointer ml-auto">
                                    Forgot Password
                                </span>
                            </span>
                        </div>
                        {
                            errors.password && (
                                <p className=" text-red-500 text-center text-sm font-bold-sm w-full">
                                    {errors.password?.message}
                                </p>
                            )
                        }
                        {
                            errors.email && (
                                <p className=" text-red-500 text-center text-sm font-bold-sm w-full">
                                    {errors.email?.message}
                                </p>
                            )
                        }


                        <button className="rounded bg-[rgb(47,58,178)] text-white  w-full p-4" disabled={isSubmitted ? !isValid : false /*isSubmitted && !isValid*/}>
                            Log in

                        </button>

                    </form>



                </div>




                <div className="w-full flex items-center flex-col">

                    <p className="text-center w-[90%]  max-w-xl sm:w-[60%] text-xs py-4 italic text-gray-600 ">
                        By signing up, you are agreeing to our   <span className="text-blue-500 cursor-pointer"> privacy policy, terms of use  </span> <br />and <span className="text-blue-500 cursor-pointer">code of conduct.</span>
                    </p>

                    <div className=" border w-[90%]  max-w-xl sm:w-[60%]"></div>

                    <p className="text-sm py-4">{account ? "New to DEV Community?" : "Already have an account? "} <span className="text-blue-500 cursor-pointer" onClick={() => setAccount(!account)}> {account ? "Create account" : "Log in."}  </span></p>
                </div>




            </main>
        </>
    )
}