import PageLayout from "@/tools/PageLayout";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import { ProfileSidebar } from "@/components/profile/profile-sidebar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Profile", href: "/profile", isCurrent: true },
        ]}
      />

      <PageLayout paddingSize="small">
        {/* <div className="max-w-7xl mx-auto"> */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar - Left Column */}
            <div className="lg:col-span-4 xl:col-span-3 hidden sm:block">
              <ProfileSidebar />
            </div>

            {/* Main Content - Right Column */}
            <div className="lg:col-span-8 xl:col-span-9">
              {children}
            </div>
          </div>
        {/* </div> */}
      </PageLayout>
    </>
  );
}
