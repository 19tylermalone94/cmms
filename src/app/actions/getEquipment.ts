"use server"

import { Equipment } from "../types/Equipment";

export const getEquipment = async (): Promise<Equipment[]> => {
  
  // simulated equipment
  const equipmentList: Equipment[] = [
    {
      id: "1",
      name: "CNC Machine",
      location: "Building A - Floor 1",
      department: "Machining",
      model: "CNC-5000",
      serialNumber: "SN12345",
      installDate: new Date("2020-05-15"),
      status: "Operational",
    },
    {
      id: "2",
      name: "Assembly Robot",
      location: "Building B - Floor 2",
      department: "Assembly",
      model: "AR-300",
      serialNumber: "SN67890",
      installDate: new Date("2019-07-20"),
      status: "Maintenance",
    },
    {
      id: "3",
      name: "Packaging Line 1",
      location: "Building C - Floor 3",
      department: "Packaging",
      model: "PL-1000",
      serialNumber: "SN54321",
      installDate: new Date("2021-03-10"),
      status: "Operational",
    },
    {
      id: "4",
      name: "Shipping Conveyor",
      location: "Building D - Ground Floor",
      department: "Shipping",
      model: "SC-200",
      serialNumber: "SN98765",
      installDate: new Date("2018-11-25"),
      status: "Retired",
    },
  ];

  // simulate an async call for when equipment will be retrieved from db
  return new Promise((resolve) => {
    setTimeout(() => resolve(equipmentList), 500);
  });
};
