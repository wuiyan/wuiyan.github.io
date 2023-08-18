const e=JSON.parse('{"key":"v-6e39f979","path":"/posts/JUL%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"JUL日志框架","lang":"zh-CN","frontmatter":{"title":"JUL日志框架","category":["JavaWeb"],"tag":["日志框架"],"description":"一、JUL框架介绍 JUL 全称 : Java util logging ，Java原生的日志框架，主要用于小型项目，使用方便。 作用：可以按照不同的层次分级去显示信息，将程序运行中的信息更加规范化的输出。 二、JUL组成介绍 Logger：也被称作记录器，是日志实现的基础。 Handler|Appenders：也被称作处理器，一个 Logger 可同时存在多个处理器，以其具体实现类决定日志的输出位置是控制台、文件还是网络上的其他日志服务器。 Layouts：也被称为Formatters，它负责对日志事件中的数据进行转换和格式化，它决定了日志记录的最终显示形式。 Level：日志输出级别，Logger 和 Handeler 都有一个 Level 级别，如两者出现冲突时，以级别高的等级为准。 Filters：过滤器，可以自主过滤掉不需要的日志信息，可以在 Logger 和 Handeler 上分别设置。","head":[["meta",{"property":"og:url","content":"https://wuiyan.github.io/posts/JUL%E6%97%A5%E5%BF%97%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"WUYAN的博客"}],["meta",{"property":"og:title","content":"JUL日志框架"}],["meta",{"property":"og:description","content":"一、JUL框架介绍 JUL 全称 : Java util logging ，Java原生的日志框架，主要用于小型项目，使用方便。 作用：可以按照不同的层次分级去显示信息，将程序运行中的信息更加规范化的输出。 二、JUL组成介绍 Logger：也被称作记录器，是日志实现的基础。 Handler|Appenders：也被称作处理器，一个 Logger 可同时存在多个处理器，以其具体实现类决定日志的输出位置是控制台、文件还是网络上的其他日志服务器。 Layouts：也被称为Formatters，它负责对日志事件中的数据进行转换和格式化，它决定了日志记录的最终显示形式。 Level：日志输出级别，Logger 和 Handeler 都有一个 Level 级别，如两者出现冲突时，以级别高的等级为准。 Filters：过滤器，可以自主过滤掉不需要的日志信息，可以在 Logger 和 Handeler 上分别设置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-18T11:41:02.000Z"}],["meta",{"property":"article:author","content":"WUYAN"}],["meta",{"property":"article:tag","content":"日志框架"}],["meta",{"property":"article:modified_time","content":"2023-08-18T11:41:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JUL日志框架\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-18T11:41:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"WUYAN\\",\\"url\\":\\"https://wuiyan.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1692358862000,"updatedTime":1692358862000,"contributors":[{"name":"wuiyan","email":"jia2997592709@163.com","commits":1}]},"readingTime":{"minutes":3.77,"words":1131},"filePathRelative":"posts/JUL日志框架学习笔记.md","localizedDate":"2023年8月18日","excerpt":"<h4> 一、JUL框架介绍</h4>\\n<p>JUL 全称 : Java util logging ，Java原生的日志框架，主要用于小型项目，使用方便。</p>\\n<p>作用：可以按照不同的层次分级去显示信息，将程序运行中的信息更加规范化的输出。</p>\\n<h4> 二、JUL组成介绍</h4>\\n<ul>\\n<li><strong>Logger</strong>：也被称作记录器，是日志实现的基础。</li>\\n<li><strong>Handler</strong>|Appenders：也被称作处理器，一个 Logger 可同时存在多个处理器，以其具体实现类决定日志的输出位置是控制台、文件还是网络上的其他日志服务器。</li>\\n<li><strong>Layouts</strong>：也被称为Formatters，它负责对日志事件中的数据进行转换和格式化，它决定了日志记录的最终显示形式。</li>\\n<li><strong>Level</strong>：日志输出级别，Logger 和 Handeler 都有一个 Level 级别，如两者出现冲突时，以级别高的等级为准。</li>\\n<li><strong>Filters</strong>：过滤器，可以自主过滤掉不需要的日志信息，可以在 Logger 和 Handeler 上分别设置。</li>\\n</ul>","autoDesc":true}');export{e as data};
