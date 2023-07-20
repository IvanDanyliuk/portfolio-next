import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: '',
      clientSecret: ''
    })
  ]
}