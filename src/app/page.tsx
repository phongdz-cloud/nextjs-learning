import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[700px] h-[700px] bg-red-300">
        <Image
          src="https://images.pexels.com/photos/29076255/pexels-photo-29076255/free-photo-of-vibrant-indoor-market-scene-with-stalls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="phonghh"
          width={200}
          height={200}
          quality={100}
        />
      </div>
    </main>
  );
}
