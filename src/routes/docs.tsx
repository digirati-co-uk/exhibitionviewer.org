import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { allDocumentationPages } from "contentlayer/generated";

export const Route = createFileRoute("/docs")({
	component: RouteComponent,
	loader: async () => {
		const menu: Array<{ label: string; path: string; order: number }> = [];

		for (const item of allDocumentationPages) {
			if (item.inMenu !== false) {
				const path = item.path.startsWith("/") ? item.path : `/${item.path}`;
				menu.push({
					label: item.title,
					path: `/docs${path}`,
					order: item.menuOrder || 1000,
				});
			}
		}

		menu.sort((a, b) => a.order - b.order);

		return { menu };
	},
});

function RouteComponent() {
	const { menu } = Route.useLoaderData();

	return (
		<div>
			<div className="fixed docs-menu bg-gray-100">
				<div className="w-[300px] p-3">
					<h2 className="text-lg border-b mb-2 py-2">Documentation</h2>
					<ul className="text-md flex flex-col gap-1 text-[0.9rem]">
						{menu.map((item) => (
							<li key={item.path}>
								<Link
									key={item.path}
									to={item.path}
									className="data-[status=active]:no-underline data-[status=active]:text-blue-800 data-[status=active]:font-semibold hover:underline"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="docs-content">
				<div className="p-8">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
