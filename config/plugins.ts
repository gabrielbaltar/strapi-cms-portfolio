module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: '@strapi/provider-upload-aws-s3',
        providerOptions: {
          accessKeyId: env('SUPABASE_ACCESS_KEY'), // Diretamente em providerOptions
          secretAccessKey: env('SUPABASE_SECRET_ACCESS_KEY'),
          region: env('SUPABASE_REGION'),
          endpoint: env('SUPABASE_API_URL'),
          params: {
            Bucket: env('SUPABASE_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
  