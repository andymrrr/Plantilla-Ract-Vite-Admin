import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { UserInfoProps } from '../types';

const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
  return (
    <>
      <span className="hidden text-right lg:block">
        <span className="block text-sm font-medium text-black dark:text-white">
          {userData.nombre}
        </span>
        <span className="block text-xs">{userData.cargo}</span>
      </span>

      <span className="h-12 w-12 rounded-full">
        <img src={userData.avatar} alt="User" />
      </span>

      <FaChevronDown className="w-4 h-4 text-gray-500" />
    </>
  );
};

export default UserInfo; 