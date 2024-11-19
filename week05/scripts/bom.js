let input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');



button.addEventListener('click', function () {

    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {

        let li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.addEventListener('click', function () {
            if (confirm('Are you sure you want to delete the chapter?')) {
                list.removeChild(li);
            }
            
        });

        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        alert('Your chapter has been saved');
    } else {
        alert('You must select a chapter');
    }
    input.focus()

});
let chaptersArray =  getChaptersList();
chaptersArray.array.forEach(chapter => {
    display(chapter)
});

button.addEventListener("click", () => {
    if (input.value !=''){
        displayList(input.value);
        chaptersArray.push(input.value)
        setChapterList();
        input.value='';
        input.focus();
    }
});

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChaptersList(){
    returnJSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList()
}