/* eslint-disable node/no-process-env */
"use server";

import Razorpay from "razorpay";

export async function createPGOrder() {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const order = await razorpay.orders.create({
    amount: (99 * 100).toString(),
    currency: "INR",
    receipt: Date.now().toString(),
    payment_capture: true,
  });

  return {
    id: order.id,
    currency: order.currency,
    amount: order.amount,
  };
}
