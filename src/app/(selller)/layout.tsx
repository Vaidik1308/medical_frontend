import SellerSideBar from "@/components/seller/sidebar/SellerSideBar";
import VendorSideBar from "@/components/vender/sidebar/VendorSideBar";





export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex bg-gray-100 w-full py-2 min-h-screen gap-8">
        <div className=" p-2 rounded-r-lg flex-[1.5] bg-white shadow-lg ">
            {/* sidebar */}
            <SellerSideBar/>
        </div>
        <div className="flex-[5] bg-white  p-4 rounded-l-lg shadow-lg ">{children}</div>
    </main>
  );
}
