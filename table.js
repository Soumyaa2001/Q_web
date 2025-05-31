let table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.margin = '20px auto';
table.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
table.style.fontFamily = 'Arial, sans-serif';
table.style.minWidth = '500px';
table.style.width = '50%';

let headerRow = document.createElement('tr');
const headersText = ['Name', 'Age', 'Stream'];
headersText.forEach(text => {
  let th = document.createElement('th');
  th.textContent = text;
  th.style.cssText = `
    background-color: lightblue;
    padding: 10px;
    border: 1px solid black;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    border-radius: 5px;
    text-transform: uppercase;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 5px;
    height: 50px;
    width: 150px;
    font-family: Arial, sans-serif;
    text-decoration: underline;
    cursor: pointer;
  `;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

const data = [
  ['Soumya', '23', 'CSE'],
  ['Gaurav', '24', 'MCA'],
  ['Rudra', '24', 'EEE'],
  ['Shuvradip', '24', 'ECE']
];

data.forEach((rowData, index) => {
  let tr = document.createElement('tr');

  tr.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#ffffff';
  tr.onmouseover = () => tr.style.backgroundColor = '#e0f7fa';
  tr.onmouseout = () => tr.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#ffffff';

  rowData.forEach(cellData => {
    let td = document.createElement('td');
    td.textContent = cellData;

    td.style.border = '1px solid #ccc';
    td.style.padding = '12px';
    td.style.textAlign = 'center';
    td.style.fontSize = '16px';
    td.style.color = '#333';
    td.style.fontFamily = 'Arial, sans-serif';
    td.style.borderRadius = '5px';
    td.style.transition = 'background-color 0.3s ease';
    td.onmouseover = () => td.style.backgroundColor = '#fadafa';
    td.onmouseout = () => td.style.backgroundColor = '';

    tr.appendChild(td);
  });

  table.appendChild(tr);
});

document.body.appendChild(table);
