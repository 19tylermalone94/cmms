"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  CellContext,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getMaintenance } from "../actions/getMaintenance"; 
import { MaintenanceRecord } from "../types/MaintenanceRecord";

const columns: ColumnDef<MaintenanceRecord, any>[] = [
  {
    id: "id",
    header: "ID",
    accessorFn: (row) => row.id,
    cell: (info: CellContext<MaintenanceRecord, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
  {
    id: "equipmentId",
    header: "Equipment ID",
    accessorFn: (row) => row.equipmentId,
    cell: (info: CellContext<MaintenanceRecord, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
  {
    id: "date",
    header: "Date",
    accessorFn: (row) => row.date, // This is a Date object
    cell: (info: CellContext<MaintenanceRecord, Date>) => {
      const date = info.getValue();
      return <p>{date.toLocaleDateString("en-US")}</p>;
    },
  },
  {
    id: "type",
    header: "Type",
    accessorFn: (row) => row.type,
    cell: (info: CellContext<MaintenanceRecord, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
  {
    id: "technician",
    header: "Technician",
    accessorFn: (row) => row.technician,
    cell: (info: CellContext<MaintenanceRecord, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
  {
    id: "hoursSpent",
    header: "Hours Spent",
    accessorFn: (row) => row.hoursSpent,
    cell: (info: CellContext<MaintenanceRecord, number>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
  {
    id: "description",
    header: "Description",
    accessorFn: (row) => row.description,
    cell: (info: CellContext<MaintenanceRecord, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
  {
    id: "partsReplaced",
    header: "Parts Replaced",
    accessorFn: (row) => row.partsReplaced?.join(", "),
    cell: (info: CellContext<MaintenanceRecord, string | undefined>) => {
      const partsList = info.getValue();
      return <p>{partsList ? partsList : "N/A"}</p>;
    },
  },
  {
    id: "priority",
    header: "Priority",
    accessorFn: (row) => row.priority,
    cell: (info: CellContext<MaintenanceRecord, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
  {
    id: "completionStatus",
    header: "Completion Status",
    accessorFn: (row) => row.completionStatus,
    cell: (info: CellContext<MaintenanceRecord, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  },
];

const MaintenanceTable = () => {
  const [data, setData] = useState<MaintenanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMaintenanceRecords = async () => {
      try {
        setLoading(true);
        const result = await getMaintenance();
        setData(result);
      } catch (err) {
        setError("Failed to load maintenance records.");
      } finally {
        setLoading(false);
      }
    };

    fetchMaintenanceRecords();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MaintenanceTable;
