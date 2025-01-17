import React from 'react';

interface ProfileCardProps {
    name: string;
    email: string;
    avatarUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, avatarUrl }) => {
    return (
        <div className=" mt-9 flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-700">
            <img
                src={avatarUrl || '/images/avatar.png'}
                alt="User Avatar"
                className="w-32 h-32 rounded-full mb-4 border-4 border-white transition-all duration-500 hover:border-gray-400 transform transition-transform duration-300 hover:scale-110"
            />
            <h2 className="text-2xl font-semibold text-white animate-pulse">{name}</h2>
            <p className="text-sm text-gray-300 animate-fadeIn">{email}</p>

            <div className='flex flex-row gap-4'>
                <div className="mt-4 space-x-4 group">
                    <button className="bg-gray-600 py-2 px-4 rounded-full relative overflow-hidden transition-colors duration-300 hover:bg-gray-500 transform transition-transform duration-300 hover:scale-105">
                        Edit Profile
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
                    </button>
                </div>
                <div className="mt-4 space-x-4 group" >

                    <button className="bg-red-600 py-2 px-4 rounded-full relative overflow-hidden transition-colors duration-300 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                        Logout
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 transform transition-all duration-300 group-hover:scale-x-100"></span>
                    </button>
                </div>
            </div>



        </div>
    );
};

export default ProfileCard;
