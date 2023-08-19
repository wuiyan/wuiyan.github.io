import{_ as n,Y as s,Z as a,a4 as e}from"./framework-17eb0294.js";const t="/assets/images/JUL/流程图.png",l={},i=e('<h4 id="一、jul框架介绍" tabindex="-1"><a class="header-anchor" href="#一、jul框架介绍" aria-hidden="true">#</a> 一、JUL框架介绍</h4><p>JUL 全称 : Java util logging ，Java原生的日志框架，主要用于小型项目，使用方便。</p><p>作用：可以按照不同的层次分级去显示信息，将程序运行中的信息更加规范化的输出。</p><h4 id="二、jul组成介绍" tabindex="-1"><a class="header-anchor" href="#二、jul组成介绍" aria-hidden="true">#</a> 二、JUL组成介绍</h4><ul><li><strong>Logger</strong>：也被称作记录器，是日志实现的基础。</li><li><strong>Handler</strong>|Appenders：也被称作处理器，一个 Logger 可同时存在多个处理器，以其具体实现类决定日志的输出位置是控制台、文件还是网络上的其他日志服务器。</li><li><strong>Layouts</strong>：也被称为Formatters，它负责对日志事件中的数据进行转换和格式化，它决定了日志记录的最终显示形式。</li><li><strong>Level</strong>：日志输出级别，Logger 和 Handeler 都有一个 Level 级别，如两者出现冲突时，以级别高的等级为准。</li><li><strong>Filters</strong>：过滤器，可以自主过滤掉不需要的日志信息，可以在 Logger 和 Handeler 上分别设置。</li></ul><figure><img src="'+t+`" alt="流程图" tabindex="0" loading="lazy"><figcaption>流程图</figcaption></figure><h4 id="三、日志等级划分" tabindex="-1"><a class="header-anchor" href="#三、日志等级划分" aria-hidden="true">#</a> 三、日志等级划分</h4><p>在JUL中日志被划分为七个等级，由高到低分别为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SEVERE（最高等级）代表程序出现了严重错误
WARNING	用于表示某些警告信息
INFO（默认等级）常规消息
CONFIG
FINE
FINER
FINEST（最低等级）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有两个特殊等级 OFF和ALL，OFF用于关闭日志记录，ALL用于启用所有的消息日志记录。</p><p>需注意，虽然日志等级被分为了七个等级，<strong>但默认只显示INFO及以上等级。</strong></p><h4 id="四、日志框架的基础使用" tabindex="-1"><a class="header-anchor" href="#四、日志框架的基础使用" aria-hidden="true">#</a> 四、日志框架的基础使用</h4><p>1、获取当前类的 logger 对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">MainTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// logger 对象不能直接创建，需要用静态方法去获取，方法的参数是想要记录日志信息类的完整包名，可用 类名.class.getName()去获取。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、输出日志信息</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>logger<span class="token punctuation">.</span><span class="token function">severe</span><span class="token punctuation">(</span><span class="token string">&quot;我是一条错误信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&quot;我是一条警告信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;我是一条日志信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可通过这种方式去输出日志信息，输出位置要看handler处理器是什么，默认是向控制台输出。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="五、日志框架的自定义配置" tabindex="-1"><a class="header-anchor" href="#五、日志框架的自定义配置" aria-hidden="true">#</a> 五、日志框架的自定义配置</h4><p>对于JUL日志框架来说，可以设定其日志输出等级，日志处理器类型，输出日志格式，过滤器配置。</p><p>可以通过两种方式去设置：程序中设置和配置文件设置，文件设置是比较常用且方便的格式。</p><p>1、常用配置文件设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#全局配置

# 顶级RootLogger关联的Handler，多个Handler使用逗号隔开
# 对于其他Logger，如果没有指定自己的Handler，则默认使用此handlers
handlers= java.util.logging.FileHandler

# 默认全局日志级别，Logger和Handler都可以设置自己的日志级别来覆盖此级别
.level= ALL


# Handler 配置

# FileHandler定义
# 日志文件存储位置
java.util.logging.FileHandler.pattern = ./jul%u.log
# 单个文件的最大字节数，0代表不限制
java.util.logging.FileHandler.limit = 50000
# 文件数量上限，多个文件为jul0.log.0，jul0.log.1 ...
java.util.logging.FileHandler.count = 5
# 日志级别
java.util.logging.FileHandler.level = info
# 日志追加方式
java.util.logging.FileHandler.append = true
# Handler对象采用的字符集
java.util.logging.FileHandler.encoding = UTF-8
# 日志格式，使用系统默认的简单格式
java.util.logging.FileHandler.formatter = java.util.logging.SimpleFormatter


# 特定Logger 配置

# 设置名称为org.example.Main的Logger对象的日志级别为WARNING
org.example.Main.level = WARNING
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加载配置文件：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">LogManager</span> logManager <span class="token operator">=</span> <span class="token class-name">LogManager</span><span class="token punctuation">.</span><span class="token function">getLogManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   logManager<span class="token punctuation">.</span><span class="token function">readConfiguration</span><span class="token punctuation">(</span><span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;logging.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、程序中设置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token comment">// 获取当前类的日志记录器对象</span>
    <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">MainTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 关闭默认配置，即不使用父Logger的Handlers</span>
    logger<span class="token punctuation">.</span><span class="token function">setUseParentHandlers</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置记录器的日志级别为ALL</span>
    logger<span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 日志记录格式，使用简单格式转换对象</span>
    <span class="token class-name">SimpleFormatter</span> simpleFormatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 控制台输出Handler,并且设置日志级别为INFO，日志记录格式</span>
    <span class="token class-name">ConsoleHandler</span> consoleHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    consoleHandler<span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">INFO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    consoleHandler<span class="token punctuation">.</span><span class="token function">setFormatter</span><span class="token punctuation">(</span>simpleFormatter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 文件输出Handler,并且设置日志级别为FINE，日志记录格式</span>
    <span class="token class-name">FileHandler</span> fileHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileHandler</span><span class="token punctuation">(</span><span class="token string">&quot;./jul.log&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fileHandler<span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">FINE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fileHandler<span class="token punctuation">.</span><span class="token function">setFormatter</span><span class="token punctuation">(</span>simpleFormatter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 记录器关联处理器，即此logger对象的日志信息输出到这两个Handler进行处理</span>
    logger<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>consoleHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>fileHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 日志记录输出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="六、日志处理器的分类" tabindex="-1"><a class="header-anchor" href="#六、日志处理器的分类" aria-hidden="true">#</a> 六、日志处理器的分类</h4><table><thead><tr><th></th><th style="text-align:center;">ConsoleHandeler（控制台日志处理器）</th><th style="text-align:center;">FileHandler（文件日志处理器）</th></tr></thead><tbody><tr><td><strong>日志输出位置</strong></td><td style="text-align:center;">输出到控制台</td><td style="text-align:center;">输出到文件</td></tr><tr><td><strong>日志输出格式</strong></td><td style="text-align:center;">默认是普通文本格式</td><td style="text-align:center;">默认是xml格式</td></tr><tr><td><strong>写入方式</strong></td><td style="text-align:center;">无</td><td style="text-align:center;">可以设置是否追加写入，默认是false</td></tr><tr><td></td><td style="text-align:center;">Logger的默认日志处理器</td><td style="text-align:center;">无</td></tr></tbody></table>`,27),p=[i];function o(c,u){return s(),a("div",null,p)}const r=n(l,[["render",o],["__file","JUL日志框架学习笔记.html.vue"]]);export{r as default};
