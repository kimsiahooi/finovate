import { ArrowUpRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Assets() {
  return (
    <div className="container -mt-24 relative">
      <div className="bg-white/80 p-5 grid grid-cols-3 backdrop-saturate-180 backdrop-blur-2xl rounded-3xl gap-5">
        <div className="flex flex-col justify-between p-5">
          <div>
            <h3 className="text-primary text-2xl font-medium">Assets</h3>
          </div>
          <div>
            <Button
              className="font-medium p-0 bg-transparent! cursor-pointer group"
              variant="ghost">
              Learn More{" "}
              <span className="size-5 inline-flex items-center justify-center overflow-hidden bg-secondary rounded-full relative">
                <ArrowUpRight className="size-3 group-hover:-translate-y-5 transition absolute top-1 left-1" />
                <ArrowUpRight className="size-3 group-hover:translate-none translate-y-5 transition absolute top-1 left-1" />
              </span>
            </Button>
          </div>
        </div>
        <div className="p-5 bg-white rounded-2xl">
          <div>
            <Layers className="size-6 text-primary" />
          </div>
          <div className="mt-5">
            <p className="font-medium">Asset under management</p>
          </div>
          <div className="mt-2.5">
            <h3 className="text-primary text-2xl font-medium">$28.90M</h3>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/assets/images/home/GettyImages-2041846314.webp"
            alt="assets"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
