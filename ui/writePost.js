document.getElementById("createPostForm").onsubmit = function onSubmit(event) {
  event.preventDefault();
  var title = document.getElementById("titlePostInput").value;
  var email = document.getElementById("emailInput").value;
  var location = document.getElementById("locationInput");
  location = location.options[location.selectedIndex].text.replace(/ +/g, "");
  var category = document.getElementById("categoryPostInput");
  category = category.options[category.selectedIndex].text.replace(/ +/g, "");
  var categoryType = document.getElementById("categoryTypePostInput");
  categoryType = categoryType.options[categoryType.selectedIndex].text.replace(/ +/g, "");
  var details = document.getElementById("detailPostInput").value;

  var xhr = new XMLHttpRequest();
  var url = "/fn/posts/writePost";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  var data = JSON.stringify({
    title: title,
    details: details,
    category: category,
    email: email,
    city :location,
    subcategory:categoryType,
    timestamp:Date.now()
  });
  xhr.send(data);

  title = "";
  details = "";
  category = "";
  email = "";
  window.history.back();
};
