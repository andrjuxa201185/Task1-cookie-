    const date = new Date();
    date.setSeconds(date.getSeconds() + 30);

    let form = document.querySelector('form');
    let h1 = document.querySelector('h1');
    let input = document.querySelector('input');

    function getCookie(name) {     
        let cookie = document.cookie;
        let search = `${name}=`;
        let start = 0, end = 0, str = null;     
        if (cookie.length) {         
            start = cookie.indexOf(search);         
            if (start != -1) {             
                start += search.length;             
                end = cookie.indexOf(";", start);             
                if (end == -1) {                 
                    end = cookie.length;             
                }             
                str = cookie.substring(start, end);         
            }     
        }     
        return str; 
    } 


    document.addEventListener("DOMContentLoaded", function(){
        if (getCookie('name')){
            form.classList.add('d-none');
            h1.classList.remove('d-none');
            h1.innerHTML = `Привет ${getCookie('name')}`;
        } else {
            h1.classList.add('d-none');
            form.classList.remove('d-none');
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        document.cookie = `name=${input.value}; expires=${date.toUTCString()}`; //добавляю срок действия для тестирования
        location.reload();
    });
