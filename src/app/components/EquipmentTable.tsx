"use client"

import { CellContext, ColumnDef, RowData, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getEquipment } from "../actions/getEquipment";

const columns: ColumnDef<Equipment>[] = [
  {
    accessorKey: "id",
    header: "id",
    cell: (props: CellContext<Equipment, Equipment['id']>) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "name",
    header: "name",
    cell: (props: CellContext<Equipment, Equipment['name']>) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "location",
    header: "location",
    cell: (props: CellContext<Equipment, Equipment['location']>) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "department",
    header: "department",
    cell: (props: CellContext<Equipment, Equipment['department']>) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "model",
    header: "model",
    cell: (props: CellContext<Equipment, Equipment['model']>) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "serialNumber",
    header: "serialNumber",
    cell: (props: CellContext<Equipment, Equipment['serialNumber']>) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: "installDate",
    header: "installDate",
    cell: (props: CellContext<Equipment, Equipment['installDate']>) => <p>{props.getValue().toISOString()}</p>
  },
  {
    accessorKey: "status",
    header: "status",
    cell: (props: CellContext<Equipment, Equipment['status']>) => <p>{props.getValue()}</p>
  }
]

const EquipmentTable = () => {
  const [data, setData] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setLoading(true);
        const data = await getEquipment();
        setData(data);
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
  })
};

export default EquipmentTable;