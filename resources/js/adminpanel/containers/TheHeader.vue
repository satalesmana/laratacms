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
    <CHeaderNav > Tes&nbsp; &nbsp;</CHeaderNav>
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
      notif: [],
      timer: ''
    };
  }
};
</script>
