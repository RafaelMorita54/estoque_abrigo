import { CabinetCategory, MovementType, StockType } from "@/enums/enums";
import { ReactNode } from "react";

export interface Column {
  key: string;
  label: string;
  editable?: boolean;
  type?: "text" | "date";
  enum?: string[];
}

export interface EditableTableProps {
  data: Record<string, any>[];
  columns: Column[];
  onAdd?: (newRow: Record<string, any>) => void;
  onEdit?: (updatedRow: Record<string, any>, index: number) => void;
  onDelete?: (index: number) => void;
}

export interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export interface DeletePopUpProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  message?: string;
}

export interface User {
  email: string;
  password: string;
}

export interface Patient {
  casela: number;
  name: string;
}

export interface Medicine {
  id: number;
  name: string;
  dosage: string;
  measuremeUnit: string;
  substance: string;
  minimumStock: number;
}

export interface Cabinet {
  id: number;
  category: CabinetCategory | string;
  description?: string;
}

export interface Equipment {
  id: number;
  name: string;
  description?: string;
}

export interface MedicineInventory {
  id: number;
  medicineId?: number;
  residentId?: number;
  cabinetId: number;
  quantity: number;
  expiry: string;
  origin: StockType;
}

export interface EquipmentInventory {
  id: number;
  equipmentId: number;
  cabinetId: number;
  quantity: number;
}

export interface Movement {
  id: number;
  type: MovementType;
  date: string;
  user: string;
  medicineId?: number;
  equipmentId?: number;
  cabinetId: number;
  patientId?: number;
}

export interface EquipmentMovementRow {
  equipmentName: string;
  description: string;
  quantity?: number;
  cabinet: string;
  operator?: string;
  movementDate: string;
  movementType: string;
}

export interface MovementRow {
  type: "Medicamento" | "Equipamento";
  name: string;
  description: string;
  expiry?: string;
  quantity?: number;
  minimumStock?: number;
  stockType?: string;
  patient?: string;
  casela?: number;
  cabinet?: string;
  operator?: string;
  movementDate: string;
  movementType: string;
}

export interface PrepareMovementsParams {
  movements: Movement[];
  medicines: Medicine[];
  equipments: Equipment[];
  patients: Patient[];
  cabinets: Cabinet[];
  users: User[];
  medicineInventory: MedicineInventory[];
  equipmentInventory: EquipmentInventory[];
}
