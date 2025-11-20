function loadNotices() {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  const list = document.getElementById("notice-list");
  list.innerHTML = "";

  if (notices.length === 0) {
    list.innerHTML = "<p>No notices yet.</p>";
    return;
  }

  notices.slice(-3).reverse().forEach(notice => {
    const div = document.createElement("div");
    div.className = "notice";
    div.innerHTML = `<strong>${notice.title}</strong><p>${notice.message}</p><small>${notice.date}</small>`;
    list.appendChild(div);
  });
}

if (document.getElementById("notice-list")) {
  loadNotices();
}