'use client'

import React from 'react';
import MemberEdit from '../../components/MemberEdit';

const Page = ({ params }: any) => {
    return (
        <div className='mx-8 my-8'>
            <h1> Member Edit Page # {params.reg} </h1>
            <button type="button" className="mx-8 my-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => window.location.href = `/rasians/${params.reg}`}>Back to Profile</button>
            <br />
            <MemberEdit reg={params.reg} />
        </div>
    );
};

export default Page;