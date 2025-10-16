<template>
   <div>
     <!-- <div class="container mx-auto"> -->
     <v-app
       class="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
     >
       <!-- <v-app :theme="isDark ? 'dark' : 'light'"> -->
       <!-- https://vuetifyjs.com/en/features/application-layout/
         Navbar contains all nav components such as v-app-bar, v-system-bar, v-navigation-drawer, v-bottom-navigation -->
         <Header-nav class="fixed z-50" /> 
        <v-main class="py-4 relative ">
         <slot >   </slot>

       </v-main>
       <!-- https://vuetifyjs.com/en/features/application-layout/
         TheFooter contains the v-footer -->
    <Footer></Footer>
     </v-app>
     <!-- </div> -->
   </div>
 </template>

<script setup>
useHead({
  titleTemplate: 'AK',
 
})
</script>

<style>

 body{
  font-family: 'Montserrat' !important;
  margin: 0;
  padding: 0;
}
</style>