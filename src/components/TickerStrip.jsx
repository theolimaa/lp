import React from 'react';

const items = Array(10).fill('ASSESSOR DESTAQUE · 2024 · 2025 · BIG INVEST · XP INVESTIMENTOS');

const TickerStrip = () => (
  <div className="w-full overflow-hidden py-3" style={{ backgroundColor: 'var(--gold)' }}>
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {items.map((t, i) => (
        <span key={i} className="flex-shrink-0 text-black"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default TickerStrip;
