import { TiLocation } from "react-icons/ti";
import { FaBed } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";



const Resources = () => {

    return <>
        <div className="h-screen w-full bg-gray-200">
            <h2 className="text-2xl font-semibold justify-center text-center pt-10 font-serif">Find Nearby Hospitals</h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 mt-10 w-[85%] m-auto gap-4">
                <div className="border-1  h-auto p-2 py-4 bg-white border-transparent rounded-2xl ">

                    <h2 className="font-semibold"> City General Hospital</h2>
                    <p className="flex items-center  "><TiLocation /><span className="pl-0.5"> 3.8 Km</span>&nbsp; away
                    </p>
                    <p className="flex items-center text-gray-700 "> <FaBed className="mr-3 text-blue-600"  />

                        Available Beds: 15
                    </p>
                    <p className="flex items-center text-gray-700"> <FaLungs className="mr-3 text-blue-600" />

                        Oxygem Cyclinders: 25
                    </p>
                    <p className="flex items-center text-gray-700"> <FaDroplet className="mr-3 text-blue-600" />

                        Blood Units: 50
                    </p>
                    <div className="flex justify-between">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-xl w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Call Now
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-xl w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Direction
                    </button> </div>
                </div>
                <div className="border-1  h-auto p-2 py-4 bg-white border-transparent rounded-2xl ">

                    <h2 className="font-semibold"> City General Hospital</h2>
                    <p className="flex items-center  "><TiLocation /><span className="pl-0.5"> 3.8 Km</span>&nbsp; away
                    </p>
                    <p className="flex items-center text-gray-700 "> <FaBed className="mr-3 text-blue-600"  />

                        Available Beds: 15
                    </p>
                    <p className="flex items-center text-gray-700"> <FaLungs className="mr-3 text-blue-600" />

                        Oxygem Cyclinders: 25
                    </p>
                    <p className="flex items-center text-gray-700"> <FaDroplet className="mr-3 text-blue-600" />

                        Blood Units: 50
                    </p>
                    <div className="flex justify-between">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-xl w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Call Now
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-xl w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Direction
                    </button> </div>
                </div>
                <div className="border-1  h-auto p-2 py-4 bg-white border-transparent rounded-2xl ">

                    <h2 className="font-semibold"> City General Hospital</h2>
                    <p className="flex items-center  "><TiLocation /><span className="pl-0.5"> 3.8 Km</span>&nbsp; away
                    </p>
                    <p className="flex items-center text-gray-700 "> <FaBed className="mr-3 text-blue-600"  />

                        Available Beds: 15
                    </p>
                    <p className="flex items-center text-gray-700"> <FaLungs className="mr-3 text-blue-600" />

                        Oxygem Cyclinders: 25
                    </p>
                    <p className="flex items-center text-gray-700"> <FaDroplet className="mr-3 text-blue-600" />

                        Blood Units: 50
                    </p>
                    <div className="flex justify-between">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-xl w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Call Now
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-xl w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Direction
                    </button> </div>
                </div>
                <div className="border-1 h-auto p-2 py-4 bg-white border-transparent rounded-2xl ">

                    <h2 className="font-semibold"> City General Hospital</h2>
                    <p className="flex items-center  "><TiLocation /><span className="pl-0.5"> 3.8 Km</span>&nbsp; away
                    </p>
                    <p className="flex items-center text-gray-700 "> <FaBed className="mr-3 text-blue-600"  />

                        Available Beds: 15
                    </p>
                    <p className="flex items-center text-gray-700"> <FaLungs className="mr-3 text-blue-600" />

                        Oxygem Cyclinders: 25
                    </p>
                    <p className="flex items-center text-gray-700"> <FaDroplet className="mr-3 text-blue-600" />

                        Blood Units: 50
                    </p>
                    <div className="flex justify-between">
                    <button className="bg-green-500 text-white py-2 px-4 rounded w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Call Now
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-xl w-[48%]" onClick={() => window.location.href='tel:+1234567890'}>
                    Direction
                    </button> </div>
                </div>
                
            </div>

        </div>
    </>
}

export default Resources