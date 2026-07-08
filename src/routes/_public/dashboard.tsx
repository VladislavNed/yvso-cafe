/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../components/olha/Dashboard'

export const Route = createFileRoute('/_public/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Dashboard/></div>
}
