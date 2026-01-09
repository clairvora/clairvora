import { handleClerk } from 'clerk-sveltekit/server';
import { CLERK_SECRET_KEY } from '$env/static/private';

export const handle = handleClerk(CLERK_SECRET_KEY, {
	signInUrl: '/login'
});
