import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    DropdownMenuShortcut
} from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    Moon,
    Sun
} from "lucide-react";
import { useTheme } from "@/components/theme-provider"

export default function LayoutDashboard() {
    const { setTheme } = useTheme()

  return (
    <>
        <header>
            
        </header>
        <section className="h-24 flex justify-between items-center  mx-12 rounded-lg mt-4 mb-2 ">
            <div className="justify-start flex ml-12 items-center">
                <img src="/Logos/lagartos2.png" alt="Logo de la Liga" className="h-32 mr-6" />
                <Link to={'/'}>
                    <Button
                        variant={
                            location.pathname.includes("/")
                            ? "secondary"
                            : "link"
                        }
                        className="font-bold text-sm mx-4"
                    >
                        Calendario
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button
                        variant={
                            location.pathname.includes("/test")
                            ? "secondary"
                            : "link"
                        }
                        className="font-bold text-sm mx-4"
                    >
                        Clasificación
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button
                        variant={
                            location.pathname.includes("/test")
                            ? "secondary"
                            : "link"
                        }
                        className="font-bold text-sm mx-4"
                    >
                        Equipos/Estadísticas
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button
                        variant={
                            location.pathname.includes("/test")
                            ? "secondary"
                            : "link"
                        }
                        className="font-bold text-sm mx-4"
                    >
                        Infromación
                    </Button>
                </Link>
            </div>
            <div className="mr-28">
                <div className="flex w-28 justify-between">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback></AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Keyboard className="mr-2 h-4 w-4" />
                                <span>Keyboard shortcuts</span>
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                <span>Team</span>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Invite users</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span>Email</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            <span>Message</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            <span>More...</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                <Plus className="mr-2 h-4 w-4" />
                                <span>New Team</span>
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LifeBuoy className="mr-2 h-4 w-4" />
                            <span>Support</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                            <Cloud className="mr-2 h-4 w-4" />
                            <span>API</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
        </section>
    </>
  )
}
