import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/Header";

const client = new QueryClient();

export const Route = createRootRoute({
	component: () => <RootComponent />,
});

function RootComponent() {
	const location = useLocation();
	const isDocs = location.pathname.startsWith("/docs");
	return (
		<div className={"min-h-screen bg-white"}>
			<QueryClientProvider client={client}>
				<Header />

				<div
					className={
						isDocs ? "" : "max-w-[1440px] m-auto w-full bg-white h-screen px-8"
					}
				>
					<Outlet />
					<TanStackRouterDevtools />
				</div>
			</QueryClientProvider>
		</div>
	);
}
