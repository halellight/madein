/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Admin = () => {
  const { products, vendors, formatPrice } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState("overview");

  // Local state for administrative product management
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    setProductList(products);
  }, [products]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    vendor: "Watashi Studio",
    category: "Clothing & Fashion",
    price: "",
    exclusive: false,
    image: "",
    description: "",
  });

  // Local state for vendor applications
  const [vendorApps, setVendorApps] = useState([
    { id: 1, name: "Watashi Studio", category: "Clothing & Fashion", location: "Abuja", status: "Approved", sales: "₦ 1,450,000" },
    { id: 2, name: "Crown & Mane Wigs", category: "Wigs & Hair", location: "Lagos", status: "Approved", sales: "₦ 3,200,000" },
    { id: 3, name: "Marythin Optics", category: "Eyewear & Hardware", location: "Lagos", status: "Approved", sales: "₦ 980,000" },
    { id: 4, name: "Kulture Vintage", category: "Thrift & Vintage", location: "Port Harcourt", status: "Pending Review", sales: "₦ 0" },
    { id: 5, name: "Alté Threadz", category: "Streetwear", location: "Ibadan", status: "Pending Review", sales: "₦ 0" },
  ]);

  // Local state for payouts
  const [payouts, setPayouts] = useState([
    { id: "PAY-901", vendor: "Crown & Mane Wigs", amount: 185000, bank: "Guaranty Trust Bank (0123****89)", status: "Settled via Paystack Split", date: "Aug 08, 2026" },
    { id: "PAY-902", vendor: "Watashi Studio", amount: 45000, bank: "Zenith Bank (2100****45)", status: "Settled via Paystack Split", date: "Aug 08, 2026" },
    { id: "PAY-903", vendor: "Marythin Optics", amount: 32000, bank: "Kuda Microfinance (2011****12)", status: "Processing Escrow Release", date: "Aug 09, 2026" },
  ]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const createdItem = {
      _id: `prod_admin_${Date.now()}`,
      name: newProduct.name,
      vendor: newProduct.vendor,
      category: newProduct.category,
      price: Number(newProduct.price),
      image: [newProduct.image || assets.chain_earphones],
      description: newProduct.description || "Curated item added by Admin.",
      exclusive: newProduct.exclusive,
      condition: "Brand New",
      bestseller: false,
    };

    setProductList([createdItem, ...productList]);
    setNewProduct({
      name: "",
      vendor: "Watashi Studio",
      category: "Clothing & Fashion",
      price: "",
      exclusive: false,
      image: "",
      description: "",
    });
    alert("Product added successfully to MADEIN catalog!");
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to remove this product from MADEIN?")) {
      setProductList(productList.filter((item) => item._id !== id));
    }
  };

  const handleApproveVendor = (id) => {
    setVendorApps(
      vendorApps.map((v) => (v.id === id ? { ...v, status: "Approved" } : v))
    );
  };

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header */}
        <div className="bg-[#FFFFFF] border-2 border-[#111111] p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[6px_6px_0px_0px_#063D2C]">
          <div className="flex items-center space-x-3">
            <img src={assets.madein_logo} alt="MADEIN" className="h-8 w-auto" />
            <div>
              <h1 className="font-display text-xl font-extrabold uppercase text-[#111111] leading-none">
                ADMIN CONTROL CENTER
              </h1>
              <p className="text-xs font-sans text-[#555] font-medium mt-0.5">
                Marketplace Operations, Vendor Approvals, Catalog & Settlements
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-[#E3EDE7] px-3 py-1.5 border border-[#063D2C]">
            <span className="w-2 h-2 rounded-full bg-[#063D2C] animate-pulse"></span>
            <span className="text-xs font-heading font-extrabold text-[#063D2C] uppercase tracking-wider">
              LIVE NIGERIA GATEWAY ACTIVE
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b-2 border-[#111111] pb-4 mb-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-5 py-2.5 text-xs font-heading font-extrabold uppercase tracking-wider transition-all border-2 border-[#111111] ${
              activeTab === "overview" ? "bg-[#063D2C] text-[#FAF8F3]" : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E3EDE7]"
            }`}
          >
            Overview & Analytics
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2.5 text-xs font-heading font-extrabold uppercase tracking-wider transition-all border-2 border-[#111111] ${
              activeTab === "products" ? "bg-[#063D2C] text-[#FAF8F3]" : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E3EDE7]"
            }`}
          >
            Product Catalog ({productList.length})
          </button>
          <button
            onClick={() => setActiveTab("vendors")}
            className={`px-5 py-2.5 text-xs font-heading font-extrabold uppercase tracking-wider transition-all border-2 border-[#111111] ${
              activeTab === "vendors" ? "bg-[#063D2C] text-[#FAF8F3]" : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E3EDE7]"
            }`}
          >
            Vendor Approvals ({vendorApps.filter(v => v.status === "Pending Review").length} Pending)
          </button>
          <button
            onClick={() => setActiveTab("payouts")}
            className={`px-5 py-2.5 text-xs font-heading font-extrabold uppercase tracking-wider transition-all border-2 border-[#111111] ${
              activeTab === "payouts" ? "bg-[#063D2C] text-[#FAF8F3]" : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E3EDE7]"
            }`}
          >
            Vendor Escrow Payouts
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#FFFFFF] border-2 border-[#111111] p-5 shadow-[4px_4px_0px_0px_#063D2C]">
                <span className="text-[10px] font-heading font-bold text-[#555] uppercase tracking-wider block">GROSS SALES (GMV)</span>
                <p className="font-display text-2xl font-extrabold text-[#063D2C] mt-1">₦ 5,630,000</p>
                <p className="text-[11px] font-sans text-[#555] mt-1">All verified vendors combined</p>
              </div>

              <div className="bg-[#FFFFFF] border-2 border-[#111111] p-5 shadow-[4px_4px_0px_0px_#063D2C]">
                <span className="text-[10px] font-heading font-bold text-[#555] uppercase tracking-wider block">TOTAL ORDERS</span>
                <p className="font-display text-2xl font-extrabold text-[#111111] mt-1">142</p>
                <p className="text-[11px] font-sans text-[#063D2C] font-bold mt-1">98.5% Success Rate</p>
              </div>

              <div className="bg-[#FFFFFF] border-2 border-[#111111] p-5 shadow-[4px_4px_0px_0px_#063D2C]">
                <span className="text-[10px] font-heading font-bold text-[#555] uppercase tracking-wider block">VERIFIED VENDORS</span>
                <p className="font-display text-2xl font-extrabold text-[#111111] mt-1">5 Active</p>
                <p className="text-[11px] font-sans text-[#555] mt-1">Lagos, Abuja, PH</p>
              </div>

              <div className="bg-[#FFFFFF] border-2 border-[#111111] p-5 shadow-[4px_4px_0px_0px_#063D2C]">
                <span className="text-[10px] font-heading font-bold text-[#555] uppercase tracking-wider block">EXCLUSIVE DROPS</span>
                <p className="font-display text-2xl font-extrabold text-[#063D2C] mt-1">7 Items</p>
                <p className="text-[11px] font-sans text-[#555] mt-1">Only Found on MADEIN</p>
              </div>
            </div>

            {/* Recent Orders Overview Table */}
            <div className="bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C]">
              <h2 className="font-display text-lg font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                Recent Marketplace Orders
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-[#F7F4EE] border-b-2 border-[#111111] font-heading uppercase text-[#111111]">
                    <tr>
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Vendor</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Payment</th>
                      <th className="p-3">Logistics Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#111111]/10">
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-heading font-bold">MDN-2026-8891</td>
                      <td className="p-3 font-medium">Praise Adebayo (Lekki, Lagos)</td>
                      <td className="p-3 font-heading font-bold text-[#063D2C]">Marythin Optics</td>
                      <td className="p-3 font-heading font-bold">{formatPrice(32000)}</td>
                      <td className="p-3"><span className="bg-[#E3EDE7] text-[#063D2C] font-bold px-2 py-0.5 border border-[#063D2C]">Paystack Escrow</span></td>
                      <td className="p-3 font-bold text-[#063D2C]">GIG Express — In Transit</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-heading font-bold">MDN-2026-7734</td>
                      <td className="p-3 font-medium">Chinedu Okeke (Maitama, Abuja)</td>
                      <td className="p-3 font-heading font-bold text-[#063D2C]">Watashi Studio</td>
                      <td className="p-3 font-heading font-bold">{formatPrice(45000)}</td>
                      <td className="p-3"><span className="bg-[#E3EDE7] text-[#063D2C] font-bold px-2 py-0.5 border border-[#063D2C]">Flutterwave Transfer</span></td>
                      <td className="p-3 font-bold text-[#063D2C]">Delivered</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Product Management */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Add Product Form */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C] space-y-4">
              <h2 className="font-display text-lg font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3">
                Add New Product / Drop
              </h2>

              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase text-[#111] mb-1">Product Title</label>
                  <input
                    type="text"
                    required
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="e.g. Raw Vietnamese Hair Extension"
                    className="w-full bg-[#FAF8F5] border-2 border-[#111111] px-3.5 py-2.5 text-xs font-heading focus:outline-none focus:border-[#063D2C]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#111] mb-1">Vendor</label>
                    <select
                      value={newProduct.vendor}
                      onChange={(e) => setNewProduct({ ...newProduct, vendor: e.target.value })}
                      className="w-full bg-[#FAF8F5] border-2 border-[#111111] px-3 py-2.5 text-xs font-heading focus:outline-none"
                    >
                      <option value="Watashi Studio">Watashi Studio</option>
                      <option value="Marythin Optics">Marythin Optics</option>
                      <option value="Crown & Mane Wigs">Crown & Mane Wigs</option>
                      <option value="KeepItRad.NG">KeepItRad.NG</option>
                      <option value="Thrifted Royalty">Thrifted Royalty</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase text-[#111] mb-1">Price (NGN ₦)</label>
                    <input
                      type="number"
                      required
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      placeholder="35000"
                      className="w-full bg-[#FAF8F5] border-2 border-[#111111] px-3.5 py-2.5 text-xs font-heading focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase text-[#111] mb-1">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-[#FAF8F5] border-2 border-[#111111] px-3 py-2.5 text-xs font-heading focus:outline-none"
                  >
                    <option value="Wigs & Hair">Wigs & Hair</option>
                    <option value="Clothing & Fashion">Clothing & Fashion</option>
                    <option value="Eyewear & Accessories">Eyewear & Accessories</option>
                    <option value="Thrift & Vintage">Thrift & Vintage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase text-[#111] mb-1">Image URL (Optional)</label>
                  <input
                    type="text"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    placeholder="https://..."
                    className="w-full bg-[#FAF8F5] border-2 border-[#111111] px-3.5 py-2.5 text-xs font-heading focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="exclusiveCheck"
                    checked={newProduct.exclusive}
                    onChange={(e) => setNewProduct({ ...newProduct, exclusive: e.target.checked })}
                    className="w-4 h-4 accent-[#063D2C]"
                  />
                  <label htmlFor="exclusiveCheck" className="text-xs font-heading font-bold text-[#063D2C] uppercase cursor-pointer">
                    ★ Mark as "Only on MADEIN" Exclusive Drop
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] py-3.5 text-xs font-heading font-extrabold uppercase tracking-widest border-2 border-[#063D2C] shadow-md"
                >
                  Publish Product to Catalog
                </button>
              </form>
            </div>

            {/* Product Catalog List */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C]">
              <h2 className="font-display text-lg font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                Active Catalog Items ({productList.length})
              </h2>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {productList.map((item) => (
                  <div key={item._id} className="p-4 border-2 border-[#111111] bg-[#FAF8F5] flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.name} className="w-14 h-14 object-cover border border-[#111111]" />
                      <div>
                        <span className="text-[10px] font-heading font-bold text-[#063D2C] uppercase block">{item.vendor}</span>
                        <h4 className="font-heading font-bold text-xs text-[#111111] line-clamp-1">{item.name}</h4>
                        <p className="font-heading text-xs font-extrabold text-[#063D2C] mt-0.5">{formatPrice(item.price)}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      {item.exclusive && (
                        <span className="text-[9px] font-heading font-extrabold bg-[#063D2C] text-[#FAF8F3] px-2 py-0.5 uppercase">EXCLUSIVE</span>
                      )}
                      <button
                        onClick={() => handleDeleteProduct(item._id)}
                        className="text-xs font-heading font-bold text-red-600 hover:underline p-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Vendor Approvals */}
        {activeTab === "vendors" && (
          <div className="bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C] space-y-6">
            <h2 className="font-display text-lg font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3">
              Vendor Onboarding & Verification Desk
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#F7F4EE] border-b-2 border-[#111111] font-heading uppercase text-[#111111]">
                  <tr>
                    <th className="p-3">Brand Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Hub Location</th>
                    <th className="p-3">Recorded GMV</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111111]/10">
                  {vendorApps.map((vendor) => (
                    <tr key={vendor.id} className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-heading font-bold text-[#111111]">{vendor.name}</td>
                      <td className="p-3">{vendor.category}</td>
                      <td className="p-3 font-medium">{vendor.location}, NG</td>
                      <td className="p-3 font-heading font-bold text-[#063D2C]">{vendor.sales}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 text-[10px] font-heading font-extrabold uppercase border ${
                            vendor.status === "Approved"
                              ? "bg-[#E3EDE7] text-[#063D2C] border-[#063D2C]"
                              : "bg-[#FFF3CD] text-[#856404] border-[#856404]"
                          }`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="p-3">
                        {vendor.status === "Pending Review" ? (
                          <button
                            onClick={() => handleApproveVendor(vendor.id)}
                            className="bg-[#063D2C] text-[#FAF8F3] px-3 py-1 text-[10px] font-heading font-extrabold uppercase tracking-wider"
                          >
                            Approve Storefront
                          </button>
                        ) : (
                          <span className="text-[11px] font-heading font-bold text-[#063D2C]">✓ Verified Partner</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Vendor Settlements & Escrow */}
        {activeTab === "payouts" && (
          <div className="bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C] space-y-6">
            <h2 className="font-display text-lg font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3">
              Automated NGN Vendor Settlements & Escrow Ledger
            </h2>

            <div className="p-4 bg-[#E3EDE7] border-2 border-[#063D2C] space-y-2">
              <p className="font-heading font-bold text-xs text-[#063D2C] uppercase">
                ⚡ PAYSTACK & FLUTTERWAVE SUBACCOUNT SPLIT PAYMENT ACTIVE
              </p>
              <p className="text-xs font-sans text-[#333]">
                When buyers complete an order, funds are held in escrow. Upon customer delivery confirmation, payouts are automatically settled directly to the vendor's Nigerian bank account (GTB, Zenith, Kuda, Access, etc.).
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-[#F7F4EE] border-b-2 border-[#111111] font-heading uppercase text-[#111111]">
                  <tr>
                    <th className="p-3">Payout ID</th>
                    <th className="p-3">Vendor</th>
                    <th className="p-3">Net Amount</th>
                    <th className="p-3">Destination Account</th>
                    <th className="p-3">Settlement Status</th>
                    <th className="p-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111111]/10">
                  {payouts.map((pay) => (
                    <tr key={pay.id} className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-heading font-bold">{pay.id}</td>
                      <td className="p-3 font-heading font-bold text-[#063D2C]">{pay.vendor}</td>
                      <td className="p-3 font-heading font-bold">{formatPrice(pay.amount)}</td>
                      <td className="p-3 font-mono text-[11px] text-[#555]">{pay.bank}</td>
                      <td className="p-3">
                        <span className="bg-[#E3EDE7] text-[#063D2C] font-heading font-extrabold px-2.5 py-1 border border-[#063D2C]">
                          {pay.status}
                        </span>
                      </td>
                      <td className="p-3 font-medium">{pay.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;
