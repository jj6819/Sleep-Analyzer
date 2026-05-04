import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import SleepCalculatorPage from "@/pages/SleepCalculatorPage";
import SleepCycleCalculatorPage from "@/pages/SleepCycleCalculatorPage";
import PowerNapCalculatorPage from "@/pages/PowerNapCalculatorPage";
import CaffeineCalculatorPage from "@/pages/CaffeineCalculatorPage";
import JetLagPlannerPage from "@/pages/JetLagPlannerPage";
import SleepLatencyPage from "@/pages/SleepLatencyPage";
import WakeWindowPage from "@/pages/WakeWindowPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/sleep-calculator" component={SleepCalculatorPage} />
      <Route path="/sleep-cycle-calculator" component={SleepCycleCalculatorPage} />
      <Route path="/power-nap-calculator" component={PowerNapCalculatorPage} />
      <Route path="/caffeine-calculator" component={CaffeineCalculatorPage} />
      <Route path="/jet-lag-planner" component={JetLagPlannerPage} />
      <Route path="/sleep-latency" component={SleepLatencyPage} />
      <Route path="/wake-window" component={WakeWindowPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
