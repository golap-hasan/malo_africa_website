"use client";

import PageLayout from "@/tools/PageLayout";
import VoucherForm from "@/components/create/voucher/voucher-form";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";

const CreateVoucherPage = () => {
  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Create Voucher",
            href: "/create/voucher",
            isCurrent: true,
          },
        ]}
      />
      <PageLayout paddingSize="small">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Create New Voucher
              </h1>
              <p className="text-muted-foreground mt-1">
                Create and share vouchers with the Malo Afrika community.
              </p>
            </div>
          </div>
          {/* Main Form Section */}
          <VoucherForm />
        </div>
      </PageLayout>
    </>
  );
};

export default CreateVoucherPage;
