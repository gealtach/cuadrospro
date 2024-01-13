/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
        domains: ['res.cloudinary.com'],
      },
      env:{
        cloudName: 'dwj6wtgtb',
        cloudPreset: 'oxxsnr7q',
        acmp: 'TEST-7912064436267766-111617-dd73109e369a818f7c61391e1bca88a6-1551195321',
        pkmp: 'TEST-699c2148-a737-45ac-b65b-af3c34bc4e05',
        GOOGLE_CLIENT_ID: '884443371716-h91ch70iehtmg2sj053po3km2mi1ts7f.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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'
      },
}

module.exports = nextConfig
