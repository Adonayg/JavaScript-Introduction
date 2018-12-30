document.getElementById("myForm").addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    var siteName = document.getElementById("siteName").value;
    var siteURL = document.getElementById("siteURL").value;

   if(!validateForm(siteName, siteURL)){
        return false;
   };

    var bookmark = {
        name: siteName,
        url: siteURL
    }

    if (localStorage.getItem("bookmarks") === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if(isDuplicateBookmark(bookmarks, siteName)){
            return false
        }
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    document.getElementById("myForm").reset();
    document.getElementById("empty-error-message").style.display = "none";
    document.getElementById("wrongUrl-error-message").style.display = "none";
    document.getElementById("duplicate-error-message").style.display = "none";
    fetchBookmarks();
    e.preventDefault();
}

function deleteBookmark(url) {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
}

function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    var bookmarkResults = document.getElementById("bookmarksResult");

    bookmarkResults.innerHTML = "";

    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarkResults.innerHTML += '<div class="bookmark-card">' +
            '<h3>' + name +
            '<a class="btn btn-link" target="blank" href="' + url + '">Visit</a> ' +
            '<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger"  href="#">Delete</a> ' +
            '</h3>' +
            '</div>';
    }
}

function validateForm(siteName, siteURL){
    if (!siteName || !siteURL){
        document.getElementById("empty-error-message").style.display = "block";
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteURL.match(regex)) {
        document.getElementById("wrongUrl-error-message").style.display = "block";
        return false;
    }

    return true;
}

function isDuplicateBookmark(bookmarks, siteName) {
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].name == siteName) {
            document.getElementById("duplicate-error-message").style.display = "block";
            return true;
        } else {
            return false;
        }
    }

}