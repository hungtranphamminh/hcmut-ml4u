import { TeamMember } from "@/types/team/team-types";

export default function Founder({ pi }: { readonly pi: TeamMember[] }) {
  const currentFounder = pi[0];

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* Title */}
      <div
        className="xl:text-4xl md:text-3xl text-xl font-light uppercase mt-10 text-white py-1 border-t border-b
      "
      >
        Principle Investigator
      </div>

      <div
        className=" flex flex-col sm:flex-row items-center xl:gap-10 gap-4 justify-center 2xl:max-w-5xl 
        xl:max-w-4xl max-w-3xl
      2xl:px-20 px-4  py-10
      "
      >
        {/* Avatar */}
        <div className="shrink-0 flex flex-col items-center rounded-lg">
          <div className="relative w-full  flex items-center justify-center">
            <img
              src={currentFounder.image}
              alt={currentFounder.name}
              className="w-full h-full max-h-[300px] rounded-lg border shadow-sm"
            />
          </div>
        </div>

        {/* Founder details */}
        <div className=" ml-4 backdrop-blur-md shadow-sm p-4">
          <div className="pb-6 mb-6 w-fit border-b border-gray-400">
            {/* Name */}
            <h3 className="text-3xl md:text-4xl font-medium text-white text-left transition-colors pb-2">
              {currentFounder.name}
            </h3>

            {/* Title */}
            <p className="md:text-lg text-base  text-white/80 ">
              <span className=" mr-2 uppercase">Faculty/</span>Principal
              Investigator
            </p>
            {/* Affiliations */}
            {currentFounder.affiliation && (
              <p className="text-base text-white/80 text-left mt-1">
                {currentFounder.affiliation}
              </p>
            )}
          </div>

          {/* orcid links */}
          {/* {currentFounder.links && (
            <div className="flex gap-2 mt-2">
              {Object.entries(currentFounder.links).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          )} */}

          {currentFounder.body && (
            <div className="font-extralight text-sm text-white/90">
              <span className="text-white underline mr-1 font-semibold ">
                Dr. Nguyen Duc Dung
              </span>
              leads a Machine Learning group at
              <span className="text-white font-semibold underline font-normal mx-1">
                Ho Chi Minh City University of Technology (HCMUT)
              </span>
              , focusing on cutting-edge research in artificial intelligence and
              data science. The group specializes in developing novel algorithms
              and models in areas such as deep learning, natural language
              processing, and computer vision, with applications spanning
              various industries. They emphasize both theoretical advancements
              and real-world implementations, fostering collaboration with
              academia and industry to address practical challenges through
              machine learning innovations. The group actively publishes
              research and engages in projects to advance the field.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
