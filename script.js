document.getElementById("type").addEventListener("change", function() {
  const section = document.getElementById("groupSection");
  section.style.display = this.value === "جماعي" ? "block" : "none";
});

document.getElementById("requestForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const request = {
    name: document.getElementById("name").value,
    type: document.getElementById("type").value,
    category: document.getElementById("category").value,
    receiver: document.getElementById("receiver").value,
    details: document.getElementById("details").value,
    eventTitle: document.getElementById("eventTitle").value || "-",
    participants: document.getElementById("participants").value || "-"
  };
  const list = JSON.parse(localStorage.getItem("requests") || "[]");
  list.push(request);
  localStorage.setItem("requests", JSON.stringify(list));
  alert("تم إرسال الطلب بنجاح.");
  this.reset();
  document.getElementById("groupSection").style.display = "none";
});
