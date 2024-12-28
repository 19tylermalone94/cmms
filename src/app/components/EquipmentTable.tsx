"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  CellContext
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getEquipment } from "../actions/getEquipment";
import { Equipment } from "../types/Equipment";

const columns = [
  {
    id: "id",
    header: "id",
    accessorFn: (row: Equipment) => row.id,
    cell: (info: CellContext<Equipment, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  } as ColumnDef<Equipment, string>,

  {
    id: "name",
    header: "name",
    accessorFn: (row: Equipment) => row.name,
    cell: (info: CellContext<Equipment, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  } as ColumnDef<Equipment, string>,

  {
    id: "location",
    header: "location",
    accessorFn: (row: Equipment) => row.location,
    cell: (info: CellContext<Equipment, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  } as ColumnDef<Equipment, string>,

  {
    id: "department",
    header: "department",
    accessorFn: (row: Equipment) => row.department,
    cell: (info: CellContext<Equipment, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  } as ColumnDef<Equipment, string>,

  {
    id: "model",
    header: "model",
    accessorFn: (row: Equipment) => row.model,
    cell: (info: CellContext<Equipment, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  } as ColumnDef<Equipment, string>,

  {
    id: "serialNumber",
    header: "serialNumber",
    accessorFn: (row: Equipment) => row.serialNumber,
    cell: (info: CellContext<Equipment, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  } as ColumnDef<Equipment, string>,

  {
    id: "installDate",
    header: "installDate",
    accessorFn: (row: Equipment) => row.installDate,
    cell: (info: CellContext<Equipment, Date>) => {
      const date = info.getValue();
      return <p>{date.toLocaleDateString("en-US")}</p>;
    },
  } as ColumnDef<Equipment, Date>,

  {
    id: "status",
    header: "status",
    accessorFn: (row: Equipment) => row.status,
    cell: (info: CellContext<Equipment, string>) => {
      const value = info.getValue();
      return <p>{value}</p>;
    },
  } as ColumnDef<Equipment, string>,
] as Array<ColumnDef<Equipment, string | Date>>; 

const EquipmentTable = () => {
  const [data, setData] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setLoading(true);
        const result = await getEquipment();
        setData(result);
      } catch (err) {
        setError("Failed to load equipment.");
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
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
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
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

export default EquipmentTable;
