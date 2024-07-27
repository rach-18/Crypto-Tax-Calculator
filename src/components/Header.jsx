function Header() {
    return (
        <header className="flex justify-between sm:pl-10 sm:pr-20 pl-5 pr-10 py-2 bg-white text-[#0f1629] items-center font-medium">
            <img className="lg:w-[10%] md:w-[15%] sm:w-[20%] w-[35%]" src="Logo.png" alt="Logo" />
            <div className="lg:block hidden">
                <div className="flex gap-10 items-center">
                    <div className="flex gap-5">
                        <p className="cursor-pointer">Features</p>
                        <p className="cursor-pointer">Exchanges</p>
                        <p className="cursor-pointer">How it Works?</p>
                        <p className="cursor-pointer">Blog</p>
                        <p className="cursor-pointer">About Us</p>
                    </div>
                    <button className="transition text-[#0052fe] border-[0.1rem] border-[#0052fe] py-2 px-4 rounded-lg hover:text-white hover:bg-[#0052fe]">Sign In</button>
                </div>
            </div>
            <i className="fa-solid fa-bars lg:hidden block text-xl"></i>
        </header>
    )
}

export default Header;
