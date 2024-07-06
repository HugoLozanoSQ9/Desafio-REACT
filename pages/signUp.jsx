import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { signUp } from "./api/signUp"
import { Toaster, toast } from "sonner"
import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
export default function RegisterForm() {
    const router = useRouter()

    function handleClick(path) {
        router.push(path)
    }
    const [input, setInput] = useState("")
    const [cPass, setCPass] = useState("")


    const { register, handleSubmit, formState: { errors, isValid, isSubmitted }, reset, setFocus } = useForm()

    async function onSubmit(data) {

        try {

            if (input !== cPass) {
                toast.error("Las contraseñas no coinciden");
                return;
            }

            const userCreated = await signUp({
                name: data.name,
                profilePic: data.profilePic,
                email: data.email,
                password: data.password,

            })

            if (userCreated.success) {
                toast.success("Ahora eres miembro de la comunidad por favor inicia sesión")
                setTimeout(() => {
                    handleClick("/login")
                }, 3000)

            } else {
                toast.error("Hubo un problema al crear el usuario revisa tus datos")
            }


        } catch (error) {
            console.log("Error al crear el usuario", error)
            alert("Error al crear el usuario", error)
        }


    }
    return (
        <>
            <Toaster position="top-right" richColors />

            <Navbar/>
            <main className="grid grid-cols-[5%_1fr_5%] sm:grid-cols-[15%_1fr_15%] md:grid-cols-[20%_1fr_20%] lg:grid-cols-[25%_1fr_25%] xl:grid-cols-[30%_1fr_30%] grid-rows-1 p-4">

                <form className="w-full flex flex-col p-4 border gap-2 text-sm col-start-2 col-end-3" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="font-bold mb-4">Create your account</h1>

                    <p>Profile image</p>
                    <input type="text" placeholder="Ingresa la url de tu imagen" className="border w-full p-2 rounded" {...register('profilePic', {
                        required: { value: true, message: "Campo Profile image requerido " },
                    })} />


                    <p>Name</p>
                    <input type="text" className="border w-full p-2 rounded" {...register('name', {
                        required: { value: true, message: "Campo Nombre requerido " },
                        maxLength: { value: 50, message: " El nombre debe tener máximo 50 caracteres" },
                    })} />


                    <p>Username</p>
                    <input type="text" className="border w-full p-2 rounded" {...register('name', {
                        required: { value: true, message: "Campo Username es requerido aunque este dato no se va a guardar jeje" },
                        maxLength: { value: 50, message: " El username debe tener máximo 50 caracteres" },
                    })} />


                    <p>Email</p>
                    <input type="text" className="border w-full p-2 rounded" required
                        {...register('email', {
                            required: { value: true, message: "Campo email requerido" },
                            minLength: { value: 7, message: "El email debe tener minimo 7 caracteres" },
                            maxLength: { value: 50, message: " El email debe tener máximo 50 caracteres" },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Formato incorrecto de E-mail"
                            }
                        })} />


                    <p>Password</p>
                    <input type="password" className="border w-full p-2 rounded" required
                        {...register('password', {
                            required: { value: true, message: "Campo password requerido" },

                        })} onKeyUp={(e) => {
                            setInput(e.target.value)

                        }} />


                    <p>Password confirmation</p>
                    <input type="password" className="border w-full p-2 rounded" required

                        {...register('password1', {
                            required: { value: true, message: "Campo password requerido" }

                        })} onKeyUp={(e) => {
                            setCPass(e.target.value)

                        }} />

                    <button className="rounded bg-[rgb(47,58,178)] p-2 text-white w-20" disabled={isSubmitted ? !isValid : false}> Sign up</button>
                    {
                        errors.password && (
                            toast.error(errors.password?.message)
                        )
                    }
                    {
                        errors.email && (
                            toast.error(errors.email?.message)

                        )
                    }
                    {
                        errors.profilePic && (
                            toast.error(errors.profilePic?.message)
                        )
                    }
                    {
                        errors.name && (
                            toast.error(errors.name?.message)
                        )
                    }


                </form>

            </main>
        </>
    )
}