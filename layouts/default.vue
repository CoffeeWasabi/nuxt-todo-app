<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
    <v-app>
        <div>
            <Header screenType="noLoggedIn"/>
            <div class="container">
                <slot />
            </div>
            <Footer />
        </div>
    </v-app>
</template>