import{_ as s,Y as n,Z as a,a4 as e}from"./framework-646c68e2.js";const t={},i=e(`<h1 id="如何使用githubaction自动部署vuepress到githubpages" tabindex="-1"><a class="header-anchor" href="#如何使用githubaction自动部署vuepress到githubpages" aria-hidden="true">#</a> 如何使用GithubAction自动部署VuePress到GithubPages</h1><div class="hint-container info"><p class="hint-container-title">提示</p><p>仓库名称必须严格按照 <code>[你的GitHub用户名].github.io</code> 格式来</p><p>否则会将网站部署到以仓库名称命名的子路径上</p></div><h2 id="打开-repo-控制权限" tabindex="-1"><a class="header-anchor" href="#打开-repo-控制权限" aria-hidden="true">#</a> 打开 repo 控制权限</h2><p>依次进入仓库的 Settings=&gt;Action=&gt;General</p><p><strong>打开以下两个权限：</strong></p><p>Workflow Permissions:</p><ul class="task-list-container"><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Read and write permissions</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Allow GitHub Actions to create and approve pull requests</label></p></li></ul><h2 id="编写github-workflow配置文件" tabindex="-1"><a class="header-anchor" href="#编写github-workflow配置文件" aria-hidden="true">#</a> 编写Github WorkFlow配置文件</h2><p>文件 <code>.github/workflows/deploy-github-pages.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Action 的名称</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy GitHub Pages

<span class="token comment"># 触发条件：在 push 到 main 分支后</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token comment"># 任务</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token comment"># 服务器环境：最新版 Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 拉取代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token comment"># 生成静态文件</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run docs<span class="token punctuation">:</span>build

      <span class="token comment"># 部署到 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># 使用别人写好的一个 action</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 打包后的文件部署到哪个分支上</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 打包后的文件在哪里</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> src/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后应该会自动开始构建，在actions里可以看到构建详情，失败会显示原因 以后每次push都会自动构建部署</p><h2 id="配置github-pages" tabindex="-1"><a class="header-anchor" href="#配置github-pages" aria-hidden="true">#</a> 配置GitHub Pages</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>等待上一步action执行成功，再进行这一步</p></div><p>打开 Settings 中的 Pages 页面</p><p>Source 选择 Deploy From Branch</p><p>Branch 选择 gh-pages 然后save即可</p><p>Pages 的构建流程这时应该会自动启动，等待几分钟，Pages 页面顶部就会显示部署成功后的域名啦。</p><h2 id="完🎉" tabindex="-1"><a class="header-anchor" href="#完🎉" aria-hidden="true">#</a> <strong>完🎉</strong></h2>`,18),l=[i];function p(c,o){return n(),a("div",null,l)}const d=s(t,[["render",p],["__file","2023-08-18-03.html.vue"]]);export{d as default};
