'use strict';

// 仅在公开仓库模式（DIARY_PRIVATE = false）下使用：
// 生成 /chitori-tarstar/diary/index.json，供页面以纯静态方式读取 Markdown 日记列表。
hexo.extend.generator.register('diary-index', function () {
  const fs = require('fs');
  const path = require('path');
  const dir = path.join(hexo.source_dir, 'chitori-tarstar', 'diary');
  let files = [];
  try {
    files = fs.readdirSync(dir)
      .filter(name => /\.md$/i.test(name) && !/^readme\.md$/i.test(name))
      .sort();
  } catch (err) {}

  return {
    path: 'chitori-tarstar/diary/index.json',
    data: JSON.stringify({ generated: new Date().toISOString(), files }, null, 2)
  };
});
