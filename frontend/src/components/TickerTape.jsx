import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const TickerTape = () => {
  const [tickerData, setTickerData] = useState([
    { pair: 'EUR/USD', price: 1.0852, change: 0.15, isUp: true },
    { pair: 'GBP/USD', price: 1.2743, change: -0.08, isUp: false },
    { pair: 'XAU/USD', price: 2034.50, change: 0.42, isUp: true },
    { pair: 'USD/JPY', price: 149.82, change: 0.23, isUp: true },
    { pair: 'AUD/USD', price: 0.6521, change: -0.12, isUp: false },
    { pair: 'USD/CAD', price: 1.3598, change: 0.05, isUp: true },
    { pair: 'EUR/GBP', price: 0.8516, change: -0.03, isUp: false },
    { pair: 'NZD/USD', price: 0.6089, change: 0.18, isUp: true },
    { pair: 'USD/CHF', price: 0.8821, change: -0.07, isUp: false },
    { pair: 'BTC/USD', price: 43250.00, change: 1.25, isUp: true },
  ]);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData((prevData) =>
        prevData.map((item) => {
          const changeAmount = (Math.random() - 0.5) * 0.001 * item.price;
          const newPrice = +(item.price + changeAmount).toFixed(
            item.pair.includes('JPY') || item.pair.includes('XAU') || item.pair.includes('BTC')
              ? 2
              : 4
          );
          const newChange = +((changeAmount / item.price) * 100).toFixed(2);

          return {
            ...item,
            price: newPrice,
            change: Math.abs(newChange) < 0.01 ? item.change : newChange,
            isUp: newChange >= 0,
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedData = [...tickerData, ...tickerData];

  return (
    <section
      className="relative py-4 overflow-hidden bg-black/40 border-y border-white/5"
      aria-label="Live market ticker"
      role="marquee"
    >
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

      {/* Ticker container */}
      <div className="flex animate-ticker" style={{ width: 'max-content' }}>
        {duplicatedData.map((item, index) => (
          <motion.div
            key={`${item.pair}-${index}`}
            className="flex items-center gap-3 px-6 border-r border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="font-semibold text-white whitespace-nowrap">
              {item.pair}
            </span>
            <motion.span
              key={item.price}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className={`font-mono text-sm ${
                item.isUp ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {item.price.toLocaleString('en-US', {
                minimumFractionDigits: item.pair.includes('JPY') || item.pair.includes('XAU') || item.pair.includes('BTC') ? 2 : 4,
              })}
            </motion.span>
            <span
              className={`flex items-center gap-1 text-xs font-medium ${
                item.isUp ? 'text-green-400' : 'text-red-400'
              }`}
              aria-label={`${item.isUp ? 'Up' : 'Down'} ${Math.abs(item.change)}%`}
            >
              {item.isUp ? (
                <TrendingUp className="w-3 h-3" aria-hidden="true" />
              ) : (
                <TrendingDown className="w-3 h-3" aria-hidden="true" />
              )}
              {item.isUp ? '+' : ''}{item.change}%
            </span>
          </motion.div>
        ))}
      </div>

      {/* Screen reader announcement for accessibility */}
      <div className="sr-only" aria-live="polite">
        Live market prices updating
      </div>
    </section>
  );
};

export default TickerTape;
