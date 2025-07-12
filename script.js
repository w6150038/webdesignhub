/* 載入 header.html 和 footer.html 程式開始 */
document.addEventListener('DOMContentLoaded', function () {
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

/* 控制 navbar 與 body 的 padding-top 程式開始 */
  function adjustBodyPadding() {
    const navbar = document.querySelector(".navbar");
    const navHeight = navbar.offsetHeight;
    document.body.style.paddingTop = navHeight + "px";
  }

  window.addEventListener("load", () => {
    setTimeout(adjustBodyPadding, 100);
  });
  window.addEventListener("resize", adjustBodyPadding);
/* 控制 navbar 與 body 的 padding-top 程式結束 */

/* 首頁分頁程式開始 */
  // 整個網頁載入完後再執行裡面的程式。
  document.addEventListener('DOMContentLoaded', function () {
    // 每頁要顯示 8 筆資料 (卡片)。
    const itemsPerPage = 8;
    // 找出整個網頁裡符合 'learning-card' 的 class 名稱，並存在 items 變數裡。
    const items = document.querySelectorAll('.learning-card');
    // 計算總共有幾頁。
    // Math.ceil：無條件四捨五入。
    // items.length：變數 items 的長度，也就是 class="learning-card" 有多少個。
    // length 是指 index = 0 開始計算，所以第 1 個卡片就是 index = 0；第 2 個卡片就是 index = 1，以此類推。
    const totalPages = Math.ceil(items.length / itemsPerPage);
    // 找出 id="pagination" 的元素，並存在 pagination 變數裡，用來顯示分頁按鈕的區塊。
    const pagination = document.getElementById('pagination');
    // function：定義一個「功能」或「動作」。
    // 定義名稱叫 showPage 的函式，括弧裡面是參數，這個參數會接收傳進來的引數，會去顯示對應頁的卡片。
    function showPage(page) {
      // 根據目前第幾頁，算出這一頁從第幾個卡片開始顯示。
      const start = (page - 1) * itemsPerPage;
      // 這一頁要顯示到第幾個卡片結束，但不包含最後 1 個卡片的 index 。
      const end = page * itemsPerPage;
      // 每一張卡片都跑一遍，如果該張卡片在這一頁的範圍裡，就顯示出來，否則就隱藏。
      items.forEach((card, i) => {
        // 用「三元運算子」，取代 if...else。
        card.style.display = (i >= start && i < end) ? 'block' : 'none';
      });
      // 切換目前頁碼按鈕樣式。
      // 從 id="pagination" 裡抓出所有 <li> 元素，每個 li 裡裝的是第 1 頁、第 2 頁……按鈕。
      const buttons = pagination.querySelectorAll('li');
      // 先把所有 <li> 的 .active 樣式移除。
      buttons.forEach(btn => btn.classList.remove('active'));
      // 如果點到目前的這一頁，就把對應到的 <li> 加上 .active 樣式。
      if (buttons[page - 1]) {
        buttons[page - 1].classList.add('active');
      }
    }
    // 產生分頁按鈕。
    function setupPagination () {
      // 跑 totalPages 迴圈，產生第 1～N 頁的按鈕
      for (let i = 1; i <= totalPages; i++) {
        // 建立 <li> 元素，並存在 li 變數裡。
        const li = document.createElement('li');
        // 為 <li> 元素加上 Bootstrap 樣式，樣式名稱是 page-item。
        li.className = 'page-item me-2';
        // 建立 <button> 元素，並存在 btn 變數裡。
        const btn = document.createElement('button');
        // 為 <button> 元素加上 Bootstrap 樣式，樣式名稱是 page-link。
        btn.className = 'page-link bg-primary text-white';
        // 寫上第幾頁的數字。
        btn.textContent = i;
        // 當點這顆按鈕，就執行 showPage(i) 顯示該頁資料。
        btn.addEventListener('click', () => showPage(i));
        // 把 <button> 放進 <li> 裡。 
        li.appendChild(btn);
        // 把整個 <li> 丟到畫面上的 <ul id="pagination"> 中。
        pagination.appendChild(li);
      }
    }
    // 如果有超過 1 頁，才需要建立分頁按鈕。
    if (totalPages >= 1) {
      setupPagination();
    }
    // 預設顯示第 1 頁。
    showPage(1);
  });
/* 首頁分頁程式結束 */

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