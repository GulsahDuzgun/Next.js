// Job interface for Rise API
export interface Job {
  _id: string;
  title: string;
  url: string;
  seniority: string;
  type: string;
  location: string;
  owner: {
    _id: string;
    photo: string;
    companyName: string;
    role: string;
    slug: string;
    location: string;
    type: string;
    benefits?: {
      title: string;
      benefits: string[];
    };
    values?: {
      title: string;
      values: string[];
    };
    badges: unknown[];
  };
  createdAt: string;
  updatedAt: string;
  expiresIn: string;
  descriptionBreakdown: Record<string, unknown>;
}

// Jobs API response interface
export interface JobsApiResponse {
  results: Job[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
