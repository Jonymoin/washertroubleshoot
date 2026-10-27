import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const currentPath =
  window.location.pathname.length > 1
    ? window.location.pathname.replace(/\/+$/, "")
    : "/";

// Production pages are prerendered (see scripts/prerender.mjs) and tagged with
// data-route. Hydrate only when the markup belongs to the URL being viewed;
// otherwise (npm run dev, 404 page, unexpected rewrites) render normally.
if (container.hasChildNodes() && container.dataset.route === currentPath) {
  hydrateRoot(container, <App />);
} else {
  container.textContent = "";
  createRoot(container).render(<App />);
}
