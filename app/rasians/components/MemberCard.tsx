import Link from 'next/link';
import React from 'react';

interface Member {
    name: string;
    reg: string;
    picture: string;
    designation: {
        role: string;
        description: string;
    };
    emoji: string;
    PrimaryTeam: string;
    SecondaryTeam: string;
    MemberSince: string;
    FavoriteDessert: string;
    confidential: {
        Phone: string;
        id: string;
    };
}

interface MemberCardProps {
    member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return (
        <Link href={"/rasians/" + member.reg} className="member-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 cursor-pointer" id={member.confidential.id}>
            <img src={member.picture} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.reg}</p>
            <p>{member.designation.role}</p>
            <p>{member.designation.description}</p>
            <p>{member.emoji}</p>
            <p>{member.PrimaryTeam}</p>
            <p>{member.SecondaryTeam}</p>
            <p>{member.MemberSince}</p>
            <p>{member.FavoriteDessert}</p>
        </Link>
    );
};

export default MemberCard;