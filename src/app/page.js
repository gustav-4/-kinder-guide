export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
        KidsHealthCompass
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Medically grounded orientation for parents of sick children.
        This app provides guidance – not diagnoses.
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-6 py-3 rounded-md border border-gray-300 font-medium"
        >
          Register
        </a>
      </div>
    </main>
  );
}
