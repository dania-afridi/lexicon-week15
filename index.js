const companies = document.getElementById("companies");
const table = document.getElementById("companies-table");
const showCompanies = document.getElementById("show-companies");

let dataShown = false;

/*
const table = document.createElement("div");
table.setAttribute("id", "companies-table");
companies.appendChild(table);
*/
const companiesData =[
    {
        name: "COMPANY NAME",
        city: "CITY",
        year: "STARTING YEAR"
    },
    {
        name: "Saab AB",
        city: "Stockholm",
        year: "1937"
    },
    {
        name: "Volvo Group", 
        city: "Göteborg", 
        year: "1927"
    },
    {
        name: "Sandvik AB", 
        city: "Stockholm",
        year: "1862"
    },
    {
        name: "Atlas Copco Group",
        city: "Nacka", 
        year: "1873"
    },
    {
        name: "Electrolux AB",
        city: "Stockholm",
        year: "1919"
    },
    {
        name: "Skanska AB",
        city: "Stockholm",
        year: "1887"
    }
    
];
const getComapnies = ()=> {
    const data = getCompaniesData();
    if (dataShown){
    const companiesTable = getTable(data);
    table.appendChild(companiesTable);
    }
}

const getCompaniesData = ()=> {
    if (dataShown === false){
        dataShown = true;
        showCompanies.innerHTML = "Hide Data";
        return companiesData
    } else {
        hideCompaniesData();
    }
}

const hideCompaniesData = ()=>{
    showCompanies.innerHTML = "Show Data";
    table.innerHTML = "";
    dataShown = false;
}

const getTable = (companiesList)=>{
    const newTable = document.createElement("table");
    const rowToAdd = document.createElement("tr");
    
    companiesList.map((company)=>{
        const newRow = getRow(company);
        newTable.appendChild(newRow);
    });
    return newTable;
}

const getRow = (rowData)=> {
    const rowToAdd = document.createElement("tr");

    const companyName = document.createElement("td");
    companyName.innerText = rowData.name;
    rowToAdd.appendChild(companyName);

    const cityName = document.createElement("td");
    cityName.innerText = rowData.city;
    rowToAdd.appendChild(cityName);

    const startingYear = document.createElement("td");
    startingYear.innerText = rowData.year;
    rowToAdd.appendChild(startingYear);

    return rowToAdd;
}

showCompanies.addEventListener("click", getComapnies);