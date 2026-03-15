"use client";

export function EdgeFade({ position }: { position: "top" | "bottom" }) {
  const mask =
    position === "top"
      ? "linear-gradient(to bottom, black, transparent)"
      : "linear-gradient(to bottom, transparent, black)";

  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-[101] h-20 w-full"
      style={{
        [position]: 0,
        maskImage: mask,
        WebkitMaskImage: mask,
        backdropFilter: "blur(1.5rem) saturate(0.8)",
        WebkitBackdropFilter: "blur(1.5rem) saturate(0.8)",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
      }}
    />
  );
}
