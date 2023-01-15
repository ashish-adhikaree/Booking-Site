import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-grow-[12] flex flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
