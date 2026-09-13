import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span className="accent-text">ThS. Phạm Lâm Tùng</span>
      </h1>
      <p className="text-lg" style={{ color: "rgb(var(--muted))" }}>
        Nhà đào tạo &amp; Tư vấn AI/EdTech. Bản demo layout đang được hoàn thiện.
      </p>
      <div className="glow-card w-full max-w-md">
        <p className="text-sm" style={{ color: "rgb(var(--muted))" }}>
          Khung giao diện đã sẵn sàng. Các section nội dung sẽ được bổ sung ở
          bước tiếp theo.
        </p>
      </div>
    </main>
  );
}
