// src/utils/rem.js
(function () {
  const baseWidth = 375;  // 设计稿宽度（按你的原型 375 来）

  function setRem() {
    const html = document.documentElement;
    const width = html.clientWidth || window.innerWidth;

    // 缩放比例：当前宽度 / 设计宽
    const scale = width / baseWidth;

    // 这里以 16px 为基准，你也可以改成 14
    html.style.fontSize = 16 * scale + 'px';
  }

  setRem();
  window.addEventListener('resize', setRem);
})();
