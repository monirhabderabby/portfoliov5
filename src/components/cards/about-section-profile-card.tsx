import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="perspective relative w-full max-w-md h-96">
        <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-6 scale-95 translate-y-4 translate-x-2 opacity-60" />

        <div
          className="relative bg-card rounded-2xl p-1 transform -rotate-3 shadow-2xl border border-border"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/betopia_onusthan.jpg"
              alt="Profile"
              className="w-full h-96 object-cover"
              width={200}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
