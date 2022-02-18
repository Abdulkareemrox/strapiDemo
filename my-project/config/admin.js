module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fa0bc52a984da557d6d3eec4a7876ea'),
  },
});
