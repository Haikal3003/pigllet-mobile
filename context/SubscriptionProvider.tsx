import React, { useState, useEffect, ReactNode, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'SUBSCRIPTION';

export type SubscriptionDataTypes = {
	id: number;
	description: string;
	total: number;
	due_date: string;
	is_paid: boolean;
};

export interface SubscriptionContextType {
	loading: boolean;
	subscriptions: SubscriptionDataTypes[];
	saveSubscription: (payload: SubscriptionDataTypes) => void;
	deleteSubscriptionById: (id: number) => void;
	updateSubscription: (id: number, payload: SubscriptionDataTypes) => {};
	getSubscriptionByDate: (date: Date) => SubscriptionDataTypes[] | [];
	getSubscriptionByMonth: (date: Date) => SubscriptionDataTypes[] | [];
	getSubscriptionById: (_id: number) => SubscriptionDataTypes;
}

export const subscriptionContext = createContext<
	SubscriptionContextType | undefined
>(undefined);

const SubcriptionProvider = ({ children }: { children: ReactNode }) => {
	const [subscriptions, setSubscriptions] = useState<SubscriptionDataTypes[]>(
		[]
	);

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		loadSubscription();
	}, []);

	const loadSubscription = async () => {
		try {
			const storedSubscription = await AsyncStorage.getItem(STORAGE_KEY);

			if (storedSubscription) {
				setSubscriptions(JSON.parse(storedSubscription));
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const saveSubscription = async (payload: SubscriptionDataTypes) => {
		try {
			const newData = [payload, ...subscriptions];

			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
			setSubscriptions((prevData) => [payload, ...prevData]);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const deleteSubscriptionById = async (id: number) => {
		try {
			const filteredSubscriptions = subscriptions.filter(
				(subs) => subs.id !== id
			);
			await AsyncStorage.setItem(
				STORAGE_KEY,
				JSON.stringify(filteredSubscriptions)
			);
			setSubscriptions(filteredSubscriptions);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const updateSubscription = async (
		id: number,
		payload: SubscriptionDataTypes
	) => {
		try {
			const updatedData = subscriptions.map((subs) =>
				subs.id === id ? { ...subs, ...payload } : subs
			);
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
			setSubscriptions(updatedData);

			return { success: true, data: updatedData };
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const getSubscriptionByDate = (date: Date) => {
		try {
			const subscriptionInCurrentDate = subscriptions.filter((subs) => {
				const subscriptionDueDate = new Date(subs.due_date);

				const sameDate = subscriptionDueDate.getDate() === date.getDate();
				const sameMonth = subscriptionDueDate.getMonth() === date.getMonth();
				const sameYear =
					subscriptionDueDate.getFullYear() === date.getFullYear();

				if (sameDate && sameMonth && sameYear) return subs;
			});

			return subscriptionInCurrentDate;
		} catch (error) {
			console.log('Failed to retrieve your data!');
			return [];
		}
	};

	const getSubscriptionByMonth = (date: Date) => {
		try {
			const subscriptionInCurrentDate = subscriptions.filter((subs) => {
				const subscriptionDueDate = new Date(subs.due_date);

				const sameMonth = subscriptionDueDate.getMonth() === date.getMonth();
				const sameYear =
					subscriptionDueDate.getFullYear() === date.getFullYear();

				if (sameMonth && sameYear) return subs;
			});

			return subscriptionInCurrentDate;
		} catch (error) {
			console.log('Failed to retrieve your data!');
			return [];
		}
	};

	const getSubscriptionById = (_id: number): SubscriptionDataTypes => {
		const subscription = subscriptions.find((subs) => subs.id === _id);
		if (!subscription) {
			throw new Error(`Subscription with id ${_id} not found`);
		}
		return subscription;
	};

	return (
		<subscriptionContext.Provider
			value={{
				loading,
				subscriptions,
				saveSubscription,
				deleteSubscriptionById,
				updateSubscription,
				getSubscriptionByDate,
				getSubscriptionByMonth,
				getSubscriptionById,
			}}
		>
			{children}
		</subscriptionContext.Provider>
	);
};

export default SubcriptionProvider;
