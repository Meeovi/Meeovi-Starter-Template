import { inferAdditionalFields, adminClient, createAuthClient } from "@meeovi/layer-auth";
import type { auth } from "../server/utils/auth"

export const authClient = createAuthClient({
	plugins: [inferAdditionalFields<typeof auth>(), adminClient()],
});

export const signIn = authClient.signIn;
export const signOut = authClient.signOut;
export const signUp = authClient.signUp;
export const useSession = authClient.useSession;
export const resetPassword = authClient.resetPassword;
export const deleteUser = authClient.deleteUser;
// Some versions/name variants use `forgetPassword` vs `forgotPassword`.
export const forgetPassword = (authClient as any).forgetPassword ?? (authClient as any).forgotPassword;