// 首页大标题打字机效果 (仅在首页生效)
// 配合 css/custom.css 中的光标样式使用
;(function () {
  var TYPE_SPEED = 140 // 每个字符的间隔 (ms)
  var START_DELAY = 300 // 进页面后延迟开始 (ms)
  var CURSOR_LINGER = 2500 // 打完后光标保留时间 (ms)

  function init () {
    if (typeof GLOBAL_CONFIG_SITE === 'undefined' || GLOBAL_CONFIG_SITE.pageType !== 'home') return
    var el = document.getElementById('site-title')
    if (!el) return
    var text = el.textContent.trim()
    if (!text) return

    el.textContent = ''
    el.classList.add('title-typing')

    var i = 0
    function type () {
      i += 1
      el.textContent = text.slice(0, i)
      if (i < text.length) {
        setTimeout(type, TYPE_SPEED)
      } else {
        // 打完后光标再闪烁一会儿, 然后移除
        setTimeout(function () {
          el.classList.remove('title-typing')
        }, CURSOR_LINGER)
      }
    }
    setTimeout(type, START_DELAY)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
