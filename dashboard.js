const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

  let filter = searchInput.value.toLowerCase();

  let rows = document.querySelectorAll("#tableBody tr");

  rows.forEach(function(row) {

    let cropName = row.cells[1].textContent.toLowerCase();

    if (cropName.includes(filter)) {

      row.style.display = "";

    } else {

      row.style.display = "none";

    }

  });

});

function deleteRow(button) {

  let row = button.parentElement.parentElement;

  row.remove();

}