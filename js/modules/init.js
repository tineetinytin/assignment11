async function fetchEmployee() {
    try {
        const response = await fetch('/beginning/data/employees.json');
        const users = await response.json();
        return users; // returns promise object        
        
    } catch (error) {
        console.log(error.message);
    }   

}

export {fetchEmployee};