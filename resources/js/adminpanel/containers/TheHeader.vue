<template>
  <CHeader fixed with-subheader light>
    <CToggler in-header class="ml-3 d-lg-none" v-c-emit-root-event:toggle-sidebar-mobile />
    <CToggler in-header class="ml-3 d-md-down-none" v-c-emit-root-event:toggle-sidebar />
    <CHeaderBrand
      class="mx-auto d-lg-none"
      src="images/logo-white.png"
      width="190"
      height="46"
      alt="Logo"
    />
    <CHeaderNav class="d-md-down-none mr-auto"></CHeaderNav>
    <CHeaderNav class="mr-4">
      <TheMsgNotif :notif="notif" />
      <TheHeaderDropdownAccnt />
    </CHeaderNav>
    <CHeaderNav > {{user.fullname}} | {{user.unitName}} | {{user.jabatan}}&nbsp; &nbsp;</CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0" />
    </CSubheader>
    
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import TheMsgNotif from "./TheMsgNotif";

export default {
  name: "TheHeader",
  components: {
    TheHeaderDropdownAccnt,
    TheMsgNotif
  },
  data() {
    return {
      user :USER,
      notif: [],
      timer: ''
    };
  },
  created() {
    this.getdata();
    this.timer = setInterval(this.getdata, 100000)
  },
  methods: {
    getdata() {
      let params = { api_token: USER.api_token };
      axios.get(API_URL + "/notif", { params: params }).then(r => {
        this.notif = r.data;
        // console.log("object r" ,r.data);
      });
    },
    cancelAutoUpdate () { clearInterval(this.timer) }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
};
</script>
