'use server'

import { v4 as uuidv4 } from 'uuid';
 
export async function createEquipment(data: Omit<Equipment, "id">) {
  const id = uuidv4();
  const newEquipment = {...data, id}
  // add equipment to db from here
  console.log("New Equipment record added:", newEquipment);
}