import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <title>Modelado 3D</title>
      </header>
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center">
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold mt-4">Welcome to Next.js!</h1>
        <h2 className="text-2xl mt-4">Modelado 3d</h2>
      </main>
    </div>
    </>
  );
}
