const insert_Row = () => {
  const newRow = `
    <tr>
      <td>New Cell1</td>
      <td>New Cell2</td>
    </tr>
  `;
  const table = document.querySelector('#sampleTable');
  table.innerHTML += newRow;
};

const button = document.querySelector('input');
button.onclick = insert_Row;
