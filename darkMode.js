function parseBoolean(str) {
  if (typeof str !== "string") return false;
  return str.toLowerCase() === "true";
}
let darkMode = localStorage.getItem("pg-darkMode");
if (darkMode == "undefined" || darkMode == null || darkMode == undefined) {
    darkMode = false;
    localStorage.setItem("pg-darkMode", false);
}
darkMode = parseBoolean(darkMode);
console.log(typeof(darkMode))
if (darkMode) {
    console.log("why")
}
console.log(darkMode ? "dark" : "light")
changeColorScheme((darkMode ? "dark" : "light"), true);
function changeColorScheme(mode, forced) {
    let setModeTo;
    if (!mode) {
        setModeTo = !darkMode;
    } else {
        switch (mode) {
            case "dark":
                console.log("changing to dark")
                setModeTo = true;
                break;
            case "light":
                console.log("changing to light")
                setModeTo = false;
                break;
            default:
                setModeTo = !darkMode;
                break;
        }
    }
    if (darkMode == setModeTo && !forced) { return; }
    if (setModeTo) {
        document.documentElement.dataset.theme = "dark";
    } else {
        document.documentElement.dataset.theme = "light";
    }
    if (!forced) {
        darkMode = !darkMode
        localStorage.setItem("pg-darkMode", darkMode);
        console.log("DarkMode = " + darkMode);
    }
}