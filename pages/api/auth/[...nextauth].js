import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

if (process.env.VERCEL_ENV === "preview") {
  providers.push(
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {label: "Username", type: "text", placeholder: "fish"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        if (
          credentials.username === "fish" &&
          credentials.password === "password"
        ) {
          return {id: "1", name: "Ralf", email: "ralf@actyvy.st"};
        } else {
          return null;
        }
      },
    })
  );
} else {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

export const authOptions = {
  // Configure one or more authentication providers
  providers,
};

export default NextAuth(authOptions);
