import { z } from "zod";

const EquipmentFormSchema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters" }),
  location: z.string().min(1, { message: "location is required" }),
  department: z.enum(["Machining", "Assembly", "Packaging", "Shipping"], {
      errorMap: () => ({ message: 'department is required' })
    }),
  model: z.string().min(1, { message: "model is required" }),
  serialNumber: z.string().min(1, { message: "serial number is required" }),
  installDate: z
    .string()
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // set to midnight
      return selectedDate < today;
    }, {
      message: "date must be in the past",
    }),
  status: z.enum(["Operational", "Down", "Maintenance", "Retired"], {
      errorMap: () => ({ message: 'status is required' })
    }),
});

export default EquipmentFormSchema;