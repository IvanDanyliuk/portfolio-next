import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';
import jsonwebtoken from 'jsonwebtoken';



export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  pages: {
    signIn: '/signin'
  }
};