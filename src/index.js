const init = () => {

    const userForm = document.body.querySelector('form');


    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        //extract value
        let input = document.getElementById('searchByID').value;
        
        fetch(`http://localhost:3000/movies/${input}`)
            .then(response => response.json())
            .then(data => {
                const title = document.querySelector('#movieDetails h4')
                const summary = document.querySelector('#movieDetails p')
                
                if (data.title) {
                title.innerText = data.title;
                summary.innerText = data.summary
                }
                else {
                    title.innerText = "ID not found"
                    summary.innerText = ""
                }
            });
    });
};

document.addEventListener('DOMContentLoaded', init);