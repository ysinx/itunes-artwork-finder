if (process.client && process.env.NODE_ENV === 'production') {
  /*
  ** Google 统计分析脚本
  */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  /*
  ** 当前页的访问统计
  */
  ga('create', 'UA-132403546-1', 'auto')
  ga('set', 'page', location.href)
  ga('send', 'pageview')
}
