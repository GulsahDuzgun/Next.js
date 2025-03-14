import Link from 'next/link';
import { getJobs } from '@/utils/api';

export default async function JobsPage() {
  const jobsData = await getJobs();
  const jobs = jobsData.result.jobs || [];

  console.log(jobs);
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">All Available Jobs</h1>

        {jobs.length === 0 ? (
          <p className="text-gray-600">No jobs available at the moment.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li
                key={job._id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <Link href={`/jobs/${job._id}`} className="block">
                  <div className="flex items-center">
                    {job.owner.photo && (
                      <img
                        src={job.owner.photo}
                        alt={job.owner.companyName}
                        className="w-12 h-12 object-contain rounded-md mr-4"
                      />
                    )}
                    <div>
                      <h2 className="text-xl font-semibold">{job.title}</h2>
                      <p className="text-gray-600">{job.owner.companyName}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {job.type}
                        </span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {job.seniority}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
