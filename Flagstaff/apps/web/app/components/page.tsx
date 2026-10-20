"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

import AccordionDemo from "@/components/demos/accordion-demo"
import AlertDemo from "@/components/demos/alert-demo"
import AlertDialogDemo from "@/components/demos/alert-dialog-demo"
import AspectRatioDemo from "@/components/demos/aspect-ratio-demo"
import AttachmentDemo from "@/components/demos/attachment-demo"
import AvatarDemo from "@/components/demos/avatar-demo"
import BadgeDemo from "@/components/demos/badge-demo"
import BreadcrumbDemo from "@/components/demos/breadcrumb-demo"
import BubbleDemo from "@/components/demos/bubble-demo"
import ButtonDemo from "@/components/demos/button-demo"
import ButtonGroupDemo from "@/components/demos/button-group-demo"
import CalendarDemo from "@/components/demos/calendar-demo"
import CardDemo from "@/components/demos/card-demo"
import CarouselDemo from "@/components/demos/carousel-demo"
import ChartDemo from "@/components/demos/chart-demo"
import CheckboxDemo from "@/components/demos/checkbox-demo"
import CollapsibleDemo from "@/components/demos/collapsible-demo"
import ComboboxDemo from "@/components/demos/combobox-demo"
import CommandDemo from "@/components/demos/command-demo"
import ContextMenuDemo from "@/components/demos/context-menu-demo"
import DatePickerDemo from "@/components/demos/date-picker-demo"
import DialogDemo from "@/components/demos/dialog-demo"
import DrawerDemo from "@/components/demos/drawer-demo"
import DropdownMenuDemo from "@/components/demos/dropdown-menu-demo"
import EmptyDemo from "@/components/demos/empty-demo"
import FieldDemo from "@/components/demos/field-demo"
import HoverCardDemo from "@/components/demos/hover-card-demo"
import InputDemo from "@/components/demos/input-demo"
import InputGroupDemo from "@/components/demos/input-group-demo"
import InputOtpDemo from "@/components/demos/input-otp-demo"
import ItemDemo from "@/components/demos/item-demo"
import KbdDemo from "@/components/demos/kbd-demo"
import LabelDemo from "@/components/demos/label-demo"
import MarkerDemo from "@/components/demos/marker-demo"
import MenubarDemo from "@/components/demos/menubar-demo"
import NativeSelectDemo from "@/components/demos/native-select-demo"
import NavigationMenuDemo from "@/components/demos/navigation-menu-demo"
import PaginationDemo from "@/components/demos/pagination-demo"
import PopoverDemo from "@/components/demos/popover-demo"
import ProgressDemo from "@/components/demos/progress-demo"
import QuestionnaireDemo from "@/components/demos/questionnaire-demo"
import RadioGroupDemo from "@/components/demos/radio-group-demo"
import ResizableDemo from "@/components/demos/resizable-demo"
import ScrollAreaDemo from "@/components/demos/scroll-area-demo"
import SelectDemo from "@/components/demos/select-demo"
import SeparatorDemo from "@/components/demos/separator-demo"
import SheetDemo from "@/components/demos/sheet-demo"
import SidebarDemo from "@/components/demos/sidebar-demo"
import SkeletonDemo from "@/components/demos/skeleton-demo"
import SliderDemo from "@/components/demos/slider-demo"
import SonnerDemo from "@/components/demos/sonner-demo"
import SpinnerDemo from "@/components/demos/spinner-demo"
import SwitchDemo from "@/components/demos/switch-demo"
import TableDemo from "@/components/demos/table-demo"
import TabsDemo from "@/components/demos/tabs-demo"
import TabsLineDemo from "@/components/demos/tabs-line-demo"
import TextareaDemo from "@/components/demos/textarea-demo"
import ToggleDemo from "@/components/demos/toggle-demo"
import ToggleGroupDemo from "@/components/demos/toggle-group-demo"
import TooltipDemo from "@/components/demos/tooltip-demo"

type Demo = {
  name: string
  cat: "Layout" | "Overlay" | "Form" | "Action" | "Feedback" | "Data"
  Comp: React.ComponentType
}

const DEMOS: Demo[] = [
  { name: "accordion", cat: "Layout", Comp: AccordionDemo },
  { name: "alert", cat: "Feedback", Comp: AlertDemo },
  { name: "alert-dialog", cat: "Overlay", Comp: AlertDialogDemo },
  { name: "aspect-ratio", cat: "Layout", Comp: AspectRatioDemo },
  { name: "attachment", cat: "Feedback", Comp: AttachmentDemo },
  { name: "avatar", cat: "Data", Comp: AvatarDemo },
  { name: "badge", cat: "Feedback", Comp: BadgeDemo },
  { name: "breadcrumb", cat: "Data", Comp: BreadcrumbDemo },
  { name: "bubble", cat: "Feedback", Comp: BubbleDemo },
  { name: "button", cat: "Action", Comp: ButtonDemo },
  { name: "button-group", cat: "Action", Comp: ButtonGroupDemo },
  { name: "calendar", cat: "Data", Comp: CalendarDemo },
  { name: "card", cat: "Layout", Comp: CardDemo },
  { name: "carousel", cat: "Data", Comp: CarouselDemo },
  { name: "chart", cat: "Data", Comp: ChartDemo },
  { name: "checkbox", cat: "Form", Comp: CheckboxDemo },
  { name: "collapsible", cat: "Layout", Comp: CollapsibleDemo },
  { name: "combobox", cat: "Form", Comp: ComboboxDemo },
  { name: "command", cat: "Action", Comp: CommandDemo },
  { name: "context-menu", cat: "Action", Comp: ContextMenuDemo },
  { name: "date-picker", cat: "Form", Comp: DatePickerDemo },
  { name: "dialog", cat: "Overlay", Comp: DialogDemo },
  { name: "drawer", cat: "Overlay", Comp: DrawerDemo },
  { name: "dropdown-menu", cat: "Action", Comp: DropdownMenuDemo },
  { name: "empty", cat: "Feedback", Comp: EmptyDemo },
  { name: "field", cat: "Form", Comp: FieldDemo },
  { name: "hover-card", cat: "Overlay", Comp: HoverCardDemo },
  { name: "input", cat: "Form", Comp: InputDemo },
  { name: "input-group", cat: "Form", Comp: InputGroupDemo },
  { name: "input-otp", cat: "Form", Comp: InputOtpDemo },
  { name: "item", cat: "Feedback", Comp: ItemDemo },
  { name: "kbd", cat: "Action", Comp: KbdDemo },
  { name: "label", cat: "Form", Comp: LabelDemo },
  { name: "marker", cat: "Feedback", Comp: MarkerDemo },
  { name: "menubar", cat: "Action", Comp: MenubarDemo },
  { name: "native-select", cat: "Form", Comp: NativeSelectDemo },
  { name: "navigation-menu", cat: "Data", Comp: NavigationMenuDemo },
  { name: "pagination", cat: "Data", Comp: PaginationDemo },
  { name: "popover", cat: "Overlay", Comp: PopoverDemo },
  { name: "progress", cat: "Feedback", Comp: ProgressDemo },
  { name: "questionnaire", cat: "Form", Comp: QuestionnaireDemo },
  { name: "radio-group", cat: "Form", Comp: RadioGroupDemo },
  { name: "resizable", cat: "Layout", Comp: ResizableDemo },
  { name: "scroll-area", cat: "Layout", Comp: ScrollAreaDemo },
  { name: "select", cat: "Form", Comp: SelectDemo },
  { name: "separator", cat: "Layout", Comp: SeparatorDemo },
  { name: "sheet", cat: "Overlay", Comp: SheetDemo },
  { name: "sidebar", cat: "Layout", Comp: SidebarDemo },
  { name: "skeleton", cat: "Feedback", Comp: SkeletonDemo },
  { name: "slider", cat: "Form", Comp: SliderDemo },
  { name: "sonner", cat: "Feedback", Comp: SonnerDemo },
  { name: "spinner", cat: "Feedback", Comp: SpinnerDemo },
  { name: "switch", cat: "Form", Comp: SwitchDemo },
  { name: "table", cat: "Data", Comp: TableDemo },
  { name: "tabs", cat: "Layout", Comp: TabsDemo },
  { name: "tabs (line)", cat: "Layout", Comp: TabsLineDemo },
  { name: "textarea", cat: "Form", Comp: TextareaDemo },
  { name: "toggle", cat: "Form", Comp: ToggleDemo },
  { name: "toggle-group", cat: "Form", Comp: ToggleGroupDemo },
  { name: "tooltip", cat: "Overlay", Comp: TooltipDemo },
]

const CATEGORIES = ["All", "Layout", "Overlay", "Form", "Action", "Feedback", "Data"] as const
const VIEWS = ["Components", "Design tokens", "Mascot", "Icons"] as const

export default function ComponentsPage() {
  const [view, setView] = React.useState<(typeof VIEWS)[number]>("Components")
  const [active, setActive] = React.useState<(typeof CATEGORIES)[number]>("All")
  const items = active === "All" ? DEMOS : DEMOS.filter((d) => d.cat === active)
  const counts = CATEGORIES.reduce<Record<string, number>>((acc, c) => {
    acc[c] = c === "All" ? DEMOS.length : DEMOS.filter((d) => d.cat === c).length
    return acc
  }, {})

  return (
    <div className="min-h-svh">
      <header className="mx-auto max-w-7xl px-8 pt-12 pb-6">
        <div className="mb-5 inline-flex rounded-full border bg-muted/40 p-1 text-sm">
          {VIEWS.map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "rounded-full px-4 py-1.5 transition-colors",
                view === v
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {v}
            </button>
          ))}
        </div>
        {view === "Components" && (
          <>
            <h1 className="text-4xl font-semibold tracking-tight">Component Directory</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
              {DEMOS.length} shadcn/ui components rendered live from the official demos on ui.shadcn.com. Base UI primitives · Nova preset (Lucide + Geist) · installed into <code className="font-mono text-xs">@workspace/ui</code>.
            </p>
          </>
        )}
        {view === "Design tokens" && (
          <>
            <h1 className="text-4xl font-semibold tracking-tight">Design Tokens</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
              Color ramps, type scale, spacing, radius, and motion tokens for Flagstaff. This view is empty for now — we&apos;re still assembling it.
            </p>
          </>
        )}
        {view === "Mascot" && (
          <>
            <h1 className="text-4xl font-semibold tracking-tight">Mascot</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
              The Flagstaff agent mascot — formation, moods, and motion. This view is empty for now — we&apos;re still assembling it.
            </p>
          </>
        )}
        {view === "Icons" && (
          <>
            <h1 className="text-4xl font-semibold tracking-tight">Icons</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
              Every icon from <code className="font-mono text-xs">lucide-react</code>. Click one to copy its import name.
            </p>
          </>
        )}
      </header>

      {view === "Components" && (
        <>
          <div className="bg-background sticky top-0 z-10 border-b">
            <div className="mx-auto max-w-7xl px-8 py-4 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                    active === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background hover:border-primary/60 border-border text-muted-foreground"
                  )}
                >
                  {c}
                  <span className="text-xs opacity-60">{counts[c]}</span>
                </button>
              ))}
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-8 py-8">
            <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map(({ name, cat, Comp }) => (
                <div
                  key={name}
                  className="group bg-card flex h-full flex-col overflow-hidden rounded-xl border"
                >
                  <div className="flex items-center justify-between border-b px-4 py-3">
                    <code className="font-mono text-sm font-medium">{name}</code>
                    <span className="text-muted-foreground text-[10px] font-semibold tracking-wider uppercase">
                      {cat}
                    </span>
                  </div>
                  <div className="bg-muted/40 flex flex-1 min-h-[260px] items-center justify-center p-6">
                    <ErrorBoundary name={name}>
                      <Comp />
                    </ErrorBoundary>
                  </div>
                  <code className="text-primary bg-muted/60 mt-auto block border-t px-4 py-2 font-mono text-xs">
                    npx shadcn add {name}
                  </code>
                </div>
              ))}
            </div>
          </main>

          <footer className="mx-auto max-w-7xl px-8 py-10 text-xs text-muted-foreground border-t">
            Every demo above is the official source pulled from ui.shadcn.com, with imports rewritten from <code>@/registry/new-york-v4/ui/*</code> to <code>@workspace/ui/components/*</code>. Nothing hand-styled.
          </footer>
        </>
      )}
      {view === "Design tokens" && <TokensView />}
      {view === "Icons" && <IconsView />}
      {view === "Mascot" && (
        <main className="mx-auto max-w-7xl space-y-10 px-8 py-10">
          <section>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="text-lg font-semibold">Formation</h2>
              <span className="text-muted-foreground text-xs">
                flagstaff-mascot-motion-v1.html
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <AutoSizedFrame
                src="/mascot/motion.html"
                title="Flagstaff mascot formation animation"
                minHeight={640}
              />
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="text-lg font-semibold">Moods</h2>
              <span className="text-muted-foreground text-xs">
                flagstaff-mascot-moods-v1.html
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <AutoSizedFrame
                src="/mascot/moods.html"
                title="Flagstaff mascot mood states"
                minHeight={1800}
              />
            </div>
          </section>
        </main>
      )}
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────
// Mascot iframe wrapper — resizes to the embedded page's own content height
// ────────────────────────────────────────────────────────────────────────

function AutoSizedFrame({
  src,
  title,
  minHeight,
}: {
  src: string
  title: string
  minHeight: number
}) {
  const ref = React.useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = React.useState(minHeight)

  React.useEffect(() => {
    const iframe = ref.current
    if (!iframe) return

    const measure = () => {
      try {
        const doc = iframe.contentDocument
        if (!doc) return
        const h = Math.max(
          minHeight,
          doc.documentElement.scrollHeight,
          doc.body?.scrollHeight ?? 0
        )
        setHeight(h)
      } catch {}
    }

    iframe.addEventListener("load", measure)
    const id = window.setInterval(measure, 500)
    return () => {
      iframe.removeEventListener("load", measure)
      window.clearInterval(id)
    }
  }, [minHeight])

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      className="block w-full"
      style={{ height, border: 0, background: "transparent" }}
    />
  )
}

// ────────────────────────────────────────────────────────────────────────
// Design Tokens view
// ────────────────────────────────────────────────────────────────────────

type ColorToken = { name: string; var: string; light: string; dark: string }
type ColorGroup = { title: string; tokens: ColorToken[] }

const COLOR_GROUPS: ColorGroup[] = [
  {
    title: "Surfaces",
    tokens: [
      { name: "background", var: "--background", light: "#FBFBFC", dark: "#0C0D14" },
      { name: "foreground", var: "--foreground", light: "#0E1030", dark: "#E6E7FA" },
      { name: "card", var: "--card", light: "#FFFFFF", dark: "#15161F" },
      { name: "card-foreground", var: "--card-foreground", light: "#0E1030", dark: "#E6E7FA" },
      { name: "popover", var: "--popover", light: "#FFFFFF", dark: "#15161F" },
      { name: "popover-foreground", var: "--popover-foreground", light: "#0E1030", dark: "#E6E7FA" },
      { name: "muted", var: "--muted", light: "#F2F2F5", dark: "#1E2030" },
      { name: "muted-foreground", var: "--muted-foreground", light: "#6B6E80", dark: "#8A8C9F" },
      { name: "accent", var: "--accent", light: "#F2F2F5", dark: "#1E2030" },
      { name: "accent-foreground", var: "--accent-foreground", light: "#1F2237", dark: "#C9CBDA" },
      { name: "secondary", var: "--secondary", light: "#F2F2F5", dark: "#1E2030" },
      { name: "secondary-foreground", var: "--secondary-foreground", light: "#1F2237", dark: "#C9CBDA" },
    ],
  },
  {
    title: "Brand",
    tokens: [
      { name: "primary", var: "--primary", light: "#545BD1", dark: "#878CE8" },
      { name: "primary-foreground", var: "--primary-foreground", light: "#FFFFFF", dark: "#0E1030" },
      { name: "ring", var: "--ring", light: "#545BD1", dark: "#878CE8" },
    ],
  },
  {
    title: "Semantic",
    tokens: [
      { name: "destructive", var: "--destructive", light: "#F26B6B", dark: "#F26B6B" },
      { name: "success", var: "--success", light: "#2EB884", dark: "#3FD4A0" },
    ],
  },
  {
    title: "Borders & Inputs",
    tokens: [
      { name: "border", var: "--border", light: "#E6E7EC", dark: "#262838" },
      { name: "input", var: "--input", light: "#E6E7EC", dark: "#262838" },
    ],
  },
  {
    title: "Chart",
    tokens: [
      { name: "chart-1", var: "--chart-1", light: "#545BD1", dark: "#878CE8" },
      { name: "chart-2", var: "--chart-2", light: "#2EB8A1", dark: "#3FD3BA" },
      { name: "chart-3", var: "--chart-3", light: "#E8A646", dark: "#F5B964" },
      { name: "chart-4", var: "--chart-4", light: "#F26B6B", dark: "#F58585" },
      { name: "chart-5", var: "--chart-5", light: "#8E5BD9", dark: "#A784EC" },
    ],
  },
  {
    title: "Sidebar",
    tokens: [
      { name: "sidebar", var: "--sidebar", light: "#FBFBFC", dark: "#15161F" },
      { name: "sidebar-foreground", var: "--sidebar-foreground", light: "#0E1030", dark: "#E6E7FA" },
      { name: "sidebar-primary", var: "--sidebar-primary", light: "#545BD1", dark: "#878CE8" },
      { name: "sidebar-primary-foreground", var: "--sidebar-primary-foreground", light: "#FFFFFF", dark: "#0E1030" },
      { name: "sidebar-accent", var: "--sidebar-accent", light: "#F2F2F5", dark: "#1E2030" },
      { name: "sidebar-accent-foreground", var: "--sidebar-accent-foreground", light: "#1F2237", dark: "#C9CBDA" },
      { name: "sidebar-border", var: "--sidebar-border", light: "#E6E7EC", dark: "#262838" },
      { name: "sidebar-ring", var: "--sidebar-ring", light: "#545BD1", dark: "#878CE8" },
    ],
  },
]

const TYPE_SCALE = [
  { cls: "text-xs", rem: "0.75rem", px: "12px", lh: "1rem" },
  { cls: "text-sm", rem: "0.875rem", px: "14px", lh: "1.25rem" },
  { cls: "text-base", rem: "1rem", px: "16px", lh: "1.5rem" },
  { cls: "text-lg", rem: "1.125rem", px: "18px", lh: "1.75rem" },
  { cls: "text-xl", rem: "1.25rem", px: "20px", lh: "1.75rem" },
  { cls: "text-2xl", rem: "1.5rem", px: "24px", lh: "2rem" },
  { cls: "text-3xl", rem: "1.875rem", px: "30px", lh: "2.25rem" },
  { cls: "text-4xl", rem: "2.25rem", px: "36px", lh: "2.5rem" },
  { cls: "text-5xl", rem: "3rem", px: "48px", lh: "1" },
  { cls: "text-6xl", rem: "3.75rem", px: "60px", lh: "1" },
  { cls: "text-7xl", rem: "4.5rem", px: "72px", lh: "1" },
]

const SPACING_SCALE = [0, 0.5, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96]

const RADIUS_SCALE = [
  { cls: "rounded-sm", var: "--radius-sm", mult: "×0.6", rem: "0.375rem" },
  { cls: "rounded-md", var: "--radius-md", mult: "×0.8", rem: "0.5rem" },
  { cls: "rounded-lg", var: "--radius-lg", mult: "×1.0", rem: "0.625rem" },
  { cls: "rounded-xl", var: "--radius-xl", mult: "×1.4", rem: "0.875rem" },
  { cls: "rounded-2xl", var: "--radius-2xl", mult: "×1.8", rem: "1.125rem" },
  { cls: "rounded-3xl", var: "--radius-3xl", mult: "×2.2", rem: "1.375rem" },
  { cls: "rounded-4xl", var: "--radius-4xl", mult: "×2.6", rem: "1.625rem" },
]

// Literal class strings so Tailwind JIT sees them at build time.
const DURATIONS: { cls: string; label: string }[] = [
  { cls: "duration-75", label: "duration-75" },
  { cls: "duration-100", label: "duration-100" },
  { cls: "duration-150", label: "duration-150" },
  { cls: "duration-200", label: "duration-200" },
  { cls: "duration-300", label: "duration-300" },
  { cls: "duration-500", label: "duration-500" },
  { cls: "duration-700", label: "duration-700" },
  { cls: "duration-1000", label: "duration-1000" },
]
const EASINGS: { cls: string; label: string }[] = [
  { cls: "ease-linear", label: "ease-linear" },
  { cls: "ease-in", label: "ease-in" },
  { cls: "ease-out", label: "ease-out" },
  { cls: "ease-in-out", label: "ease-in-out" },
]

function TokensView() {
  const [dark, setDark] = React.useState(false)

  return (
    <main className="mx-auto max-w-7xl px-8">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-muted-foreground text-xs">
          Previewing <span className="font-mono">{dark ? ".dark" : ":root"}</span> scope. Swatches read live from CSS vars; hex labels show the declared value in <code className="font-mono">globals.css</code>.
        </p>
        <button
          onClick={() => setDark((v) => !v)}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
            "bg-background hover:border-primary/60 border-border text-foreground"
          )}
        >
          <span className="relative inline-flex h-4 w-7 items-center rounded-full bg-muted">
            <span
              className={cn(
                "absolute top-0.5 h-3 w-3 rounded-full bg-primary transition-transform",
                dark ? "translate-x-3.5" : "translate-x-0.5"
              )}
            />
          </span>
          {dark ? "Dark" : "Light"} mode
        </button>
      </div>

      <div className={cn(dark && "dark", "bg-background text-foreground rounded-2xl border p-8 transition-colors")}>
        {/* ─── Colors ─── */}
        <TokenSection title="Colors" caption="Every semantic color pair. Hover a swatch to see the computed value overlay.">
          <div className="space-y-10">
            {COLOR_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-muted-foreground mb-3 font-mono text-xs uppercase tracking-wider">{group.title}</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.tokens.map((t) => (
                    <ColorSwatch key={t.var} token={t} dark={dark} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TokenSection>

        {/* ─── Typography ─── */}
        <TokenSection title="Typography" caption="Geist Sans and Geist Mono, loaded via next/font/google in app/layout.tsx and exposed as --font-sans and --font-mono.">
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <div className="mb-3 flex items-baseline justify-between">
                <code className="text-primary font-mono text-xs">--font-sans</code>
                <code className="text-muted-foreground font-mono text-[10px]">
                  --font-heading (alias)
                </code>
              </div>
              <div className="font-sans text-4xl font-medium leading-none tracking-tight">
                Geist Sans
              </div>
              <div className="text-muted-foreground mt-2 font-sans text-sm">
                UI, headings, body copy. The quick brown fox jumps over the lazy dog.
              </div>
              <div className="text-muted-foreground mt-3 font-sans text-xs tabular-nums">
                100 200 300 400 500 600 700 800 900
              </div>
            </div>
            <div className="rounded-lg border p-5">
              <div className="mb-3 flex items-baseline justify-between">
                <code className="text-primary font-mono text-xs">--font-mono</code>
                <code className="text-muted-foreground font-mono text-[10px]">
                  code · kbd · tokens
                </code>
              </div>
              <div className="font-mono text-4xl font-medium leading-none tracking-tight">
                Geist Mono
              </div>
              <div className="text-muted-foreground mt-2 font-mono text-sm">
                npx shadcn add chart · ⌘K · 0x5A5DD9
              </div>
              <div className="text-muted-foreground mt-3 font-mono text-xs tabular-nums">
                0 1 2 3 4 5 6 7 8 9 · aA bB oO lI
              </div>
            </div>
          </div>
          <div className="space-y-5">
            {TYPE_SCALE.map((t) => (
              <div key={t.cls} className="flex flex-wrap items-baseline gap-6 border-b pb-5 last:border-b-0">
                <div className="min-w-[7rem] space-y-0.5">
                  <code className="text-primary font-mono text-xs">{t.cls}</code>
                  <div className="text-muted-foreground font-mono text-[10px]">
                    {t.rem} · {t.px} · lh {t.lh}
                  </div>
                </div>
                <div className={cn(t.cls, "font-sans leading-tight")}>
                  The quick brown fox
                </div>
              </div>
            ))}
          </div>
        </TokenSection>

        {/* ─── Spacing ─── */}
        <TokenSection title="Spacing" caption="Tailwind scale, 1 unit = 0.25rem (4px). A sampled subset to show the ramp.">
          <div className="space-y-2">
            {SPACING_SCALE.map((n) => (
              <div key={n} className="flex items-center gap-4">
                <code className="text-primary min-w-[4.5rem] font-mono text-xs">
                  p-{n === 0 ? "0" : n}
                </code>
                <div className="text-muted-foreground min-w-[5rem] font-mono text-[10px]">
                  {n * 0.25}rem · {n * 4}px
                </div>
                <div
                  className="bg-primary h-4 rounded-sm"
                  style={{ width: `${Math.max(n * 4, 2)}px` }}
                />
              </div>
            ))}
          </div>
        </TokenSection>

        {/* ─── Radius ─── */}
        <TokenSection title="Radius" caption="All radii derive from --radius (0.625rem) via a multiplier.">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {RADIUS_SCALE.map((r) => (
              <div key={r.cls} className="flex flex-col items-center gap-2">
                <div className={cn(r.cls, "bg-primary/15 border-primary/40 h-20 w-20 border-2")} />
                <div className="text-center">
                  <code className="text-primary font-mono text-xs">{r.cls}</code>
                  <div className="text-muted-foreground mt-0.5 font-mono text-[10px]">
                    {r.mult} · {r.rem}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TokenSection>

        {/* ─── Motion ─── */}
        <TokenSection title="Motion" caption="Hover any tile to animate. Flagstaff uses Tailwind's default duration + easing scales (no custom motion tokens declared).">
          <div className="space-y-6">
            <div>
              <h3 className="text-muted-foreground mb-3 font-mono text-xs uppercase tracking-wider">Duration</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                {DURATIONS.map((d) => (
                  <MotionTile key={d.cls} label={d.label} className={d.cls} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-muted-foreground mb-3 font-mono text-xs uppercase tracking-wider">Easing</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {EASINGS.map((e) => (
                  <MotionTile key={e.cls} label={e.label} className={cn(e.cls, "duration-500")} />
                ))}
              </div>
            </div>
          </div>
        </TokenSection>
      </div>

      <footer className="py-10 text-xs text-muted-foreground">
        Tokens are sourced from <code className="font-mono">packages/ui/src/styles/globals.css</code>. Change a value there and this view updates on reload.
      </footer>
    </main>
  )
}

function TokenSection({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return (
    <section className="border-b py-10 first:pt-0 last:border-b-0 last:pb-0">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground mt-1 max-w-2xl text-xs">{caption}</p>
      </div>
      {children}
    </section>
  )
}

function ColorSwatch({ token, dark }: { token: ColorToken; dark: boolean }) {
  const hex = dark ? token.dark : token.light
  return (
    <div className="group bg-card flex items-center gap-3 overflow-hidden rounded-lg border p-2.5">
      <div
        className="h-12 w-12 shrink-0 rounded-md border"
        style={{ backgroundColor: `var(${token.var})` }}
        aria-label={`${token.name} swatch`}
      />
      <div className="min-w-0 flex-1">
        <code className="block truncate font-mono text-xs font-medium">{token.name}</code>
        <code className="text-muted-foreground block truncate font-mono text-[10px]">{token.var}</code>
        <code className="text-muted-foreground/80 block font-mono text-[10px] uppercase">{hex}</code>
      </div>
    </div>
  )
}

function MotionTile({ label, className }: { label: string; className: string }) {
  // The outer div is the `group`; on hover, the inner block slides to the right
  // using whatever duration/easing className we were given.
  return (
    <div className="group bg-card relative flex h-20 cursor-pointer items-center overflow-hidden rounded-lg border px-2">
      <div
        className={cn(
          "bg-primary/70 h-10 w-10 translate-x-0 rounded-md transition-transform group-hover:translate-x-24",
          className
        )}
      />
      <code className="text-primary absolute inset-x-0 bottom-1.5 text-center font-mono text-[10px]">{label}</code>
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────
// Icons view — every lucide-react icon
// ────────────────────────────────────────────────────────────────────────

const ICON_ENTRIES: [string, LucideIcon][] = Object.entries(LucideIcons)
  .filter(
    ([name, value]) =>
      typeof value === "object" &&
      value !== null &&
      "$$typeof" in (value as object) &&
      /^[A-Z]/.test(name) &&
      !name.endsWith("Icon") &&
      !name.startsWith("Lucide") &&
      name !== "Icon" &&
      name !== "createLucideIcon"
  )
  .sort(([a], [b]) => a.localeCompare(b)) as [string, LucideIcon][]

const ICONS_PER_PAGE = 100

function buildPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = new Set<number>([1, total, current, current - 1, current + 1])
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b)
  const out: (number | "ellipsis")[] = []
  for (let i = 0; i < sorted.length; i++) {
    const p = sorted[i]!
    if (i > 0 && p - sorted[i - 1]! > 1) out.push("ellipsis")
    out.push(p)
  }
  return out
}

function IconsView() {
  const [query, setQuery] = React.useState("")
  const [page, setPage] = React.useState(1)
  const [copied, setCopied] = React.useState<string | null>(null)

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ICON_ENTRIES
    return ICON_ENTRIES.filter(([name]) => name.toLowerCase().includes(q))
  }, [query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ICONS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * ICONS_PER_PAGE
  const pageItems = filtered.slice(start, start + ICONS_PER_PAGE)
  const pageList = buildPageList(currentPage, totalPages)

  React.useEffect(() => {
    setPage(1)
  }, [query])

  const goto = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages)
    setPage(next)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleCopy = (name: string) => {
    void navigator.clipboard?.writeText(name)
    setCopied(name)
    window.setTimeout(() => {
      setCopied((c) => (c === name ? null : c))
    }, 1200)
  }

  return (
    <>
      <div className="bg-background sticky top-0 z-10 border-b">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-8 py-4">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search icons…"
            className="border-border bg-background focus:border-primary/60 focus:ring-primary/20 w-full max-w-sm rounded-full border px-4 py-1.5 text-sm outline-none transition-colors focus:ring-2"
          />
          <span className="text-muted-foreground text-xs">
            {filtered.length === 0
              ? "0 icons"
              : `${start + 1}–${start + pageItems.length} of ${filtered.length}`}
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-8 py-8">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(104px,1fr))] gap-3">
          {pageItems.map(([name, Icon]) => (
            <button
              key={name}
              type="button"
              onClick={() => handleCopy(name)}
              title={name}
              className="group bg-card hover:border-primary/60 flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border p-3 transition-colors"
            >
              <Icon className="text-foreground h-6 w-6" strokeWidth={1.75} />
              <code className="text-muted-foreground group-hover:text-foreground w-full truncate text-center font-mono text-[10px] transition-colors">
                {copied === name ? "Copied!" : name}
              </code>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-muted-foreground py-16 text-center text-sm">
            No icons match “{query}”.
          </div>
        )}

        {totalPages > 1 && (
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  aria-disabled={currentPage === 1}
                  className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) goto(currentPage - 1)
                  }}
                />
              </PaginationItem>
              {pageList.map((p, i) =>
                p === "ellipsis" ? (
                  <PaginationItem key={`e-${i}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={p}>
                    <PaginationLink
                      href="#"
                      isActive={p === currentPage}
                      onClick={(e) => {
                        e.preventDefault()
                        goto(p)
                      }}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  aria-disabled={currentPage === totalPages}
                  className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) goto(currentPage + 1)
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>

      <footer className="mx-auto max-w-7xl border-t px-8 py-10 text-xs text-muted-foreground">
        Icons from <code className="font-mono">lucide-react</code>. Click any icon to copy its component name — then import it from <code className="font-mono">lucide-react</code>.
      </footer>
    </>
  )
}

class ErrorBoundary extends React.Component<
  { name: string; children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div className="text-destructive text-xs font-mono max-w-full overflow-hidden">
          <div className="font-semibold">{this.props.name} failed:</div>
          <div className="opacity-80 mt-1 whitespace-pre-wrap break-all">
            {this.state.error.message}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
