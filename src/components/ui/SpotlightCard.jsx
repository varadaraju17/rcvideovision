import React from 'react';

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(135, 206, 235, 0.15)", ...props }) => {
    return (
        <div
            className={`group relative overflow-hidden border-[2px] border-[#5FF2EA] bg-navy-light/40 backdrop-blur-xl shadow-[0_0_20px_rgba(95,242,234,0.5)] hover:shadow-[0_0_40px_rgba(95,242,234,0.8)] hover:-translate-y-2 active:scale-95 active:bg-[#5FF2EA]/20 transition-all duration-300 rounded-2xl cursor-pointer ${className}`}
            {...props}
        >
            {/* Holographic Shine Wipe Effect */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out group-hover:translate-x-[200%] z-20 pointer-events-none"></div>

            {/* Static Ambient Glow (Behind content) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5FF2EA]/10 via-transparent to-transparent opacity-60 pointer-events-none z-0"></div>

            {/* Glass Reflection (Top Shine) */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
};

export default SpotlightCard;
