let activityElement = document.querySelector(".activity");
let selectedActivities = document.getElementsByClassName("check");
let selectedActivity;
let task;


activityElement.addEventListener('keypress', function (event) {

    // Creating delete button 
    let spanDiv1 = document.createElement("span");
    spanDiv1.className = "material-symbols-outlined";
    spanDiv1.classList.add("flex-delete-right");
    let spanText1 = document.createTextNode("delete");
    spanDiv1.append(spanText1);


    // Creating done button
    let spanDiv2 = document.createElement("span");
    spanDiv2.className = "material-symbols-outlined";
    spanDiv2.classList.add("flex-done-right");
    let spanText2 = document.createTextNode("done");
    spanDiv2.append(spanText2)


    // if "enter " key is pressed 
    if (event.keyCode == 13) {

        // checking that which radio button is clicked 
        for (const activity of selectedActivities) {
            if (activity.checked) {

                // storing clicked radio value into selectedActivity variable
                selectedActivity = activity.value;
                activity.checked = false;
                break;
            }
        }

        // Creating of activity div which is getting inserted on every task
        let activityDiv = document.createElement("div");
        activityDiv.className = "flex";

        // Creating task content element
        let activityContent = document.createElement("p");
        activityContent.className = "flex-activity-left"
        activityContent.textContent = activityElement.value;

        // Appending task content element into activity div
        activityDiv.appendChild(activityContent);

        // Appending delete button into activity div
        activityDiv.appendChild(spanDiv2);

        // Appending done button into activity div
        activityDiv.appendChild(spanDiv1);

        let flag = 0;

        // Checking for activity under which activityDiv is to be inserted
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

    // checking if done button is clicked 
    if (clickedElement.textContent == "done") {
        let activityDiv = clickedElement.parentNode;
        let textNode = activityDiv.firstChild;
        textNode.classList.add("stroke-line");
        clickedElement.classList.add("hide");
    }

    // checking if delete button is clicked
    if (clickedElement.textContent == "delete") {
        let activityDiv = clickedElement.parentNode;
        let prevNode = activityDiv.previousElementSibling;

        // checking if deleted activityDiv is first node or not 
        // if it is first node
        if (prevNode == null) {
            let task1 = activityDiv.parentNode;
            let deleteNode = task1.firstChild;
            task1.removeChild(deleteNode);
        }
        // if it is not first node 
        else {
            let deleteNode = prevNode.nextElementSibling;
            deleteNode.parentNode.removeChild(deleteNode);
        }
    }




})
