import React from "react";
import SingleFeaturedProduct from "../SingleFeaturedProduct/SingleFeaturedProduct";
const featureData = [
  {
    title: "NEW ARRIVAL",
    rows: 1,
    flex: "md:flex",
    featureImage: "https://i.ibb.co/qgc1y16/child-shirt.png",
  },
  {
    title: "EXCLUSIVE OFFER",
    rows: 2,
    flex: "",
    featureImage: "https://i.ibb.co/NLpXp4W/woman-dress.png",
  },
  {
    title: "NEW COLLECTION",
    rows: 1,
    flex: "md:flex",
    featureImage: "https://i.ibb.co/qCp9Bbj/womanBag.png",
  },
  {
    title: "INNER OFFER",
    rows: 1,
    flex: "md:flex",
    featureImage: "https://i.ibb.co/6n53YSx/woman.png",
  },
  {
    title: "OUTER OFFER",
    rows: 1,
    flex: "md:flex",
    featureImage: "https://i.ibb.co/yXpnvQ3/woman-stand.png",
  },
];

const FeaturedProduct = () => {
  return (
    <div>
      <section className="mt-8 featured-main">
        <h2 className="py-8 text-xl text-center text-red-500">
          FEATURED PRODUCT
        </h2>
        <div className="container grid grid-cols-1 grid-rows-2 gap-4 px-4 mx-auto md:grid-cols-3">
          {featureData.map((feature , index) => (
            <SingleFeaturedProduct feature={feature} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;
