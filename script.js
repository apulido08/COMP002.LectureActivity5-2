document.addEventListener('DOMContentLoaded',() => {
const button = document.getElementById('Button');
const link = document.getElementById('link');
}


const showAlertOnce = ( ) => {
    alert('Button Clicked!');
    button.removeEventListener('click', showAlertOnce);
};

button.addEventListener('click', showAlertOnce);


link.addEventListener('click', (event) => {
    event.preventDefault();
    alert("No distractions! I'm coding!");
}