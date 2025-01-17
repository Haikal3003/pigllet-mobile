import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useMemo,
	useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { transactionTypes } from '@/constants/transactions';

const STORAGE_KEY = 'EXPENSES';

export type ExpenseDataTypes = {
	id: number;
	description: string;
	total: number;
	paid_at: string;
	category?: string;
	transaction_type: transactionTypes;
	wallet: {
		wallet_id: number;
		wallet_name: string;
	};
};

/* -------------------- DUMMY */
const dummy: ExpenseDataTypes[] = [
	{
		id: 1,
		description: 'Bath soap',
		paid_at: new Date().toISOString(),
		total: 2000,
		wallet: { wallet_id: 1, wallet_name: 'Cash' },
		category: 'Necesity',
		transaction_type: 'spending',
	},
	{
		id: 2,
		description: 'Noodles',
		paid_at: new Date().toISOString(),
		total: 6000,
		wallet: { wallet_id: 1, wallet_name: 'Cash' },
		category: 'Food',
		transaction_type: 'spending',
	},
	{
		id: 3,
		description: 'Hips Soda',
		paid_at: new Date().toISOString(),
		total: 4000,
		wallet: { wallet_id: 1, wallet_name: 'Cash' },
		category: 'Food',
		transaction_type: 'spending',
	},
	{
		id: 4,
		description: 'Freelance project',
		paid_at: new Date().toISOString(),
		total: 5000000,
		wallet: { wallet_id: 1, wallet_name: 'Cash' },
		transaction_type: 'income',
	},
	{
		id: 5,
		description: 'Chicken',
		paid_at: new Date().toISOString(),
		total: 25000,
		wallet: { wallet_id: 1, wallet_name: 'Cash' },
		category: 'Food',
		transaction_type: 'spending',
	},
];

export interface ExpenseContextTypes {
	loading: boolean;
	allExpenses: ExpenseDataTypes[];
	saveExpenses: (payload: ExpenseDataTypes) => void;
	getExpensesByDate: (date: Date) => ExpenseDataTypes[] | [];
	getExpensesByMonth: (date: Date) => ExpenseDataTypes[] | [];
}

export const ExpenseContext = createContext<ExpenseContextTypes | undefined>(
	undefined
);

const ExpenseProvider = ({ children }: { children: ReactNode }) => {
	const [allExpenses, setallExpenses] = useState<ExpenseDataTypes[]>([
		...dummy,
	]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		loadExpenses();
	}, []);

	const loadExpenses = async () => {
		try {
			const storedExpenses = await AsyncStorage.getItem(STORAGE_KEY);
			if (storedExpenses) {
				setallExpenses(JSON.parse(storedExpenses));
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const saveExpenses = async (payload: ExpenseDataTypes) => {
		try {
			setLoading(true);
			const newData = [payload, ...allExpenses];

			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
			setallExpenses((prevData) => [payload, ...prevData]);
		} catch (error) {
			console.log('Failed to save your data!');
		} finally {
			setLoading(false);
		}
	};

	const getExpensesByDate = (date: Date) => {
		try {
			const expensesInCurrentDate = allExpenses.filter((expense) => {
				const expensePaidAt = new Date(expense.paid_at);

				const sameDate = expensePaidAt.getDate() === date.getDate();
				const sameMonth = expensePaidAt.getMonth() === date.getMonth();
				const sameYear = expensePaidAt.getFullYear() === date.getFullYear();

				if (sameDate && sameMonth && sameYear) return expense;
			});

			return expensesInCurrentDate;
		} catch (error) {
			console.log('Failed to retrieve your data!');
			return [];
		}
	};

	const getExpensesByMonth = (date: Date) => {
		try {
			const expensesInCurrentDate = allExpenses.filter((expense) => {
				const expensePaidAt = new Date(expense.paid_at);

				const sameMonth = expensePaidAt.getMonth() === date.getMonth();
				const sameYear = expensePaidAt.getFullYear() === date.getFullYear();

				if (sameMonth && sameYear) return expense;
			});

			return expensesInCurrentDate;
		} catch (error) {
			console.log('Failed to retrieve your data!');
			return [];
		}
	};

	return (
		<ExpenseContext.Provider
			value={{
				allExpenses,
				loading,
				saveExpenses,
				getExpensesByDate,
				getExpensesByMonth,
			}}
		>
			{children}
		</ExpenseContext.Provider>
	);
};

export default ExpenseProvider;
