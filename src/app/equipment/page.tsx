import Link from "next/link";
import EquipmentForm from "../components/EquipmentForm";

export default function Equipment() {
  return (
    <div>
      <div>
        <h1>Add New Equipment</h1>
        <EquipmentForm></EquipmentForm>
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
