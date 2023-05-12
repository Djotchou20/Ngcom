<template>
  <!-- App Header -->
  <div>
    <AppHeader title="Base Stations" />
  </div>
  <!--* App Header -->

  <!-- My Site Survey Details -->
  <div>
    <form>
      <div class="background">
        <div class="wallet-card">
          <div
            class="wrapper"
            v-for="station in responseData"
            :key="station.id"
          >
            <div class="input-wrapper">
              <label class="label">Name:</label>
              <div class="value">{{ station.name }}</div>
            </div>
            <div class="input-wrapper">
              <label class="label">Acheivable:</label>
              <div class="value">{{ station.achievable }}</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <!--* My Site Survey Details -->

  <!-- bottom menu -->
  <AppBottomMenu />
  <!--* bottom menu -->
</template>

<script>
import axios from "axios";
import AppHeader from "../components/AppHeader.vue";
import AppBottomMenu from "../components/AppBottomMenu.vue";

export default {
  name: "BaseStation",
  components: { AppHeader, AppBottomMenu },
  data() {
    return {
      responseData: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(
          "https://testenv.ciphernet.net/ngcomintranetv2/api/v1/sitesurveyreq/getbasestations",
          {
            headers: {
              "x-api-key": "w80ogcww8goscoogoksc0cws0kso8os8s0ssc04c",
              Cookie: "ci_sessions=if3p6tnpc9usk046svq8fdlnceo6of1j",
            },
          }
        )
        .then((response) => {
          this.responseData = response.data.data;
          console.log(response.status);
          console.log(this.responseData);
        })
        .catch((error) => {
          console.log(`Error fetching data: ${error.message}`);
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 1.6rem;
  letter-spacing: 0.004em;
  color: #958d9e;
  background: white;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.appHeader.transparent {
  background-color: #fe5919;
}
</style>