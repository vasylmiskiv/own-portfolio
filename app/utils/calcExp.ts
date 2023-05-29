export const calcExp = () => {
  const startDate = new Date(2020, 11);
  const currentDate = new Date();

  let years;
  let months;

  const startMonth = startDate.getMonth() + 1;
  const startYear = startDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  years = currentYear - startYear;
  months = currentMonth - startMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  return Number(`${years}.${months}`);
};
