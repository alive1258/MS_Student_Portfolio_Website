import ArticleDetailsPage from "@/app/components/UI/ArticleDetailsPage/ArticleDetailsPage";

const page = async ({ params }) => {
  const { slug } = await params; // ✅ await here
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch articles data");
    }

    const singleData = await res.json();

    // const heroItem = datas?.data?.data;

    return <ArticleDetailsPage singleData={singleData} />;
  } catch (error) {
    console.error("articles section fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the articles section.
      </div>
    );
  }
};

export default page;
