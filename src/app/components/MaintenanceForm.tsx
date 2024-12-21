'use client';

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMaintenanceRecord } from "../actions/addMaintenanceRecord";
import MaintenanceFormSchema from "../schemas/MaintenanceFormSchema";
import { getEquipment } from "../actions/getEquipment";

type MaintenanceRecord = z.infer<typeof MaintenanceFormSchema>;

const MaintenanceForm = () => {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [partsReplaced, setPartsReplaced] = useState<string[]>([]);
  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setLoading(true);
        const data = await getEquipment();
        setEquipmentList(data);
      } catch (err) {
        setError("Failed to load equipment.");
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const addPart = () => {
    setPartsReplaced([...partsReplaced, ""]);
  };

  const updatePart = (index: number, value: string) => {
    const newParts = [...partsReplaced];
    newParts[index] = value;
    setPartsReplaced(newParts);
  };

  const removePart = (index: number) => {
    const newParts = partsReplaced.filter((_, i) => i !== index);
    setPartsReplaced(newParts);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MaintenanceRecord>({
    resolver: zodResolver(MaintenanceFormSchema),
  });

  const onSubmit = async (data: Omit<MaintenanceRecord, "id">) => {
    try {
      console.log("Validated data:", data);
      await createMaintenanceRecord(data);
      alert("Equipment added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">

      {/* Equipment Field */}
      <div>
        <label htmlFor="equipmentId" className="block mb-2 text-sm font-bold text-gray-700">
          Equipment
        </label>
        {loading ? (
          <p>Loading equipment...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <select
            id="equipmentId"
            defaultValue=""
            {...register("equipmentId", { required: "Equipment is required" })}
            className="w-full px-3 py-2 border rounded focus:outline-none"
          >
            <option value="" disabled>
              Select equipment
            </option>
            {equipmentList.map((equipment) => (
              <option key={equipment.id} value={equipment.id}>
                {equipment.name} - {equipment.location} ({equipment.department})
              </option>
            ))}
          </select>
        )}
        {errors.equipmentId && (
          <p className="text-red-500 text-xs">{errors.equipmentId.message}</p>
        )}
      </div>

      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block mb-2 text-sm font-bold text-gray-700">
          Date
        </label>
        <input
          id="date"
          type="date"
          {...register("date")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.date && (
          <p className="text-red-500 text-xs">{errors.date.message}</p>
        )}
      </div>

      {/* Type Field */}
      <div>
        <label htmlFor="type" className="block mb-2 text-sm font-bold text-gray-700">
        Type
        </label>
        <select
          id="type"
          defaultValue=""
          {...register("type")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="Preventive">Preventive</option>
          <option value="Repair">Repair</option>
          <option value="Emergency">Emergency</option>
        </select>
        {errors.type && (
          <p className="text-red-500 text-xs">{errors.type.message}</p>
        )}
      </div>

      {/* Technician Field */}
      <div>
        <label htmlFor="technician" className="block mb-2 text-sm font-bold text-gray-700">
          Technician
        </label>
        <input
          id="technician"
          type="text"
          placeholder="enter equipment technician"
          {...register("technician")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.technician && <p className="text-red-500 text-xs">{errors.technician.message}</p>}
      </div>

      {/* Hours Spent Field */}
      <div>
        <label htmlFor="hoursSpent" className="block mb-2 text-sm font-bold text-gray-700">
          Hours Spent
        </label>
        <input
          id="hoursSpent"
          type="text"
          placeholder="enter number of hours spent"
          {...register("hoursSpent")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.hoursSpent && <p className="text-red-500 text-xs">{errors.hoursSpent.message}</p>}
      </div>

      {/* Description Field */}
      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-bold text-gray-700">
          Description
        </label>
        <input
          id="description"
          type="text"
          placeholder="enter a description"
          {...register("description")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
      </div>

      {/* Parts Replaced Field */}
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Parts Replaced
        </label>
        {partsReplaced.map((part, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input
              type="text"
              value={part}
              onChange={(e) => updatePart(index, e.target.value)}
              placeholder={`Part ${index + 1}`}
              className="flex-1 px-3 py-2 border rounded focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removePart(index)}
              className="px-2 py-1 text-white bg-red-500 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addPart}
          className="px-4 py-2 font-bold text-white bg-green-500 rounded"
        >
          Add Part
        </button>
      </div>

      {/* Priority Field */}
      <div>
        <label htmlFor="priority" className="block mb-2 text-sm font-bold text-gray-700">
          Priority
        </label>
        <select
          id="priority"
          defaultValue=""
          {...register("priority")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        >
          <option value="" disabled>
            Select a priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        {errors.priority && <p className="text-red-500 text-xs">{errors.priority.message}</p>}
      </div>

      {/* Completion Status Field */}
      <div>
        <label htmlFor="completionStatus" className="block mb-2 text-sm font-bold text-gray-700">
          Completion Status
        </label>
        <select
          id="completionStatus"
          defaultValue=""
          {...register("completionStatus")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        >
          <option value="" disabled>
            Select a completion status
          </option>
          <option value="Low">Complete</option>
          <option value="Medium">Incomplete</option>
          <option value="Pending Parts">Pending Parts</option>
        </select>
        {errors.completionStatus && <p className="text-red-500 text-xs">{errors.completionStatus.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Add Equipment
        </button>
      </div>

    </form>

  );
};

export default MaintenanceForm;
