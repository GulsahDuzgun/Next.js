import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Job Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        Sorry, the job you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Browse Available Jobs
      </Link>
    </div>
  );
}
