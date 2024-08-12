"use client";

import { useMemo, useState } from "react";
import style from "./style.module.scss";
import CartItem from "@/src/models/Cart";
import Image from "next/image";
import AppQuantity from "@/src/components/AppQuantity";
import AppButton from "@/src/components/AppButton";
import AppIcon from "@/src/components/AppIcon";

export default function Cart() {
  const [cart, setCart] = useState<Array<CartItem>>([
    {
      market_data: {
        market_id: "market_001",
        market_name: "FreshMart",
        market_description: "Organic and fresh produce market",
        market_owner_id: "owner_001",
        listing_count: 120,
        orders_count: 500,
      },
      listing_id: "listing_001",
      owner_market_id: "market_001",
      owner_user_id: "user_001",
      listing_title: "Fresh Strawberries",
      listing_order_count: 50,
      listing_price: 4.99,
      listing_description: "Juicy and organic strawberries",
      listing_categories: ["Fruits", "Organic"],
      listing_images: ["strawberry_1.jpg", "strawberry_2.jpg"],
    },
    {
      market_data: {
        market_id: "market_002",
        market_name: "TechieMart",
        market_description: "Latest gadgets and electronics",
        market_owner_id: "owner_002",
        listing_count: 200,
        orders_count: 1500,
      },
      listing_id: "listing_002",
      owner_market_id: "market_002",
      owner_user_id: "user_002",
      listing_title: "Wireless Headphones",
      listing_order_count: 120,
      listing_price: 79.99,
      listing_description: "Noise-cancelling over-ear headphones",
      listing_categories: ["Electronics", "Audio"],
      listing_images: ["headphones_1.jpg", "headphones_2.jpg"],
    },
    {
      market_data: {
        market_id: "market_003",
        market_name: "BookBarn",
        market_description: "A variety of books from all genres",
        market_owner_id: "owner_003",
        listing_count: 320,
        orders_count: 900,
      },
      listing_id: "listing_003",
      owner_market_id: "market_003",
      owner_user_id: "user_003",
      listing_title: "Classic Literature Collection",
      listing_order_count: 85,
      listing_price: 29.99,
      listing_description: "A collection of timeless classics",
      listing_categories: ["Books", "Literature"],
      listing_images: ["books_1.jpg", "books_2.jpg"],
    },
    {
      market_data: {
        market_id: "market_004",
        market_name: "FashionHub",
        market_description: "Trendy and stylish clothing",
        market_owner_id: "owner_004",
        listing_count: 450,
        orders_count: 2000,
      },
      listing_id: "listing_004",
      owner_market_id: "market_004",
      owner_user_id: "user_004",
      listing_title: "Summer Dress",
      listing_order_count: 200,
      listing_price: 39.99,
      listing_description: "Light and breezy summer dress",
      listing_categories: ["Fashion", "Women"],
      listing_images: ["dress_1.jpg", "dress_2.jpg"],
    },
    {
      market_data: {
        market_id: "market_005",
        market_name: "PetWorld",
        market_description: "Everything your pet needs",
        market_owner_id: "owner_005",
        listing_count: 180,
        orders_count: 700,
      },
      listing_id: "listing_005",
      owner_market_id: "market_005",
      owner_user_id: "user_005",
      listing_title: "Deluxe Dog Bed",
      listing_order_count: 150,
      listing_price: 49.99,
      listing_description: "Comfortable and durable dog bed",
      listing_categories: ["Pets", "Accessories"],
      listing_images: ["dog_bed_1.jpg", "dog_bed_2.jpg"],
    },
  ]);

  const groupedCart = useMemo(() => {
    return cart.reduce((acc, item) => {
      const marketId = item.market_data.market_id;
      if (!acc[marketId]) {
        acc[marketId] = {
          market_data: item.market_data,
          items: [],
        };
      }
      acc[marketId].items.push(item);
      return acc;
    }, {} as Record<string, { market_data: any; items: CartItem[] }>);
  }, [cart]);

  return (
    <div className={`${style.cart} container`}>
      <table className={style.items}>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.listing_id}>
              <td>
                <Image
                  src={`https://klbtheme.com/bevesi/wp-content/uploads/2024/04/1-17-600x600.jpg`}
                  alt={item.listing_title}
                  className={style.image}
                  sizes="(max-width: 300px) 100vw, 300px"
                  width={100}
                  height={100}
                />
              </td>
              <td className={style.productName}>
                <h3>{item.listing_title}</h3>
              </td>
              <td>${item.listing_price}</td>
              <td>
                <AppQuantity
                  quantity={1}
                  setQuantity={(quantity: number) => console.log(quantity)}
                />
              </td>
              <td>${item.listing_price}</td>
              <td>
                <AppButton
                  backgroundColor="transparent"
                  color="black"
                  onHoverBackgroundColor="#f1f5f9"
                  onHoverColor="black"
                  width="30px"
                  height="30px"
                >
                  <AppIcon icon="ti ti-x" size="sm" />
                </AppButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={style.totals}>
        <h2>Cart Totals</h2>
        <tr>
          <th>Subtotal</th>
          <td>$0.0</td>
        </tr>
        {Object.values(groupedCart).map((group) => (
          <tr key={group.market_data.market_id}>
            <th>{group.market_data.market_name}</th>
            <td>
              {group.items.map((item) => (
                <div key={item.listing_id}>
                  <p>{item.listing_title} x 1</p>
                </div>
              ))}
            </td>
          </tr>
        ))}
        <AppButton
          backgroundColor="#ff5a5f"
          color="white"
          onHoverBackgroundColor="#ff5a5f"
          onHoverColor="white"
          width="100%"
          height="50px"
        >
          Proceed to Checkout
        </AppButton>
      </table>
    </div>
  );
}
