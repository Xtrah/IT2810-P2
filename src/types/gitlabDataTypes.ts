/* eslint-disable camelcase */ // Ignore because of API is not set to camelcase
export interface Commit {
  author_name: string;
  created_at: string;
}

export interface Issue {
  closed_at: string | null;
  created_at: string;
}
