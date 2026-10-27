import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { notFoundSeo } from "@/lib/route-seo";

export default function NotFound() {
  useSEO(notFoundSeo);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Sorry, we could not find that page. Go back to the{" "}
            <Link href="/" className="font-semibold text-primary hover:underline">home page</Link>,
            browse our{" "}
            <Link href="/services" className="font-semibold text-primary hover:underline">washing machine repair services</Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">contact us</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
