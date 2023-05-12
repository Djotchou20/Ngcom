<template>
  <div class="dashboard">
    <!-- App Header -->
    <div class="appHeader bg-primary text-light">
      <div class="left">
        <a
          href="#"
          class="headerButton"
          data-bs-toggle="modal"
          data-bs-target="#sidebarPanel"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </a>
      </div>
      <div class="pageTitle">
        <!-- <img src="../assets/img/ngcom_net.jpg" alt="logo" class="logo" /> -->
      </div>
      <div class="right">
        <a href="app-settings.html" class="headerButton">
          <!-- <img
            src="../assets/img/Settings.jpg"
            alt="image"
            class="imaged w32"
          /> -->
        </a>
      </div>
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">
      <!-- Wallet Card -->
      <div class="section wallet-card-section pt-1">
        <div class="wallet-card">
          <!-- Balance -->
          <div class="balance">
            <div class="left">
              <span class="title">Welcome</span>
              <h1 class="total">Djotchou Cebastien</h1>
            </div>
          </div>
          <!-- * Balance -->

          <!-- current date and time -->
          <div class="left">
            <p>{{ currentTime }}</p>
          </div>
          <!-- * current date and time -->

          <!-- Wallet Footer -->
          <div class="wallet-footer">
            <div class="item">
              <router-link
                :to="{ name: 'SiteSurvey' }"
                data-bs-toggle="modal"
                data-bs-target="#withdrawActionSheet"
              >
                <div class="icon-wrapper bg-danger">
                  <ion-icon name="telescope-outline"></ion-icon>
                </div>
                <strong>My Surveys</strong>
              </router-link>
            </div>
            <div class="item">
              <router-link
                :to="{ name: 'BaseStation' }"
                data-bs-toggle="modal"
                data-bs-target="#sendActionSheet"
              >
                <div class="icon-wrapper">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <strong>Base Station</strong>
              </router-link>
            </div>
            <div class="item">
              <a href="app-cards.html">
                <div class="icon-wrapper bg-success">
                  <ion-icon name="card-outline"></ion-icon>
                </div>
                <strong>Cards</strong>
              </a>
            </div>
            <div class="item">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exchangeActionSheet"
              >
                <div class="icon-wrapper bg-warning">
                  <ion-icon name="swap-vertical"></ion-icon>
                </div>
                <strong>Exchange</strong>
              </a>
            </div>
          </div>
          <!-- * Wallet Footer -->
        </div>
      </div>
      <!-- Wallet Card -->

      <!-- Deposit Action Sheet -->
      <div
        class="modal fade action-sheet"
        id="depositActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Balance</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="account1">From</label>
                      <select class="form-control custom-select" id="account1">
                        <option value="0">Savings (* 5019)</option>
                        <option value="1">Investment (* 6212)</option>
                        <option value="2">Mortgage (* 5021)</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <label class="label">Enter Amount</label>
                    <div class="input-group mb-2">
                      <span class="input-group-text" id="basic-addona1">$</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter an amount"
                        value="100"
                      />
                    </div>
                  </div>

                  <div class="form-group basic">
                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-bs-dismiss="modal"
                    >
                      Deposit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- * Deposit Action Sheet -->

      <!-- Withdraw Action Sheet -->
      <div
        class="modal fade action-sheet"
        id="withdrawActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Withdraw Money</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="account2d">From</label>
                      <select class="form-control custom-select" id="account2d">
                        <option value="0">Savings (* 5019)</option>
                        <option value="1">Investment (* 6212)</option>
                        <option value="2">Mortgage (* 5021)</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="text11d">To</label>
                      <input
                        type="email"
                        class="form-control"
                        id="text11d"
                        placeholder="Enter IBAN"
                      />
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <label class="label">Enter Amount</label>
                    <div class="input-group mb-2">
                      <span class="input-group-text" id="basic-addonb1">$</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter an amount"
                        value="100"
                      />
                    </div>
                  </div>

                  <div class="form-group basic">
                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-bs-dismiss="modal"
                    >
                      Withdraw
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- * Withdraw Action Sheet -->

      <!-- Send Action Sheet -->
      <div
        class="modal fade action-sheet"
        id="sendActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Send Money</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="account2">From</label>
                      <select class="form-control custom-select" id="account2">
                        <option value="0">Savings (* 5019)</option>
                        <option value="1">Investment (* 6212)</option>
                        <option value="2">Mortgage (* 5021)</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="text11">To</label>
                      <input
                        type="email"
                        class="form-control"
                        id="text11"
                        placeholder="Enter bank ID"
                      />
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <label class="label">Enter Amount</label>
                    <div class="input-group mb-2">
                      <span class="input-group-text" id="basic-addon1">$</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter an amount"
                        value="100"
                      />
                    </div>
                  </div>

                  <div class="form-group basic">
                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-bs-dismiss="modal"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- * Send Action Sheet -->

      <!-- Exchange Action Sheet -->
      <div
        class="modal fade action-sheet"
        id="exchangeActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Exchange Money</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group basic">
                        <div class="input-wrapper">
                          <label class="label" for="currency1">From</label>
                          <select
                            class="form-control custom-select"
                            id="currency1"
                          >
                            <option value="1">EUR</option>
                            <option value="2">USD</option>
                            <option value="3">AUD</option>
                            <option value="4">CAD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group basic">
                        <div class="input-wrapper">
                          <label class="label" for="currency2">To</label>
                          <select
                            class="form-control custom-select"
                            id="currency2"
                          >
                            <option value="1">USD</option>
                            <option value="1">EUR</option>
                            <option value="2">AUD</option>
                            <option value="3">CAD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <label class="label">Enter Amount</label>
                    <div class="input-group mb-2">
                      <span class="input-group-text" id="basic-addon2">$</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter an amount"
                        value="100"
                      />
                    </div>
                  </div>

                  <div class="form-group basic">
                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-bs-dismiss="modal"
                    >
                      Exchange
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- * Exchange Action Sheet -->

      <!-- Transactions -->
      <div class="section mt-4">
        <div class="section-heading">
          <h2 class="title">Site Survey</h2>
          <a href="app-transactions.html" class="link">View All</a>
        </div>
        <div class="transactions">
          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->
        </div>
      </div>
      <!-- * Transactions -->

      <!-- Transactions -->
      <div class="section mt-4">
        <div class="section-heading">
          <h2 class="title">Installations</h2>
          <a href="app-transactions.html" class="link">View All</a>
        </div>
        <div class="transactions">
          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->

          <!-- item -->
          <div href="app-transaction-detail.html" class="item">
            <div class="detail">
              <div>
                <strong></strong>
              </div>
            </div>
          </div>
          <!-- * item -->
        </div>
      </div>
      <!-- * Transactions -->

      <!-- * News -->

      <!-- app footer -->
      <div class="appFooter">
        <div class="footer-title">Copyright © Ngcom Networks Solutions.</div>
        All Rights Reserved.
      </div>
      <!-- * app footer -->
    </div>
    <!-- * App Capsule -->
  </div>

  <!-- bottom menu -->
  <AppBottomMenu />
  <!--* bottom menu -->
</template>
<script>
import AppBottomMenu from "../components/AppBottomMenu.vue";

export default {
  name: "Dashboard",
  components: { AppBottomMenu },

  data() {
    return {
      currentTime: new Date().toLocaleString(),
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  },
};
</script>

<style scoped>
p {
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 15px;
  font-weight: 900;
  color: #27173e;
}
</style>