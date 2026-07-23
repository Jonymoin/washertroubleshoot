// Conversion tracking helper. Calls gtag conversion event before the action.
export function trackConversion(label?: string, cb?: () => void) {
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof window !== "undefined" && typeof w.gtag === "function") {
      w.gtag("event", "conversion", {
        send_to: "AW-17619132152",
        event_label: label ?? "click",
      });
    }
  } catch {
    // ignore
  }
  if (cb) cb();
}
