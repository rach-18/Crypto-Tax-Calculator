import Calculator from "./Calculator";
import FAQ from "./FAQ";

function Home() {
    return (
        <div className="text-[#0f1629] flex lg:flex-row flex-col gap-5 mt-5">
            <div className="w-full">
                <Calculator />
                <FAQ />
            </div>
            <div 
                className="lg:w-1/3 w-[95%] bg-[#0052fe] p-10 text-white text-center lg:mr-5 mr-auto ml-auto lg:ml-0 rounded-lg lg:h-[31rem] flex flex-col items-center lg:mb-0 mb-5"
            >
                <img className="lg:hidden block my-2 sm:w-1/2 w-5/6" src="Explore.png" alt="" />
                <p className="font-bold lg:text-2xl sm:text-3xl text-xl mb-2">Get Started with KoinX for FREE</p>
                <p className="lg:text-sm sm:text-base text-sm">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
                <img className="lg:block hidden my-2" src="Explore.png" alt="" />
                <button className="bg-white text-[#0f1629] font-medium py-2 px-5 rounded-md mt-2">Get Started for FREE</button>
            </div>
        </div>
    )
}

export default Home;
