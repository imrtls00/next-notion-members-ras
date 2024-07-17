import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fetchMembers from '../services/fetchMembers';

const MemberEdit = ({ reg }) => {
    const [member, setMember] = useState(null);
    const [editedMember, setEditedMember] = useState(null);

    useEffect(() => {
        const fetchMembersData = async () => {
            if (reg) {
                const fetchedMembers = await fetchMembers(reg);
                setMember(fetchedMembers[0]);
                setEditedMember(fetchedMembers[0]);
            }
        };

        fetchMembersData();
    }, [reg]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedMember((prevMember) => ({
            ...prevMember,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        // Send the editedMember object to the API patch method
        // You can replace the console.log with your API call

        const customData = { id: editedMember.confidential.id, name: editedMember.name};

        try {
            await axios.patch('/rasians/api', customData);
            console.log('Member updated successfully');
        } catch (error) {
            console.error('Error updating member:', error);
        }
    };

    return (
        <div className="w-full mx-10 my-10">
            {editedMember && (
                <div className="flex flex-col items-center">
                    <div className="flex flex-row items-center">
                        <img className="my-8 w-80 h-80 rounded" src={editedMember.picture} alt={editedMember.name} />
                        <div className='mx-4'>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                    </div>
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" value={editedMember.name} onChange={handleInputChange} placeholder="Name" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="reg" value={editedMember.reg} onChange={handleInputChange} placeholder="Registration" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="designation" value={editedMember.designation?.role} onChange={handleInputChange} placeholder="Designation" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="description" value={editedMember.designation?.description} onChange={handleInputChange} placeholder="Description" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="emoji" value={editedMember.emoji} onChange={handleInputChange} placeholder="Emoji" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="primaryTeam" value={editedMember.PrimaryTeam} onChange={handleInputChange} placeholder="Primary Team" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="secondaryTeam" value={editedMember.SecondaryTeam} onChange={handleInputChange} placeholder="Secondary Team" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="memberSince" value={editedMember.MemberSince} onChange={handleInputChange} placeholder="Member Since" />
                    <input className="mx-2 my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="favoriteDessert" value={editedMember.FavoriteDessert} onChange={handleInputChange} placeholder="Favorite Dessert" />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
};

export default MemberEdit;