/* 載入 header.html 和 footer.html 程式開始 */
document.addEventListener("DOMContentLoaded", function() {
    fetch('/webdesignhub/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
      });
  
    fetch('/webdesignhub/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
});
/* 載入 header.html 和 footer.html 程式結束 */

/* <pre> 靠左對齊程式開始 */
document.querySelectorAll('pre code').forEach(block => {
  const lines = block.innerText.split('\n');

  // 找出最小縮排（忽略空行）
  const indent = lines
    .filter(line => line.trim()) // 排除空白行
    .reduce((min, line) => {
      const match = line.match(/^(\s*)/);
      const spaceCount = match ? match[1].length : 0;
      return Math.min(min, spaceCount);
    }, Infinity);

  // 把每行的縮排去掉
  const trimmed = lines.map(line => line.slice(indent)).join('\n');
  block.textContent = trimmed;
});
/* <pre> 靠左對齊程式結束 */

/* 114-06-01 按鈕顯示 Popover 程式開始 */
  const popover1140601 = document.querySelectorAll('.popover1140601');
  popover1140601.forEach(el => {
    new bootstrap.Popover(el, {
        html: true,
        sanitize: false,
        content: `
            本網站網頁樣式將陸續修正為 Bootstrap + RWD 響應式排版呈現。
        `,
        customClass: 'popover1140601'
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(triggerEl => {
      const popoverEl = document.querySelector('.popover');
      if (
        !triggerEl.contains(e.target) && (!popoverEl || !popoverEl.contains(e.target))
      ) {
        bootstrap.Popover.getInstance(triggerEl)?.hide();
      }
    });
  });
/* 114-06-01 按鈕顯示 Popover 程式結束 */