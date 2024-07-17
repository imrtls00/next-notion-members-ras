import React from 'react';
import { renderProperties } from '../utils/renderProperties';

type MemberCardProps = {
  member: any;
  onClick: (member: any) => void;
};

// Component to render individual member card
const MemberCard: React.FC<MemberCardProps> = ({ member, onClick }) => {
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 cursor-pointer"
      onClick={() => onClick(member)}
    >
      <div className="card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{member.properties.Name.title?.[0]?.text?.content}</h2>
        {renderProperties(member.properties)}
      </div>
    </div>
  );
};

export default MemberCard;
