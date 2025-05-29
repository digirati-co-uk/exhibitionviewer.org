import { Link } from "@tanstack/react-router";
import { ExhibitionViewerLogo } from "./ExhibitionViewerLogo";

export default function Header() {
	return (
		<header className="p-2 flex gap-2 text-black justify-between h-16 items-center bg-white border-b shadow-sm z-30 relative">
			<div className="max-w-[1440px] m-auto w-full flex items-center justify-between px-2">
				<div className="px-2 font-bold">
					<Link to="/" className="flex items-center gap-4 text-xl">
						<ExhibitionViewerLogo className="text-4xl" />
						Exhibition Viewer
					</Link>
				</div>
				<nav className="flex flex-row items-center text-sm">
					<Link
						to="/about"
						className="data-[status=active]:text-blue-700 font-semibold px-2"
					>
						About
					</Link>
					<Link
						to="/Examples"
						className="data-[status=active]:text-blue-700 font-semibold px-2"
					>
						Examples
					</Link>
					<Link
						to="/docs"
						className="data-[status=active]:text-blue-700 font-semibold px-2"
					>
						Documentation
					</Link>
				</nav>
			</div>
		</header>
	);
}
