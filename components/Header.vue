<script setup lang="ts">
import { userStore } from "~/store/todoStore";
import "@mdi/font/css/materialdesignicons.css";

const user = userStore();

interface Props{
    user?: any;
    screenType: string;
}

const props = withDefaults(defineProps<Props>(), {
    screenType: "",
});

interface Emits{
    (e: "update:logout"): void
}

const emit = defineEmits<Emits>()

function logout() {
    emit("update:logout");
}
</script>

<template>
    <header class="pa-2">
        <v-container >
            <v-row v-if="props.screenType === 'loggedIn'" justify="start">
                <v-col class="ma-1">
                    <v-icon 
                        icon="mdi-account-outline"
                    ></v-icon>
                    <template v-if="user.firstName && user.lastName">
                        {{ user.firstName }} {{ user.lastName }}
                    </template>
                    <template v-else>
                        Guest？
                    </template>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn variant="outlined" @click="logout">logout</v-btn>
                </v-col>
            </v-row>
            <v-row v-else justify="start">
                <v-col class="ma-1">
                    Todo App
                </v-col>
                <v-col class="d-flex justify-end">
                </v-col>
            </v-row>
        </v-container>
    </header>
</template>