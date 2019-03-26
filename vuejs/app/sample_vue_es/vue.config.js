module.exports = {
    devServer: {
        // 他コンテナからアクセスできるよう、
        host: 'vuejs', // docker-compose.ymlのservice名（プライベートIP相当）または0.0.0.0でbind
        port: '8080', // docker-compose.ymlでexposeするポート番号を指定
    }
}
