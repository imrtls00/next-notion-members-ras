import React from 'react';
import fetchMembers from '../services/fetchMembers';

const MemberDetails = ({ reg }) => {

    const member = fetchMembers(reg);
    console.log("Fetched Member Details" + member);

    return (
        <div className="member-card w-full">
            <img src={member.picture} alt={member.name} />
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
    );
};

export default MemberDetails;