import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id } }) => {
  // Get the price of the first size in the list
  const firstSizePrice = p.size.data[0]?.price;

  return (
    <Link href={`/product/${p.slug}`} className="group">
      <div className="relative overflow-hidden transform bg-white duration-200 group-hover:scale-105 cursor-pointer shadow-lg rounded-lg">
        <Image
          width={500}
          height={500}
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          className="object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900">{p.name}</h2>
          <div className="flex items-center text-gray-700 mt-2">
            {/* Display the price of the first size */}
            <p className="text-lg font-semibold">&#8377;{firstSizePrice}</p>
            {p.original_price && (
              <div className="ml-2">
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
