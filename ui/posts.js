window.onload = function() {
  var posts = JSON.parse(localStorage.getItem("postsData"));
  var isCategory = JSON.parse(localStorage.getItem("isCategory"));

  console.log(posts);
  if (posts.length < 1) noneFound();

  for (i = 0; i < posts.length; i++) {
    appendPost(
      posts[i].category,
      posts[i].timestamp,
      posts[i].title,
      posts[i].city,
      posts[i].details,
      isCategory
    );
  }
};

function noneFound() {
  var container = document.getElementById("post-container");
  var postDiv = document.createElement("div");
  postDiv.setAttribute("id", "post");
  postDiv.setAttribute("class", "post");
  container.appendChild(postDiv);
  var postText = document.createElement("p");
  postText.innerHTML = `No Listings Yet`;
  postDiv.appendChild(postText);
}

function appendPost(category, date, title, location, details, isCategory) {
  // create post div
  var container = document.getElementById("post-container");
  var postDiv = document.createElement("div");
  postDiv.setAttribute("id", "post");
  postDiv.setAttribute("class", "card mb-3");
  container.appendChild(postDiv);


  var postTitleName = document.createElement("h3");
  postTitleName.innerHTML = "Title: " + `${title}`;
  postTitleName.setAttribute("class", "card-header");
  postDiv.appendChild(postTitleName)

  var postTitle = document.createElement("h5");
  postTitle.innerHTML = "Date: " + `<strong>${getMonthOfYear(
    new Date(date).getMonth()
  )} ${new Date(
    date
  ).getDate()} </strong>`;
  postTitle.setAttribute("class", "card-title");
  postDiv.appendChild(postTitle);


  var postCategory = document.createElement("h5");
  postCategory.innerHTML = "Category: " + `<strong>${category}</strong>`;
  postCategory.setAttribute("class", "card-title");
  postDiv.appendChild(postCategory)


  var postLocation = document.createElement("h5");
  postLocation.innerHTML = "Location: " + `<strong>${location}</strong>`;
  postLocation.setAttribute("class", "card-title");
  postDiv.appendChild(postLocation)

  var postText = document.createElement("h5");
  postText.innerHTML = "Details: " + `<strong>${details}</strong>`;
  postText.setAttribute("class", "card-title");
  postDiv.appendChild(postText);

  if (!isCategory) {
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-danger");
    deleteButton.innerHTML = "Delete";
    var editButton = document.createElement("button");
    editButton.setAttribute("class", "btn btn-secondary");
    editButton.innerHTML = "Edit";
    postDiv.appendChild(editButton);
    postDiv.appendChild(deleteButton);
  }

}
// Helper function to get month name of the year
//@param: target date
const getMonthOfYear = function(month) {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};
