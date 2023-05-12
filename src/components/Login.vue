<template>
  <!-- App Capsule -->
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <!-- <img
        src="../assets/img/logo.jpg"
        class="mb-2"
        alt="ngcom image"
        style="width: 25%"
      /> -->
      <h1>Log in</h1>
      <h4>Fill the form to log in</h4>
    </div>
    <div class="section mb-5 p-2">
      <form @submit.prevent="handleSubmit">
        <div class="card">
          <div class="card-body pb-1">
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="email1">Username</label>
                <input
                  type="username"
                  class="form-control"
                  id="email1"
                  placeholder="Your Username"
                  v-model="username"
                  required
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>

            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  autocomplete="off"
                  placeholder="Your password"
                  v-model="secret"
                  required
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div class="form-button-group transparent">
            <button type="submit" class="btn btn-block btn-lg" style="background-color: #FE5919; font-weight: bold;">
                Log in
            </button>
        </div>
      </form>
    </div>
  </div>
  <!-- * App Capsule -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      secret: "",
      passwordError: null,
    };
  },

  methods: {
    handleSubmit() {
      // validate password
      this.passwordError =
        this.secret.length > 5
          ? ""
          : "Password must be at least 6 characters long";
      if (!this.passwordError) {
        // make post request to database to save user
        axios
          .post(
            "https://testenv.ciphernet.net/ngcomintranetv2/api/v1/auth/getkeys",
            {
              username: this.username,
              secret: this.secret,
            },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("api_key", response.data.api_key);
            console.log(response.data.username);
            console.log(response.data.api_key);
            this.$router.push("Dashboard");
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
        console.log("username: ", this.username);
        console.log("secret: ", this.secret);
      }
    },
  },
};
</script>