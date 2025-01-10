'use client';

import React, { useState } from 'react';
import { HiArrowLeft, HiBriefcase, HiUser } from 'react-icons/hi';
import Link from 'next/link';

interface RoleCardProps {
    role: string;
    icon: React.ReactNode;
    selectedRole: string | null;
    handleRoleSelect: (role: string) => void;
    label: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, icon, selectedRole, handleRoleSelect, label }) => {
    return (
        <div
            className={`border rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center ${
                selectedRole === role ? 'border-[#093c5e]' : 'border-gray-300'
            }`}
            onClick={() => handleRoleSelect(role)}
        >
            {icon}
            <p className="text-lg font-medium">{label}</p>
            <input
                type="radio"
                checked={selectedRole === role}
                onChange={() => handleRoleSelect(role)}
                className="mt-2"
            />
        </div>
    );
};

const RolePage: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleRoleSelect = (role: string) => {
        setSelectedRole(role);
    };

    const handleCreateAccount = () => {
        if (selectedRole) {
            localStorage.setItem('role', selectedRole);

            if (selectedRole === 'client' || selectedRole === 'Professional') {
                window.location.href = '/registerClient';
            } else if (selectedRole === 'Admin') {
                window.location.href = '/';
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff] relative">
            <div className="absolute top-4 left-4">
                <Link href={'/'}>
                    <button className="flex items-center text-[#093c5e] hover:text-[#093c5e]">
                        <HiArrowLeft className="mr-2" /> Back
                    </button>
                </Link>
            </div>
            <h1 className="text-3xl font-semibold mb-6 text-[#093c5e] hidden sm:block">
                Join as we give you the best fashion designs
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-5">
                <RoleCard
                    role="client"
                    icon={<HiBriefcase className="text-3xl mb-2" />}
                    selectedRole={selectedRole}
                    handleRoleSelect={handleRoleSelect}
                    label="I'm a Client"
                />

            </div>
            <button
                className={`px-6 py-3 rounded-lg font-medium ${
                    selectedRole
                        ? 'bg-[#06324e] text-white hover:bg-[#06324e]'
                        : 'bg-[#007e82] cursor-not-allowed'
                }`}
                onClick={handleCreateAccount}
                disabled={!selectedRole}
            >
                Join
            </button>
            <p className="mt-4">
                Already have an account?{' '}
                <Link href="/designs" className="text-[#06324e] hover:underline">
                    Log In
                </Link>
            </p>
        </div>
    )
}


export default RolePage;
