import LinkedInFeed from "@/components/social/linkedin/LinkedInFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Latest on LinkedIn</h1>
          <p className="mt-2 text-gray-500">Stay up to date with our recent posts</p>
        </div>
        <LinkedInFeed />
      </div>
    </main>
  );
}
