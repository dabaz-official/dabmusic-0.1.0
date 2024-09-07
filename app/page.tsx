import Header from "@dabaz/components/layout/Header";
import ListItem from "@dabaz/components/List/ListItem";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-black dark:text-white text-2xl font-semibold">
            Welcome back
          </h1>
        </div>
      </Header>
      <div className="mt-4 mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-black dark:text-white text-md md:text-lg">
            Newest songs
          </h2>
        </div>
      </div>
    </div>
  );
}
