import Image from "next/image";

export default function Banner() {
	return (
		<div className="min-h-112.5 relative">
			<Image
				src="/assets/images/home/GettyImages-2184924844.webp"
				alt="banner"
				fill
				loading="eager"
				className="object-cover"
			/>
		</div>
	);
}
