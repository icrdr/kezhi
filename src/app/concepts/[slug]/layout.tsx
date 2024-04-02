export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen">
      <div className="flex-none w-48 h-screen bg-slate-50 border-r-1 border-black">
        <div className="p-5 text-lg font-bold font-serif">
          - 解剖结构
        </div>
      </div>
      <div className="flex-auto overflow-y-scroll overflow-x-hidden h-screen">
        {children}
      </div>
    </div>
  );
}
