'use client';

import React, { useState } from 'react';
import { HiArrowLeft, HiBriefcase } from 'react-icons/hi';
import Link from 'next/link';
import styles from "@/component/styles.module.css";

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
            className={`${styles.roleCard} ${selectedRole === role ? styles.selectedRole : ''}`}
            onClick={() => handleRoleSelect(role)}
        >
            {icon}
            <p className={styles.roleLabel}>{label}</p>
            <input
                type="radio"
                checked={selectedRole === role}
                onChange={() => handleRoleSelect(role)}
                className={styles.radioInput}
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
                window.location.href = '/dashboard';
            } else if (selectedRole === 'Admin') {
                window.location.href = '/';
            }
        }
    };

    return (
        <div className={styles.rolePage}>
            <div className={styles.backButtonContainer}>
                <Link href={'/'}>
                    <button className={styles.backButton}>
                        <HiArrowLeft className={styles.backIcon} /> Back
                    </button>
                </Link>
            </div>
            <h1 className={styles.pageTitle}>
                Join as we give you the best designs
            </h1>
            <div className={styles.roleCardsContainer}>
                <RoleCard
                    role="client"
                    icon={<HiBriefcase className={styles.roleIcon} />}
                    selectedRole={selectedRole}
                    handleRoleSelect={handleRoleSelect}
                    label="I'm a Client"
                />
            </div>
            <button
                className={`${styles.joinButton} ${selectedRole ? styles.active : styles.disabled}`}
                onClick={handleCreateAccount}
                disabled={!selectedRole}
            >
                Join
            </button>
        </div>
    );
};

export default RolePage;
