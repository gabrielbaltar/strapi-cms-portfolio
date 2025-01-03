module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: '@strapi/provider-upload-aws-s3',
        providerOptions: {
          accessKeyId: env('SUPABASE_ACCESS_KEY'), // Chave pública de acesso (Service Role Key)
          secretAccessKey: env('SUPABASE_SECRET_ACCESS_KEY'), // Chave secreta de acesso (Service Role Key)
          region: env('SUPABASE_REGION'), // Região padrão do Supabase
          params: {
            Bucket: env('SUPABASE_BUCKET'), // Nome do bucket
          },
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
  