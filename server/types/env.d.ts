declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    DEV_PORT: string;
    TEST_PORT: string;
    PROD_DB_URI: string;
    DEV_DB_URI: string;
    DEV_DB_NAME: string;
    TEST_DB_URI: string;
    ENCRYPT_SECRET: string;
    ENCRYPT_IV: string;
    CLIENT_ORIGIN: string;
    COOKIE_NAME: string;
    COOKIE_ID: string;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_APP_KEY: string;
    CLOUDINARY_API_SECRET: string;
  }
}
