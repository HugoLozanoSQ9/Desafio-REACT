import clsx from "clsx";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getUserId } from "@/pages/api/getUserId";

export default function Navbar() {
    const router = useRouter()
    function handleClick(path) {
        router.push(path)
    }
    const [token, setToken] = useState(null);
    const [userimg, setUserimg] = useState(null)
    const getToken = () => {
        const storedToken = localStorage.getItem('Token');
        if (storedToken) {
            setToken(storedToken);
        }
    }

    async function getUser(textToken) {
        try {
            // Decodificar el token JWT
            const tokenParts = textToken?.split('.');
            if (!tokenParts) {
                return
            }
            const userAtob = tokenParts[1];
            const decodedToken = JSON.parse(atob(userAtob));

            // Obtener el id del token decodificado
            const id = decodedToken.id;

            // Hacer la consulta a MongoDB para obtener el usuario
            const userId = await getUserId(id);
            const data = await userId.data

            return await data;
        } catch (error) {
            console.error('Error al obtener usuario:', error);
            throw error; // Manejar el error apropiadamente según tu aplicación
        }
    }
    function logOut() {
        location.reload();
        localStorage.removeItem('Token')

    }

    useEffect(() => {
        getToken();
        getUser(token)
            .then(data => {
                setUserimg(data.user.profilePic)
            })
            .catch(error => {
                console.error('Error al obtener usuario:', error);
                // Manejar el error apropiadamente según tu aplicación
            });
    }, [token])


    return (
        <nav className="col-start-1 col-end-2  p-2 flex  justify-between md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-4 bg-white" >

            <div className="flex items-center gap-4 pl-2 w-full">

                <button className="md:hidden" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="agvrzb96r33ebxc7d8n76dyqlnum3fpt" ><title id="agvrzb96r33ebxc7d8n76dyqlnum3fpt">Navigation menu</title>
                        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                    </svg>
                </button>
                <a href="#" onClick={() => handleClick("/")} >
                    <img className="w-[24px] min-w-14 h-full" src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                </a>

                <div className=" border rounded p-2 hidden md:flex gap-2 w-full  lg:max-w-[80%] place-items-start">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab2953tpeb04x3bdygnrknphafpoyrra" ><title id="ab2953tpeb04x3bdygnrknphafpoyrra">Search</title>
                            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                        </svg>
                    </button>

                    <input type="text " placeholder="Search..." className="w-full" />

                </div>

            </div>

            {
                token ? (<div className="flex items-center gap-4 pl-2 md:min-w-[15rem] min-w-[8rem]">

                    <a className="md:hidden" id="search-link" aria-label="Search" href="/search" previewlistener="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aanrmer3tmxzt61ukr10pwxawozvhi4o" ><title id="aanrmer3tmxzt61ukr10pwxawozvhi4o">Search</title>
                            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                        </svg>

                    </a>

                    <a href="#" className="p-2 border-2 hidden md:block rounded border-[#3B49DF] min-w-32 text-[#3B49DF] text-sm text-center hover:bg-[#3B49DF] hover:text-white" onClick={() => handleClick("/createPost")}>
                        Create Post
                    </a>

                    <a href="/notifications" id="notifications-link" aria-label="Notifications">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a7jhwdgxh18f5xjy0h52ho89c1mj5ss1" ><title id="a7jhwdgxh18f5xjy0h52ho89c1mj5ss1">Notifications</title>
                            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                        </svg>

                    </a>

                    <a href="#"> <img src={userimg} onClick={() => logOut()} alt="" className="rounded-full w-[32px] h-[32px] object-cover" /></a>

                </div>)
                    :
                    (<div className="flex  items-center gap-4 pl-2 md:min-w-[13rem]">

                        <a href="#" className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ab2953tpeb04x3bdygnrknphafpoyrra" ><title id="ab2953tpeb04x3bdygnrknphafpoyrra">Search</title>
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                            </svg>
                        </a>
                        <a href="#" className="p-2 text-[#575757] rounded text-sm text-center hidden md:block  hover:bg-blue-100 hover:text-blue-500" onClick={() => handleClick("/login")}>Log in</a>

                        <a href="#" className="p-2 border-2 rounded border-[#3B49DF] min-w-32 text-[#3B49DF] text-sm text-center hover:bg-[#3B49DF] hover:text-white" onClick={() => handleClick("/signUp")}>
                            Create account
                        </a>




                    </div>)
            }



        </nav>
    )
}