import MidSection from "@/components/login/midSection"
export default function Login() {
    return (
        <main className="flex justify-center flex-wrap items-center">

            <div className="w-full flex justify-center pt-6 flex-wrap">
                <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png" className="h-[48px]" alt="" />
                <h1 className="font-bold w-full text-center pt-4 text-2xl "> Join the DEV Comunnity </h1>
                <p className="text-xs pt-2 text-center"> DEV Community is a community of 1,684,869 amazing developers </p>

            </div>

            <MidSection />

            <div className="w-full flex items-center flex-col">
                <p className="text-center px-[30%] text-xs py-4 italic text-gray-600 ">
                    By signing up, you are agreeing to our   <span className="text-blue-500"> privacy policy, terms of use  </span> <br />and <span className="text-blue-500">code of conduct.</span>
                </p>
                <div className=" border max-w-xl w-[50%]"></div>

                <p className="text-sm">Already have an account? <span className="text-blue-500"> Log in.</span></p>
            </div>
            



        </main>
    )
}