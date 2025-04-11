import React from 'react';
import { Users, Check, X } from 'lucide-react';

export default function Eligibility() {
  const eligibleCategories = [
    "Families identified based on SECC 2011 deprivation criteria",
    "Currently enrolled RSBY beneficiaries",
    "Families belonging to identified occupational categories",
    "Economically weaker sections",
    "Small farmers and marginal workers"
  ];

  const nonEligibleCategories = [
    "Government employees",
    "Income tax payees",
    "Families owning motorized vehicles",
    "Families with members in professional occupations",
    "Households with refrigerators or landline phones"
  ];

  return (
    <section id="eligibility" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">Eligibility Criteria</h2>
          <p className="text-gray-600 mt-4">Find out if you're eligible for Ayushman Bharat coverage</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
              <Check className="h-6 w-6 mr-2" />
              Eligible Categories
            </h3>
            <ul className="space-y-3">
              {eligibleCategories.map((category, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-red-600">
              <X className="h-6 w-6 mr-2" />
              Non-Eligible Categories
            </h3>
            <ul className="space-y-3">
              {nonEligibleCategories.map((category, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}