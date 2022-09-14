export function changeHourToMinutes(hourString: string) {
  const [hour, minutes] = hourString.split(':').map(Number);
  const result = hour * 60 + minutes;
  return result;
}

export function changeMinutesToHour(minutesNumber: number) {
  const hour = Math.floor(minutesNumber / 60);
  const minutes = minutesNumber % 60;
  return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
