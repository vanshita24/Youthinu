import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      <div className="w-1/3 h-auto">
        <Image
          layout="responsive"
          src="/images/bg/404.svg"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}
