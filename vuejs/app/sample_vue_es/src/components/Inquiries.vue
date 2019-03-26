<template>
<section>
  <div class="hero is-info">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand ">
            <h1 class="navber-item is-size-2">ロゴ</h1>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">メニュー１</a>
              <a class="navbar-item">メニュー２</a>
              <a class="navbar-item">メニュー３</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">お問い合わせ一覧</h1>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed">
      <div class="container">
        <ul>
          <li class="is-active"><a>タブ１</a></li>
          <li><a>タブ２</a></li>
          <li><a>タブ３</a></li>
          <li><a>タブ４</a></li>
          <li><a>タブ５</a></li>
          <li><a>タブ６</a></li>
        </ul>
      </div>
    </nav>
  </div>
  </div>
  <div class="w-centered">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>時間</th>
          <th>既読未読</th>
          <th>対応</th>
          <th>ユーザー</th>
          <th>内容</th>
          <th>状況</th>
          <th>最後に担当した人</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-forのkeyには、配列のインデックスを指定するのが無難（一意なので） -->
        <tr v-for="(list, index) in lists" :key="index">
          <td>{{ list.time }}</td>
          <td>{{ list.isRead }}</td>
          <td>{{ list.isDone }}</td>
          <td>{{ list.userName }}</td>
          <td>{{ list.body }}</td>
          <td>{{ list.status }}</td>
          <td>{{ list.staffId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
</template>

<script>
export default {
  data: function () {
    return {
      lists: [
        {time: '12:00', isRead: '未読', isDone: '未対応', userName: '0001', body: 'こんにちわ', status: '受注前', staffId: 'new'}, 
        {time: '13:00', isRead: '既読', isDone: '未対応', userName: '0002', body: 'こんにちわ', status: '受注前', staffId: 'new'}, 
        {time: '14:00', isRead: '既読', isDone: '対応済', userName: '0003', body: 'こんにちわ', status: '受注前', staffId: '太郎'}, 
        {time: '15:00', isRead: '既読', isDone: '対応済', userName: '0004', body: 'こんにちわ', status: '受注済み', staffId: '花子'},  
      ], 
    }
  }, 
}
</script>

