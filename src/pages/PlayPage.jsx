import React from "react";
import DefaultLayoutHoc from "../layouts/Default.layout";
import Poster from "../Components/Poster/Poster.Component";
import PlayFilters from "../Components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-20">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Hotspot</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweetes"
                subtitle="Comedy Shows | English, Kanadda | 18+yrs | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweetes"
                subtitle="Comedy Shows | English, Kanadda | 18+yrs | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweetes"
                subtitle="Comedy Shows | English, Kanadda | 18+yrs | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweetes"
                subtitle="Comedy Shows | English, Kanadda | 18+yrs | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweetes"
                subtitle="Comedy Shows | English, Kanadda | 18+yrs | 2hr 30min"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweetes"
                subtitle="Comedy Shows | English, Kanadda | 18+yrs | 2hr 30min"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
