import React from "react";
import { cn } from "@/lib/utils";

interface Props {
	/** Outer wrapper classname (applied to full-width absolute wrapper) */
	className?: string;
	/** Inner panel classname (applied to centered panel) */
	panelClassName?: string;
	children: React.ReactNode;
}

/**
 * NavDropdownPanel
 *
 * Renders a full-width absolute dropdown wrapper with a centered panel.
 * Uses CSS-only group-hover transitions so parent can control visibility
 * by adding `group` to the nav item and relying on `group-hover` states.
 */
export default function NavDropdownPanel({
	children,
	className = "",
	panelClassName = "",
}: Props) {
	return (
		<div
			role="menu"
			aria-label="Navigation dropdown"
			className={cn(
				"absolute left-0 top-full w-full z-50 transform opacity-0 translate-y-2 pointer-events-none",
				"group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
				"transition-all duration-200 ease-out",
				className
			)}
		>
			<div
				className={cn(
					"mx-auto max-w-[1280px] px-12 py-8 bg-[#f4efe9] shadow-xl rounded-md",
					panelClassName
				)}
			>
				{children}
			</div>
		</div>
	);
}

