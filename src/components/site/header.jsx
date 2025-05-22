import { Menu, Book, Settings, Code2, Briefcase, Users, BarChart3 } from "lucide-react";
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
import React from "react";

// Bottlenose dolphin + wave SVG
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M8 20c4-8 16-8 16 0" stroke="#0ea5e9" strokeWidth="2" fill="none" />
    <path d="M6 24c4 2 16 2 20 0" stroke="#38bdf8" strokeWidth="2" fill="none" />
    <path d="M16 16l2-4" stroke="#0ea5e9" strokeWidth="2" fill="none" />
  </svg>
);

const defaultMenu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Platform",
    url: "#",
    items: [
      {
        title: "Features",
        url: "#features",
        icon: <Book className="size-5 shrink-0 text-muted-foreground" />,
        description: "Explore all platform capabilities",
      },
      {
        title: "How It Works",
        url: "#how-it-works",
        icon: <Settings className="size-5 shrink-0 text-muted-foreground" />,
        description: "See the workflow in action",
      },
      {
        title: "API & Docs",
        url: "#api-docs",
        icon: <Code2 className="size-5 shrink-0 text-muted-foreground" />,
        description: "Integrate or learn more",
      },
    ],
  },
  {
    title: "Solutions",
    url: "#",
    items: [
      {
        title: "Daily Briefings",
        url: "#daily-briefings",
        icon: <Briefcase className="size-5 shrink-0 text-muted-foreground" />,
        description: "Automated news and updates",
      },
      {
        title: "Agency Edition",
        url: "#agency-edition",
        icon: <Users className="size-5 shrink-0 text-muted-foreground" />,
        description: "Multi-client, multi-brand support",
      },
      {
        title: "Enterprise Insights",
        url: "#enterprise-insights",
        icon: <BarChart3 className="size-5 shrink-0 text-muted-foreground" />,
        description: "Analytics and reporting at scale",
      },
    ],
  },
];

const defaultAuth = {
  login: { title: "Login", url: "/auth/signin" },
  signup: { title: "Get Started", url: "/auth/signup" },
};

const defaultLogo = {
  url: "/",
  src: "",
  alt: "logo",
  title: "Bottlenose",
};

const Header = ({
  logo = defaultLogo,
  menu = defaultMenu,
  auth = defaultAuth,
}) => {
  return (
    <section className="py-4">
      <div className="container mx-auto items-center justify-between px-4">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <LogoIcon />
              <span className="text-lg font-bold tracking-tighter text-sky-700">
                {logo.title}
              </span>
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
            <Button asChild variant="outline" size="lg">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild size="lg">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <LogoIcon />
              <span className="text-lg font-bold tracking-tighter text-sky-700">
                {logo.title}
              </span>
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
                    <a href={logo.url} className="flex items-center gap-2">
                      <LogoIcon />
                      <span className="text-lg font-bold tracking-tighter text-sky-700">
                        {logo.title}
                      </span>
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

function renderMenuItem(item) {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground p-2 rounded shadow">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
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
        {item.description && (
          <span className="ml-2 text-xs text-muted-foreground">{item.description}</span>
        )}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function renderMobileMenuItem(item) {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }
  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
      {item.description && (
        <span className="block text-xs text-muted-foreground">{item.description}</span>
      )}
    </a>
  );
}

function SubMenuLink({ item }) {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.icon && <div className="text-muted-foreground">{item.icon}</div>}
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-xs leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
}

export { Header };
export default Header;
