import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Placeholder SVG for dolphin + wave icon
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    {/* Dolphin body */}
    <path d="M8 20c4-8 16-8 16 0" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
    {/* Wave */}
    <path d="M6 24c4 2 16 2 20 0" stroke="#38bdf8" strokeWidth="2" fill="none"/>
    {/* Dolphin fin */}
    <path d="M16 16l2-4" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
  </svg>
);

const menu = [
  {
    title: "Platform",
    url: "#",
    items: [
      { title: "Features", url: "#features" },
      { title: "How It Works", url: "#how-it-works" },
      { title: "API & Docs", url: "#api-docs" },
    ],
  },
  {
    title: "Solutions",
    url: "#",
    items: [
      { title: "Daily Briefings", url: "#daily-briefings" },
      { title: "Agency Edition", url: "#agency-edition" },
      { title: "Enterprise Insights", url: "#enterprise-insights" },
    ],
  },
];

const auth = {
  login: { title: "Login", url: "/auth/signin" },
  signup: { title: "Get Started", url: "#get-started" },
};

const Header = () => {
  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <LogoIcon />
              <span className="text-lg font-bold tracking-tighter text-sky-700">Bottlenose</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <LogoIcon />
              <span className="text-lg font-bold tracking-tighter text-sky-700">Bottlenose</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href="/" className="flex items-center gap-2">
                      <LogoIcon />
                      <span className="text-lg font-bold tracking-tighter text-sky-700">Bottlenose</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              asChild
              key={subItem.title}
              className="w-56"
            >
              <a
                href={subItem.url}
                className="block px-4 py-2 text-sm hover:bg-muted rounded"
              >
                {subItem.title}
              </a>
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              href={subItem.url}
              className="block px-4 py-2 text-sm rounded hover:bg-muted"
            >
              {subItem.title}
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }
  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

export { Header };
export default Header;
