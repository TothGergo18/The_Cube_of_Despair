// src/hooks/useUser.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '@/utils/supabaseClient';

export const useUser = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const logout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    useEffect(() => {
        const fetchProfile = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setProfile(user);
            setLoading(false);
        };

        fetchProfile();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
            fetchProfile();
        });

        return () => subscription.unsubscribe();
    }, []);

    return { profile, loading, logout };
};