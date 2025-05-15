"use client";

import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { createRazorpayOrder } from "@/actions";
import { Button } from "@/components/ui/button";
import { env } from "@/env";

export function BuyNowButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  });

  async function onClick() {
    setIsLoading(true);
    const { data, error } = await createRazorpayOrder(9999);

    if (error) {
      setIsLoading(false);
      return;
    }

    if (data) {
      // @ts-expect-error window.Razorpay available because of useEffect
      const paymentWindow = new window.Razorpay({
        key: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        name: "Agam Shop",
        description: "A development shop",
        currency: "INR",
        order_id: data.id,
        image: "https://avatar.vercel.sh/agam-shop",
        prefill: {
          name: "John Doe",
          email: "johndoe@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#e5e7eb",
        },
        handler: (res: { razorpay_payment_id: string }) => {
          router.push(res.razorpay_payment_id);
        },
      });

      paymentWindow.open();
      setIsLoading(false);
    }
  }

  return (
    <Button
      className="w-full"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && <Loader2Icon className="animate-spin size-4 mr-2" />}
      Buy now
    </Button>
  );
}
