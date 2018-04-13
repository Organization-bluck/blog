<template lang="html">
  <div class="foot">
    <div class="container">
      <run-time></run-time>
      <p>Made
        <i class="fa fa-heart"></i>
        By Jason | yan | hao
      </p>
    </div>
  </div>
</template>

<script>
import runTime from 'baseComponents/runTime.vue'
export default {
  components: {
    runTime
  }
}
</script>

<style lang="scss">
  .foot {
    color: #888;
    font-size: 12px;
    position: relative;
    margin-top: 40px;
    padding: 20px 0 10px;
    background-color: rgb(46, 47, 47);
    text-align: center;
    p{
      line-height:2;
    }
  }
</style>
