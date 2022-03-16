<template>
  <div class="wrapper-auth">
    <div class="container-fluid">
      <div class="row justify-content-end">
        <div class="col-lg-6 col-md-12">
          <div class="wrapper-form pt-5 text-center px-5">
            <h1 class="fw-bold form-title fs-3">Login</h1>
            <p class="form-start">let's Get start</p>
            <ul
              class="nav nav-tabs d-flex border-0 justify-content-center mb-2"
            >
              <li class="nav-item" @click="user = 'sub'">
                <a
                  class="nav-link fs-3"
                  :class="{ active: user == 'sub' }"
                  aria-current="page"
                  href="#"
                  >Super-user</a
                >
              </li>

              <li class="nav-item" @click="user = 'super'">
                <a
                  class="nav-link fs-3"
                  :class="{ active: user == 'super' }"
                  href="#"
                  >Sup-user</a
                >
              </li>
            </ul>
            <div class="sign-up">
              <form action="" class="">
                <div class="form-group">
                  <label for="email"
                    ><i class="fa-solid fa-envelope"></i
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <label
                    for="password"
                    class="w-100 d-flex justify-content-between"
                  >
                    <i class="fa-solid fa-lock"></i>
                    <i
                      class="fa-solid pointer"
                      :class="{
                        'fa-eye': type == 'text',
                        'fa-eye-slash': type == 'password',
                      }"
                      @click="type = type == 'text' ? 'password' : 'text'"
                    ></i>
                  </label>
                  <input
                    :type="type"
                    name="password"
                    id="password"
                    placeholder="Your password"
                  />
                </div>
                <div class="container-actions">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      class="d-inline-block"
                    />
                    <label for="agree-term" class="mx-4">Remmber Me </label>
                  </div>
                  <div class="forget-pass">
                    <p>Forgrt Password ?</p>
                  </div>
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    class="form-submit"
                    :value="formtype == 'login' ? 'Login' : 'Sign Up'"
                  />
                </div>
                <p class="haveAccount">
                  {{
                    formtype == "login"
                      ? "Don't have an account?"
                      : "Already have an account?"
                  }}
                  <span
                    @click="formtype = formtype == 'login' ? 'signUp' : 'login'"
                  >
                    {{ formtype == "login" ? "Sign Up" : "Login" }}
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "password",
      formtype: "login",
      user: "sub",
    };
  },
};
</script>
