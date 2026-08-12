/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Product = () => {
  const { productId } = useParams();
  const { products, vendors, formatPrice, addToCart } = useContext(ShopContext);
  
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const item = products.find((p) => p._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
      if (item.sizes && item.sizes.length > 0) {
        setSize(item.sizes[0]);
      }
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="min-h-screen bg-[#F7F4EE] text-[#111111] flex items-center justify-center">
        <p className="animate-pulse text-[#063D2C] font-heading font-extrabold text-lg uppercase">Loading drop details...</p>
      </div>
    );
  }

  const vendorInfo = vendors.find((v) => v.name === productData.vendor);

  const relatedProducts = products
    .filter((p) => (p.category === productData.category || p.vendor === productData.vendor) && p._id !== productData._id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(productData._id, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs font-heading font-bold text-[#555555] mb-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-[#063D2C]">HOME</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-[#063D2C]">COLLECTIONS</Link>
          <span>/</span>
          <span className="text-[#063D2C] uppercase line-clamp-1">{productData.name}</span>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-24">
              {productData.image.map((imgItem, idx) => (
                <img
                  key={idx}
                  src={imgItem}
                  onClick={() => setImage(imgItem)}
                  alt="Thumbnail"
                  className={`w-20 h-24 object-cover cursor-pointer border-2 transition-all ${
                    image === imgItem ? "border-[#063D2C]" : "border-[#111111]/30 opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>

            <div className="flex-1 relative aspect-[3/4] bg-[#FFFFFF] border-2 border-[#111111] overflow-hidden">
              <img src={image} alt={productData.name} className="w-full h-full object-contain p-4" />
              {productData.exclusive && (
                <div className="absolute top-4 left-4 bg-[#063D2C] text-[#FAF8F3] text-xs font-heading font-extrabold px-3.5 py-1.5 uppercase tracking-widest border border-[#FAF8F3]/30">
                  ✦ ONLY ON MADEIN EXCLUSIVE
                </div>
              )}
            </div>
          </div>

          {/* Details & Actions */}
          <div className="space-y-6">
            
            {/* Vendor Chip */}
            <div className="flex items-center space-x-3">
              <span className="bg-[#063D2C] text-[#FAF8F3] text-xs font-heading font-extrabold px-3 py-1 tracking-widest uppercase">
                {productData.vendor}
              </span>
              {vendorInfo?.verified && (
                <span className="text-xs font-heading font-bold text-[#063D2C] flex items-center space-x-1">
                  <span>✓ VERIFIED VENDOR</span>
                </span>
              )}
            </div>

            {/* Title & Price */}
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111] uppercase leading-tight">
              {productData.name}
            </h1>
            <p className="font-heading text-3xl font-extrabold text-[#063D2C]">
              {formatPrice(productData.price)}
            </p>

            {/* Description */}
            <p className="font-sans text-[#333333] text-xs sm:text-sm font-medium leading-relaxed border-y-2 border-[#111111] py-4">
              {productData.description}
            </p>

            {/* Size Selector */}
            {productData.sizes && productData.sizes.length > 0 && (
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-heading font-bold text-[#111111]">
                  <span className="uppercase tracking-wider">SELECT SIZE / CAP FIT</span>
                  <span className="text-[#063D2C]">Size Guide</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {productData.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-5 py-2.5 text-xs font-heading font-extrabold border-2 transition-all ${
                        size === s
                          ? "border-[#063D2C] bg-[#063D2C] text-[#FAF8F3]"
                          : "border-[#111111] text-[#111111] hover:bg-[#E3EDE7]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart CTA */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] py-4 text-xs font-heading font-extrabold uppercase tracking-[0.25em] transition-all border-2 border-[#063D2C] shadow-lg"
              >
                {added ? "✓ ADDED TO SHOPPING BAG" : "ADD TO SHOPPING BAG"}
              </button>

              <p className="text-[11px] font-sans font-medium text-[#555] text-center">
                🔒 Escrow Secured Payment • Direct Vendor Dispatch from {vendorInfo?.location || "Nigeria"}
              </p>
            </div>

            {/* Vendor Profile Card */}
            {vendorInfo && (
              <div className="bg-[#FFFFFF] border-2 border-[#111111] p-5 mt-8 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-sm font-bold text-[#111111] uppercase">About {vendorInfo.name}</h4>
                  <span className="text-xs font-heading font-extrabold text-[#063D2C]">★ {vendorInfo.rating} Rating</span>
                </div>
                <p className="font-sans text-xs text-[#555] font-medium">{vendorInfo.story}</p>
                <Link
                  to={`/collection?vendor=${encodeURIComponent(vendorInfo.name)}`}
                  className="text-xs font-heading font-extrabold text-[#063D2C] hover:underline inline-block pt-1 uppercase"
                >
                  View store collection →
                </Link>
              </div>
            )}

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t-2 border-[#111111] pt-16">
            <h3 className="font-display text-2xl font-extrabold text-[#111111] uppercase mb-8">
              More from {productData.vendor} & Related Drops
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  vendor={item.vendor}
                  exclusive={item.exclusive}
                  condition={item.condition}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Product;
