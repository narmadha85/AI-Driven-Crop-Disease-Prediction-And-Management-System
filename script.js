let crops = [];

function addCrop() {

    let cropInput = document.getElementById("cropName");

    let cropName = cropInput.value;

    if(cropName === "") {
        alert("Enter Crop Name");
        return;
    }

    crops.push(cropName);

    displayCrops();

    cropInput.value = "";
}

function displayCrops() {

    let cropList = document.getElementById("cropList");

    cropList.innerHTML = "";

    for(let i = 0; i < crops.length; i++) {

        cropList.innerHTML += `
        
        <li>
            ${crops[i]}

            <button onclick="editCrop(${i})">
                Edit
            </button>

            <button onclick="deleteCrop(${i})">
                Delete
            </button>

        </li>

        `;
    }
}

function editCrop(index) {

    let newCrop = prompt("Edit Crop Name");

    if(newCrop !== "") {

        crops[index] = newCrop;

        displayCrops();
    }
}

function deleteCrop(index) {

    crops.splice(index,1);

    displayCrops();
}