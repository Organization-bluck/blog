<template>
  <section class="secondary">
    <div class="section">
      <slot name="sidecontent"></slot>
    </div>
  </section>
</template>
<script>
	export default {
	  name: 'slideSection'
	}
</script>
<style scoped>
	.secondary {
	  margin: 0 0 10px 0;
	  padding: 15px;
	  position: relative;
	}
</style>
