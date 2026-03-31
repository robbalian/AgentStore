import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="border-b py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6">
          <Link href="/" className="font-bold text-indigo-600">
            BrushFit
          </Link>
          <div className="flex gap-4 text-sm">
            <Link href="/blog" className="text-gray-500 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/api/info"
              className="text-gray-500 hover:text-gray-900"
            >
              API
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
