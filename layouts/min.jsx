import Head from "next/head";
import TopBar from "~/components/TopBar";
import { MinFooter } from "~/components/Footers";

export default function Min({ children, className }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>YIU Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className={`flex-grow ${className ? className : ""}`}>
        {children}
      </main>
      <MinFooter />
    </div>
  );
}
