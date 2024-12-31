import Link from "next/link";
import MaintenanceForm from "../../components/MaintenanceForm";

export default function Maintenance() {
  return (
    <div>
      <div>
        <h1>Add New Maintenance Record</h1>
        <MaintenanceForm />
      </div>
      <div>
      <Link href="/maintenance">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Back to Maintenance
        </button>
      </Link>
      </div>
      <div>
      <Link href="/">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Back to dashboard
        </button>
      </Link>
      </div>
    </div>
  );
}
