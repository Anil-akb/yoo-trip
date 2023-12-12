import React from "react";


type Props = {};

const Footter = (props: Props) => {

    return (
        <>
            <div className="flex ">
                <header className="bg-zinc-800  w-full flex-col justify-center items-center px-16 py-6 max-md:max-w-full max-md:px-5">
                    <div className="flex items-start justify-between gap-32 mt-6 px-2 max-md:flex-wrap ">
                        <div className="flex ">

                            <div className="text-white text-lg font-semibold leading-6">Trip Swift Logo</div>
                        </div>
                        <nav className="">
                            <header className="text-white text-lg font-semibold leading-7 capitalize">Company</header>
                            <div className="text-white text-base leading-6 mt-6">About Us</div>
                            <div className="text-white text-base leading-6 mt-7">Why Choose us</div>
                            <div className="text-white text-base leading-6 mt-6">Pricing</div>
                            <div className="text-white text-base leading-6 mt-6">Testimonial</div>
                        </nav>
                        <nav className="">
                            <header className="text-white text-lg font-semibold leading-7 capitalize">Resources</header>
                            <div className="text-white text-base leading-6 mt-7">Privacy Policy</div>
                            <div className="text-white text-base leading-6 mt-6">Terms and Condition</div>
                            <div className="text-white text-base leading-6 whitespace-nowrap mt-7">Blog</div>
                            <div className="text-white text-base leading-6 mt-6">Contact Us</div>
                        </nav>
                        <nav className="">
                            <header className="text-white text-lg font-semibold leading-7 capitalize">Product</header>
                            <div className="text-white text-base leading-6 mt-7">Project managment</div>
                            <div className="text-white text-base leading-6 mt-6">Time tracker</div>
                            <div className="text-white text-base leading-6 mt-7">Time schedule</div>
                            <div className="text-white text-base leading-6 mt-7">Lead generate</div>
                        </nav>


                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border border-white rounded px-2 py-2 mr-2 w-56"
                            />
                            <button className="bg-red-700 text-white px-2 py-2 rounded">Subscribe</button>
                        </div>
                    </div>

                    {/* New Subscription Section */}
                    

                    <div className="flex items-center max-w-full justify-between gap-5 mt-16 items-start max-md:flex-wrap max-md:mt-10 relative">
  {/* Left Line */}
  <div className="flex-1 h-px bg-white hidden md:block"></div>

  <div className="text-white text-xl pl-4">
    Copyright @2022
  </div>

  {/* Right Line */}

  <button className="pl-4">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4294504958fcd2d8667252c8fa1d77a75982cb6fde0890516d1d06b021368e47?apiKey=06bef42c624743a9888f5d8e0d15a6ad&"
      className="aspect-[7.6] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
      alt="Logo"
    />
  </button>
  <div className="flex-1 pl-4 h-px bg-white hidden md:block"></div>

</div>
                </header>
            </div>
        </>
    );
}

export default Footter;