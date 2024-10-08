import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu";

import Link from "next/link";

export function NavigationBar() {
    return(
    <NavigationMenu className="list-none h-16">
        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/quiz" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Quiz
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/about-me" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About me
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    </NavigationMenu>
    )
}