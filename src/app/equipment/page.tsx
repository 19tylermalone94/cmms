import Link from "next/link";
import EquipmentTable from "../components/EquipmentTable";

export default function Equipment() {
  return (
    <div>
      <div>
        <h1>Equipment</h1>
        <EquipmentTable />
      </div>
      <div>
      <Link href="/equipment/add">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Add New Equipment
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
