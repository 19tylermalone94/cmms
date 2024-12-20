import { z } from "zod";

const DepartmentEnum = z.enum(["Machining", "Assembly", "Packaging", "Shipping"]);
const StatusEnum = z.enum(["Operational", "Down", "Maintenance", "Retired"]);

const EquipmentFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  department: DepartmentEnum,
  model: z.string(),
  serialNumber: z.string(),
  installDate: z.string().date(),
  status: StatusEnum,
});

export default EquipmentFormSchema;