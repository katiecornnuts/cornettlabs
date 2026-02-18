import SQLSurvivor from "./SQLSurvivor";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SecretProjects from "@/pages/secret-projects";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/secret-projects" component={SecretProjects} />
      <Route path="/SQLSurvivor" element={<SQLSurvivor />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
