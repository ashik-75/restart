import React from "react";
import Testimonials from "./_components/testimonials";

const TestimonalCarousel: React.FC = () => {
  return (
    <div className="flex h-full items-center overflow-hidden">
      <div className="animate-marquee flex min-w-full shrink-0 gap-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i + 1} className="shrink-0">
            <Testimonials />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonalCarousel;
