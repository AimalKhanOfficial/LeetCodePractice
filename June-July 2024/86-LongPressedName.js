/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let typedIndexCounter = 0;
    typed = typed.split('');
    for (let i = 0; i < name.length; i++) {
        typedIndexCounter = i;
        if (name[i] === typed[typedIndexCounter]) {
            typedIndexCounter++;
            continue;
        }
        else {
            let shouldContinueLoop = true;
            let charFound = false;
            console.log('>> looking for', name[i], typed[typedIndexCounter], typedIndexCounter)
            while (shouldContinueLoop) {
                typedIndexCounter++;
                if (name[i] === typed[typedIndexCounter]) {
                    shouldContinueLoop = false;
                    typed.splice(typedIndexCounter, 1);
                    charFound = true;
                    break;
                }
                if (!typed[typedIndexCounter] || typedIndexCounter === typed.length) {
                    return false;
                }
            }
            if (!charFound) {
                return false;
            }
        }
    }
    return typed.length > 0 ? false : true;
};

console.log('>> ', isLongPressedName(name = "alex", typed = "aaleexa"))