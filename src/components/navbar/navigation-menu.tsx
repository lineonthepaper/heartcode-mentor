import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu";

import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export function NavigationBar() {
    return(
    <NavigationMenu className="flex flex-row justify-between min-w-full list-none h-16 sticky top-0">
        <div className="flex flex-row">
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                    </NavigationMenuLink>
                </Link>
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
        </div>
        
        <div>
        <ModeToggle/>
        </div>
    </NavigationMenu>
    )
}