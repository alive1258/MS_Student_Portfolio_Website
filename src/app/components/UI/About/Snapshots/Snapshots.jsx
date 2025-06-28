import SnapshotClient from "./SnapshotClient";

const Snapshots = async () => {
  try {
    const res1 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/snapshots-category`,
      {
        next: { revalidate: 30 }, // ⏱️ ISR for 30 seconds
      }
    );

    const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/snapshots`, {
      next: { revalidate: 30 },
    });

    const categoriesData = await res1.json();
    const defaultActivitiesData = await res2.json();
    console.log(defaultActivitiesData?.data?.data, "defaultActivitiesData");
    return (
      <div>
        {/* Blurred Background Shape */}

        <div className="container md:mt-32 mt-20">
          <div className="flex items-center justify-center space-x-4">
            <div
              className="mt-1"
              style={{
                width: "64px",
                height: "24px",
                background:
                  "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            ></div>
            <h2 className="text-primary-base text-center text-2xl font-bold">
              Snapshots of My World
            </h2>
            <div
              className="mt-1"
              style={{
                width: "64px",
                height: "24px",
                background:
                  "linear-gradient(90deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            ></div>
          </div>
          <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
            Beyond research and engineering, here’s a glimpse into the books
            that shaped my thinking, movies that sparked my imagination, and
            personal moments that made life richer.
          </p>

          <SnapshotClient
            categories={categoriesData?.data?.data || []}
            defaultActivities={defaultActivitiesData?.data?.data || []}
          />

          {/* */}
        </div>
      </div>
    );
  } catch (error) {
    console.error("ExtraCurriculum fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading this section.
      </div>
    );
  }
};

export default Snapshots;
