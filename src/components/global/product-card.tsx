import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function ProductCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <AspectRatio ratio={4 / 3}>
          <Image
            src="/product.png"
            alt="Product image"
            fill
            className="object-cover"
            quality={100}
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="font-medium text-lg">Air Jordan 1</h3>
          <p className="text-sm text-muted-foreground">
            Iconic basketball sneaker blending style, heritage, and performance.
          </p>
        </div>
        <div className="mt-4 font-medium">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(9999)}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Buy now</Button>
      </CardFooter>
    </Card>
  );
}
