document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 10;
  let currentPage = 1;
  const timelineItems = document.querySelectorAll(".container");
  const totalPages = Math.ceil(timelineItems.length / itemsPerPage);
  const paginationContainer = document.getElementById("pagination");

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    timelineItems.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "block" : "none";
    });

    document.querySelectorAll("#pagination li.page-item").forEach((li, index) => {
      li.classList.toggle("active", index + 1 === page);
    });
  }

  function createPagination() {
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.className = "page-item";
      const btn = document.createElement("button");
      btn.className = "page-link";
      btn.textContent = i;
      btn.addEventListener("click", () => {
        currentPage = i;
        showPage(currentPage);
      });
      li.appendChild(btn);
      paginationContainer.appendChild(li);
    }
  }

  createPagination();
  showPage(currentPage);
});