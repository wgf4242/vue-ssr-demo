const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const { createBundleRenderer } = require('vue-server-renderer');

const template = fs.readFileSync( path.resolve(__dirname, 'src/index.ssr.html'), 'utf-8' );
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
// const bundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.js'), 'utf-8');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});

app.use(express.static('./dist'))
app.get('*', (req, res) => {
  const context = { url: req.url };
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    if(err) {
            console.error(err);
            res.status(500).end('服务器内部错误', 'utf8');
            return;
    }
    res.end(html)
  })
})

app.listen(8002, () => {
  console.log('后端渲染服务器启动，端口号为：8002');
});
