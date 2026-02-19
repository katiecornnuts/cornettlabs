import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import SecretProjects from "@/pages/secret-projects";
import SQLSurvivor from "@/pages/sql-survivor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/secret-projects" component={SecretProjects} />
      <Route path="/sql-survivor" component={SQLSurvivor} />
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
