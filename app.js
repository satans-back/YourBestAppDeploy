const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

var azure = require('azure-storage')
var jsdom = require('jsdom')
var {JSDOM} = jsdom;

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

//var tableSvc = azure.createTableService('yourbestappstor', 'jJdxCY8ysmhX0QoKKIKMLAwkmg35IOPZBPRDq+RdZQFCgeceLfzPPioOMHNsKkeKX1dsis/4MGm16xRxbEm4kQ==');

const dom = new JSDOM(`<body>
  <script>document.getElementById("shop_view").innerHTML = "XD";</script>
</body>`, { runScripts: "dangerously" });
 
// The script will be executed and modify the DOM:
dom.window.document.body.children.length === 2;