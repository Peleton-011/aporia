"use client";

import { Home } from "lucide-react";

export const Sidebar = () => {
	const routes = [
		{
			icon: Home,
			href: "/",
			label: "Home",
		},
	];
	return (
		<div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
			<div className="p-3 flex-1 justify-center">
				<div className="space-y-2">Routes</div>
			</div>
		</div>
	);
};
