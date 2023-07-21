import React from "react";

const AllPortfolioSkeleton = ({ page }) => {
  return (
    <div className="container mx-auto max-w-screen-xl animate-pulse py-4 lg:py-12">
      <div className="mt-8 lg:mt-16">
        {page === "home" && <div className="w-96 h-16 bg-gray-700"></div>}
        {page !== "home" && (
          <div className="w-3/5 h-16 bg-gray-700 mx-auto"></div>
        )}
        <div className="pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full h-[312px] bg-gray-700"></div>
            <div className="w-full h-[312px] bg-gray-700"></div>
            <div className="w-full h-[312px] bg-gray-700"></div>
            <div className="w-full h-[312px] bg-gray-700"></div>
            <div className="w-full h-[312px] bg-gray-700"></div>
            <div className="w-full h-[312px] bg-gray-700"></div>
          </div>
        </div>
        {page === "home" && (
          <div className="explore__button text-center  flex justify-center mt-8">
            <div className="w-64 h-12 bg-gray-700 mt-"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPortfolioSkeleton;
