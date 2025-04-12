import React, { useState } from "react";
import {
  Laptop,
  MapPin,
  Navigation,
  Phone,
  CheckSquare,
  FileText,
  Users,
  CreditCard,
  Home,
  Fingerprint,
  Clock,
  CheckCircle2,
  Search,
  Camera,
  Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ApplySection() {
  const [activeMethod, setActiveMethod] = useState("online");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const onlineSteps = [
    {
      icon: <Laptop className='h-8 w-8' />,
      title: "Visit PM-JAY Portal",
      description: "Go to beneficiary.nha.gov.in",
      details: [
        "Open the official PM-JAY portal in your browser",
        "Click on 'Login/Register' button",
        "Choose your preferred language",
      ],
    },
    {
      icon: <Search className='h-8 w-8' />,
      title: "Check Eligibility",
      description: "Verify your eligibility status",
      details: [
        "Click on 'Am I Eligible' option",
        "Enter your mobile number",
        "Complete captcha verification",
        "Verify using OTP sent to your mobile",
      ],
    },
    {
      icon: <Users className='h-8 w-8' />,
      title: "Search Beneficiary",
      description: "Find your name in database",
      details: [
        "Select your state of residence",
        "Choose identification method (Aadhaar/Ration Card)",
        "Enter required details",
        "Check if your name appears in beneficiary list",
      ],
    },
    {
      icon: <FileText className='h-8 w-8' />,
      title: "Apply for Card",
      description: "Submit application if eligible",
      details: [
        "Click 'Apply Now' if status is 'Not-Generated'",
        "Enter Aadhaar number for authentication",
        "Verify with OTP",
        "Review your details",
      ],
    },
    {
      icon: <Camera className='h-8 w-8' />,
      title: "Complete e-KYC",
      description: "Provide required information",
      details: [
        "Upload passport-sized photo",
        "Verify mobile number",
        "Confirm address details",
        "Submit additional required documents",
      ],
    },
    {
      icon: <Download className='h-8 w-8' />,
      title: "Download Card",
      description: "Get your Ayushman Card",
      details: [
        "Wait for application approval",
        "Receive confirmation SMS",
        "Login to portal",
        "Download your Ayushman Bharat card",
      ],
    },
  ];

  const offlineSteps = [
    {
      icon: <MapPin className='h-8 w-8' />,
      title: "Visit CSC",
      description: "Locate and visit your nearest Common Service Center",
    },
    {
      icon: <FileText className='h-8 w-8' />,
      title: "Document Submission",
      description: "Submit all required documents for verification",
    },
    {
      icon: <CheckCircle2 className='h-8 w-8' />,
      title: "Eligibility Check",
      description: "Officials verify your eligibility based on documents",
    },
    {
      icon: <Fingerprint className='h-8 w-8' />,
      title: "Biometric Auth",
      description: "Complete biometric verification process",
    },
    {
      icon: <Clock className='h-8 w-8' />,
      title: "Processing",
      description: "Application processing and verification",
    },
    {
      icon: <CreditCard className='h-8 w-8' />,
      title: "Card Issuance",
      description: "Collect your Ayushman Bharat card once approved",
    },
  ];

  const requiredDocuments = [
    {
      name: "Identity Proof",
      emoji: "📝",
      icon: <CreditCard className='h-6 w-6 text-blue-600' />,
      description:
        "Aadhaar Card, Voter ID, PAN Card, or any government-issued ID",
      examples: "Driver's License, Passport also accepted",
    },
    {
      name: "Residence Proof",
      emoji: "🏠",
      icon: <Home className='h-6 w-6 text-blue-600' />,
      description: "Ration Card, utility bills, or rental agreement",
      examples: "Electricity bill, water bill (not older than 3 months)",
    },
    {
      name: "Income Certificate",
      emoji: "📊",
      icon: <FileText className='h-6 w-6 text-blue-600' />,
      description: "Recent income certificate from authorized authority",
      examples: "Form 16, Salary slips, Income tax return",
    },
    {
      name: "Family Documents",
      emoji: "👪",
      icon: <Users className='h-6 w-6 text-blue-600' />,
      description: "Ration Card or document listing family members",
      examples: "Joint family declaration, Marriage certificate",
    },
    {
      name: "Bank Details",
      emoji: "📈",
      icon: <CreditCard className='h-6 w-6 text-blue-600' />,
      description: "Bank account details for financial transactions",
      examples: "Passbook copy, Cancelled cheque",
    },
    {
      name: "Caste Certificate",
      emoji: "📝",
      icon: <FileText className='h-6 w-6 text-blue-600' />,
      description: "If applicable, to verify social category",
      examples: "Original certificate from authorized authority",
    },
  ];

  const handleFindCenters = () => {
    // Search query specifically for Ayushman Bharat centers
    const searchQuery = "Ayushman Bharat Kendra near me";
    const encodedQuery = encodeURIComponent(searchQuery);
    const mapsUrl = `https://www.google.com/maps/search/${encodedQuery}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <section
      id='apply'
      className='py-16 bg-gradient-to-br from-blue-50 to-indigo-50'
      ref={ref}
    >
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            Apply for Ayushman Bharat Card
          </h2>

          <div className='flex flex-col sm:flex-row gap-4 justify-center md:space-x-4 space-y-4 md:space-y-0 mb-12'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMethod("online")}
              className={`px-10 py-2 mx-4 rounded-full flex  items-center space-x-2 transition-colors ${
                activeMethod === "online"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-2 border-blue-600"
              }`}
            >
              <Laptop className='h-5 w-5' />
              <span>Apply Online</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMethod("offline")}
              className={`px-8 py-2 mx-4 rounded-full flex items-center space-x-2 transition-colors ${
                activeMethod === "offline"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-2 border-blue-600"
              }`}
            >
              <MapPin className='h-5 w-5' />
              <span>Apply Offline</span>
            </motion.button>
          </div>
          <AnimatePresence mode='wait'>
            {activeMethod === "online" ? (
              <motion.div
                key='online'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className='bg-white rounded-lg shadow-xl p-8'
              >
                <h3 className='text-2xl font-semibold mb-8 text-center'>
                  Online Application Process
                </h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {onlineSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='relative group'
                    >
                      <div className='bg-gray-50 p-6 rounded-lg text-center h-full hover:shadow-lg transition-shadow'>
                        <motion.div
                          className='text-blue-600 mb-4 flex justify-center'
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {step.icon}
                        </motion.div>
                        <h4 className='text-xl font-semibold mb-2'>
                          {step.title}
                        </h4>
                        <p className='text-gray-600 mb-4'>{step.description}</p>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className='text-left'
                        >
                          <ul className='text-sm text-gray-500 space-y-2'>
                            {step.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className='flex items-center'
                              >
                                <div className='w-1.5 h-1.5 bg-blue-400 rounded-full mr-2' />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      {index < onlineSteps.length - 1 && (
                        <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200' />
                      )}
                    </motion.div>
                  ))}
                </div>
                <div className='text-center mt-12'>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href='https://beneficiary.nha.gov.in/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center bg-blue-600 text-white px-4 py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-700 transition-colors'
                  >
                    <Laptop className='md:mr-2 h-auto w-5' />
                    Start Online Application
                  </motion.a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key='offline'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className='bg-white rounded-lg shadow-xl p-8'
              >
                <h3 className='text-2xl font-semibold mb-8 text-center'>
                  Offline Application Process
                </h3>

                <div className='grid lg:grid-cols-2 gap-8 mb-12'>
                  <div>
                    <h4 className='text-xl font-semibold mb-6 flex items-center'>
                      <FileText className='h-6 w-6 text-blue-600 mr-2' />
                      Required Documents
                    </h4>
                    <div className='grid md:grid-cols-2 gap-4'>
                      {requiredDocuments.map((doc, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className='bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow'
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className='flex items-center mb-2'>
                            {doc.icon}
                            <span className='text-2xl ml-2'>{doc.emoji}</span>
                          </div>
                          <h5 className='font-semibold text-lg mb-1'>
                            {doc.name}
                          </h5>
                          <p className='text-gray-600 text-sm mb-2'>
                            {doc.description}
                          </p>
                          <p className='text-gray-500 text-xs italic'>
                            {doc.examples}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-xl font-semibold mb-6 flex items-center'>
                      <CheckSquare className='h-6 w-6 text-blue-600 mr-2' />
                      Application Steps
                    </h4>
                    <div className='space-y-4'>
                      {offlineSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className='flex items-start bg-gray-50 p-4 rounded-lg'
                        >
                          <div className='bg-blue-100 p-2 rounded-full mr-4'>
                            {step.icon}
                          </div>
                          <div>
                            <h5 className='font-semibold text-lg'>
                              {step.title}
                            </h5>
                            <p className='text-gray-600'>{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h4 className='text-xl font-semibold mb-4 flex items-center'>
                    <MapPin className='h-6 w-6 text-blue-600 mr-2' />
                    Find Nearby Centers
                  </h4>
                  <div className='grid md:grid-cols-2 gap-8 items-center'>
                    <div>
                      <p className='text-gray-600 mb-6'>
                        Visit your nearest Common Service Center (CSC) or
                        Ayushman Bharat Kendra with the required documents. Our
                        trained staff will assist you with the application
                        process.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleFindCenters}
                        className='w-full bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center'
                      >
                        <Navigation className='h-5 w-5 mr-2' />
                        Locate Nearest Center
                      </motion.button>
                    </div>
                    <div>
                      <img
                        src="/images/googleMaps.jpg"
                        alt='Service Center'
                        className='rounded-lg shadow-lg'
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
