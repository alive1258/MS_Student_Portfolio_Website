"use client";

import { useState, useEffect } from "react";
import SnapshotCard from "./SnapshotCard";

const SnapshotClient = ({ categories, defaultActivities }) => {
  const [selectedCategory, setSelectedCategory] = useState(""); // "" means 'All'
  const [activities, setActivities] = useState(defaultActivities);
  console.log(activities, "activities");

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const url = selectedCategory
          ? `${process.env.NEXT_PUBLIC_API_URL}/snapshots?snapshots_category_id=${selectedCategory}`
          : `${process.env.NEXT_PUBLIC_API_URL}/snapshots`; // fetch all

        const res = await fetch(url);
        const data = await res.json();
        setActivities(data?.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      }
    };

    fetchActivities();
  }, [selectedCategory]);

  return (
    <div className="mb-16">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-12">
        {/* "All" button */}
        <button
          onClick={() => setSelectedCategory("")}
          className={`border rounded-3xl px-6 py-2 font-medium text-sm transition-all duration-300 ${
            selectedCategory === ""
              ? "text-white bg-blue-500 border-blue-500"
              : "text-gray-700 border-gray-400 hover:text-blue-500 hover:border-blue-500"
          }`}
        >
          All
        </button>

        {/* Dynamic category buttons */}
        {categories?.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`border rounded-3xl px-6 py-2 font-medium text-sm transition-all duration-300 ${
              selectedCategory === cat?.id
                ? "text-white bg-blue-500 border-blue-500"
                : "text-gray-700 border-gray-400 hover:text-blue-500 hover:border-blue-500"
            }`}
          >
            {cat?.title}
          </button>
        ))}
      </div>

      {/* Activities List */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        {activities?.map((item, idx) => (
          <SnapshotCard
            item={item}
            key={`${item.id}-${selectedCategory}`}
            delay={idx * 0.3}
          />
        ))}
      </div>
    </div>
  );
};

export default SnapshotClient;
