// koa paketini indirelim.
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
// port numarası olarak 3000'i kullanalım.
const Koa = require('koa');
const Router = require('@koa/router')();

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = '<h1>Koa içerik Sayfasına Hoşgeldiniz</h1>'
});

router.get('/about', (ctx) => {
    ctx.body = '<h1>Koa içerik Sayfasına Hoşgeldiniz </h1>'
  });

  router.get('/contact', (ctx) => {
    ctx.body = '<h1>Koa içerik Sayfasına Hoşgeldiniz </h1>'
  });

app.use(router.routes())

  app.listen(3000,() => {
      console.log('Server running on 3000 port')
  })