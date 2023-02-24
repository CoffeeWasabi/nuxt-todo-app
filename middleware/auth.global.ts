import { useAuth } from "../composables/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { loggedIn } = useAuth();

    // useAuthに成功していない、かつログイン画面ではない
    if(!loggedIn.value && to.path !== "/login") {
        // ログイン画面に遷移
        const path = "/login"
        return { path }
    }
});