function addReminder() {
    const reminderInput = document.getElementById('reminder-input');
    const reminderText = reminderInput.value;

    if (reminderText.trim() !== "") {
        const reminderList = document.getElementById('reminder-list');

        const listItem = document.createElement('li');
        listItem.textContent = reminderText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            reminderList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        reminderList.appendChild(listItem);

        reminderInput.value = '';
    }
}
