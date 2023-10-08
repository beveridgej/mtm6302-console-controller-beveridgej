


function setTitle() {
    const heading = document.getElementById('title');
    heading.textContent = "New Heading!";
    
}

function setDescription() {
    const para1 = document.getElementById('para1');
    para1.textContent = "Description";
}

function setBackgroundColor() {
    const body = document.getElementById('light');
    body.style.backgroundColor='red'; 
}

function setFontColor() {
    const txt = document.querySelectorAll('.txt');
    for (let i = 0; i < txt.length; i++) {
    txt[i].style.color= "yellow";  
}
}

function setTheme() {
    const $theme = document.querySelector('body')
        if ($theme.classList.contains('light')){
            $theme.classList.remove('light')
        } else {
            $theme.classList.add('dark')
        }
    
    }
