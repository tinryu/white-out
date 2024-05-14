
export default function DashboardLayout({children}: {children: React.ReactNode;}) {
  return (
    <>
      <main className="w-full min-h-screen flex justify-center p-6">{children}</main>
    </>
    );
}
