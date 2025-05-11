//Layout
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center justify-center h-screen">
      <div className="flex-1 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
