(function () {

    const phoneKeyBoard = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
        0: ' '
    };

    let result = {};
    const tbody = document.getElementById('tbody');
    const instructions = keyPressCount('Hello wo');

    for (let value in instructions) {
        let tableRow = document.createElement('tr');
        let buttonTableCell = document.createElement('td');
        let countTableCell = document.createElement('td');
        let clicksCount = instructions[value];

        buttonTableCell.textContent = value;
        countTableCell.textContent = clicksCount + (clicksCount > 1 ? ' times' : ' time');
        tableRow.appendChild(buttonTableCell);
        tableRow.appendChild(countTableCell);
        tbody.appendChild(tableRow);
    }

    function keyPressCount(message) {
        const splitMessageArray = message.toLowerCase().split('');

        for (let i = 0; i < splitMessageArray.length; i++) {
            let messageLetter = splitMessageArray[i];

            for (let button in phoneKeyBoard) {

                if (phoneKeyBoard[button].includes(messageLetter)) {
                    let letterIndex = phoneKeyBoard[button].indexOf(messageLetter);

                    result.hasOwnProperty(button) ?
                        result[button] += letterIndex + 1 :
                        result[button] = letterIndex + 1;
                }

            }

        }

        return result;
    }

})();
