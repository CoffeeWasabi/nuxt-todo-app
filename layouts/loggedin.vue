<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import { userStore } from "~/store/todoStore";
import "@mdi/font/css/materialdesignicons.css";

const user = userStore();

const logout = () => {
    const { logout } = useAuth();
    logout();    

    // ログイン画面に遷移
    const router = useRouter();
    router.replace("/login");
};
</script>

<template>
    <v-app>
        <Header
            :user="user"
            screenType="loggedIn"
            @update:logout="logout()"
        />
        <div class="container">
            <slot />
        </div>
        <Footer />
    </v-app>
</template>