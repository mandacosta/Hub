import React from "react";
import { TechProvider } from "../TechContext";
import { Dashboard } from "../../pages/dashboard/dashboard";

export const TechProviderDashboard = () => {
  return (
    <TechProvider>
      <Dashboard></Dashboard>
    </TechProvider>
  );
};
