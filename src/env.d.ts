interface ImportMetaEnv {
    VITE_API_URL: string;
    VITE_TELEGRAM_BOT:string;
    VITE_TELEGRAM_CHAT_ID:string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}