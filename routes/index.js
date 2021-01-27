const router = require('koa-router')()
const store = require('./store')

router.get('/', async (ctx, next) => {
  products = await store.listProducts()
  await ctx.render('index', { products })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
