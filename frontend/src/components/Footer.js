import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-slate-200 py-4'>
            <div className='container mx-auto flex flex-col items-center'>
                <p className='text-center font-bold text-gray-700 mb-2'>
                    &copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.
                </p>
                {/* <div className='flex space-x-4'>
                    <a href='/privacy' className='text-gray-600 hover:text-gray-800'>
                        Privacy Policy
                    </a>
                    <a href='/terms' className='text-gray-600 hover:text-gray-800'>
                        Terms of Service
                    </a>
                    <a href='/contact' className='text-gray-600 hover:text-gray-800'>
                        Contact Us
                    </a>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;
