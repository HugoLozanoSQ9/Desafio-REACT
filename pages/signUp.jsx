export default function RegisterForm() {
    return (
        <main className="grid grid-cols-[5%_1fr_5%] sm:grid-cols-[15%_1fr_15%] md:grid-cols-[20%_1fr_20%] lg:grid-cols-[25%_1fr_25%] xl:grid-cols-[30%_1fr_30%] grid-rows-1 p-4">
        
            <form className="w-full flex flex-col p-4 border gap-2 text-sm col-start-2 col-end-3">
                <h1 className="font-bold mb-4">Create your account</h1>
                <p>Profile mage</p>
                <input type="text" placeholder="Ingresa la url de tu imagen" className="border w-full p-2 rounded" />
                <p>Name</p>
                <input type="text" className="border w-full p-2 rounded" />
                <p>Username</p>
                <input type="text" className="border w-full p-2 rounded" />
                <p>Email</p>
                <input type="text" className="border w-full p-2 rounded" />
                <p>Password</p>
                <input type="text" className="border w-full p-2 rounded" />
                <p>Password confirmation</p>
                <input type="text" className="border w-full p-2 rounded" />

                <button className="rounded bg-[rgb(47,58,178)] p-2 text-white w-20"> Sign up</button>
            </form>

        </main>
    )
}