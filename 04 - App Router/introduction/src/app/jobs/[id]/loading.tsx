export default function Loading() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto">
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-8"></div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 mr-4 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="flex-1">
                <div className="h-8 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
            </div>

            <div className="h-16 bg-gray-100 rounded-md animate-pulse mb-6 w-full"></div>

            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded animate-pulse w-1/4"></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
