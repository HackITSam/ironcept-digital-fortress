import { useEffect, useRef, useState } from "react";
import { Shield, Users, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: Shield,
    value: 500,
    suffix: "+",
    label: "Projects Secured",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Clients Worldwide",
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Countries Served",
  },
];

function AnimatedCounter({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-primary stat-glow">
      {count}{suffix}
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Counter */}
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix}
                delay={index * 100}
              />

              {/* Label */}
              <p className="mt-3 text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
