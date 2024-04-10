const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-[#2eb3a9]">
      {children}
    </div>
  );
};

export default Layout;
