const router = require('koa-router')()
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Your Best App!'
  })
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


const dom = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`, { runScripts: "dangerously" });

// The script will be executed and modify the DOM:
dom.window.document.body.children.length === 2;