
//Clock functionalities
function captureCurrentTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var sessionPeriod = document.getElementById('session');

    if(hours >= 12){
        sessionPeriod.innerHTML = 'PM';
    }else{
        sessionPeriod.innerHTML = 'AM';
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}
setInterval(captureCurrentTime, 10);


//Form functionalities starts here

var selectedRowNo = null

function formSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRowNo == null){
            insertNewRecord(formData);
		}
        else{
            updateData(formData);
		}
        resetForm();    
}

//Retrieve data
function readFormData() {
    var formData = {};
    formData["bookCode"] = document.getElementById("bookCode").value;
    formData["bookName"] = document.getElementById("bookName").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["price"] = document.getElementById("price").value;
    

    if ( formData["bookCode"] && formData["bookName"] && formData["quantity"] && formData["price"]  != ''){
        return formData;
    } else{
        alert("Inputs cannot be empty!")
        return false;
    }
}

//Insert data
function insertNewRecord(data) {
    var tableInput = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    //ecach time it will increase the length by one
    var addNewRow = tableInput.insertRow(tableInput.length);
    cellNo1 = addNewRow.insertCell(0);
		cellNo1.innerHTML = data.bookCode;
    cellNo2 = addNewRow.insertCell(1);
		cellNo2.innerHTML = data.bookName;
    cellNo3 = addNewRow.insertCell(2);
		cellNo3.innerHTML = data.quantity;
    cellNo4 = addNewRow.insertCell(3);
		cellNo4.innerHTML = data.price;
    cellNo4 = addNewRow.insertCell(4);
        cellNo4.innerHTML = `<button onClick="editData(this)">Edit</button> <button onClick="deleteData(this)">Delete</button>`;
}

//Edit data
function editData(td) {
    selectedRowNo = td.parentElement.parentElement;
    document.getElementById("bookCode").value = selectedRowNo.cells[0].innerHTML;
    document.getElementById("bookName").value = selectedRowNo.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRowNo.cells[2].innerHTML;
    document.getElementById("price").value = selectedRowNo.cells[3].innerHTML;
}
function updateData(formData) {
    selectedRowNo.cells[0].innerHTML = formData.bookCode;
    selectedRowNo.cells[1].innerHTML = formData.bookName;
    selectedRowNo.cells[2].innerHTML = formData.quantity;
    selectedRowNo.cells[3].innerHTML = formData.price;
}

//Delete data
function deleteData(td) {
    if (confirm('Do you want to delete this data?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset data
function resetForm() {
    document.getElementById("bookCode").value = '';
    document.getElementById("bookName").value = '';
    document.getElementById("quantity").value = '';
    document.getElementById("price").value = '';
    selectedRowNo = null;
}

