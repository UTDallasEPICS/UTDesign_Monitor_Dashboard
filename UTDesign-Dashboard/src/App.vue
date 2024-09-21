<script setup lang="ts">

</script>

<template lang="pug">
div.max-w-min.mx-auto.mt-7.absolute
  div.max-w-min.mx-auto.gap-2
    button
      NuxtLink.items-center.pt-5.px-2.py-2.text-sm.font-medium.rounded-md.cursor-pointer.no-border.relative(style="text-align:center;" class='text-gray-999 hover:text-black transition duration-300' to='/' active-class="active") Home
    button 
      NuxtLink(to='/my-dashboards') my dashboards
    button
      NuxtLink(to='/shared-dashboards') shared dashboards
    button
      NuxtLink(to='/new-dashboard') new dashboard
</template>

