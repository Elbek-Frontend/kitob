    let tabs = document.querySelectorAll('.btn'),
        contect_all = document.querySelectorAll('.food');
    tabs.forEach((tab, index)=> {
        tab.addEventListener('click', (e)=> {
            tabs.forEach((item)=> item.classList.remove('active'))
        contect_all.forEach((item)=> item.classList.remove('active'))
        contect_all[index].classList.add('active')
        })
    })

// let ass = document.querySelector('.btn6')
//     contect_all = document.querySelectorAll('.food');
// ass.forEach((tab, index)=> {
//     tab.addEventListener('click', (e)=> {
//          ass.forEach((item)=> item.classList.remove('active'))
//         contect_all.forEach((item)=> item.classList.remove('active'))
//         contect_all[index].classList.add('active')
//     })
// })






const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const consentCheckbox = document.getElementById('consent');
        const submitButton = document.getElementById('submit');
        const nameError = document.getElementById('nameError');
        const phoneError = document.getElementById('phoneError');

        function validateForm() {
            let isValid = true;

            if (!nameInput.value.trim()) {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }

            if (phoneInput.value.trim().length < 9) {
                phoneError.style.display = 'block';
                isValid = false;
            } else {
                phoneError.style.display = 'none';
            }

            if (isValid && consentCheckbox.checked) {
                submitButton.disabled = false;
                submitButton.classList.add('active');
            } else {
                submitButton.disabled = true;
                submitButton.classList.remove('active');
            }
        }

        submitButton.addEventListener('click', (e)=> {
            alert('Boladimi???')
            alert('Aniq Boladimi???')
        })

        nameInput.addEventListener('input', validateForm);
        phoneInput.addEventListener('input', validateForm);
        consentCheckbox.addEventListener('change', validateForm);
