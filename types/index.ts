export interface MessageType {
	text: string;
	timestamp: any;
	messageId: string;
}

export interface UserType {
	displayName: string | null;
	email: string | null;
	uid: string;
	username?: string;
}
