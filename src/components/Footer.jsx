function Footer() {
    return (
        <div className="bg-black text-white md:px-20 px-5 lg:text-base sm:text-sm text-xs py-10">
            <div className="flex lg:flex-row flex-col items-center lg:gap-0 gap-5 justify-between">
                <p className="text-3xl font-bold">KoinX</p>
                <div className="flex gap-4 text-[#2997f9] text-xl">
                    <i className="fa-brands fa-square-x-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-solid fa-circle-user"></i>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-5 justify-between">
                <div className="flex flex-col gap-3 lg:w-full w-[40%]">
                    <p className="font-bold">Crypto Taxes for </p>
                    <p>Individuals and investors</p>
                    <p>Tax Professionals and Accountants</p>
                    <p>Exchanges and Web3 projects</p>
                    <img className="w-5/6 lg:block hidden" src="Footer.png" alt="" />
                </div>
                <div className="flex flex-col gap-3 lg:w-full w-[40%]">
                    <p className="font-bold">Free Tools</p>
                    <p>Crypto Prices Live</p>
                    <p>Crypto Ta Calculator</p>
                    <p>Crypto Tax Saving Speculator</p>
                    <p>Crypto Profit Calculator</p>
                    <p>Crypto Converter</p>
                    <p>Crypto Staking ROI Calculator</p>
                </div>
                <div className="flex flex-col gap-3 lg:w-full w-[40%]">
                    <p className="font-bold">Resource Center</p>
                    <p>Crypto Tax Guides</p>
                    <p>Dumb Ways To Lose Money</p>
                    <p>Crypto Tax Saving Guide</p>
                    <p>Blogs</p>
                    <p>Crypto Buying Guides</p>
                    <p>Crypto Staking Guides</p>
                    <p>Crypto Mining Guides</p>
                    <p>Crypto Price Predictions</p>
                </div>
                <div className="flex flex-col gap-3 lg:w-full w-[40%]">
                    <p className="font-bold">Help And Support</p>
                    <p>Product Guides</p>
                    <p>How to Guides</p>
                    <p>Templates</p>
                    <p>Contact Us</p>
                    <img className="lg:hidden block w-1/2" src="Footer.png" alt="" />
                </div>
                <div className="flex flex-col gap-3 lg:w-full w-[40%]">
                    <p className="font-bold">Company</p>
                    <p>About Us</p>
                    <p>Backed By</p>
                    <p>Media and Press</p>
                    <p>Careers <span>We're hiring</span></p>
                    <p>Security</p>
                    <p>Refund Policy</p>
                    <p>Brand Assets</p>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <hr className="my-4" />
            <p className="sm:text-sm text-xs text-center">© All rights reserved by Simplify Infotech Pvt. Ltd.</p>
        </div>
    )
}

export default Footer;
