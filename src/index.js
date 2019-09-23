module.exports = function check(str, bracketsConfig) {
    const strArr = str.split("");
    const lastOpened = {
        config: null,
        index: null
    };
    let j = 0;
    while (0 < strArr.length && j < strArr.length) {
        let index = null;
        bracketsConfig.forEach((item, i) => {
            if (item.includes(strArr[j])) {
                index = i;
            }
        });
        if (bracketsConfig[index][0] === bracketsConfig[index][1]) {
            if (
                j - 1 === lastOpened["index"] &&
                lastOpened["config"] === index
            ) {
                strArr.splice(j - 1, 2);
                j = 0;
                continue;
            }
        }
        if (strArr[j] === bracketsConfig[index][0]) {
            lastOpened["config"] = index;
            lastOpened["index"] = j;
        } else if (strArr[j] === bracketsConfig[index][1]) {
            if (
                j - 1 === lastOpened["index"] &&
                lastOpened["config"] === index
            ) {
                strArr.splice(j - 1, 2);
                j = 0;
                continue;
            } else {
                return false;
            }
        }
        j++;
    }
    return strArr.length === 0;
};
