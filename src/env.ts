/* eslint-disable node/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RAZORPAY_KEY_ID: z.string(),
    RAZORPAY_KEY_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_RAZORPAY_KEY_ID: z.string(),
  },
  runtimeEnv: {
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  },
  emptyStringAsUndefined: true,
  onValidationError: (issues) => {
    console.error(
      "❌ Invalid env variables:",
      JSON.stringify(issues.map(
        i => ({ [i.path?.[0] as string]: i.message.toLowerCase() }),
      ), null, 2),
    );
    process.exit(1);
  },
  onInvalidAccess: () => {
    throw new Error(
      "❌ Attempted to access a server-side environment variable on the client",
    );
  },
});
