import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <p className="mb-8 text-xl font-bold">
          Hello Blinks!!
        </p>
        <Image
          src="/21.png"
          alt="Centered Image"
          width={400}
          height={400}
        />
      </div>
    </main>
  );
}