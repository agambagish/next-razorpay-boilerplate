import { DonateButton } from "@/components/donate-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href="https://github.com/agambagish/next-razorpay-boilerplate"
          className="flex items-center rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          <GithubIcon aria-hidden className="mr-2 size-4" />
          Give it a star ⭐
        </Link>
        <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Boilerplate Code for India&apos;s Domestic Payment System, UPI{" "}
          {"(Unified Payments Interface)"}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Razorpay, one of India&apos;s largest payment gateways, is now
          integrated with Next.js {"(App Router & Server Actions)"}. Click the
          donate button below to experience it in action.
        </p>
        <div className="space-x-4">
          <DonateButton />
          <Link
            href="https://github.com/agambagish/next-razorpay-boilerplate"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
