import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img1 from '../images/listing image.png'
import Img2 from '../images/image.png'
import Img3 from '../images/image (1).png'
import Img4 from '../images/image (2).png'
import Img5 from '../images/image (3).png'
import Img6 from '../images/image (4).png'
import Img7 from '../images/image (5).png'
import Img8 from '../images/image (6).png'
import Img9 from '../images/image (7).png'
import Img10 from '../images/image (8).png'
import Img11 from '../images/image (9).png'
import Img12 from '../images/image (10).png'
import Img13 from '../images/image (11).png'
import Img14 from '../images/image (12).png'
import Img15 from '../images/image (13).png'
import Img16 from '../images/image (14).png'
import { MdFavorite } from "react-icons/md";
import Footer from "./Footer"

const staysData = [
  {id:1, name: "Brightwoods Cabin", location: "Bridlepath, Ontario, Canada", price: 658, rating: 4.9, image: Img1 },
  {id:2, name: "Urban Loft", location: "Georgina Bay, Ontario, Canada", price: 410, rating: 4.5, image: Img2 },
  {id:3, name: "Forestville Cottages", location: "Simcoe, Ontario, Canada", price: 325, rating: 5.0, image: Img3 },
  {id:4, name: "Unionville Lodge", location: "Markham, Ontario, Canada", price: 485, rating: 4.6, image: Img4 },
  {id:5, name: "Mississauga Airstream", location: "Mississauga, Ontario, Canada", price: 502, rating: 4.8, image: Img5 },
  {id:6, name: "Niagara Homes", location: "Niagara, Ontario, Canada", price: 655, rating: 4.9, image: Img6 },
  {id:7, name: "Sunny Estate", location: "Barcort, Ontario, Canada", price: 320, rating: 5.0, image: Img7 },
  {id:8, name: "Lawrence Hills", location: "Lawrence, Ontario, Canada", price: 350, rating: 5.0, image: Img8 },
  {id:9, name: "Simcoe Lake Lodge", location: "Simcoe, Ontario, Canada", price: 395, rating: 5.0, image: Img9 },
  {id:10, name: "Wasaga Beach Home", location: "Georgina Bay, Ontario, Canada", price: 385, rating: 5.0, image: Img10 },
  {id:11, name: "Banff Hills", location: "Banff, Alberta, Canada", price: 385, rating: 5.0, image: Img11 },
  {id:12, name: "Creemore Canada", location: "Creemore, Alberta, Canada", price: 385, rating: 5.0, image: Img12 },
  {id:13, name: "Kawartha Lakes", location: "Kawartha, Alberta, Canada", price: 385, rating: 5.0, image: Img13 },
  {id:14, name: "Revelstoke Cabin", location: "Revelstoke, Alberta, Canada", price: 385, rating: 5.0, image: Img14 },
  {id:15, name: "Brightwoods Estate", location: "Brightwoods Estate", price: 385, rating: 5.0, image: Img15 },
  {id:16, name: "Brightwoods Estate", location: "Brightwoods Estate", price: 385, rating: 5.0, image: Img16 },
];

const Home = () => {
  const [stays, setStays] = useState(staysData.map(stay => ({ ...stay, favorite: false })));
  const navigate = useNavigate();

  const toggleFavorite = (index) => {
    setStays(stays.map((stay, i) => i === index ? { ...stay, favorite: !stay.favorite } : stay));
  };
  return (
    <div>
      <div>
      <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/a899/c041/cddaac5cde140d8bfee785b0dc68a02b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VhAJvyXojrxN~x8Nb1aylCX6MzeLdN9rAbHx4442herjpCPzGa7WA7HiWjnF8Ys6lGJnlWL1mvaIzJZYFRIPdNy05SzHXmzIdczEQ-4JW99HF4WIJAAICoWj~VwhonttjKHiD4q8LDK0Q-D9oOGDX70CDgOSw8l5sZnszZHsqD7EJAwxxE8dq335denxkf26yAUivQZ6KHrV9O6ci8fldv3BvwxWSZZMeHuJVT8L7H0zfwxr2640dyc8BdGYa2tyazMvExbMluwR-~AqHKNXNBmc6NQDa6m~l7f0f2gxYRczkYK3k9PXxAiRUWzz0Vf~0rsdlDtfn5RA68y-Eo6ppg__"
            alt="Background"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center text-white p-14">
            <h1 className="text-3xl font-bold text-black">
              Find a <span className="text-green-400">host</span> for every journey
            </h1>
            <p className="mt-2 text-lg text-black font-light">Discover the best local rental properties for your travel needs</p>
          </div>
        </div>
    </div>
    <div className="m-auto w-[90%] mb-20">
      <h1 className="text-2xl font-thin">
        Stays nearby: <span className="font-medium">Toronto Ontario</span>
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {stays.map((stay, index) => (
          <div 
          key={index} className="bg-white rounded-lg shadow-xs overflow-hidden relative">
            <img onClick={() => navigate(`/malumot/${stay.id}`, { state: stay })} src={stay.image} alt={stay.name} className="w-full h-82 object-cover" />

            <button
              className={`absolute top-4 right-4 p-2 bg-white rounded-full text-xl transition ${
                stay.favorite ? "text-red-500" : "text-gray-400"
              }`}
              onClick={() => toggleFavorite(index)}
            >
              {stay.favorite ? <MdFavorite /> : <MdFavorite />}
            </button>

            <div className="p-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-medium">{stay.name}</h2>
                  <p className="text-gray-500 font-light">{stay.location}</p>
                </div>
                <span className="flex items-center text-black gap-1">{stay.rating} <span className="text-yellow-500">★</span> </span>
              </div>

              <div className="flex items-center justify-between mt-6">
                <p className="text-lg font-bold">
                  ${stay.price} <span className="font-light text-gray-500">/night</span>
                </p>
                <button className="text-green-600 flex items-center">📊 Price chart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Home
