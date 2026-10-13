import { AppSidebar } from "./sidebar-07/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

export default function SidebarDemo() {
  return (
    <div
      className="relative flex h-[420px] w-full overflow-hidden rounded-lg border bg-background [transform:translateZ(0)]"
    >
      <SidebarProvider className="absolute inset-0 min-h-full items-stretch">
        <AppSidebar />
        <SidebarInset className="min-h-0">
          <header className="flex h-10 items-center gap-2 border-b px-3">
            <SidebarTrigger className="-ml-1" />
          </header>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
