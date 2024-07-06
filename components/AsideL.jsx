import { useRouter } from "next/router"
import MiddleItems from "./Aside.data/MiddleItems"
import { useEffect,useState } from "react"
import clsx from "clsx"

export default function AsideL() {
    const router = useRouter()
    function handleClick(path) {
        router.push(path)
    }
    const [token, setToken] = useState(null);
    const getToken = () => {
        const storedToken = localStorage.getItem('Token');
        if (storedToken) {
            setToken(storedToken);
        }
    }
    useEffect(() => {
        getToken();
    }, [])
    return (
        <aside className="md:col-start-1 md:col-end-2  p-4 border-3-[rgba(245,245,245,0.5)] hidden md:flex flex-col gap-4 items-end">

            <article className={clsx("flex flex-col bg-white w-[90%] h-[20rem] rounded-lg p-2 gap-4 max-w-[13rem]",{"hidden":token})}>
                <h2 className="font-bold ">
                    DEV Community is a community of 1,707,784 amazing developers
                </h2>
                <p className="text-[#575757] text-sm">
                    We&apos;re a place where coders share, stay up-to-date and grow their careers.
                </p>
                <div className="flex flex-col w-[90%]">
                    <a href="#" className="p-2 border-2 rounded border-[#3B49DF] min-w-32 text-[#3B49DF] text-sm text-center hover:bg-[#3B49DF] hover:text-white" onClick={() => handleClick("/signUp")}>
                        Create account
                    </a>
                    <a href="#" className="p-2 text-[#575757] rounded text-sm text-center mt-1 hover:bg-blue-100 hover:text-blue-500" onClick={() => handleClick("/login")} >Log in</a>
                </div>
            </article>

            <MiddleItems />


        </aside>
    )
}