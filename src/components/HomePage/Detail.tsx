import React from 'react';
import { Link } from 'react-router-dom';
import Capu from '../../asset/Cappucino.jpg'
import best from '../../asset/Best.jpg'
const cardsData = [
    {
      title: "Fresh Drink",
      highlight: "Cappucino",
      description: "Hot latte\nSugar up to you\nSize : Medium\nPrice: 5000",
      imageUrl:Capu,
      buttonText: "View More",
      buttonLink: "#"
    },
    {
      title: "Delicoius snack ",
      highlight: "Mini Cake",
      description: "Hot latte\nSugar up to you\nSize : Medium\nPrice: 5000",
      imageUrl:best,
      buttonText: "View More",
      buttonLink: "#"
    }
  ];

  export function Detail({ title, highlight, description, imageUrl, buttonText, buttonLink, isLast, borderRight }) {
    return (
      <div className='flex-col text-center'>
        <h2 className="text-4xl text-white font-bold ">
          {title} <br/>
        </h2> 
        <div className={`bg-white flex w-full h-96  justify-between gap-x-8 mt-10 ${borderRight ? 'border-l border-gray-200' : ''}`}>
          {!isLast && (
            <div className="w-1/2 h-full">
              <img src={imageUrl} alt="" className="object-cover w-full h-full" />
            </div>
          )}
          <div className="w-1/2 lg:rounded-lg grid place-content-center h-full text-start ">
            <h1 className="text-indigo-600 text-3xl font-bold">{highlight}</h1>
            <p className="mt-4 text-xl leading-10">
              {description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="mt-8">
              <Link to={'/CatalogPage'} className="bg-yellow-900 text-gray-100 px-5 py-3  rounded font-bold">
                {buttonText}
              </Link>
            </div>
          </div>
          {isLast && (
            <div className="w-1/2 h-full">
              <img src={imageUrl} alt="" className="object-cover w-full h-full" />
            </div>
          )}
        </div> 
      </div>
    );
  }
  export default function DetailFinal() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  m-auto mt-14">
        {cardsData.map((card, index) => (
          <Detail 
            key={index} 
            {...card} 
            isLast={index === cardsData.length - 1} 
            borderRight={index === 1} 
          />
        ))}
      </div>
    );
  }