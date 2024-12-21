'use server'

import { v4 as uuidv4 } from 'uuid';
 
export async function createMaintenanceRecord(data: Omit<MaintenanceRecord, "id">) {
  const id = uuidv4();
  const newMaintenanceRecord = {...data, id}
  // add equipment to db from here
  console.log("New Maintenance record added:", newMaintenanceRecord);
}