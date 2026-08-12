/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, vendors, categories, search, showSearch } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [onlyExclusive, setOnlyExclusive] = useState(false);
  const [sortType, setSortType] = useState("relevant");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    const catParam = searchParams.get("category");
    const vendorParam = searchParams.get("vendor");
    const exclParam = searchParams.get("exclusive");

    if (catParam) setSelectedCategories([catParam]);
    if (vendorParam) setSelectedVendors([vendorParam]);
    if (exclParam === "true") setOnlyExclusive(true);
  }, [searchParams]);

  const toggleCategory = (catName) => {
    if (selectedCategories.includes(catName)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== catName));
    } else {
      setSelectedCategories((prev) => [...prev, catName]);
    }
  };

  const toggleVendor = (vendorName) => {
    if (selectedVendors.includes(vendorName)) {
      setSelectedVendors((prev) => prev.filter((item) => item !== vendorName));
    } else {
      setSelectedVendors((prev) => [...prev, vendorName]);
    }
  };

  const applyFilter = () => {
    let copy = products.slice();

    if (showSearch && search) {
      copy = copy.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase()) ||
          item.vendor.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      copy = copy.filter((item) => selectedCategories.includes(item.category));
    }

    if (selectedVendors.length > 0) {
      copy = copy.filter((item) => selectedVendors.includes(item.vendor));
    }

    if (onlyExclusive) {
      copy = copy.filter((item) => item.exclusive);
    }

    setFilterProducts(copy);
  };

  const sortProducts = () => {
    let copy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(copy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(copy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [selectedCategories, selectedVendors, onlyExclusive, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="border-b-2 border-[#111111] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-[#063D2C] text-xs font-heading font-extrabold tracking-[0.25em] uppercase">CURATED SELECTION</span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight mt-1">
              All Collections
            </h1>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end space-x-4">
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="lg:hidden text-xs font-heading font-extrabold px-4 py-2 border-2 border-[#111111] text-[#063D2C] flex items-center space-x-2"
            >
              <span>FILTERS</span>
              <span>⚡</span>
            </button>

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="bg-[#FFFFFF] text-[#111111] text-xs px-4 py-2.5 border-2 border-[#111111] focus:outline-none focus:border-[#063D2C] font-heading font-bold"
            >
              <option value="relevant">Sort by: Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Sidebar + Products */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Filter Sidebar */}
          <div className={`w-full lg:w-64 space-y-8 ${showMobileFilter ? "block" : "hidden lg:block"}`}>
            
            {/* Exclusive Filter */}
            <div className="bg-[#063D2C] text-[#FAF8F3] p-4 border-2 border-[#111111]">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyExclusive}
                  onChange={(e) => setOnlyExclusive(e.target.checked)}
                  className="w-4 h-4 accent-[#063D2C]"
                />
                <span className="text-xs font-heading font-extrabold tracking-wider uppercase">
                  ✦ ONLY ON MADEIN DROPS
                </span>
              </label>
            </div>

            {/* Categories */}
            <div className="bg-[#FFFFFF] border-2 border-[#111111] p-5 space-y-3">
              <h3 className="font-heading text-xs font-extrabold tracking-widest text-[#063D2C] uppercase border-b-2 border-[#111111] pb-2">
                CATEGORIES
              </h3>
              {categories.map((c) => c.name).map((cat) => (
                <label key={cat} className="flex items-center space-x-3 text-xs font-medium text-[#333] hover:text-[#063D2C] cursor-pointer py-1">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-4 h-4 accent-[#063D2C]"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>

            {/* Vendors */}
            <div className="bg-[#FFFFFF] border-2 border-[#111111] p-5 space-y-3">
              <h3 className="font-heading text-xs font-extrabold tracking-widest text-[#063D2C] uppercase border-b-2 border-[#111111] pb-2">
                NIGERIAN VENDORS
              </h3>
              {vendors.map((v) => (
                <label key={v._id} className="flex items-center space-x-3 text-xs font-medium text-[#333] hover:text-[#063D2C] cursor-pointer py-1">
                  <input
                    type="checkbox"
                    checked={selectedVendors.includes(v.name)}
                    onChange={() => toggleVendor(v.name)}
                    className="w-4 h-4 accent-[#063D2C]"
                  />
                  <span className="flex-1 line-clamp-1">{v.name}</span>
                </label>
              ))}
            </div>

            {(selectedCategories.length > 0 || selectedVendors.length > 0 || onlyExclusive) && (
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedVendors([]);
                  setOnlyExclusive(false);
                }}
                className="w-full py-2.5 bg-[#111111] text-[#FAF8F3] text-xs font-heading font-bold uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            )}

          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filterProducts.length === 0 ? (
              <div className="text-center py-24 bg-[#FFFFFF] border-2 border-[#111111] p-8">
                <p className="font-display text-2xl text-[#111111] mb-2 uppercase">No products matched your filters</p>
                <p className="text-xs font-medium text-[#555] mb-6">Try clearing your filters or search query to discover more Nigerian drops.</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedVendors([]);
                    setOnlyExclusive(false);
                  }}
                  className="bg-[#063D2C] text-[#FAF8F3] px-6 py-3 text-xs font-heading font-extrabold uppercase tracking-widest border-2 border-[#063D2C]"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterProducts.map((item) => (
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
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Collection;
