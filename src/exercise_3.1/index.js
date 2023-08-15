const insertTask = () => {
  const taskNameInput = document.querySelector('.js-task-name');
  const pomodoroCountInput = document.querySelector('.js-pomodoro-count');
  let pomodoroDefault = 0;

  const taskNameValue = taskNameInput.value;
  const pomodoroCountValue = pomodoroCountInput.value;

  if (taskNameValue) {
    const newTask = `
      <tr>
        <td>${taskNameValue}</td>
        <td>${pomodoroDefault} / ${pomodoroCountValue} pomodori</td>
        <td class='control'>
          <button class='done-button' type='button'>Done</button>
          <span class='done-text'></span>
          <button class='increase-button'>Increase Pomodoro Count</button>
          <button class='remove-button'>Delete Task</button>
        </td>
      </tr>
    `;
    let table = document.querySelector('.js-task-table-body');
    table.innerHTML += newTask;

    // Clear the input fields after adding the task
    taskNameInput.value = '';
    pomodoroCountInput.value = '1';

    // Add event listeners for the "Done" buttons
    const doneButtons = document.querySelectorAll('.done-button');
    doneButtons.forEach((doneButton) => {
      doneButton.addEventListener('click', () => {
        const controlTd = doneButton.parentElement;
        const doneText = controlTd.querySelector('.done-text');
        const increaseButton = controlTd.querySelector('.increase-button');
        doneText.textContent = 'Finished';
        doneButton.style.display = 'none';
        increaseButton.style.display = 'none';
      });
    });

    // Add event listeners for the "Increase" buttons
    const increaseButtons = document.querySelectorAll('.increase-button');
    increaseButtons.forEach((increaseButton) => {
      increaseButton.addEventListener('click', () => {
        const controlTd = increaseButton.parentElement;
        const pomodoroCountCell = controlTd.previousElementSibling;

        // Get the current pomodoro count value from the cell's text
        const currentCount = parseInt(pomodoroCountCell.textContent.split('/')[0]);
        const pomodoroCountValue = parseInt(pomodoroCountCell.textContent.split('/')[1]);

        if (currentCount < pomodoroCountValue) {
          const newPomodoroCount = currentCount + 1;
          pomodoroCountCell.textContent = `${newPomodoroCount} / ${pomodoroCountValue} pomodori`;
        } else {
          alert('No more than the number of pomodori');
        }
      });
    });

    // Add event listeners for the "remove" element
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((removeButton) => {
      removeButton.addEventListener('click', () => {
        const removeItem = removeButton.parentElement;
        const itemRow = removeItem.parentElement;
        itemRow.remove();
      });
    });
  }
};
const addButton = document.querySelector('button');
addButton.onclick = insertTask;
