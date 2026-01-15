"use client";

import PageLayout from "@/tools/PageLayout";
import EventForm from "@/components/create/event/event-form";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";

const CreateEventPage = () => {
  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Create Event",
            href: "/create/event",
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
                Create New Event
              </h1>
              <p className="text-muted-foreground mt-1">
                Share your upcoming event with the Malo Afrika community.
              </p>
            </div>
          </div>
          {/* Main Form Section */}
          <EventForm />
        </div>
      </PageLayout>
    </>
  );
};

export default CreateEventPage;
