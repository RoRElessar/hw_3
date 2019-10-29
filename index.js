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

    let result = [];
    const tbody = document.getElementById('tbody');
    const instructions = keyPressCount('Hello wo');

    instructions.forEach(function (element) {
       const tableRow = document.createElement('tr');
       const rowCell = document.createElement('td');

       rowCell.textContent = element;
       tableRow.appendChild(rowCell);
       tbody.appendChild(tableRow);
       
    });

    function keyPressCount(message) {
        const splitMessageArray = message.toLowerCase().split('');

        splitMessageArray.forEach(function (element, i) {
            const messageLetter = splitMessageArray[i];

            for (const button in phoneKeyBoard) {

                if (phoneKeyBoard[button].includes(messageLetter)) {
                    const letterIndex = phoneKeyBoard[button].indexOf(messageLetter) + 1;
                    const times = letterIndex > 1 ? ' times' : ' time';

                    result.push('Press ' + button + ' button ' + letterIndex + times);
                }

            }
        });

        return result;
    }

})();
