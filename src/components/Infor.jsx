import React from 'react'
import About from '../images/About.png'
import { FaRegRectangleList } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import Map from '../images/Rectangle 1.png'
import Footer from "./Footer"
import { useLocation } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import First from '../images/Ellipse 12.png'

const reviews = [
  {
    id: 1,
    name: "Johnny Cash",
    date: "June 2023",
    rating: 5.0,
    review: "Michelle's place was so great and definitely the perfect place for our long weekend. The lake is amazing!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Yuta Watanabe",
    date: "May 2023",
    rating: 4.5,
    review: "The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Shane Willis",
    date: "December 2022",
    rating: 4.8,
    review: "A great place overall. One of the nicest places in town for sure. I will come back in the next few months with my family :)",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];


const Infor = () => {
  const location = useLocation();
  const product = location.state;
  if (!product) {
    <h1>ishlamiyapti</h1>
  }
  return (
    <>
      <div className=' w-[90%] m-auto'>
        <div className='flex justify-between'>
          <div>
            <div><img src={About} alt="" /></div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">Brightwoods Cabin</h2>
              <p className="text-gray-600">Bridlepath, Ontario, Canada</p>

              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="text-gray-700 ml-1 font-semibold">5.0</span>
                <span className="text-blue-500 ml-2 cursor-pointer">200 Reviews</span>
              </div>

              <p className="mt-3 text-gray-700 text-sm">
                Welcome to our cozy cabin retreat nestled in the heart of Bridlepath,
                Ontario! Surrounded by lush landscapes and tranquil trails, this
                charming getaway offers the perfect blend of rustic elegance and
                modern comfort.
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-gray-900">$658</span>
                <span className="text-gray-500">/night</span>
              </div>

              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                Book this home
              </button>

              <div className="mt-4 flex items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://source.unsplash.com/50x50/?person"
                  alt="Host"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold">Michelle Ward</p>
                  <p className="text-xs text-gray-500">Joined in May 2021</p>
                </div>
                <span className="ml-auto bg-green-100 text-green-600 px-2 py-1 text-xs rounded-lg">
                  ★ Superhost
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between p-5 mt-20'>
          <div>
            <h4 className='m-3 text-2xl'>About this home</h4>
            <p className='p-3'>Welcome to Brightwoods Cabin, your idyllic retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin,<br /> surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway.</p>
            <p className='p-3'>Living Space: This charming cabin boasts a spacious living area adorned with rustic decor and modern amenities. <br /> Enjoy the warmth of the wood-burning fireplace, relax on the plush sofas, and make yourself at home with our <br /> entertainment center featuring a flat-screen TV, WiFi, and more.</p>
            <p className='p-3'>Bedrooms: With 3 beautifully appointed bedrooms, our cabin comfortably accommodates up to [number of guests]. <br /> Each room is furnished with luxurious bedding and unique woodland-inspired touches to ensure a restful slumber.</p>
          </div>
          <div className=' space-y-10'>
            <div className='flex gap-1'>
              <FaRegRectangleList /> <p> Dedicated workspace <br /> A private room equipped with WiFi</p>
            </div>
            <div className='flex gap-1'>
              <FaUserCheck /> <p>Self check-in <br /> Check in with just your phone </p>
            </div>
            <div className='flex gap-1'>
              <MdOutlineFreeCancellation /><p>Free cancellation <br /> Cancel anytime</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between gap-2 mt-20'>
          <div>
            <p>Lakeside</p>
            <p>Kitchen</p>
            <p>Security cameras on property</p>
            <p>Wifi</p>
          </div>
          <div>
            <p>Free parking</p>
            <p>Outdoor shower</p>
            <p>Hot water</p>
            <p>Shampoo</p>
          </div>
          <div>
            <p>Fire Extinguisher</p>
            <p>Freezer</p>
            <p>Coffee Maker</p>
            <p>Glass Stove</p>
          </div>
          <div>
            <h4 className='text-2xl'>Where you'll be</h4>
            <p>📍The Briddle Path</p>
            <img src={Map} alt="" />
          </div>
        </div>
        <div className="mx-auto px-4 py-6 mt-20 mb-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Reviews</h2>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full border"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-yellow-500 font-semibold">
                    <span>{review.rating}</span>
                    <FaStar />
                  </div>
                </div>
                <p className="mt-3 text-gray-700 text-sm">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Infor;
