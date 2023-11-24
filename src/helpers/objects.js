/**
 * Converts an object to a string to be easily viewed. If consoleLogThis is true, then it will also print this out.
 * @param {object} obj Object to print
 * @param {boolean | undefined} consoleLogThis - If true, will run a console.log command on this value before returning
 */
export const prettyPrint = (obj, consoleLogThis = true) => {
    var string = JSON.stringify(
        obj,
        function (k, v) {
            return v === undefined ? '---UNDEFINED---' : v;
        },
        2
    );

    if (consoleLogThis) {
        console.log(string);
    }

    return string;
};
