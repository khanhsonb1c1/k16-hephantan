<template>
  <section style="padding: 200px 0">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center" style="">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 mr-3">Sign in with</p>
              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <!-- <p class="text-center fw-bold mx-3 mb-0">Or</p> -->
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                v-model="username"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Nhập tài khoản"
              />
              <!-- <label class="form-label" for="form3Example3">Email address</label> -->
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                v-model="password"
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Nhập mật khẩu"
              />
              <!-- <label class="form-label" for="form3Example4">Password</label> -->
            </div>
            <div class="form-outline mb-3">
              <input
                v-model="full_name"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Nhập tên"
              />
            </div>
            <div class="form-outline mb-3">
              <input v-model="email" id="form3Example4" class="form-control form-control-lg" placeholder="Nhập email" />
            </div>
            <div class="form-outline mb-3">
              <input
                v-model="address"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Nhập địa chỉ"
              />
              <!-- <label class="form-label" for="form3Example4">Password</label> -->
            </div>
            <div class="form-outline mb-3">
              <input v-model="age" id="form3Example4" class="form-control form-control-lg" placeholder="Nhập tuổi" />
              <!-- <label class="form-label" for="form3Example4">Password</label> -->
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                @click="onRegister"
                type="button"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Đăng ký
              </button>
              <p class="fw-bold mt-5 pt-1 mb-0">
                Về trang

                <router-link to="/login" class="text-primary">Đăng nhập</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import { register } from "../services/getAPI";
export default {
  setup() {
    const router = useRouter();
    const toast = useToast();

    const username = ref("");
    const email = ref("");
    const password = ref("");
    const full_name = ref("");
    const age = ref("");
    const address = ref("");

    const onRegister = async () => {
      register({
        username: username.value,
        email: email.value,
        password: password.value,
        full_name: full_name.value,
        age: age.value,
        address: address.value,
      })
        .then(() => {
          toast.success("Đăng ký thành công");

          router.push("/login");
        })
        .catch((error) => {
          toast.error(error.response.data.error);
        });
    };
    return { onRegister, username, password, full_name, age, address, email };
  },
};
</script>

<style scoped>
input {
  padding: 0.5em;
}
</style>
