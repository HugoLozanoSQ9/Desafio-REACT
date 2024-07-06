export default function AsideR() {
    const data = [
        {
            title: "Does TypeScript fail at enums?",
            comments: "2 comments"
        },
        {
            title: "Leadership-food for thought",
            comments: "30 comments"
        },
        {
            title: "Weekly Watercooler Thread",
            comments: "12 comments"
        },
        {
            title: "1000 Followers... Thank you!",
            comments: "4 comments"
        },
        {
            title: "Are you a Beginner, Intermediate or Expert Programmer?",
            comments: "24 comments"
        },


    ]
  
    return (
        <aside className=" lg:flex hidden  lg:col-start-3 lg:col-end-4 ml-4 mt-4 flex-col gap-4 ">

            <section className="flex flex-col  w-[90%] max-w-[15rem] ">

                <div className="bg-white rounded-lg  ">
                    <div className="p-4">
                        <h2 className="font-bold">
                            #discuss
                        </h2>

                        <p className="text-[#575757] text-xs ">
                            Discussion threads targeting the whole community
                        </p>
                    </div>

                    <ul>
                        {
                            data.map(({ title, comments }, i) => {
                                return (
                                    <a href="#" key={`titles-${i}`}>
                                        <li className="w-full border-y p-4">
                                            <h4 className="text-xs">
                                                {title}

                                            </h4>
                                            <p className="text-xs text-[#575757] mt-2">{comments}</p>
                                        </li>
                                    </a>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className="flex flex-col  w-[90%] max-w-[15rem] ">

                <div className="bg-white rounded-lg  ">
                    <div className="p-4">
                        <h2 className="font-bold">
                            #watercooler
                        </h2>

                        <p className="text-[#575757] text-xs ">

                            Light, and off-topic conversation.
                        </p>
                    </div>

                    <ul>
                        {
                            data.map(({ title, comments }, i) => {
                                return (
                                    <a href="#" key={`card-${i}`}>
                                        <li className="w-full border-y p-4">
                                            <h4 className="text-xs">
                                                {title}

                                            </h4>
                                            <p className="text-xs text-[#575757] mt-2">{comments}</p>
                                        </li>
                                    </a>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>


        </aside>
    )

}