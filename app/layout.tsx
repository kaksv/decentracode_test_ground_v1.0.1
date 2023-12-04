"use client";
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import React, { useState } from "react";
// import { lightTheme, darkTheme } from '@/app/theme/theme';
// import { ThemeProvider, CssBaseline } from '@mui/material';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [isDark, setIsDark] = useState(false);
  // const switchTheme: any = () => {
  //   setIsDark(!isDark);
  // };
  return (
    <html lang="en">
      {/* <ThemeProvider theme={isDark ? darkTheme : lightTheme}> */}
        {/* <CssBaseline /> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* </ThemeProvider> */}
    </html>
  );
}
