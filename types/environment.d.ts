export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CLIENT: string
      DB_HOST: string
      DB_USERNAME: string
      DB_DATABASE: string
      DB_PASSWORD: string
      SECRET_KEY: any
    }
  }
}