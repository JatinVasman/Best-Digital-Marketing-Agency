"use client";

export default function GradientBlobs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ember blob — top left */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #e85d3a 0%, transparent 70%)",
          animation: "blob-morph-1 20s ease-in-out infinite",
        }}
      />
      {/* Deep red blob — bottom right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #c23616 0%, transparent 70%)",
          animation: "blob-morph-2 25s ease-in-out infinite",
        }}
      />
      {/* Gold blob — center */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #e2b74b 0%, transparent 70%)",
          animation: "blob-morph-3 22s ease-in-out infinite",
        }}
      />
    </div>
  );
}
