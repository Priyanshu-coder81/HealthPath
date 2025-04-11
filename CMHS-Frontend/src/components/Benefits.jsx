import React from 'react';
import { Heart, Guitar as Hospital, Truck, Clock, Shield, CreditCard } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Hospital className="h-8 w-8" />,
      title: "Cashless Treatment",
      description: "Access treatment at empaneled hospitals without paying"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Pre-existing Conditions",
      description: "Coverage for pre-existing diseases from day one"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Transport Allowance",
      description: "Coverage for transportation expenses"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Day Care",
      description: "Coverage for treatments not requiring 24-hour hospitalization"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "No Cost Limit",
      description: "No limit on family size or age of members"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Comprehensive Coverage",
      description: "Covers pre and post hospitalization expenses"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Benefits and Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}