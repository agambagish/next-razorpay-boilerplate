import { ProductCard } from "@/components/global/product-card";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Boilerplate Code for India&apos;s Domestic Payment System, UPI (Unified Payments Interface)
        </h1>
        <p className="text-muted-foreground">
          Razorpay, one of India&apos;s largest payment gateways, is now
          integrated with Next.js (App Router & Server Actions). Click the donate button below to experience it in action.
        </p>
      </div>
      <ProductCard />
    </main>
  );
}
