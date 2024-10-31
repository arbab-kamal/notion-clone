"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRightIcon, LogOut, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const UserItem = () => {
	const { user } = useUser();
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div
					className="flex items-center text-sm p-4 w-full 
                    hover:bg-primary/5"
					role="button"
				>
					<div className="gap-x-2 flex items-center max-w-[150px]">
						<Avatar className="size-5">
							<AvatarImage src={user?.imageUrl} />
						</Avatar>
						<span className="text-start line-clamp-1 font-medium">
							{user?.fullName}&apos;s Notion
						</span>
					</div>
					<ChevronsLeftRightIcon className="rotate-90 ml-2 text-muted-foreground size-4" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-80"
				align="start"
				alignOffset={11}
				forceMount
			>
				<div className="flex flex-col space-y-4 p-2">
					<p className="text-xs font-medium leading-none text-muted-foreground">
						{user?.emailAddresses[0].emailAddress}
					</p>
					<div className="flex items-center gap-x-2">
						<div className="rounded-md bg-secondary p-1">
							<Avatar className="size-8">
								<AvatarImage src={user?.imageUrl} />
							</Avatar>
						</div>
						<div className="space-y-1">
							<p className="text-sm line-clamp-1">
								{user?.fullName}&apos;s Notion
							</p>
						</div>
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="w-full cursor-pointer text-muted-foreground flex justify-between">
					<SignOutButton>Log out</SignOutButton>
					<LogOut className="icon-r" />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
