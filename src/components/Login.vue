<template>
    <el-form class="login-form">
        <h3 class="title">Login</h3>
        <el-form-item prop="email">
            <i class="fas fa-user"></i>
            <el-input
                ref="email"         
                type="text" 
                v-model="loginForm.email"
                placeholder="email"
            />
        </el-form-item>
        <el-form-item prop="password">
            <i class="fas fa-lock"></i>
            <el-input 
                :type="passwordType" 
                v-model="loginForm.password"
                placeholder="password"
            />
            <span class="show-pwd" @click="showPwd">
                <i :class="{fas: true, 'fa-eye-slash': !pwOpened, 'fa-eye': pwOpened}"></i>
            </span>
        </el-form-item>
        <el-button 
            @click="login"
            :loading="loading"
        >로그인</el-button>
    </el-form>
</template>

<script>
import apiManagers from '@/api/manager'

export default {
    name: 'Login-page',

    data() {
        return {
            loginForm: {
                email: "",
                password: "",
            },
            pwOpened: false,
            passwordType: "password",
            loading: false,
        }
    },

    mounted() {
        this.$refs.email.focus();
    },

    methods: {
        login() {
            this.loading = true;
            apiManagers
                .signin(this.loginForm.email, this.loginForm.password)
                .then((response) => {
                    this.loading = false;

                    if (response.data.resultCode !== 0) {
                        this.$message.error(response.data.errorMsg);
                        return;
                    }
                    this.$router.push({path: "/"});
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        showPwd() {
            this.pwOpened = ! this.pwOpened;
            if (this.pwOpened) {
                this.passwordType = "";
            } else {
                this.passwordType = "password";
            }
            this.$nextTick(() => {
                this.$refs.password.focus();
            });
        },
    }
};
</script>

<style scoped>
.login-form {
    width: 90%;
    margin: auto;
    max-width: 400px;
}
h3 {
    text-align: center;
}
.login-form div > i {
    position: absolute;
    top: 14px;
    left: 15px;
    z-index: 1;
}
.show-pwd {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
}
button {
    width: 100%;
}
</style>

<style>
.login-form .el-input input {
    padding-left: 40px;
}
</style>