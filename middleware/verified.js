export default function ({ $auth, redirect }) {
  if (!$auth.user.email_verified_at) {
    return redirect({ path: '/auth/verify' })
  }
}
