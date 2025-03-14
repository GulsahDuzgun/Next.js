export default function Loading() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-5xl">
        <div className="h-10 bg-gray-200 rounded animate-pulse w-64 mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 w-full bg-gray-300 animate-pulse"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-3 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full mt-1"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mt-1"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-1/3 mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
