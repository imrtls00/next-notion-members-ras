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
                className="mb-6 p-2 bg-slate-700 border rounded w-full"
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
