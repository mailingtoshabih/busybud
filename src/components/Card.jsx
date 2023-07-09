
import rating from "../assets/rating.png"
import ceo from "../assets/ceo.jpg"

export const Card = () => {
    return (
        <div className='w-full md:w-60 p-5 rounded-xl shadow-xl shadow-gray-100 bg-white'>


            <div className="flex space-x-3 justify-around">

                <img src={ceo} alt="" className="h-16 border-2 rounded-xl" />

                <div className="h-10 my-2">

                    <p className="my-auto text-sm">
                        John Treg
                    </p>
                    <p className="text-xs">
                        CEO
                    </p>

                    <img src={rating} alt="" className="-my-2 w-12" />
                </div>


            </div>



            <p className='mt-5 text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos possimus voluptatem in non commodi veritatis! Earum id numquam nam?
            </p>

        </div>
    )
}
