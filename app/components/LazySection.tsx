'use client';

import { ReactNode, useRef, useState, useEffect } from 'react';

interface LazySectionProps {
  children: ReactNode;
  placeholder: ReactNode;
  thresholdPx?: number;
}

export default function LazySection({
  children,
  placeholder,
  thresholdPx = 400,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: `${thresholdPx}px 0px` }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [thresholdPx]);

  return <div ref={ref}>{visible ? children : placeholder}</div>;
}
