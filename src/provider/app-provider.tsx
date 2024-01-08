"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type AppProviderProps = {
	children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
					},
				},
			})
	);
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ThemeProvider>
	);
};

export default AppProvider;
