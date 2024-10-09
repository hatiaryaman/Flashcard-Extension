var groupButton = document.getElementById("add")
var namingInput = document.getElementById("naming")
var groups = document.getElementById("groups")

groupButton.onclick = function(){
    var groupName = namingInput.value
    console.log(groupName)
    if (groupName != "") {
        var newGroup = document.createElement("button")
        newGroup.innerHTML = groupName
        groups.appendChild(newGroup)
    }
}
