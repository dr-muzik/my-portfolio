'use client';

import { useEffect, useState } from 'react';
// import DashboardLayout from '../dashboardLayout/page';
// import Dashboard from '../dashboard/dashboardLayout/page';

import DashboardLayout from '../app/dashboard/layout';

import { createContext, useContext, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

interface ThemeContextProps {
	themeMode: 'light' | 'dark';
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	// export const ThemeProvider = () => {
	const [themeMode, setTheme] = useState<'light' | 'dark'>('light');

	// Load theme from local storage or use default light theme
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		setTheme(savedTheme as 'light' | 'dark');
		document.documentElement.classList.toggle('dark', savedTheme === 'dark');
	}, []);

	// Handle theme toggle
	const toggleTheme = () => {
		console.log('first');
		const newTheme = themeMode === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
	};

	const themeMui = useMemo(
		() =>
			createTheme({
				palette: {
					mode: themeMode,
				},
			}),
		[themeMode]
	);

	return (
		<ThemeContext.Provider value={{ themeMode, toggleTheme }}>
			<MuiThemeProvider theme={themeMui}>
				<DashboardLayout>{children}</DashboardLayout>
				{/* <DashboardLayout /> */}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
