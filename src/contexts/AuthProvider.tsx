import { User } from "@supabase/supabase-js";
import React, { createContext, useEffect, useState } from "react";
import supabaseClient from "utils/supabaseClient";

interface AuthProviderProps {
	user: User | null;
	isSession: boolean;
}

export const AuthContext = createContext<AuthProviderProps>({ user: null, isSession: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getUser = async () => {
			const { data } = await supabaseClient.auth.getUser();

			setUser(data.user);
			setLoading(false);
		};

		getUser();

		const { data: authListener } = supabaseClient.auth.onAuthStateChange((event, session) => {
			setUser(session?.user ?? null);
			setLoading(false);
		});

		return () => authListener?.subscription.unsubscribe();
	}, []);

	const value = { user, isSession: !!user };

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
