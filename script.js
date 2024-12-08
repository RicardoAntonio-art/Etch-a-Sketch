const container = document.getElementById('container');
        const resetButton = document.getElementById('reset-button');
        const clearButton = document.getElementById('clear-button');

        function createGrid(size) {
            // Clear existing grid
            container.innerHTML = '';

            // Set container grid dimensions
            const squareSize = 960 / size;

            for (let i = 0; i < size * size; i++) {
                const square = document.createElement('div');
                square.classList.add('grid-square');
                square.style.width = `${squareSize}px`;
                square.style.height = `${squareSize}px`;
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'black';
                });
                container.appendChild(square);
            }
        }

        function promptForGridSize() {
            let size = parseInt(prompt('Enter grid size (1-100):', 16));
            if (isNaN(size) || size < 1 || size > 100) {
                alert('Please enter a number between 1 and 100.');
                return;
            }
            createGrid(size);
        }

        function clearGridColors() {
            const squares = document.querySelectorAll('.grid-square');
            squares.forEach(square => {
                square.style.backgroundColor = '';
            });
        }

        resetButton.addEventListener('click', promptForGridSize);
        clearButton.addEventListener('click', clearGridColors);

        // Initialize default grid
        createGrid(16);