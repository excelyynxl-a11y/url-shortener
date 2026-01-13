import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">
            LikeItShort
          </p>
          <p className="text-xl font-semibold">
            Shorter URL is a nessassity.
          </p>
          <p className="px-20"> 
            Here, we provide you free URL shortening service with  no additional charge 
            or account set up.
          </p>

          <div className='flex gap-3 justify-start text-white'>
              <Link href="/shorten">
                  <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-600'>Try Now</button>
              </Link>
              <Link href="/github">
                  <button className='bg-purple-800 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-900'>GitHub</button>
              </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image 
            alt="Image of a Vector"
            src="/cut.jpg"
            width={300}
            height={500}
            // fill={true}
            className="mix-blend-darken"
          />
        </div>
      </section>
    </main>
  );
}
