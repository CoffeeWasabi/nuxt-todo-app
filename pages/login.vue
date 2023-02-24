<script setup lang="ts">
import { Form, defineRule } from "vee-validate";
import LoginTextField from "~/components/LoginTextField.vue";
import { userStore } from "~/store/todoStore";

const accountId = ref("");
const password = ref("");

const errorMessage = ref("");

const appStore: any = userStore();// defineStore呼び出し

const login = async () =>{
    // DBにアクセスしてユーザー情報を取得する
    const { data, error } = await useFetch("/api/db/user", {
        method: "post",
        body: { accountId: accountId.value, password: password.value }
    });

    if(data.value.errorMessage){
        errorMessage.value = data.value.errorMessage;
        return;
    }

    // ログイン情報検証
    const { login } = useAuth();

    // User情報をstoreにセット
    appStore.setUser(data.value.user);

    // 次画面遷移
    login().then(() => {
        const router = useRouter();
        router.replace("/list");
    });
};
</script>

<template>
    <div class="text-h4 text-center">Login Form</div>
    <v-card class="pa-5 my-5" variant="outlined">
            <Form 
                as ="v-form" v-slot="{ meta: FormMeta }">
                <v-container>
                    <LoginTextField 
                        v-model="accountId"
                        name="accountId" 
                        type="text"
                        prependIcon="mdi-account-outline"
                        placeHolder="id001 OR id002 OR id003"
                    />
                </v-container>
                <v-container>
                <LoginTextField 
                    v-model="password"
                    name="password" 
                    type="password"
                    prependIcon="mdi-lock-outline"
                    placeHolder="admin001 OR admin002 OR admin003"
                />
                </v-container>
                <v-container>
                    <v-row justify="center">
                        <v-btn 
                            @click="login" 
                            :disabled="!FormMeta.touched || !FormMeta.valid"
                            variant="outlined">
                            Login
                        </v-btn>
                    </v-row>
                    <v-row justify="center">
                        <div class="error-message">{{ errorMessage }}</div>
                    </v-row>
                </v-container>
            </Form>
    </v-card>
</template>