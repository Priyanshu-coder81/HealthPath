import bgImage from "/images/bgImage.jpg";
import frontImage from "/images/ayushman-bharat-front.jpeg";
import { MdLocationOn } from "react-icons/md";

const Header = () => {
    return <>
        <div className="relative flex flex-col md:flex-row justify-center items-center mt-30 h-[82vh]">
            <div className="relative w-[100%] h-full">
                <img src={bgImage} alt="" className="h-full object-cover w-full"/>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute top-0 left-0 right-0 text-center pt-10 sm:pt-20 w-full md:w-[90%]  m-auto">
                    <h1 className="text-white text-4xl font-bold font-serif">Find Healthcare Resources near you</h1>
                    <p className="text-white sm:p-4">Locate hospitals, check bed availability, and access healthcare schemes instantly</p>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 px-4 m-auto">
                        <input 
                            type="text" 
                            placeholder="Enter your location" 
                            className="w-[90%] md:w-[40%] px-6 py-3 rounded-2xl bg-white text-gray-800 outline-none"
                        />
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            <MdLocationOn className="text-xl" />
                            Use Current Location
                        </button>
                    </div>
                    </div>
                
            </div>
        </div>
    </>
}

export default Header;