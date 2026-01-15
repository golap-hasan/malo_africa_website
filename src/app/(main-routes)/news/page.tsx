import PageLayout from "@/tools/PageLayout";
import NewsList from "@/components/news/news-list";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";

const NewsPage = () => {
  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "News",
            href: "/news",
            isCurrent: true,
          },
        ]}
      />
      <PageLayout paddingSize="small">
        <NewsList />
      </PageLayout>
    </>
  );
};

export default NewsPage;
