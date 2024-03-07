
export const dateRangeFilter = (minDate: Date, maxDate: Date) => {
  return (date: Date): boolean => {
    return date >= minDate && date <= maxDate;
  };
}
