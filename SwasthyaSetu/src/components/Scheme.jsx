import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Scheme() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const images = [
    "./images/slide1.jpg",
    "./images/slide2.png",
    "./images/slide3.jpg",
    "./images/slide6.jpg",
    "./images/slide7.jpg",
];

const imageRef = useRef(0);
const imageElement = useRef(null);

useEffect(() =>
{        const interval = setInterval(() => {
        
        imageRef.current = (imageRef.current+1)%images.length
        if(imageElement) {
            imageElement.current.src = images[imageRef.current]
        }
    }, 5000);

    return () => clearInterval(interval);
},[])

  const features = [
    "Comprehensive health coverage of ₹5 lakh per family per year",
    "Coverage for secondary and tertiary care procedures",
    "Pre and post-hospitalization expenses covered",
    "No cap on family size or age",
    "Cashless and paperless treatment at empaneled hospitals"
  ];

  return (
    <section id="schemes" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Ayushman Bharat Yojana
        </h2>

        <div className="w-full bg-gray-300 overflow-hidden whitespace-nowrap relative mb-4">
                    <div className="flex w-max animate-marquee">
                        
                        <p className="flex-shrink-0 mx-4">
                            Get details on the Ayushman Vay Vandana Card for senior citizens aged 70+ with a missed call on 1800 11 0770
                        </p>
                        <p className="flex-shrink-0 mx-4">
                            Get details on the Ayushman Vay Vandana Card for senior citizens aged 70+ with a missed call on 1800 11 0770
                        </p>
                        <p className="flex-shrink-0 mx-4">
                            Get details on the Ayushman Vay Vandana Card for senior citizens aged 70+ with a missed call on 1800 11 0770
                        </p>
                        <p className="flex-shrink-0 mx-4">
                            Get details on the Ayushman Vay Vandana Card for senior citizens aged 70+ with a missed call on 1800 11 0770
                        </p>
                    </div>
                </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ayushman Bharat Yojana, also known as Pradhan Mantri Jan Arogya Yojana (PM-JAY), 
              is India's flagship healthcare scheme aimed at providing quality healthcare access 
              to the country's most vulnerable citizens.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative "
          >
            <img 
              src={images[imageRef.current]} 
              alt="Healthcare professionals" 
              className="rounded-lg shadow-xl " ref={imageElement}
            />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}