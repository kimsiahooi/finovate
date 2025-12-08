import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/shared";

export default function ScheduleCall() {
	return (
		<div className="border-t">
			<div className="container">
				<div className="mt-[10vh] flex items-end mb-10 gap-5">
					<div className="w-1/2">
						<h1 className="text-primary font-medium text-6xl tracking-wide">
							Investing For Tomorrow,{" "}
							<span className="text-[#92C200]">Together</span>
						</h1>
					</div>
					<div>
						<div className="inline-flex items-center group">
							<Button className="cursor-pointer rounded-full group-hover:bg-secondary! group-hover:text-primary! text-base">
								Let&apos;s get started
							</Button>
							<Button className="cursor-pointer text-secondary size-11.5 rounded-full group-hover:bg-secondary! group-hover:text-primary! overflow-hidden relative">
								<ArrowUpRight className="size-5 group-hover:-translate-y-11.5 transition absolute top-[13px] left-[13px]" />
								<ArrowUpRight className="size-5 group-hover:translate-none translate-y-11.5 transition absolute top-[13px] left-[13px]" />
							</Button>
						</div>
					</div>
					<div>
						<Button
							className="rounded-full cursor-pointer hover:bg-secondary hover:text-primary text-base"
							variant="outline"
						>
							Schedule a Call
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
