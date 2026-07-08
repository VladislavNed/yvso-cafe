/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "../../components/olha/Dashboard";
import "../../index.css";

export const Route = createFileRoute("/_public/")({
  component: Index,
});

function Index() {
  return <Dashboard />;
}
