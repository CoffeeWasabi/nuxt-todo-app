/**
 * ログイン時のトークンを発行する
 * 
 */
export default defineEventHandler((event) => {
    return {
        accessToken: "login token",
    };
});