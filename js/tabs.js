const tab1 = document.getElementsByClassName('col1')[0]
const tab2 = document.getElementsByClassName('col2')[0]
const tab3 = document.getElementsByClassName('col3')[0]

function showTab1() {
    tab1.style.display = "flex"
    tab3.style.display = "flex"
    tab2.style.display = "none";
}

function showTab2() {
    tab1.style.display = "none";
    tab3.style.display = "none";
    tab2.style.display = "flex";
}