import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const equipmentSchema = z
  .object({
    id: z.string().min(1, { message: "id is required" }),
    name: z.string().min(1, { message: "name is required" }),
    location: z.string().min(1, { message: "location is required" }),
    department: z.enum(['Machining', 'Assembly', 'Packaging', 'Shipping']),
    model: z.string().min(1, { message: "model is required" }),
    serialNumber: z.string().min(1, { message: "serialNumber is required" }),
    installDate: z.date(),
    status: z.enum(['Operational', 'Down', 'Maintenance', 'Retired']),
  });

type Equipment = z.infer<typeof equipmentSchema>;

const EquipmentForm = () => {
  return (
    <form className="px-8 pt-6 pb-8 mb-4">

      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="id"
        >
          ID
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="id"
          type="text"
          placeholder="id"
        />
      </div>

      <div className="md:ml-2">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
        />
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="location"
        >
          Location
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          placeholder="location"
        />
      </div>

      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="department"
        >
          Department
        </label>
        <select
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="department"
          defaultValue=""
        >
          <option value="" disabled>
            Select a department
          </option>
          <option value="Machining">Machining</option>
          <option value="Assembly">Assembly</option>
          <option value="Packaging">Packaging</option>
          <option value="Shipping">Shipping</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="model"
        >
          Model
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          placeholder="model"
        />
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="serialNumber"
        >
          Serial Number
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="serialNumber"
          type="text"
          placeholder="serial number"
        />
      </div>

      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="date"
        >
          Date
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
        />
      </div>

      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="department"
        >
          Status
        </label>
        <select
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="status"
          defaultValue=""
        >
          <option value="" disabled>
            Select a status
          </option>
          <option value="Operational">Machining</option>
          <option value="Down">Assembly</option>
          <option value="Maintenance">Packaging</option>
          <option value="Retired">Shipping</option>
        </select>
      </div>

      
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Equipment
        </button>
      </div>
      <hr className="mb-6 border-t" />
    </form>
  );
};

export default EquipmentForm;