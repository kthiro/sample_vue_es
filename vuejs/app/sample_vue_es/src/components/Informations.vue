<template>
  <section class="wh-centered">
    <div class="frame">
      <div class="hero is-medium" id="frame-content">
        <div class="hero-body">
          <h1 class="title">お知らせ</h1>
          <h2 class="subtitle">
            未読：{{ countUnread }} 件
            <br>
            未対応：{{ countUndone }} 件
          </h2>
        </div>
        <div class="hero-foot">
          <button class="button is-info" @click="goInformationsPage">問い合わせ対応する</button>
        </div>
      </div>
    </div>
  </section>  
</template>

<script>
export default {
  data: function () {
    return {
      countUnread: 10, 
      countUndone: 15, 
    }
  }, 
  methods: {
    goInformationsPage: function () {
      this.$emit('callComponent', 'Inquiries')
    }, 
  }, 
}
</script>
