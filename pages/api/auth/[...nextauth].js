import NextAuth from "next-auth/client";
import { CredentialProvider } from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		CredentialProvider({
			name: "credentials",
			credentials: {
				username: {
					label: "Email",
					type: "email",
					placeholder: "Enter your email here",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "Enter your password here",
				},
			},
			authorize: (credentials) => {
				if (
					credentials.username === "admin" &&
					credentials.password === "admin"
				) {
					return {
						id: "4543g",
						name: "Admin",
						email: "",
						avatar: "",
						role: "admin",

						// Optional
						token: "",
						expires: "",
						permissions: [],

						// Optional
						provider: "credentials",
						providerId: "",
						providerData: {},
						createdAt: "",
						updatedAt: "",
						deletedAt: "",
						deleted: false,
						verified: false,
						blocked: false,
						disabled: false,
						locked: false,
						lastLogin: "",
						lastFailedLogin: "",
						failedLoginCount: 0,
					};
				}

				return null;
			},
		}),
	],
});
