import React, { useState } from 'react';

type MemberOverlayProps = {
  member: any;
  onClose: () => void;
};

const MemberOverlay: React.FC<MemberOverlayProps> = ({ member, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(member.name || '');

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = async () => {
    try {
      await fetch(`/api/members`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: member.confidential.id,
          properties: { Name: { title: [{ text: { content: name } }] } },
        }),
      });
      setIsEditing(false);
      onClose();
      window.location.reload(); // Refresh the page to reflect changes
    } catch (error) {
      console.error('Failed to update member:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="overlay-card p-8 rounded-lg shadow-md w-11/12 md:w-1/2 lg:w-1/3 relative">
        <button className="absolute top-2 right-2 text-2xl font-bold" onClick={onClose}>
          &times;
        </button>
        {isEditing ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <button onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Save
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">{member.name}</h2>
            {/* Render member properties here */}
            <button onClick={handleEditClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberOverlay;
