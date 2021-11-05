import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppShell } from "./app-shell";
import { AuthProvider } from "./domains/auth";
import "./index.css";
import { LoginPage } from "./pages/login";

import { PageNotFound } from "./pages/404";
import { RegisterPage } from "./pages/reg";
import { AllMovies } from "./pages/all-movies";
import { Movie } from "./pages/movie"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppShell>
          <Switch>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path='/movie/:mid'>
              <Movie />
            </Route>
            <Route path="/" exact>
              <AllMovies />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </AppShell>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
