'use client';

import SearchMembers from './components/SearchMembers';

export default function Page () {
    
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">RASIANS</h1>
            <p className="text-lg mb-8">This is a list of all the RAS members.</p>
            <SearchMembers />
        </div>
    );
}

