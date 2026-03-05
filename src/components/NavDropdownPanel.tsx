import React from "react";
import ReactDOM from "react-dom";
import { cn } from "@/lib/utils";

interface Props {
	/** Outer wrapper classname (applied to full-width absolute wrapper) */
	className?: string;
	/** Inner panel classname (applied to centered panel) */
	panelClassName?: string;
	children: React.ReactNode;
	/** forwarded mouse enter handler (used when rendering via portal) */
	onMouseEnter?: () => void;
	/** forwarded mouse leave handler (used when rendering via portal) */
	onMouseLeave?: () => void;
	/** optionally override top position (px) when rendering fixed panel */
	topOverride?: number;
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
	onMouseEnter: propsOnMouseEnter,
	onMouseLeave: propsOnMouseLeave,
	topOverride: propsTopOverride,
}: Props) {
	const topStyle = typeof propsTopOverride === 'number' ? { top: `${propsTopOverride}px` } : undefined;

	const content = (
		<div
			role="menu"
			aria-label="Navigation dropdown"
			style={topStyle}
			className={cn(
				"fixed left-0 w-full z-[9999] transition-all duration-200 ease-out",
				className
			)}
		>
			<div
				onMouseEnter={propsOnMouseEnter}
				onMouseLeave={propsOnMouseLeave}
				className={cn(
					"px-12 py-8 bg-[#f4efe9] shadow-xl rounded-md w-full",
					panelClassName
				)}
			>
				{children}
			</div>
		</div>
	);

	if (typeof document === "undefined") return content;
	return ReactDOM.createPortal(content, document.body);
}

