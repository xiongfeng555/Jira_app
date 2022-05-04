import { AuthProvider } from "./auth-context";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>;
    </QueryClientProvider>
  );
}
