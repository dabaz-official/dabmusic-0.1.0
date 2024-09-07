import Header from "@dabaz/components/layout/Header";
import ListItem from "@dabaz/components/List/ListItem";

export default function Search() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-black dark:text-white text-3xl font-semibold">
            Chosen by DabAZ
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem />
          </div>
        </div>
      </Header>
    </div>
  );
}
