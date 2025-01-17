import { ExpenseDataTypes } from "@/context/ExpensesProvider";
import { ChartData } from "@/types/type";

export const chartDataTransformer = (
	expenses: ExpenseDataTypes[]
): ChartData => {
	const today = new Date(); // Current date
	const year = today.getFullYear();
	const month = today.getMonth();

	// Get the number of days in the current month
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	// Generate labels for all days in the month
	const labels = Array.from({ length: daysInMonth }, (_, i) =>
		(i + 1).toString()
	);

	// Filter expenses with transaction_type === 'spending' and group totals by day
	const dayTotals: { [day: string]: number } = expenses
		.filter((expense) => expense.transaction_type === 'spending')
		.reduce((acc, expense) => {
			const expenseDate = new Date(expense.paid_at);
			if (
				expenseDate.getMonth() === month &&
				expenseDate.getFullYear() === year
			) {
				const day = expenseDate.getDate().toString(); // Get the day of the month
				acc[day] = (acc[day] || 0) + expense.total;
			}
			return acc;
		}, {} as { [day: string]: number });

	// Populate data for each day, setting missing days to 0
	const data = labels.map((label) => dayTotals[label] || 0);

	return {
		labels,
		datasets: [{ data }],
	};
};
