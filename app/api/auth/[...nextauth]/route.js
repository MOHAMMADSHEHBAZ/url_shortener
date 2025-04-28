import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"

const auth = NextAuth({
    providers:[
        GitHub(
            {
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            }
        )
    ]
})

export {auth as GET,auth as POST}