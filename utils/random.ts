export const generateId = () => {
	return Math.random().toString(36).substring(2, 15);
};

export const formatDate = (time: any) => {
	let dateInMillis = time * 1000;
	let date = new Date(dateInMillis);
	let myDate = date.toDateString();
	let myTime = date.toLocaleTimeString();

	return myDate + " @ " + myTime;
};
