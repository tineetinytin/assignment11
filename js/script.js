// CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ];


import * as initEmployees from '.modules/init.js';

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);

            //UPDATE EMPLOYEE COUNT
            --empCount.value;
        }
    }
});

// // BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    //LOAD JSON DATA
    
    initEmployees.fetchEmployee().then((arrEmployees) => {   
        for (let employee of arrEmployees) {
            tbody.innerHTML += 
            `<tr>
                <td>${employee.ID}</td>
                <td>${employee.Name}</td>
                <td>${employee.Ext}</td>
                <td><a href="mailto:${employee.Email}">${employee.Email}</a></td>
                <td>${employee.Department}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `;
        }
        //UPDATE EMPLOYEE COUNT
        empCount.value = users.length;


    }).catch((e) => console.error(e.message));

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    
};

