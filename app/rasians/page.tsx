'use client';

import SearchMembers from './components/SearchMembers';

export default function Page () {
    
    return (
        <div className="p-8">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => window.location.href = '/'}>Back to 🏠</button>
            <h1 className="text-3xl font-bold mb-4">RASIANS</h1>
            <p className="text-lg mb-8">This is a list of all the RAS members.</p>
            <SearchMembers />
        </div>
    );
}

