import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          response_type: "code",
          redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/google`
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
