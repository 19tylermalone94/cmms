'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEquipment } from "../actions/addEquipment";
import EquipmentFormSchema from "../schemas/EquipmentFormSchema"

type Equipment = z.infer<typeof EquipmentFormSchema>;

const EquipmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Equipment>({
    resolver: zodResolver(EquipmentFormSchema),
  });

  const onSubmit = async (data: Omit<Equipment, "id">) => {
    try {
      console.log("Validated data:", data);
      await createEquipment(data);
      alert("Equipment added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="enter equipment name"
          {...register("name")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
      </div>

      {/* Location Field */}
      <div>
        <label htmlFor="location" className="block mb-2 text-sm font-bold text-gray-700">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="enter equipment location"
          {...register("location")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
      </div>

      {/* Department Field */}
      <div>
        <label htmlFor="department" className="block mb-2 text-sm font-bold text-gray-700">
          Department
        </label>
        <select
          id="department"
          defaultValue=""
          {...register("department")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        >
          <option value="" disabled>
            Select a department
          </option>
          <option value="Machining">Machining</option>
          <option value="Assembly">Assembly</option>
          <option value="Packaging">Packaging</option>
          <option value="Shipping">Shipping</option>
        </select>
        {errors.department && (
          <p className="text-red-500 text-xs">{errors.department.message}</p>
        )}
      </div>

      {/* Model Field */}
      <div>
        <label htmlFor="model" className="block mb-2 text-sm font-bold text-gray-700">
          Model
        </label>
        <input
          id="model"
          type="text"
          placeholder="enter equipment model"
          {...register("model")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.model && <p className="text-red-500 text-xs">{errors.model.message}</p>}
      </div>

      {/* Serial Number Field */}
      <div>
        <label htmlFor="serialNumber" className="block mb-2 text-sm font-bold text-gray-700">
          Serial Number
        </label>
        <input
          id="serialNumber"
          type="text"
          placeholder="enter equipment SN"
          {...register("serialNumber")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.serialNumber && (
          <p className="text-red-500 text-xs">{errors.serialNumber.message}</p>
        )}
      </div>

      {/* Install Date Field */}
      <div>
        <label htmlFor="installDate" className="block mb-2 text-sm font-bold text-gray-700">
          Install Date
        </label>
        <input
          id="installDate"
          type="date"
          {...register("installDate")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        />
        {errors.installDate && (
          <p className="text-red-500 text-xs">{errors.installDate.message}</p>
        )}
      </div>

      {/* Status Field */}
      <div>
        <label htmlFor="status" className="block mb-2 text-sm font-bold text-gray-700">
          Status
        </label>
        <select
          id="status"
          defaultValue=""
          {...register("status")}
          className="w-full px-3 py-2 border rounded focus:outline-none"
        >
          <option value="" disabled>
            Select a status
          </option>
          <option value="Operational">Operational</option>
          <option value="Down">Down</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Retired">Retired</option>
        </select>
        {errors.status && <p className="text-red-500 text-xs">{errors.status.message}</p>}
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

export default EquipmentForm;
