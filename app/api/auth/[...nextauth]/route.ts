import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            //clientId: process.env.GOOGLE_CLIENT_ID as string,
           // clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
            clientId: '884443371716-h91ch70iehtmg2sj053po3km2mi1ts7f.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
});

export { handler as GET, handler as POST };


