'use client';

import { useEffect, useState } from 'react';
import MemberOverlay from '../components/MemberOverlay';
import MemberCard from '../components/MemberCard';

const Page = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  

  const handleCardClick = (member: any) => {
    setSelectedMember(member);
  };

  const handleCloseOverlay = () => {
    setSelectedMember(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">RASIANS</h1>
      <p className="text-lg mb-8">This is a list of all the RAS members.</p>
      <input
        type="text"
        placeholder="Search..."
        className="mb-6 p-2 bg-slate-700 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap -mx-2">
        {members.map((member: any) => (
          <MemberCard key={member.id} member={member} onClick={handleCardClick} />
        ))}
      </div>
      {selectedMember && <MemberOverlay member={selectedMember} onClose={handleCloseOverlay} />}
    </div>
  );
};

export default Page;
