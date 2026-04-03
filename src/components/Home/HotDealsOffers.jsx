import React from 'react';
import car2 from '../../assets/car2.png';

const HotDealsOffers = () => {

    const offers = [
        {
            title: "Toyota Hybrid Upgrade Bonus",
            desc: "Trade in your current car and get up to €2,000 bonus when switching to a new Toyota Hybrid.",
            linkText: "Learn More",
            align: 'left',
            bg: 'bg-white',
            iconColor: 'text-red-600',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3l4 4-2 2"></path>
                </svg>
            )
        },
        {
            title: "Lexus Luxury Lease from €399/month",
            desc: "Drive a Lexus ES or NX with premium features and low monthly payments.",
            linkText: "View Details",
            align: 'right',
            bg: 'bg-[#e40718]',
            iconColor: 'text-white',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m8 0h1M5 10a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2M8 10V6a2 2 0 012-2h4a2 2 0 012 2v4"></path>
                </svg>
            )
        },
        {
            title: "Summer Service Special",
            desc: "Full vehicle check + air conditioning service for only €99 - stay cool all season.",
            linkText: "Book Now",
            align: 'left',
            bg: 'bg-white',
            iconColor: 'text-red-600',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
            )
        },
        {
            title: "0% Financing for 24 Months",
            desc: "Available on selected Toyota Corolla and Yaris models.",
            linkText: "Check Availability",
            align: 'right',
            bg: 'bg-white',
            iconColor: 'text-[#e40718]',
            icon: (
                <span className="text-3xl font-bold">0%</span>
            )
        }
    ];

    return (
        <section className="py-20 bg-white text-black relative">
            <div className="max-w-5xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-16 relative z-20">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Hot Deals & Limited-Time Offers</h2>
                    <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">Drive Your Dream Toyota or Lexus For Less.</p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative flex flex-col items-center w-full mt-10">
                    
                    {/* Watermark Toyota Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-extrabold text-[#fdf6f7] select-none pointer-events-none z-0">
                        Toyota
                    </div>

                    {/* Dotted Line */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dotted border-gray-300 z-10"></div>

                    {/* Timeline Items */}
                    <div className="w-full z-20 flex flex-col gap-10 md:gap-0 mt-8">
                        {offers.map((offer, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row w-full items-start md:items-center justify-between relative md:mb-12 ${offer.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Left Content (Text Block) */}
                                <div className={`w-full md:w-1/2 flex flex-col md:flex-row ${offer.align === 'left' ? 'md:justify-end md:pr-16 md:text-right pl-16 md:pl-0' : 'md:justify-start md:pl-16 md:text-left pl-16 md:pl-0'}`}>
                                    <div className="w-full">
                                        <h3 className="font-bold text-gray-900 text-lg mb-2">{offer.title}</h3>
                                        <p className={`text-sm text-gray-500 mb-3 leading-relaxed max-w-sm ${offer.align === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}>{offer.desc}</p>
                                        <a href="#" className={`text-sm font-semibold text-gray-800 flex items-center gap-1 ${offer.align === 'left' ? 'md:justify-end' : 'md:justify-start'} hover:text-red-600 transition`}>
                                            {offer.linkText} <span className="text-lg">→</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Center Node (Hidden on Mobile, simplified for alignment) */}
                                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center z-30 top-0 md:top-auto">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                                </div>

                                {/* Right Content (Icon Block) */}
                                <div className={`w-full md:w-1/2 flex mt-4 md:mt-0 ${offer.align === 'left' ? 'md:justify-start md:pl-16 pl-16 md:pl-0' : 'md:justify-end md:pr-16 md:pl-0 pl-16'}`}>
                                    <div className={`w-28 h-28 ${offer.bg} shadow-[0_10px_30px_rgb(0,0,0,0.08)] flex items-center justify-center ${offer.iconColor}`}>
                                        {offer.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Promo Banner */}
                <div className="relative bg-white shadow-[0_15px_40px_rgb(0,0,0,0.12)] rounded-3xl overflow-hidden mt-32 w-full h-[450px]">
                    
                    {/* Background Red Polygon */}
                    <div className="absolute top-0 right-0 h-full w-[60%] bg-[#e40718] z-0" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
                    
                    {/* Bottom Red rounded base */}
                    <div className="absolute bottom-6 left-[3%] w-[94%] h-12 bg-red-600 rounded-3xl z-10 shadow-lg" style={{ bottom: "25px", zIndex: "1" }}></div>

                    {/* Content Layer */}
                    <div className="relative z-20 flex h-full">
                        
                        {/* Left Side Info */}
                        <div className="w-full md:w-[45%] p-10 md:p-14 flex flex-col justify-center bg-white h-full" style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)", background: "transparent" }}>
                            
                            {/* Logo */}
                            <div className="flex items-center gap-3 text-red-600 mb-10">
                                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">T</span>
                                <span className="text-xl font-bold tracking-[0.2em] text-gray-900">TOYOTA</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl text-red-600 font-bold mb-3 tracking-wide">TOYOTA GLABZA</h1>
                            <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-8 tracking-widest uppercase">VISTI TOYOTA.DE</h2>

                            <div className="bg-[#111111] text-white p-6 max-w-sm rounded-[2px] shadow-lg relative -left-4 md:-left-14">
                                <p className="mb-1 text-[15px] font-medium"><span className="text-gray-400">Phone Number:</span> 069-12345678</p>
                                <p className="text-[15px] font-medium"><span className="text-gray-400">Email:</span> info@toyota-glabza.de</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side Car Element */}
                    <img src={car2} alt="Toyota bZ4X" className="absolute bottom-8 -right-10 md:right-10 z-30 w-[80%] md:w-[65%] object-contain pointer-events-none drop-shadow-2xl" />

                </div>

            </div>
        </section>
    );
};

export default HotDealsOffers;
