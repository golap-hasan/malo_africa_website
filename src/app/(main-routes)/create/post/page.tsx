"use client";

import { useState } from "react";
import PageLayout from "@/tools/PageLayout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Briefcase } from "lucide-react";
import ProductForm from "@/components/create/post/product-form";
import ServiceForm from "@/components/create/post/service-form";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";

type PostType = "product" | "service";

const CreatePostPage = () => {
  const [postType, setPostType] = useState<PostType>("product");

  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Create Post",
            href: "/create/post",
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
                Create New Post
              </h1>
              <p className="text-muted-foreground mt-1">
                Share your products or services with the Malo Afrika community.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-xl">
              <Tabs
                value={postType}
                onValueChange={(v) => setPostType(v as PostType)}
                className="w-full md:w-auto"
              >
                <TabsList className="grid w-full grid-cols-2 h-10">
                  <TabsTrigger value="product" className="gap-2 px-6">
                    <ShoppingBag className="h-4 w-4" />
                    Product
                  </TabsTrigger>
                  <TabsTrigger value="service" className="gap-2 px-6">
                    <Briefcase className="h-4 w-4" />
                    Service
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          {/* Main Form Section */}
          {postType === "product" ? <ProductForm /> : <ServiceForm />}
        </div>
      </PageLayout>
    </>
  );
};

export default CreatePostPage;
