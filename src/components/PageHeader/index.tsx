"use client";
import Link from "next/link";
import { routes } from "./router";

const PageHeader = () => {
  return (
    <div
      className="pt-4 pb-4 container page-header flex justify-between absolute "
      style={{ top: "0" }}
    >
      <div className="navigation-bar flex justify-between">
        {routes.map((route) => (
          <div
            className="mr-8 text-mint-800 text-xl font-mono hover:text-mint-200"
            key={route}
          >
            <Link href={route === "home" ? "/" : `/${route}`}>{route}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PageHeader;
