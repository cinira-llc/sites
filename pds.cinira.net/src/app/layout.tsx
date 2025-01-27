import {PropsWithChildren} from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Cinira Projects",
    description: "Cinira projects and local resources.",
    other: {
        cnBuildSource: process.env["BUILD_SOURCE"]!,
        cnBuildTimestamp: process.env["BUILD_TIMESTAMP"]!,
        cnBuildVersion: process.env["npm_package_version"]!,
    },
};

export default function RootLayout(props: Readonly<PropsWithChildren>) {
    const {children} = props;
    return (
        <html lang="en">
        <body className={inter.className}>
        <Script src="/js/status.js"/>
        <header/>
        <div className="flex h-screen items-center justify-center bg-transparent">
            <div className="bg-white p-4 rounded-xl shadow-md inline-block">
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
