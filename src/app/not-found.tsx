export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F7FA] text-center px-6">
      
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        Ooooppps... Something is missing!
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>

      <p className="text-md text-gray-500">
        Please check the link or return to the main website.
      </p>

      <a
        href="/aiml-career-roadmap-webinar"
        className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go to Dandes Academy
      </a>

    </div>
  );
}