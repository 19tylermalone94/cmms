"use server"

import { MaintenanceRecord } from "../types/MaintenanceRecord";

export const getMaintenance = async (): Promise<MaintenanceRecord[]> => {
  
  // simulated maintenance records
  const maintenanceRecordList: MaintenanceRecord[] = [
    {
      id: "7",
      equipmentId: "1",
      date: new Date("2021-06-12"),
      type: "Preventive",
      technician: "James Boyett",
      hoursSpent: 2,
      partsReplaced: ["gasket"],
      description: "Lubricate joints and perform visual inspection",
      priority: "Low",
      completionStatus: "Complete",
    },
    {
      id: "8",
      equipmentId: "2",
      date: new Date("2021-08-02"),
      type: "Repair",
      technician: "Bob Smith",
      hoursSpent: 4,
      partsReplaced: ["belt", "roller"],
      description: "Replace conveyor belt and realign rollers",
      priority: "High",
      completionStatus: "Incomplete",
    },
    {
      id: "9",
      equipmentId: "3",
      date: new Date("2022-01-15"),
      type: "Preventive",
      technician: "Jane Doe",
      hoursSpent: 1.5,
      description: "Calibration of sensor modules",
      priority: "Low",
      completionStatus: "Complete",
    },
    {
      id: "10",
      equipmentId: "4",
      date: new Date("2022-03-10"),
      type: "Preventive",
      technician: "Mike Johnson",
      hoursSpent: 3,
      partsReplaced: ["motor brush"],
      description: "Replace motor brush and check tension",
      priority: "Medium",
      completionStatus: "Complete",
    },
    {
      id: "11",
      equipmentId: "1",
      date: new Date("2023-07-21"),
      type: "Preventive",
      technician: "Lisa Wu",
      hoursSpent: 1,
      description: "Routine inspection for CNC machine",
      priority: "Low",
      completionStatus: "Complete",
    },
  ];

  // simulate an async call for when maintenance records will be retrieved from db
  return new Promise((resolve) => {
    setTimeout(() => resolve(maintenanceRecordList), 500);
  });
};
