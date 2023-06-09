import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import { classNames } from "../utility/classNames";
import Navbar from "./Navbar/Navbar";
import { routes } from "../routes/navigationRoutes";

const openSans = Open_Sans({
  subsets: ["latin"],
});

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div
        className={classNames(
          "min-h-screen px-6 sm:px-14 md:px-20",
          openSans.className,
        )}
      >
        <Navbar routes={routes} />
        <main className={classNames("pt-20 sm:py-24", openSans.className)}>
          {props.children}
        </main>
      </div>
      <footer className="bg-tera-500 px-4 py-2 text-zinc-100">
        Amit Chauhan @2023
      </footer>
    </>
  );
}
