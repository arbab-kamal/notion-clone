"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";
import { SidebarCommand } from "./_components/sidebar-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, isLoading } = useConvexAuth();

	if (isLoading) {
		return (
			<div className="h-full flex items-center justify-center">
				<Spinner size="lg" />
			</div>
		);
	}
	if (!isAuthenticated) redirect("/");
	return (
		<div className="h-full flex dark:[#1F1F1F]">
			<Navigation />
			<main className="flex-1 h-full overflow-y-auto">
				<SearchCommand />
				{/* <SidebarCommand /> */}
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
