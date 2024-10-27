/**
 * 產前檢查資訊
 */
export interface Prenatal {
  /**
   * 浮腫程度
   */
  edema: string
  /**
   * 檢查診所名稱
   */
  examination_clinic: string
  /**
   * 檢查醫生名稱
   */
  examination_doctor: string
  /**
   * 檢查結束日期
   */
  examination_end_date: string
  /**
   * 檢查開始日期
   */
  examination_start_date: string
  /**
   * 胎心音
   */
  fetal_heart_sound: string
  /**
   * ID
   */
  id: string
  /**
   * 血壓 kg
   */
  blood_pressure: string
  /**
   * 下次檢查日期
   */
  next_checkup_date: string
  /**
   * 付款進度
   */
  payment_schedule: string
  /**
   * 懷孕週數
   */
  pregnancy_week: string
  /**
   * 備註
   */
  remarks: string
  /**
   * 建議檢查週數
   */
  suggested_weeks: string
  /**
   * 尿蛋白
   */
  urine_protein: string
  /**
   * 尿糖
   */
  urine_sugar: string
  /**
   * 使用者 ID
   */
  user_id: string
  /**
   * 靜脈曲張程度
   */
  varicose_veins: string
  /**
   * 體重
   */
  weight: string
}
