import { Switch, Route, Redirect, Router as WouterRouter, useLocation } from "wouter";
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
import BlogPost from "./pages/BlogPost";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import RepairDetail from "./pages/RepairDetail";
import { brands, problems } from "./pages/repair-data";

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
        <Route path="/blog/:slug">{(params) => <BlogPost slug={params.slug} />}</Route>
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-conditions" component={TermsAndCondition} />
        {/* Old malformed URL kept as a redirect so existing links/bookmarks still work. */}
        <Route path="/terms&condition">
          <Redirect to="/terms-and-conditions" />
        </Route>
        {brands.map((brand) => (
          <Route key={brand.slug} path={`/brands/${brand.slug}`}>
            <RepairDetail entry={brand} kind="brand" />
          </Route>
        ))}
        {problems.map((problem) => (
          <Route key={problem.slug} path={`/problems/${problem.slug}`}>
            <RepairDetail entry={problem} kind="problem" />
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
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