'use client';

import React from 'react';
import MemberDetails from '../components/MemberDetails';

const Page = ({ params }: any) => {
    return (
        <div className='mx-8 my-8'>
            <h1> Member Page # {params.reg} </h1>
            <div className="inline-flex rounded-md shadow-sm mx-8 my-8">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => window.location.href = '/rasians'}>Back</button>
                <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => window.location.href = `/rasians/${params.reg}/edit`}>Edit</button>
            </div>
            <br />
            <MemberDetails reg={params.reg} />
        </div>
    );
};

export default Page;