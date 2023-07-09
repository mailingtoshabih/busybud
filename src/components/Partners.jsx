import form from "../assets/form.png"
import jot from "../assets/jot.png"
import electro from "../assets/electro.png"

export const Partners = () => {
    return (
        <div className='my-10'>


            <p className='my-16 font-semibold text-3xl w-full text-center '>
                Upossimus voluptatem
            </p>


            <div className='flex justify-center md:space-x-5'>


                
                <div className='w-full md:w-1/3'>

                    <img src={electro} alt=""  className="h-10 mx-auto"/>

                    <p className='my-2 text-xs font-semibold text-center'>
                        ElectroNeek IDE
                    </p>

                </div>

                <div className='w-full md:w-1/3'>

                    <img src={jot} alt=""  className="h-10 mx-auto"/>

                    <p className='my-2 text-xs font-semibold text-center'>
                        Jot Form
                    </p>

                </div>

                <div className='w-full md:w-1/3'>

                    <img src={electro} alt=""  className="h-10 mx-auto"/>

                    <p className='my-2 text-xs font-semibold text-center'>
                        Forms on Fire
                    </p>

                </div>


                






            </div>




        </div>
    )
}
