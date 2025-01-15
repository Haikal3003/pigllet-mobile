import axios from 'axios';

interface Props {
	id: number;
	email: any;
}

export const SendEmailVerification = async ({ id, email }: Props) => {
	const res = await axios.get(
		`${process.env.EXPO_PUBLIC_API_URL}/email/gvl/${id}/${email}`
	);
	return res.data;
};
