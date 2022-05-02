import { AuthProvider } from "./auth-context";

import React, { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
