import React from "react";
import { Heart, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white pt-5'>
      <div className='container mx-auto px-4'>
        <div className='grid '>
          <div className="flex flex-col justify-center text-center">
            <div className='flex items-center space-x-2  justify-center'>
              <Heart className='h-6 w-6 text-red-500' />
              <span className='text-xl font-bold'>SwasthyaSetu</span>
            </div>
            <p className='text-gray-400'>
              Making quality healthcare accessible to every Indian citizen
            </p>
          </div>

      
          </div>
        </div> 

        <div className='border-t border-gray-800 mt-2 py-1 text-center text-gray-400'>
          <p>
            © {new Date().getFullYear()} SwasthyaSetu. All rights reserved.
          </p>
        
      </div>
    </footer>
  );
}
