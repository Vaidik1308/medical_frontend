import Footer from "@/components/root/footer/Footer";
import RootNavbar from "@/components/root/navbar/RootNavbar";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <div>
            {/* root navbar */}
            <RootNavbar/>
        </div>
        <div className="min-h-[80vh]">
            {children}
        </div>
        <div className="border-t-[1px] border-gray-300 p-5">
            {/* root footer */}
            <Footer/>
        </div>
    </main>
  );
}
