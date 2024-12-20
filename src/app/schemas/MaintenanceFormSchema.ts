import { z } from "zod";

const MaintenanceFormSchema = z.object({
  equipmentId: z.string().min(1, { message: "equipment is required" }),
  date: z
    .string()
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(23, 59, 59, 999); // set 1 ms before tomorrow
      return selectedDate <= today; // require a date no later than today
    }, {
      message: "date must be in the past",
    })
    .transform((date) => new Date(date)),
  type: z.string().min(1, { message: "type is required" }),
  technician: z.string().min(1, { message: "technician must be at least 2 characters" }),
  hoursSpent: z.number().refine((hoursSpent) => {
    return hoursSpent > 0 && hoursSpent <= 24; // positive number no greater than 24
  }),
  description: z.string().min(10, { message: "description must be at least 10 characters" }),
  partsReplaced: z.string().array().optional(),
  priority: z.string().min(1, { message: "priority is required" }),
  completionStatus: z.string().min(1, { message: "completion status is required" }),
});

export default MaintenanceFormSchema;