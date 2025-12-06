import { Grip, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<div className="container py-2.5">
			<div className="flex items-center justify-between gap-2">
				<Link href="/">
					<Image
						src="/assets/images/home/logo.svg"
						alt="logo"
						width="145"
						height="36"
					/>
				</Link>
				<div className="flex items-center gap-3">
					<Button className="rounded-full bg-accent text-primary hover:text-secondary cursor-pointer size-12">
						<Search className="size-5" />
					</Button>
					<Button className="rounded-full bg-primary hover:text-secondary cursor-pointer size-12">
						<Grip className="size-5" />
					</Button>
				</div>
			</div>
		</div>
	);
}
