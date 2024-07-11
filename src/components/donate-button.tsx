"use client";

import { createPGOrder } from "@/actions/payment";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const DonateButton = () => {
  const handleDonation = async () => {
    const { id, amount, currency } = await createPGOrder();
    const pgWindow = new window.Razorpay({
      key: process.env.RAZORPAY_KEY_ID,
      name: "Agambagish",
      currency,
      amount,
      order_id: id,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      image: "https://avatars.githubusercontent.com/u/89576841?v=4",
    });

    pgWindow.open();
  };

  return (
    <Button onClick={handleDonation} size="lg">
      Donate
    </Button>
  );
};
