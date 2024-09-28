<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>我的應用程式</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text to="/">首頁</v-btn>
            <v-btn text to="/about">關於</v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
            <!-- 顯示當前路由的組件 -->
        </v-main>

        <v-footer app>
            <v-container fluid>
                <v-row justify="center">
                    <v-col class="text-center">
                        <p>© 2024 我的應用程式。保留所有權利。</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
/* 添加樣式 */
</style>
