/* 載入 header.html 和 footer.html 開始 */
document.addEventListener("DOMContentLoaded", function() {
  fetch('00_header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  fetch('00_footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
/* 載入 header.html 和 footer.html 結束 */

/* Modal-sm 彈跳小視窗按下儲存按鈕程式開始 */
  const btnModalsm = document.getElementById('btnModalsm');
  if (btnModalsm) {
    btnModalsm.addEventListener('click', function() {
      alert('已儲存訊息！');
      const modalsm = document.getElementById('modalsm');
      const modalsmHide = bootstrap.Modal.getInstance(modalsm);
      if (modalsmHide) {
        modalsmHide.hide();
      };
    });
  };
/* Modal-sm 彈跳小視窗按下儲存按鈕程式結束 */

/* Modal-md 彈跳中視窗按下儲存按鈕程式開始 */
  const btnModalmd = document.getElementById('btnModalmd');
  if (btnModalmd) {
    btnModalmd.addEventListener('click', function() {
      alert('已儲存訊息！');
      const modalmd = document.getElementById('modalmd');
      const modalmdHide = bootstrap.Modal.getInstance(modalmd);
      if (modalmdHide) {
        modalmdHide.hide();
      };
    });
  };
/* Modal-md 彈跳中視窗按下儲存按鈕程式結束 */

/* Modal-lg 彈跳大視窗按下儲存按鈕程式開始 */
  const btnModallg = document.getElementById('btnModallg');
  if (btnModallg) {
    btnModallg.addEventListener('click', function() {
      alert('已儲存訊息！');
      const modallg = document.getElementById('modallg');
      const modallgHide = bootstrap.Modal.getInstance(modallg);
      if (modallgHide) {
        modallgHide.hide();
      };
    });
  };
/* Modal-lg 彈跳大視窗按下儲存按鈕程式結束 */

/* Toast 短暫顯示提示框程式碼開始 */
  const btnToast = document.getElementById('btnToast');
  const myToast = document.getElementById('myToast');

  if (btnToast) {
    btnToast.addEventListener('click', function() {
      const toast = new bootstrap.Toast(myToast);
      toast.show();
    });
  };
/* Toast 短暫顯示提示框程式碼結束 */

/* Tooltip 程式開始 */
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
/* Tooltip 程式結束 */

/* Tooltip 會員登入程式開始 */
(function () {
  'use strict';
  const forms1 = document.querySelectorAll('.needs-validation');
  Array.from(forms1).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
        } else {
            const account1 = document.getElementById('loginAccount1').value.trim();
            const password1 = document.getElementById('loginPassword1').value.trim();
            if (account1 === 'admin' && password1 === '123456') {
              Swal.fire({
                icon: 'success',
                title: '登入成功',
                text: account1 + '，歡迎回來！',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                customClass: {
                  timerProgressBar: 'timer-progress-bar'
              }
            });
              form.reset();
              form.classList.remove('was-validated');
            } else {
              Swal.fire({
                icon: 'error',
                title: '登入失敗',
                text: '帳號密碼錯誤，請重新輸入！',
                showConfirmButton: true,
                confirmButtonText: '重新輸入'
              });
            }
          }
          form.classList.add('was-validated');
      }, false);
  });
})();
/* Tooltip 會員登入程式結束 */

/* Popover 程式開始 */
  const btnEpaper = document.getElementById('btnEpaper');
  if (btnEpaper) {
    new bootstrap.Popover(btnEpaper, {
      html: true,
      sanitize: false,
      content: `
          <img src="https://picsum.photos/800/300?random=17" class="img-fluid mb-2" alt="示意圖">
          <form onsubmit="event.preventDefault(); alert('感謝訂閱！'); bootstrap.Popover.getInstance(document.getElementById('btnEpaper')).hide();">
            <div class="mb-2">
            <input type="email" class="form form-control form-control-sm" placeholder="請輸入 E-mail" required>
            </div>
              <button type="submit" class="btn btn-purple btn-sm">送出</button>
          </form>
        `,
      customClass: 'popover-epaper'
    });
  };

  document.addEventListener('click', function (e) {
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(triggerEl => {
        const popoverEl = document.querySelector('.popover');
        if (
            !triggerEl.contains(e.target) && (!popoverEl || !popoverEl.contains(e.target))
        ) {
        bootstrap.Popover.getInstance(triggerEl)?.hide();
        };
    });
  });
/* Popover 程式結束 */

/* Tab 報名表程式開始 */
(function () {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  const genderGroup = document.getElementById('genderGroup');
  const genderFeedback = document.getElementById('genderFeedback');

  Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
          let genderSelected = false;
          genderRadios.forEach(radio => {
              if (radio.checked) genderSelected = true;
          });

          // 檢查整體表單是否有效 + 性別是否有選
          if (!form.checkValidity() || !genderSelected) {
              event.preventDefault();
              event.stopPropagation();
              if (!genderSelected) {
                  genderFeedback.classList.remove('d-none');
                  genderFeedback.classList.add('d-block');
                  genderGroup.classList.add('is-invalid');
              } else {
                  genderFeedback.classList.remove('d-block');
                  genderFeedback.classList.add('d-none');
                  genderGroup.classList.remove('is-invalid');
              }
          } else {
              event.preventDefault();
              alert('報名完成，我們將會盡快與您聯絡，謝謝。');
              form.reset();
              form.classList.remove('was-validated');
              genderGroup.classList.remove('is-invalid');
              genderFeedback.classList.add('d-none');
              return;
          }

          form.classList.add('was-validated');
          }, false);
      });
  }
)();
/* Tab 報名表程式結束*/

/* Offcanvas 會員登入程式開始 */
(function () {
  'use strict';
  const forms2 = document.querySelectorAll('.needs-validation');
  Array.from(forms2).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
        } else {
            const account2 = document.getElementById('loginAccount2').value.trim();
            const password2 = document.getElementById('loginPassword2').value.trim();
            if (account2 === 'admin' && password2 === '123456') {
              Swal.fire({
                icon: 'success',
                title: '登入成功',
                text: account2 + '，歡迎回來！',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                customClass: {
                  timerProgressBar: 'timer-progress-bar'
              }
            });
              form.reset();
              form.classList.remove('was-validated');
            } else {
              Swal.fire({
                icon: 'error',
                title: '登入失敗',
                text: '帳號密碼錯誤，請重新輸入！',
                showConfirmButton: true,
                confirmButtonText: '重新輸入'
              });
            }
          }
          form.classList.add('was-validated');
      }, false);
  });
})();
/* Offcanvas 會員登入程式結束 */