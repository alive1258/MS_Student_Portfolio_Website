import ProjectDetailPage from "@/app/components/UI/ProjectDetailPage/ProjectDetailPage";

const page = async ({ params }) => {
  const { slug } = await params; // ✅ await here
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${slug}`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch projects data");
    }

    const singleData = await res.json();

    // const heroItem = datas?.data?.data;

    return <ProjectDetailPage singleData={singleData} />;
  } catch (error) {
    console.error("Hero section fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the hero section.
      </div>
    );
  }
};

export default page;
