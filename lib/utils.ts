/** @format */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * [STRATEGY: UTILITY ARCHITECTURE]
 * ฟังก์ชัน cn (Class Name) คือหัวใจของการจัดการ Tailwind CSS ในระดับ Professional
 * - clsx: ช่วยจัดการ Conditional Classes (เช่น คลาสที่จะแสดงเมื่อ isActive เป็น true)
 * - twMerge: ช่วยแก้ปัญหาคลาสที่ขัดแย้งกัน (เช่น p-4 กับ p-6 ในบรรทัดเดียวกัน)
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
