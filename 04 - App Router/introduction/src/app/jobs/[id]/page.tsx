import { getJobById, getJobs } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Job } from '@/types';

// Generate static params for all jobs
export async function generateStaticParams() {
  const jobsData = await getJobs();
  const jobs = jobsData.results || [];

  return jobs.map((job: Job) => ({
    id: job._id,
  }));
}

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJobById(params.id);

  if (!job) {
    notFound();
  }

  // Helper function to safely render values that might be objects
  const renderValue = (value: unknown): string => {
    if (value === null || value === undefined) {
      return '';
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    // For objects and arrays, stringify them
    return JSON.stringify(value);
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/jobs"
          className="inline-flex items-center text-blue-600 mb-8 hover:underline"
        >
          ← Back to all jobs
        </Link>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="relative h-16 w-16 mr-4 bg-gray-100 rounded-md flex items-center justify-center">
                {job.owner.photo ? (
                  <Image
                    src={job.owner.photo}
                    alt={job.owner.companyName}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-2"
                  />
                ) : (
                  <div className="text-2xl font-bold text-gray-400">
                    {job.owner.companyName.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">{job.title}</h1>
                <p className="text-gray-600 mt-1">
                  {job.owner.companyName} • {job.location}
                </p>
              </div>
            </div>

            <div className="mb-6 flex gap-3">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {job.type}
              </span>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {job.seniority}
              </span>
            </div>

            {job.descriptionBreakdown &&
              Object.keys(job.descriptionBreakdown).length > 0 && (
                <div className="prose prose-lg max-w-none">
                  {Object.entries(job.descriptionBreakdown).map(
                    ([key, value]) => (
                      <div key={key} className="mb-6">
                        <h2 className="text-xl font-semibold mb-3 capitalize">
                          {key.replace(/_/g, ' ')}
                        </h2>
                        <div className="whitespace-pre-line">
                          {renderValue(value)}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

            {job.owner.benefits && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-3">
                  {job.owner.benefits.title}
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  {job.owner.benefits.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.owner.values && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-3">
                  {job.owner.values.title}
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  {job.owner.values.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Posted on{' '}
                {new Date(job.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              {job.url && (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Apply for this position
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
