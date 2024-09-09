import Header from "@dabaz/components/layout/Header";
import ByMeContent from "@dabaz/components/page/ByMeContent";

export default function Search() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-0 md:mb-2 pt-6">
          <h1 className="text-black dark:text-white text-2xl font-semibold">
            Songs by DabAZ
          </h1>
          <ByMeContent />
        </div>
      </Header>
    </div>
  );
}
