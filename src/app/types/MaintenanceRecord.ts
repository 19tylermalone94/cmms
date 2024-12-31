export interface MaintenanceRecord {
  id: string;
  equipmentId: string;
  date: Date;
  type: 'Preventive' | 'Repair' | 'Emergency';
  technician: string;
  hoursSpent: number;
  description: string;
  partsReplaced?: string[];
  priority: 'Low' | 'Medium' | 'High';
  completionStatus: 'Complete' | 'Incomplete' | 'Pending Parts';
}
