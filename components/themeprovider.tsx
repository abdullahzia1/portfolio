"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export function ThemeProvider({
	children,
	...props
}: Readonly<ThemeProviderProps>) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
