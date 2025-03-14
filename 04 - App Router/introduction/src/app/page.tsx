import { getJobs } from '@/utils/api';
import Link from 'next/link';
import Image from 'next/image';
import { Job } from '@/types';

export default async function Home() {
  // Fetch jobs from Rise API
  const jobsData = await getJobs();
  const jobs = jobsData.results || [];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Available Jobs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {jobs.map((job: Job) => (
            <Link
              href={`/jobs/${job._id}`}
              key={job._id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
                {job.owner.photo ? (
                  <Image
                    src={job.owner.photo}
                    alt={job.owner.companyName}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4"
                  />
                ) : (
                  <div className="text-2xl font-bold text-gray-400">
                    {job.owner.companyName.charAt(0)}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {job.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  {job.owner.companyName} • {job.location}
                </p>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {job.type}
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {job.seniority}
                  </span>
                </div>
                <div className="mt-4 text-blue-600 font-medium">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/jobs"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Jobs
          </Link>
        </div>
      </main>
    </div>
  );
}
