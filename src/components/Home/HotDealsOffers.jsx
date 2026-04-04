import React from 'react';
import car2 from '../../assets/hotdealscar.png';
import logo from '../../assets/toyota-logo.png';

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

                <div className="text-center mb-16 relative z-20">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Hot Deals & Limited-Time Offers</h2>
                    <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">Drive Your Dream Toyota or Lexus For Less.</p>
                </div>
                <div className="relative flex flex-col items-center w-full mt-10">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-extrabold text-[#fdf6f7] select-none pointer-events-none z-0">
                        Toyota
                    </div>

                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dotted border-gray-300 z-10"></div>

                    <div className="w-full z-20 flex flex-col gap-10 md:gap-0 mt-8">
                        {offers.map((offer, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row w-full items-start md:items-center justify-between relative md:mb-12 ${offer.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
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


                                <div className={`w-full md:w-1/2 flex mt-4 md:mt-0 ${offer.align === 'left' ? 'md:justify-start md:pl-16 pl-16 md:pl-0' : 'md:justify-end md:pr-16 md:pl-0 pl-16'}`}>
                                    <div className={`w-28 h-28 ${offer.bg} shadow-[0_10px_30px_rgb(0,0,0,0.08)] flex items-center justify-center ${offer.iconColor}`}>
                                        {offer.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative bg-[#ffffff] shadow-[0_15px_40px_rgb(0,0,0,0.12)] rounded-[2.5rem] overflow-hidden mt-32 w-[98%] md:w-full mx-auto h-[480px] md:h-[500px]">

                    <div className="absolute top-0 right-0 h-full w-[65%] md:w-[45%] bg-[#e40718] z-0" style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)" }}></div>

                    <div className="absolute bottom-0 left-[5%] md:left-[10%] right-0 h-[60px] md:h-[80px] bg-[#e40718] z-0 rounded-tl-[60px] md:rounded-tl-[80px]"></div>

                    <div className="absolute inset-0 z-20 flex flex-col justify-center pointer-events-none pb-6 md:pb-12">
                        <div className="pl-6 md:pl-16">
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <div className="bg-[#e40718] w-10 md:w-16 h-10 md:h-12 flex items-center justify-center p-2 rounded-sm shadow-md">
                                    <img src={logo} alt="Toyota" className="w-full h-full object-contain brightness-0 invert" />
                                </div>
                                <span className="text-xl md:text-2xl font-bold tracking-widest text-[#0c0d12]">TOYOTA</span>
                            </div>

                            <div className="ml-6 md:ml-[15%] mb-10 md:mb-12">
                                <h1 className="text-[34px] sm:text-[44px] md:text-[52px] text-[#e40718] font-black tracking-tighter uppercase leading-[1.1] mb-1">TOYOTA GLABZA</h1>
                                <h2 className="text-[20px] sm:text-[28px] md:text-[32px] text-[#0c0d12] font-black tracking-tight uppercase leading-[1.1]">VISTI TOYOTA.DE</h2>
                            </div>
                        </div>

                        <div className="bg-[#0c0d12] text-white py-5 px-6 md:px-8 pr-12 md:pr-16 self-start shadow-2xl pointer-events-auto rounded-r-md border-l-0">
                            <p className="text-[14px] md:text-[16px] font-medium leading-[2] tracking-wider">Phone Number: 069-12345678</p>
                            <p className="text-[14px] md:text-[16px] font-medium leading-[2] tracking-wider">Email: info@toyota-glabza.de</p>
                        </div>
                    </div>

                    <img src={car2} alt="Toyota bZ4X" className="absolute bottom-2 md:-bottom-[20px] -right-12 md:-right-[20px] z-30 w-[110%] md:w-[75%] max-w-[800px] object-contain pointer-events-none drop-shadow-2xl scale-110 md:scale-100 origin-bottom-right" />

                </div>

            </div>
        </section>
    );
};

export default HotDealsOffers;
