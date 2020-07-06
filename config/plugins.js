module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_KEY'),
      secretAccessKey: env('AWS_SECRET'),
      region: 'sa-east-1',
      params: {
        Bucket: env('AWS_BUCKET'),
      },
    },
  }
});