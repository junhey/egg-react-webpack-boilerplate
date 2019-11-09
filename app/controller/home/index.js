'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  
  async ssr(ctx) {
    await ctx.render('home.js', { 
      url: ctx.url,
      title: 'Egg React ',
      keywords: 'Egg,React,Egg React,Egg React SSR, Egg React CSR, Server Side Render, Client Side Render',
      description: 'Egg + React + Webpack 服务端渲染 SSR (Server Side Render) 和 前端渲染 CSR (Client Side Render) 工程骨架项目'
    });
  }

  async csr(ctx) {
    const result = this.service.article.getArtilceList();
    await ctx.renderClient('home.js', result);
  }

  async list() {
    this.ctx.body = this.service.article.getArtilceList();
  }

  async detail() {
    const id = this.ctx.query.id;
  }
};