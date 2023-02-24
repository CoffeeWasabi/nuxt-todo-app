import type { Ref } from "vue";

export const useAuth = () => {
    const cookie = useCookie("access_token");

    // 今回はcookieの値の有無のみで判定
    const initialValue = cookie.value ? true: false;
    const loggedIn = useState("loggedIn", () => initialValue);

    const login = (loggedIn: Ref<boolean>) => async () => {
        const data = await useFetch("/api/login");
        loggedIn.value = true;
        return true;
    };

    const logout = (loggedIn: Ref<boolean>) => async () => {
        loggedIn.value = false;
        cookie.value = null;
    };

    const getToken = () => {
        return cookie.value;
    };

    return {
        loggedIn,
        getToken,
        login: login(loggedIn),
        logout: logout(loggedIn),
    };
};