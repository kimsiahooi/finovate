import {
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  Layers,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/shared";

export default function Assets() {
  return (
    <div className="bg-linear-to-b from-[#F6F5F2] to-white">
      <div className="container -mt-24 relative">
        <div className="grid grid-cols-4 gap-5 mb-25">
          <div className="bg-white/80 p-5 grid grid-cols-3 backdrop-saturate-180 backdrop-blur-2xl rounded-3xl gap-5 col-span-2">
            <div className="flex flex-col justify-between p-5">
              <div>
                <h3 className="text-primary text-3xl font-medium">Assets</h3>
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
            <div className="p-5 bg-white rounded-2xl h-full flex flex-col justify-between gap-5">
              <div>
                <Layers className="size-6 text-primary" />
              </div>
              <div>
                <div>
                  <p className="font-medium">Asset under management</p>
                </div>
                <div className="mt-2.5">
                  <h3 className="text-primary text-3xl font-medium">$28.90M</h3>
                </div>
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
          <div className="bg-white/80 p-5 backdrop-saturate-180 backdrop-blur-2xl rounded-3xl">
            <div className="p-5 bg-white rounded-2xl h-full flex flex-col justify-between gap-5">
              <div>
                <Users className="size-6 text-primary" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div>
                    <p className="font-medium">Professionals</p>
                  </div>
                  <div className="mt-2.5">
                    <h3 className="text-primary text-3xl font-medium">120+</h3>
                  </div>
                </div>
                <div className="flex item-center relative">
                  <div className="border-2 border-white w-11 rounded-full">
                    <Image
                      src="/assets/images/home/pexels-mart-production-7222858.webp"
                      alt="professionals"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                  </div>
                  <div className="border-2 border-white absolute bottom-0 right-5.5 w-11 rounded-full">
                    <Image
                      src="/assets/images/home/pexels-mikhail-nilov-7677869.webp"
                      alt="professionals"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                  </div>
                  <div className="border-2 border-white absolute bottom-0 right-11 w-11 rounded-full">
                    <Image
                      src="/assets/images/home/pexels-karolina-grabowska-7681192.webp"
                      alt="professionals"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 relative isolate rounded-3xl overflow-hidden">
            <Image
              src="/assets/images/home/GettyImages-1848411099.webp"
              alt="earning"
              fill
              className="-z-10 object-cover"
              sizes="33vw"
            />
            <div className="h-full">
              <div className="h-full flex flex-col justify-between gap-5 w-3/5 bg-white/80 rounded-2xl p-5 op-saturate-180 backdrop-blur-2xl">
                <div>
                  <ChartNoAxesColumnIncreasing className="size-6 text-primary" />
                </div>
                <div>
                  <div>
                    <p className="font-medium">Earning client trust since</p>
                  </div>
                  <div className="mt-2.5">
                    <h3 className="text-primary text-3xl font-medium">2016</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Badge>WHO WE ARE</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
