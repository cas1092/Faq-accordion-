const options = document.querySelectorAll('button');
const icons = document.querySelectorAll('i');

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        const answer = option.nextElementSibling;
        const icon = icons[index]; // Get the corresponding icon

        
        answer.classList.toggle('hidden'); // Toggle the hidden class

        if (answer.classList.contains('hidden')) {
            icon.classList.remove('minus'); // Use minus class for open state
            icon.classList.add('plus_icon'); // Add plus class for closed state
        } else {
            icon.classList.remove('plus_icon');
            icon.classList.add('minus');
        }

    });
});
