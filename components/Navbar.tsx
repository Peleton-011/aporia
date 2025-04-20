"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
	weight: "600",
	subsets: ["latin"],
});

const Navbar = () => {
	return (
		<div className="fixed w-full z-50 justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
			<div className="flex items-center">
				<Menu className="block md:hidden" />
				<Link href="/">
					<h1
						className={cn(
							"hidden md:block text-xl md:text-3xl font-bold text-primary",
							font.className
						)}
					>
						aporia
					</h1>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
