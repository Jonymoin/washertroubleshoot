import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms&condition" component={TermsAndCondition} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, "")}
        >
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>

        <Toaster position="top-center" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;