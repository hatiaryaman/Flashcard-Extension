var button = document.getElementById("button")

button.onclick = function(){
    chrome.tabs.create({ url: "file:///C:/Users/aryaman.hati/Desktop/Flashcard%20Extension/notes/notes.html"})
}
