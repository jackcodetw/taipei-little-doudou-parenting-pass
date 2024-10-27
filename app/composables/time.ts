export function convertToChineseNumber(number: number): string {
  const chineseNumbers = ['ㄧ', '二', '三', '四', '五', '六', '七', '八', '九', '十']

  if (number <= 10) {
    return chineseNumbers[number - 1] ?? '--'
  }
  else {
    const tens = Math.floor(number / 10)
    const units = number % 10

    let result = ''

    if (tens > 1) {
      result += chineseNumbers[tens - 1]
    }

    result += chineseNumbers[9] // 十

    if (units > 0) {
      result += chineseNumbers[units - 1]
    }

    return result
  }
}

export function convertToYYYYMM(timestamp: number, space = true) {
  const currentDate = new Date(timestamp)
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  return space ? `${year} 年 ${month} 月` : `${year}年${month}月`
}

export function convertToYYYYMMDD(timestamp: number, space = true) {
  const currentDate = new Date(timestamp)
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const date = currentDate.getDate()

  return space ? `${year} 年 ${month} 月 ${date} 日` : `${year}年${month}月${date}日`
}
