module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: '@strapi/provider-upload-aws-s3',
        providerOptions: {
          s3Options: { // Envolva as opções do S3 aqui
            accessKeyId: env('SUPABASE_ACCESS_KEY'),
            secretAccessKey: env('SUPABASE_SECRET_ACCESS_KEY'),
            region: env('SUPABASE_REGION'),
            endpoint: env('SUPABASE_API_URL'),
            params: {
              Bucket: env('SUPABASE_BUCKET'),
            },
          },
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
  