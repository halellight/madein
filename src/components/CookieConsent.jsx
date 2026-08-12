/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: true,
    personalization: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem("madein_cookie_consent");
    if (!consent) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => setShowConsent(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "madein_cookie_consent",
      JSON.stringify({ analytics: true, marketing: true, personalization: true })
    );
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("madein_cookie_consent", JSON.stringify(preferences));
    setShowPreferences(false);
    setShowConsent(false);
  };

  const handleDeclineOptional = () => {
    localStorage.setItem(
      "madein_cookie_consent",
      JSON.stringify({ analytics: false, marketing: false, personalization: false })
    );
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      {/* Cookie Banner (Bottom Left/Right floating banner) */}
      <div className="fixed bottom-6 right-6 z-[90] max-w-md w-full px-4 animate-bounce-in">
        <div className="bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[8px_8px_0px_0px_#063D2C] text-[#111111] space-y-4">
          
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#063D2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-heading font-extrabold text-xs uppercase tracking-widest text-[#063D2C]">
                COOKIES & PRIVACY PREFERENCES
              </h3>
            </div>
            <button
              onClick={handleDeclineOptional}
              className="text-[#111111] font-bold text-xs hover:text-[#063D2C] p-1"
            >
              ✕
            </button>
          </div>

          <p className="font-sans text-xs font-medium text-[#555] leading-relaxed">
            We use cookies to save your shopping preferences, deliver personalized local vendor deals, and optimize site performance across Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
            <button
              onClick={handleAcceptAll}
              className="bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] text-[11px] font-heading font-extrabold py-2.5 px-4 uppercase tracking-wider border-2 border-[#063D2C] transition-all flex-1 text-center"
            >
              Accept All
            </button>
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="bg-[#FAF8F3] hover:bg-[#E3EDE7] text-[#111111] text-[11px] font-heading font-bold py-2.5 px-4 uppercase tracking-wider border-2 border-[#111111] transition-all flex-1 text-center"
            >
              Customize
            </button>
          </div>

        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[100] bg-[#111111]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border-2 border-[#111111] p-8 max-w-lg w-full shadow-[10px_10px_0px_0px_#063D2C] space-y-6">
            
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
              <h3 className="font-display text-lg font-extrabold uppercase text-[#111111]">
                Cookie & Data Preferences
              </h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-lg font-bold text-[#111111] hover:text-[#063D2C]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start justify-between p-3 bg-[#FAF8F5] border border-[#111111]">
                <div>
                  <p className="font-heading font-bold text-[#111111] uppercase">Essential Cookies</p>
                  <p className="text-[#555] text-[11px]">Required for shopping cart, login, and escrow checkout functionality.</p>
                </div>
                <span className="text-[10px] font-heading font-bold text-[#063D2C] bg-[#E3EDE7] px-2 py-0.5 border border-[#063D2C]">ALWAYS ACTIVE</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#FAF8F5] border border-[#111111]">
                <div>
                  <p className="font-heading font-bold text-[#111111] uppercase">Analytics & Performance</p>
                  <p className="text-[#555] text-[11px]">Helps us understand vendor popular drops and site speed.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 accent-[#063D2C]"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#FAF8F5] border border-[#111111]">
                <div>
                  <p className="font-heading font-bold text-[#111111] uppercase">Personalization & Deals</p>
                  <p className="text-[#555] text-[11px]">Show relevant local creator drops based on your location.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.personalization}
                  onChange={(e) => setPreferences({ ...preferences, personalization: e.target.checked })}
                  className="w-4 h-4 accent-[#063D2C]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-4 border-t-2 border-[#111111]">
              <button
                onClick={handleDeclineOptional}
                className="text-xs font-heading font-bold text-[#555] hover:text-[#111] uppercase"
              >
                Decline Optional
              </button>
              <button
                onClick={handleSavePreferences}
                className="bg-[#063D2C] text-[#FAF8F3] text-xs font-heading font-extrabold px-6 py-3 uppercase tracking-wider border-2 border-[#063D2C]"
              >
                Save Preferences
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
