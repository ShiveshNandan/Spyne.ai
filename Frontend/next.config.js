/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains:["cdn.imagin.studio"]
    },
    env : {
        NURL : process.env.NEXT_PUBLIC_URL
    },
    reactStrictMode:true
}

module.exports = nextConfig
