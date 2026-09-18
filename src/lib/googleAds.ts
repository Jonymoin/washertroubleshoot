export function trackGoogleAdsConversion() {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;

  if (typeof gtag !== "function") return;

  gtag("event", "conversion", {
    send_to: "AW-17619132152/Hz1YCOuomfIcEPi9utFB",
  });
}