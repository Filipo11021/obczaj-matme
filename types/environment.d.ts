declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHCMS_URL: string;
      GRAPHCMS_TOKEN:string;
      EMAIL_HOST: string;
      EMAIL_USER: string;
      EMAIL_PASS: string;
    }
  }
}

export {};
