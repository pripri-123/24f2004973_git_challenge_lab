function changeText() {
    const heading = document.getElementById('greeting');
    heading.textContent = 'You clicked the button!';
}


const button = document.getElementById('changeTextButton');
button.addEventListener('click', changeText);