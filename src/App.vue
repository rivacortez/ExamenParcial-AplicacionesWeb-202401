<script>
import ToolbarComponent from "./public/components/Toolbar.component.vue";

export default {
  components: {
    ToolbarComponent
  }
}
</script>

<template>
  <ToolbarComponent/>

  <RouterView />
</template>
