export function getMondayDetails() {
  const today = new Date();
  const currentDay = today.getDay();
  const daysSinceMonday = (currentDay + 6) % 7;
  const mondayDate = new Date(today);
  mondayDate.setDate(today.getDate() - daysSinceMonday);

  // Calculate the number of Mondays since the start of the year
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  let mondayCount = 0;
  for (
    let date = new Date(startOfYear);
    date <= mondayDate;
    date.setDate(date.getDate() + 1)
  ) {
    if (date.getDay() === 1) {
      mondayCount++;
    }
  }

  return {
    date: mondayDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    mondayCount,
  };
}
