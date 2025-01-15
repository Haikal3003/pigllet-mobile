import axios from 'axios';

export const RegisterUser = async (form: any) => {
	const res = await axios.post(
		`${process.env.EXPO_PUBLIC_API_URL}/users`,
		form
	);

	return res.data;
};
