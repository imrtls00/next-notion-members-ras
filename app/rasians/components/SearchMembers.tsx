import React, { useState, useEffect } from 'react';
import fetchMembers from '../services/fetchMembers';
import MemberCard from './MemberCard';

const SearchMembers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [members, setMembers] = useState([]); // Define members array here

    const handleSearchInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const fetchMembersData = async () => {
            if (searchTerm) {
                const fetchedMembers = await fetchMembers(searchTerm); // Fetch members with search term
                setMembers(fetchedMembers); // Store the fetched members to member array
            }
        };

        fetchMembersData();
    }, [searchTerm]);

    return (
        <div className="p-8">
            <input
                type="text"
                placeholder="Search..."
                className="mb-6 border block w-full p-4 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={searchTerm}
                onChange={handleSearchInput}
            />
            <div className="flex flex-wrap -mx-2">
                {/* Render member cards here using the members data the was fetched, this data will be passed as a prop to MemberCard component */}
                {members.map((member) => (
                    <MemberCard member={member}/>
                ))}
            </div>
        </div>
    );
};

export default SearchMembers;
