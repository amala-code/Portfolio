import React, { useEffect, useState } from 'react';

const ParallaxGallery = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate grid positions for first section images
  const generateGridPositions = () => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      positions.push({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        width: `${200 + Math.random() * 200}px`,
        height: `${150 + Math.random() * 150}px`,
        zIndex: Math.floor(Math.random() * 20),
        transform: `rotate(${Math.random() * 20 - 10}deg)`,
      });
    }
    return positions;
  };

  const imagePositions = generateGridPositions();

  return (
    <div className="relative">
      {/* First Section - Image Collage */}
      <section className="relative h-screen overflow-hidden">
        {imagePositions.map((pos, index) => (
          <div
            key={index}
            className="absolute transition-transform duration-300 hover:scale-105 hover:z-50"
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              height: pos.height,
              zIndex: pos.zIndex,
              transform: `${pos.transform} translateY(${scrollY * 0.1}px)`,
            }}
          >
            <img
              src={`/api/placeholder/${parseInt(pos.width)}/${parseInt(pos.height)}`}
              alt={`Collage ${index}`}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        ))}
      </section>

      {/* Second Section - Parallax Text */}
      <section 
        className="h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
        style={{
          transform: `translateY(${Math.max(0, scrollY * 0.3)}px)`,
        }}
      >
        <h1 className="text-8xl font-bold text-white tracking-wider z-10">
          IKS
        </h1>
        <div className="absolute inset-0 flex flex-wrap gap-4 opacity-20">
          {Array(12).fill(null).map((_, index) => (
            <div
              key={index}
              className="w-1/4 aspect-square"
              style={{
                transform: `translateY(${scrollY * 0.2 * ((index % 3) + 1)}px)`,
              }}
            >
              <img
                src={`/api/placeholder/400/400`}
                alt={`Background ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Third Section - Staggered Parallax Images */}
      <section className="min-h-screen bg-black relative overflow-hidden py-20">
        <div className="container mx-auto grid grid-cols-3 gap-8">
          {Array(9).fill(null).map((_, index) => (
            <div
              key={index}
              className="relative h-96"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.1 * ((index % 3) + 1))}px)`,
              }}
            >
              <img
                src={`/api/placeholder/400/500`}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        section {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        img {
          transition: transform 0.3s ease-out;
        }

        img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ParallaxGallery;