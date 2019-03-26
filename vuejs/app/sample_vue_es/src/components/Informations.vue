<template>
  <section class="wh-centered">
    <div class="frame">
      <h1>お知らせ</h1>
      <ul>
        <li>未読：{{ countUnread }} 件</li>
        <li>未対応：{{ countUndone }} 件</li>
      </ul>
      <button>問い合わせ対応する</button>
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
  }
}
</script>
