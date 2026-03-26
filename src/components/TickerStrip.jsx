import React from 'react';

const items = Array(10).fill('ASSESSOR DESTAQUE · 2024 · 2025 · BIG INVEST · XP INVESTIMENTOS');

const TickerStrip = () => (
  <div className="w-full overflow-hidden py-4" style={{ backgroundColor: 'var(--gold)' }}>
    <div className="flex gap-16 animate-marquee whitespace-nowrap">
      {items.map((t, i) => (
        <span
          key={i}
          className="text-xs font-black uppercase tracking-widest text-black flex-shrink-0"
          style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.12em' }}
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default TickerStrip;
