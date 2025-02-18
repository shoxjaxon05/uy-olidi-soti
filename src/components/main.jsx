import telfon from "../images/telefon.png"
import telfon2 from "../images/telefon2.png"
import laptop from "../images/laptop.png"
import planshat from "../images/planshat.png"
import planshat2 from "../images/planshat2.png"
import watch from "../images/watch.png"
import swatch from "../images/Swatch.png"
import swatch2 from "../images/Swatch2.png"
import mcbook from "../images/mcbook.png"
import ipad from "../images/ipad.png"
import tellop from "../images/tellop.png"
import tellop2 from "../images/tellop2.png"
import mcbook2 from "../images/mcbook2.png"
import book from "../images/book.png"
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const slides = [
    {
        title: "The new phones are here, take a look.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.",
        image: telfon,
    },
    {
        title: "Experience the latest tech innovations.",
        text: "Discover cutting-edge features and superior performance with our newest lineup.",
        image: ipad,
    },
    {
        title: "Upgrade your device today.",
        text: "Trade in your old phone and get an amazing deal on the latest models.",
        image: planshat2,
    },
];
const data = [
    {
        id: 1,
        img: mcbook,
        title: "MacBook Pro 13",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        price: "$ 1,200.00 USD"
    },
    {
        id: 2,
        img: swatch,
        title: "Smart Galaxy Watch 3",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "$ 199.00 USD"
    },
    {
        id: 3,
        img: mcbook2,
        title: "MacBook Air M1",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "$ 1,009.00 USD"
    },
    {
        id: 4,
        img: ipad,
        title: "iPad",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "$ 610.00 USD"
    }
];

const data2 = [
    {
        id: 1,
        text: "Smart light bulb pack",
        title: "Latest and gratest",
        img: swatch2
    },
    {
        id: 2,
        text: "Smart light bulb pack",
        title: "Best selling",
        img: tellop
    },
    {
        id: 3,
        text: "Smart light bulb pack",
        title: "Every product",
        img: tellop2
    }
]

const Main = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className="w-[90%] m-auto mt-15 rounded-2xl px-6 flex items-center bg-[#DCE5E2] relative overflow-hidden">
                <button
                    onClick={prevSlide}
                    className="absolute left-4 text-gray-700 hover:text-black text-4xl"
                >
                    <GoChevronLeft size={40} />
                </button>

                {/* Slayder kontenti */}
                <div className="space-y-6 flex-1 p-10">
                    <h1 className="text-6xl font-bold">{slides[currentSlide].title}</h1>
                    <p className="text-lg">{slides[currentSlide].text}</p>
                    <button className="rounded-3xl px-10 py-2 border-2 border-gray-800">
                        Explore
                    </button>
                </div>

                {/* Rasm */}
                <div className="w-[50%]">
                    <img src={slides[currentSlide].image} alt="Phone" className="w-full" />
                </div>

                {/* O‘ngga o‘tish tugmasi */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 text-gray-700 hover:text-black text-4xl"
                >
                    <GoChevronRight size={40} />
                </button>

                {/* Pastdagi indikator tugmalari */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 rounded-full ${currentSlide === index ? "bg-gray-900" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-15 w-[90%] m-auto space-y-5">
                <h2 className="text-6xl text-center ">Shop our latest offers and categories</h2>
                <p className="w-[70%] text-2xl text-center m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex w-[100%] gap-5 mt-10">
                    <div className="grid gap-y-20 w-[50%]">
                        <div className="shadow-[0px_0px_25px_0px_rgba(0,_0,_0,_0.5)]">
                            <img src={laptop} alt="" />
                        </div>
                        <div className="shadow-[0px_0px_25px_0px_rgba(0,_0,_0,_0.5)]">
                            <img src={watch} alt="" />
                        </div>
                    </div>
                    <div className="flex gap-x-5 mb-5 w-[50%]">
                        <div className="shadow-[0px_0px_25px_0px_rgba(0,_0,_0,_0.5)]">
                            <img src={telfon2} alt="" />
                        </div>
                        <div className="shadow-[0px_0px_25px_0px_rgba(0,_0,_0,_0.5)]">
                            <img src={planshat} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-15 w-[90%] m-auto">
                <h2 className="text-6xl text-center ">Save on our most selled items.</h2>
                <p className="w-[70%] text-2xl text-center m-auto">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
                <div className="mt-10 grid grid-cols-4 gap-6 w-[90%] m-auto">
                    {data.map((item) => (
                        <div key={item.id} className="p-5 ">
                            <img src={item.img} alt={item.title} className="w-full h-48 object-contain" />
                            <h3 className="text-xl mt-4">{item.title}</h3>
                            <p className="text-gray-500 mt-2">{item.text}</p>
                            <p className="text-lg mt-2">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-15 w-[90%] m-auto">
                <h2 className="text-6xl text-center ">See the best around here</h2>
                <p className="w-[70%] text-2xl text-center m-auto">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
                <div className="mt-10 grid grid-cols-3 gap-x-6 w-[90%] m-auto">
                    {data2.map((item) => (
                        <div key={item.id} className=" grid justify-center text-center p-5 bg-[#F8F9FA] ">
                            <p className="text-gray-500 mt-2">{item.text}</p>
                            <h3 className="text-xl">{item.title}</h3>
                            <button className="rounded-3xl w-40 m-auto mt-5 py-2 border-2">Explore</button>
                            <img src={item.img} alt={item.title} className="w-full mt-5 h-48 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-15 w-[90%] m-auto">
                <h2 className="text-6xl text-center ">Ideas have a place here</h2>
                <p className="w-[70%] text-2xl text-center m-auto">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
                <div className="flex mt-10 w-[100%] gap-10">
                    <div className="w-[50%] rounded-2xl overflow-hidden">
                        <img src={book} alt="book" />
                    </div>
                    <div className="w-[50%] space-y-10">
                        <p className="text-3xl">We Make It Easy To Find The Great Design Talent, Easier...</p>
                        <p className="text-3xl">Road Design Handbook For The International Road...  </p>
                        <p className="text-3xl">The Best Kept Secrets About Creative People</p>
                        <p className="text-3xl">We Make It Easy To Find The Great Design Talent, Easier...</p>
                    </div>
                </div>
                <p className="text-2xl text-center mt-5">See all</p>
            </div>
            <div className="mt-15 w-[90%] m-auto">
                <h2 className="text-center text-6xl">Looking for anything else?</h2>
                <div className="relative w-[60%] m-auto mt-10">
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 " size={20} />
                    <input
                        type="text"
                        placeholder="Search kayword"
                        className="w-full pl-10 pr-3 py-2 border rounded-4xl"
                    />
                </div>
                <div className="flex justify-center mt-5 flex-wrap  gap-3 w-[50%] m-auto">
                    <div className="py-4 px-8 border rounded-4xl">iPhone</div>
                    <div className="py-4 px-8 border rounded-4xl">Charger</div>
                    <div className="py-4 px-8 border rounded-4xl">Gift</div>
                    <div className="py-4 px-8 border rounded-4xl">Google Pixel 3</div>
                    <div className="py-4 px-8 border rounded-4xl">Keyboard</div>
                    <div className="py-4 px-8 border rounded-4xl">13 Pro Max</div>
                    <div className="py-4 px-8 border rounded-4xl">iPhone 12</div>
                    <div className="py-4 px-8 border rounded-4xl">Laptop</div>
                    <div className="py-4 px-8 border rounded-4xl">Mobile</div>
                </div>
                <div className="mt-15 mb-10 w-[90%] m-auto rounded-2xl px-6 grid justify-center items-center bg-[#DCE5E2]">
                    <h2 className="text-center text-6xl mt-10">Never miss a thing</h2>
                    <p className="w-[70%] text-2xl text-center mt-5 m-auto">Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                    <img src={tellop} className="w-[60%] mt-5 m-auto" alt="" />
                    <div className="relative w-[60%] mb-10 m-auto">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full pr-[30%] pl-3 py-2 border rounded-4xl"
                        />
                        <div className="absolute right-0 top-0 w-[30%] h-full bg-black text-white flex items-center justify-center rounded-r-4xl">
                            Send
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;