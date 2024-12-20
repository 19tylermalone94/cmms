import { z } from "zod";

const EquipmentFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  location: z.string().min(1, { message: "Location is required" }),
  department: z.enum(["Machining", "Assembly", "Packaging", "Shipping"], {
      errorMap: () => ({ message: 'Department is required' })
    }),
  model: z.string().min(1, { message: "Model is required" }),
  serialNumber: z.string().min(1, { message: "Serial Number is required" }),
  installDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Install Date must be a valid date",
  }),
  status: z.enum(["Operational", "Down", "Maintenance", "Retired"], {
      errorMap: () => ({ message: 'Status is required' })
    }),
});

export default EquipmentFormSchema;