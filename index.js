import React from 'react'
import { renderToString } from 'react-dom/server'
import ProductBox from './app/components/ProductBox'
import 'babel-polyfill'
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    let markup = renderToString(<ProductBox/>);
    ctx.body = markup;
});

app.listen(8080);
