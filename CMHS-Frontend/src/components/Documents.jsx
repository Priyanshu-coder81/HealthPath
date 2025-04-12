import React from 'react';
import { FileText, CreditCard, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Documents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const documents = [{
    name: "Identity Proof",
    emoji: "📝",
    icon: <CreditCard className="h-6 w-6 text-blue-600" />,
    description: "Aadhaar Card, Voter ID, PAN Card, or any government-issued ID",
    examples: "Driver's License, Passport also accepted",
     image: "./images/addharImage.jpg"
  },
  {
    name: "Residence Proof",
    emoji: "🏠",
    icon: <Home className="h-6 w-6 text-blue-600" />,
    description: "Ration Card, utility bills, or rental agreement",
    examples: "Electricity bill, water bill (not older than 3 months)",
    image: "./images/rationImage.jpg"
  },
  {
    name: "Income Certificate",
    emoji: "📊",
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    description: "Recent income certificate from authorized authority",
    examples: "Form 16, Salary slips, Income tax return",
    image: "./images/IncomeCertificate.jpg"
  },
  {
    name: "Family Documents",
    emoji: "👪",
    icon: <Users className="h-6 w-6 text-blue-600" />,
    description: "Ration Card or document listing family members",
    examples: "Joint family declaration, Marriage certificate",
    image: "./images/FamilyDocument.jpg"
  },
  {
    name: "Bank Details",
    emoji: "📈",
    icon: <CreditCard className="h-6 w-6 text-blue-600" />,
    description: "Bank account details for financial transactions",
    examples: "Passbook copy, Cancelled cheque",
    image: "./images/BankDetails.jpg"
  },
  {
    name: "Caste Certificate",
    emoji: "📝",
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    description: "If applicable, to verify social category",
    examples: "Original certificate from authorized authority",
    image: "./images/CasteCertificate.jpg"
  }

  ];

  return (
    <section id="documents" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Required Documents
        </h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
              </div>
              <div className="p-6">
                <div className="text-blue-600 mb-4 flex items-center">
                  {doc.icon}
                  <span className="ml-2 text-2xl">{doc.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                <p className="text-gray-600">{doc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}