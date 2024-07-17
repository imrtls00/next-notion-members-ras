'use client'

import React, { useEffect, useState } from 'react';
import fetchMembers from '../services/fetchMembers';
import EmojiBackground from '../../components/EmojiBackground';

const MemberDetails = ({ reg }) => {
    const [member, setMember] = useState(null);

    useEffect(() => {
        const fetchMembersData = async () => {
            if (reg) {
                const fetchedMembers = await fetchMembers(reg);
                setMember(fetchedMembers[0]);
            }
        };

        fetchMembersData();
    }, [reg]);

    return (
        <div className="w-full relative">
            {member && (
                <>
                    <div className="absolute top-0 left-0 bg-fixed z-0">
                        <EmojiBackground emoji={member.emoji} backgroundColor="#1e1e1e" />
                    </div>
                    <div className="relative z-10 mx-10 my-10 px-20 py-20">
                        <img className='my-8 w-80 h-80 rounded-lg shadow-xl dark:shadow-gray-800' src={member.picture} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.reg}</p>
                        <p>{member.designation?.role}</p>
                        <p>{member.designation?.description}</p>
                        <p>{member.emoji}</p>
                        <p>{member.PrimaryTeam}</p>
                        <p>{member.SecondaryTeam}</p>
                        <p>{member.MemberSince}</p>
                        <p>{member.FavoriteDessert}</p>
                    </div>
                </>
            )}
        </div>
    );    
};

export default MemberDetails;