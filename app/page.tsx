import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black bg-sky-200">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-sky-200 dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className='grid place-items-center'>
          <Image
            className="mt-6"
            src="/tailwindcss-logo.svg"
            alt="Tailwind CSS Logo"
            width={180}
            height={37}
            priority
          />
          <Card className="mt-4 w-fit bg-white/60 p-2 shadow-lg backdrop-blur-md dark:bg-black/60">
            <span className="text-zinc-700 dark:text-zinc-300">
              Powered by Tailwind CSS
            </span>
          </Card> 
          <Card className="mt-4 w-fit bg-white/60 p-2 shadow-lg backdrop-blur-md dark:bg-black/60">
            <span className="text-zinc-700 dark:text-zinc-300">
              and Next.js App Router
            </span>
          </Card>
        </div>
        <Card className="w-full bg-white/60 p-6 shadow-lg backdrop-blur-md dark:bg-black/60">
          <h2 className="mb-4 text-2xl font-semibold dark:text-zinc-50">
            Welcome to Next.js App Router with Tailwind CSS!
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            This is a starter template for building applications using Next.js
            App Router and Tailwind CSS. It includes everything you need to get
            started quickly.
          </p>
        </Card>
        <Card className="w-full bg-white/60 p-6 shadow-lg backdrop-blur-md dark:bg-black/60 mt-8">
          <h2 className="mb-4 text-2xl font-semibold dark:text-zinc-50">
            Features Included:
          </h2>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Next.js App Router setup</li>
            <li>Tailwind CSS integration</li>
            <li>Dark mode support</li>
            <li>Responsive design</li>
            <li>Pre-configured ESLint and Prettier</li>
          </ul>
        </Card>
        <Card className="w-full bg-white/60 p-6 shadow-lg backdrop-blur-md dark:bg-black/60 mt-8">
          <h2 className="mb-4 text-2xl font-semibold dark:text-zinc-50">
            Getting Started:
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            To start developing your application, simply edit the files in the
            <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">app/</code>{" "}
            directory. You can run the development server using{" "}
            <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">
              npm run dev
            </code>
            .
          </p>
        </Card>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight dark:text-zinc-50 text-blue-600 sm:text-4xl sm:leading-11">
            To get started, edit the page.tsx file here and here.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
