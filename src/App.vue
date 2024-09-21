<script setup lang="ts">

</script>

<template lang="pug">
div.mx-auto.mt-7.absolute(class="min-h-1")
  div.mx-auto.gap-2
    button
      NuxtLink(t='/') Home
    button 
      NuxtLink(to='/my-dashboards') my dashboards
    button
      NuxtLink(to='/shared-dashboards') shared dashboards
    button
      NuxtLink(to='/new-dashboard') new dashboard
    button
      NuxtLink(to='/admin') admin
</template>

