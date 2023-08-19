import{_ as e,Y as n,Z as a,a4 as s}from"./framework-17eb0294.js";const i={},l=s(`<h5 id="启动-关闭-重启防火墙" tabindex="-1"><a class="header-anchor" href="#启动-关闭-重启防火墙" aria-hidden="true">#</a> 启动|关闭|重启防火墙</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status firewalld.service
<span class="token comment"># 查看防火墙状态</span>

systemctl start firewalld.service 
<span class="token comment"># 启动防火墙</span>

systemctl stop firewalld.service 
<span class="token comment"># 关闭防火墙</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="防火墙配置命令" tabindex="-1"><a class="header-anchor" href="#防火墙配置命令" aria-hidden="true">#</a> 防火墙配置命令</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp
<span class="token comment"># 查看某个端口是否开启</span>

firewall-cmd --add-port<span class="token operator">=</span>端口号/协议 <span class="token parameter variable">--permanent</span>     
<span class="token comment"># 例：firewall-cmd --add-port=80/tcp --permanent，永久添加80端口</span>

firewall-cmd --remove-port<span class="token operator">=</span>端口号/通讯协议 <span class="token parameter variable">--permanent</span>
<span class="token comment"># 例：firewall-cmd --remove-port=8080/tcp --permanent，永久关闭8080端口</span>

firewall-cmd <span class="token parameter variable">--reload</span>                          
<span class="token comment">#重新载入配置，比如添加规则之后，需要执行此命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#zone --作用域</span>
<span class="token comment">#add-port-88/tcp -- 添加端口,格式为:端口/通讯协议</span>
<span class="token comment">#permanent --永久生效,没有此参数重启后失败</span>
  firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port-3306/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment">#开启3306号端口后,workbench 或naivcat 就能连接到Mysql 数据库了</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[l];function d(c,t){return n(),a("div",null,r)}const o=e(i,[["render",d],["__file","Centos7防火墙常用操作.html.vue"]]);export{o as default};
