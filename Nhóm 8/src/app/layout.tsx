import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký thành viên",
  description:
    "Ứng dụng đăng ký thành viên với Next.js, React Hook Form và Zod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
