export function HomepageFeature({
	image,
	imageAlt,
	title,
	description,
	imageRight = false,
}: {
	image: string;
	imageAlt: string;
	title: string;
	description: any;
	imageRight?: boolean;
}) {
	return (
		<div className="flex lg:flex-row flex-col items-center gap-8 w-full mb-16">
			<div
				className={`lg:w-1/3 bg-slate-400 shadow aspect-video flex items-center justify-center ${imageRight ? "order-2" : ""}`}
			>
				<img
					src={image}
					alt={imageAlt}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex-1 self-start">
				<h3 className="text-3xl font-bold my-3">{title}</h3>
				<p className="text-xl">{description}</p>
			</div>
		</div>
	);
}
