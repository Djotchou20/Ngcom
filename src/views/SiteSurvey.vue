<template>
  <!-- App Header -->
  <div>
    <AppHeader title="Site Survey" />
  </div>
  <!-- * App Header -->
  <!-- <br /> -->

  <!-- Transactions -->
  <div class="section mt-4" v-if="responseData">
    <br />
    <br />
    <div class="section-heading">
      <h2 class="left">Pending</h2>
    </div>
    <div class="transactions">
      <!-- item -->
      <router-link
        class="item"
        :to="{ name: 'SurveyDetails', params: { id: item.id } }"
        v-for="item in displayedItems"
        :key="item.id"
      >
        <div class="detail">
          <div class="nase">
            <strong class="clientname">{{ item.clientname }}</strong>
            <p class="siteaddress">{{ item.siteaddress }}</p>
          </div>
        </div>
        <div class="right">
          <div class="price text-danger">
            <ion-icon
              name="chevron-forward-outline"
              style="font-size: 25px"
            ></ion-icon>
          </div>
        </div>
      </router-link>
      <!-- * item -->
    </div>
    <!-- pagination buttons -->
    <div class="text-end">
      <div class="pagination" v-if="totalPages > 0">
        <button
          class="paginationBtn"
          v-if="currentPage > 1"
          @click="currentPage--"
        >
          Prev
        </button>

        <!-- <button class="paginationBtn" v-for="page in totalPages" :key="page"
            :class="{ active: currentPage === page }"
            @click="currentPage = page">{{ page }}
        </button> -->

        <button
          class="paginationBtn"
          v-if="currentPage < totalPages"
          @click="currentPage++"
        >
          Next
        </button>
      </div>
    </div>

    <!--* pagination buttons -->
  </div>

  <!-- My Site Survey Table -->
  <!-- <div class="section mt-2 mb-2" v-if="responseData">
<div class="card">
<div class="table-responsive">
<table class="table table-striped">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">Client Name</th>
<th scope="col">Date Raised</th>
<th scope="col">Survey Date</th>
<th scope="col">Client Email</th>
<th scope="col">Client Phone</th>
<th scope="col">Site Address</th>
<th scope="col" class="text-end">Action</th>
</tr>
</thead>
<tbody>
<tr v-for="item in displayedItems" :key="item.id">
<td>{{ item.id }}</td>
<td>{{ item.clientname }}</td>
<td>{{ item.created }}</td>
<td>{{ item.surveydate }}</td>
<td>{{ item.email }}</td>
<td>{{ item.phone }}</td>
<td>{{ item.siteaddress }}</td>
<td class="text-end">
<div class="right">
<router-link class="headerButton" :to="{ name: 'SurveyDetails', params: { id: item.id } }">
<button class="btn btn-dark">View</button>
</router-link>
</div>
</td>
</tr>
</tbody>
</table> -->
  <!-- pagination buttons -->
  <!-- <div class="text-end">
<div class="pagination" v-if="totalPages > 1">
<button class="paginationBtn" v-if="currentPage > 1" @click="currentPage--">Prev</button>

<button class="paginationBtn" v-for="page in totalPages" :key="page"
:class="{ active: currentPage === page }"
@click="currentPage = page">{{ page }}
</button>

<button class="paginationBtn" v-if="currentPage < totalPages" @click="currentPage++">Next</button>
</div>
</div> -->

  <!--* pagination buttons -->
  <!-- </div>
</div>
</div> -->

  <!--* My Site Survey Table -->
  <!-- <br>
<br>
<br>
<br>
<br> -->
  <!-- bottom menu -->
  <div>
    <AppBottomMenu />
  </div>
  <!--* bottom menu -->
</template>

<script>
import axios from "axios";
import AppHeader from "../components/AppHeader.vue";
import AppBottomMenu from "../components/AppBottomMenu.vue";

export default {
  name: "SiteSurvey",
  components: { AppHeader, AppBottomMenu },
  data() {
    return {
      responseData: null,
      itemsPerPage: 10,
      currentPage: 1,
    };
  },

  mounted() {
    this.fetchData();
  },

  computed: {
    totalPages() {
      if (!this.responseData) return 0;
      return Math.ceil(this.responseData.data.length / this.itemsPerPage);
    },
    displayedItems() {
      if (!this.responseData) return [];
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.responseData.data.slice(start, end);
    },
  },
  methods: {
    item(value) {
      this.$router.push({
        name: "SiteSurvey",
        params: {
          id: value,
        },
      });
    },
    fetchData() {
      axios
        .get(
          "https://testenv.ciphernet.net/ngcomintranetv2/api/v1/sitesurveyreq/getpendingsitesurveysbyuser?username=admin",
          {
            headers: {
              "x-api-key": localStorage.getItem("api_key"),
            },
          }
        )
        .then((response) => {
          this.responseData = response.data;
          console.log(this.responseData["data"]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* button {
border: none;
color: #fff;
background-image: linear-gradient(30deg, #fe5919, #e09577);
border-radius: 20px;
background-size: 100% auto;
font-family: inherit;
font-size: 17px;
padding: 0.6em 1.5em;
} */

/* button:hover {
background-position: right center;
background-size: 200% auto;
-webkit-animation: pulse 2s infinite;
animation: pulse512 1.5s infinite;
} */
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  /* background-color: white; */
  position: absolute;
  z-index: 1;
  margin-top: 0%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
}
.paginationBtn {
  color: white;
  background-color: #333;
  border-radius: 25%;
  padding: 2px 9px;
  margin-top: 3px;
}
.nase {
  text-align: left;
}
.clientname {
  color: black;
  font-weight: bold;
  font-size: 21px;
}
/* .left{
    margin-top: 15px;
} */
</style>