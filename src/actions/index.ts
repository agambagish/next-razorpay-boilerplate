"use server";

import { razorpay } from "@/lib/razorpay";
import { tryCatch } from "@/lib/try-catch";

export async function createRazorpayOrder(amount: number) {
  const { data, error } = await tryCatch(
    razorpay.orders.create({
      amount: (amount * 100).toString(),
      currency: "INR",
      receipt: Date.now().toString(),
      payment_capture: true,
    }),
  );

  if (error) {
    return {
      data: null,
      error: "Something went wrong.",
    };
  }

  return {
    data: {
      id: data.id,
      amount: data.amount,
    },
    error: null,
  };
}
