import Link from "next/link";
import MaintenanceForm from "../components/MaintenanceForm";
import MaintenanceTable from "../components/MaintenanceTable";

export default function Maintenance() {
  return (
    <div>
      <div>
        <h1>Maintenance Records</h1>
        <MaintenanceTable />
      </div>
      <div>
      <Link href="/maintenance/add">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Add New Maintenance Records
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
