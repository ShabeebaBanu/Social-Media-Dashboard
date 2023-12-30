var sb = false;
var sbelement = document.getElementById('sidebar');

function openSidebar(){
    if (!sb){
        sidebar.classList.add('response');
        sb = true;
    }
}

function closeSidebar(){
    if (sb){
        sidebar.classList.remove('responsive');
        sb = false
    }
}