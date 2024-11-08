const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');



button.addEventListener('click', function () {

    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {

        const li = document.createElement('li');

        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.addEventListener('click', function(){
            alert('Are you sure you want to delete the chapter?')
        })

        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        alert('Your chapter has been saved');
    }
    else {
        alert('You must select a chapter');
    }
    input.focus()

})
