<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <CIcon name="cil-envelope-open" />
        <CBadge color="danger" class="ml-auto" v-show="notif.length > 0">{{notif.length}}</CBadge>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-left dropdown-menu-lg pt-0" color="light">
      <strong>Notification</strong>
    </CDropdownHeader>
    <div v-if="notif.length > 0">
      <div :style="((notif.length >= 2) ? 'height:200px;' : 'height:100px;') +' overflow-x:auto'">
        <CDropdownItem
          v-for="(data,index) in notif"
          :key="index"
          @click="$router.push(`/disposition/detail/${data.id}`)"
        >
          <div class="message">
            <div class="py-3 mfe-3 float-left">
              <div class="c-avatar">
                <img class="c-avatar-img" :src="`${baseurl}/images/garuda.png`" />
                <!-- <span class="c-avatar-status bg-warning"></span> -->
              </div>
            </div>
            <div>
              <small class="text-muted">{{data.origin}}</small>
              <small class="text-muted float-right mt-1">{{data.number}}</small>
            </div>
            <div class="text-truncate font-weight-bold">
              {{
              (data.dispoStatus == 0)
              ? 'Dispo belum dibaca'
              : (data.dispoStatus == 1 ? 'Dispo belum dibuat Contract':'')
              }}
            </div>
            <div class="small text-muted text-truncate">{{data.perihal.substr(0,70)+'...'}}</div>
          </div>
        </CDropdownItem>
      </div>
    <CDropdownDivider></CDropdownDivider>
    <CDropdownItem @click="$router.push('/disposition')">Show All Disposition</CDropdownItem>
    </div>
    <CDropdownItem v-else>No notification</CDropdownItem>
  </CDropdown>
</template>


<script>
export default {
  name: "TheMsgNotif",
  props: ["notif"],
  data() {
    return {
      itemsCount: 0,
      baseurl:BASE_URL
    };
  }
};
</script>
