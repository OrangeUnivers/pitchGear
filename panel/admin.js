function parsePermissions(permissionArray, checkValue, compareValue) {
    let comparationValue;
    if (compareValue == undefined) {
        comparationValue = true;
    }
    if (compareValue && compareValue.slice(0, 3) === "bol") {
        if (compareValue.slice(4, -1) === "true") {
            comparationValue = true;
        }
        if (compareValue.slice(4, -1) === "false") {
            comparationValue = false;
        }
    }
    if (compareValue && compareValue.slice(0, 3) === "num") {
        comparationValue = parseInt(compareValue.slice(4, -1));
    }
    if (compareValue && compareValue.slice(0, 3) === "str") {
        comparationValue = compareValue.slice(4, -1);
    }
    if (permissionArray[checkValue.split(":")[0]] == undefined) {
        return false;
    }
    if (permissionArray[checkValue.split(":")[0]] === "@all") {
        return true;
    }
    let checkValues = permissionArray[checkValue.split(":")[0]][checkValue.split(":")[1]];
    if (checkValues == undefined) {
        return false;
    }
    if (compareValue && compareValue.slice(0, 3) === "ran") {
        let firstComparation = compareValue.slice(4, -1).split("-")[0];
        let secondComparation = compareValue.slice(4, -1).split("-")[1];
        if (checkValues > firstComparation && checkValue < secondComparation) {
            return true;
        }
    } else if (compareValue && compareValue.slice(0, 3) === "arr") {
        if (checkValues === "@all") {
            return true;
        }
        if (checkValues.contains(compareValue.slice(4, -1))) {
            return true;
        }
    } else if (checkValues === comparationValue) {
        return true;
    }
    return false;
}
window.parsePermissions = parsePermissions;