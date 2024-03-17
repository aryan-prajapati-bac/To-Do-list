let activityElement = document.querySelector(".activity");
let selectedActivities = document.getElementsByClassName("check");
let selectedActivity;
let task;


activityElement.addEventListener('keypress', function (event) {

    let spanDiv1 = document.createElement("span");
    spanDiv1.className = "material-symbols-outlined";
    spanDiv1.classList.add("flex-delete-right");
    let spanText1 = document.createTextNode("delete");
    spanDiv1.append(spanText1);

    let spanDiv2 = document.createElement("span");
    spanDiv2.className = "material-symbols-outlined";
    spanDiv2.classList.add("flex-done-right");
    let spanText2 = document.createTextNode("done");
    spanDiv2.append(spanText2)



    if (event.keyCode == 13) {
        for (const activity of selectedActivities) {
            if (activity.checked) {
                selectedActivity = activity.value;
                activity.checked = false;
                break;
            }
        }
        let activityDiv = document.createElement("div");
        activityDiv.className = "flex";
        let activityContent = document.createElement("p");
        activityContent.className = "flex-activity-left"
        activityContent.textContent = activityElement.value;
        activityDiv.appendChild(activityContent);
        activityDiv.appendChild(spanDiv2);
        activityDiv.appendChild(spanDiv1);
        let flag = 0;
        if (selectedActivity == "Morning") {
            task = document.querySelector(".morning-activities");
            selectedActivity = "";
            flag = 1;
        }
        if (selectedActivity == "Noon") {
            task = document.querySelector(".noon-activities");
            selectedActivity = "";
            flag = 1;
        }
        if (selectedActivity == "Evening") {
            task = document.querySelector(".evening-activities");
            selectedActivity = "";
            flag = 1;
        }

        if (flag == 1) {
            task.appendChild(activityDiv);
            activityElement.value = "";
        }
        flag = 0;
    }


})

document.addEventListener("click", function (event) {
    let clickedElement = event.target;
    if (clickedElement.textContent == "done") {
        let activityDiv = clickedElement.parentNode;
        let textNode = activityDiv.firstChild;
        textNode.classList.add("stroke-line");
        clickedElement.classList.add("hide");
    }

    if (clickedElement.textContent == "delete") {
        let activityDiv = clickedElement.parentNode;
        let prevNode = activityDiv.previousElementSibling;
        if (prevNode == null) {
            let task1 = activityDiv.parentNode;
            let deleteNode = task1.firstChild;
            task1.removeChild(deleteNode);
        }
        else {
            let deleteNode = prevNode.nextElementSibling;
            deleteNode.parentNode.removeChild(deleteNode);
        }
    }




})
