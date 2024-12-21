import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <Link href="/equipment">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Add new equipment
        </button>
      </Link>

      <Link href="/maintenance">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Add new maintenance record
        </button>
      </Link>
    </div>
  );
}
