"use client";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" flex h-full items-center justify-between border-b px-10 py-5 backdrop-blur-sm dark:border-gray-800 ">
      <Link to={"/"}>
        <h1 className="font-nunito text-3xl font-extrabold">
          <span className="text-rose-600">Cool</span>
          <span>Stuff</span>
        </h1>
      </Link>
      <div className="space-x-10">
        <Popover>
          <PopoverTrigger>
            <Button variant={"outline"} className="space-x-5 rounded-2xl">
              <span>More</span>
              <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-[250px] rounded-3xl">
            <div className="space-y-3 text-sm">
              <h1>Show the more</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, alias labore voluptate ut quam esse officia molestias
                pariatur nesciunt voluptates.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, animi aliquam! Quidem vel soluta eaque earum
                perferendis quo odit aut vitae perspiciatis dignissimos
                excepturi quos provident maxime, doloremque dolorum aliquid.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="rounded-full border border-dashed border-zinc-500 p-2 dark:border-zinc-300"
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
