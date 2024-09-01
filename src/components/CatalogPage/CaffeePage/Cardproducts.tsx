import React, { useEffect } from 'react';
import Hero from "./Hero";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../app/features/coffeeSlice/coffeeSlide';

export function ProductCard({ image, name, priceSmall, priceMedium, priceLarge }) {
  return (
    <div className="w-[285px] h-[286px] relative group grid place-content-center">
      <div className="w-[211px] h-3.5 left-[13px] top-[122px] absolute bg-gradient-to-l from-[#060606] via-[#060606] to-[#060606] blur-[15px]  " />

      <img
        className="w-[180px]  h-[180px] left-[50px] top-[7px] absolute transform transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:-mt-8"
        src={image}
        alt={name}
      />

      <div className="left-[65px] top-[204px] absolute text-center text-white text-xl font-bold font-['Inter']">
        {name}
      </div>

      <div className="w-[168px] h-[42px] justify-between items-center inline-flex mt-64 m-auto gap-x-8">
        <div className="text-center text-white text-base font-normal font-['Roboto Slab']">
          S<br />
          ${priceSmall || 'Default'}
        </div>
        <div className="text-center text-white text-base font-normal font-['Roboto Slab']">
          M<br />
          ${priceMedium *2 || 'Default'}
        </div>
        <div className="text-center text-white text-base font-normal font-['Roboto Slab']">
          L<br />
          ${priceLarge * 3 || 'Default'}
        </div>
      </div>

      <div className="w-[285px] pl-[95px] pr-[94px] pt-[11px] pb-2.5 left-0 top-[330px] absolute bg-[#222121] justify-center items-center inline-flex transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <button className="text-center text-white text-sm font-normal font-['Inter']">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default function Cardproducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = products.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image_url}
        name={product.name}
        priceSmall={product.price}
        priceMedium={product.price}
        priceLarge={product.price}
      />
    ));
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className="pt-44">
        <Hero />
      </div>
      <div className="justify-between items-center gap-y-24 flex flex-wrap w-4/5 m-auto pt-32">
        {content}
      </div>
    </>
  );
}
