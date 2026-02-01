import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';

const Counter = ({ target, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span>
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

const AuthoritySection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    {
      icon: TrendingUp,
      value: 1.2,
      suffix: ' Bilhão',
      label: 'sob custódia',
      prefix: 'R$ '
    },
    {
      icon: Users,
      value: 2500,
      suffix: '',
      label: 'clientes',
      prefix: ''
    },
    {
      icon: Award,
      value: 92.7,
      suffix: '',
      label: 'NPS (Excelência)',
      prefix: ''
    }
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 bg-gradient-to-b from-black to-[#050A14]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Golden icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                <metric.icon className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>

              {/* Animated number */}
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {metric.prefix}
                  <Counter target={metric.value} suffix={metric.suffix} inView={inView} />
                </div>
                <p className="text-gray-400 text-lg">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;