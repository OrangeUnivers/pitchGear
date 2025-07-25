let navbarSmall = false;
const relativeBacktracking = "../".repeat(nestingAmount);
const mainPage = window.location.protocol + "//" + window.location.host + window.location.pathname.replace(subPage, "");
/**
 * The time it takes for transitions to be enabled after the DOM finished loading.
 * @type {number}
 */
let transitionActivationDelay = 1000;
// Open (or create) the database
// const request = indexedDB.open("PitchGearDB", 1);

// request.onupgradeneeded = function(event) {
//     const db = event.target.result;
    
//     // Create an object store called "settings" with a keyPath "id"
//     if (!db.objectStoreNames.contains("settings")) {
//         db.createObjectStore("settings", { keyPath: "id" });
//     }
// };

// request.onsuccess = function(event) {
//     const db = event.target.result;
    
//     // Example: add a setting
//     const transaction = db.transaction(["settings"], "readwrite");
//     const store = transaction.objectStore("settings");
    
//     store.put({ id: "darkMode", value: false }); // Add/update
    
//     transaction.oncomplete = () => console.log("Saved setting");
//     transaction.onerror = () => console.error("Save failed");
// };

// request.onerror = function(event) {
//     console.error("Database error:", event.target.error);
// };

const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function goToPage(page) {
    const newURL = mainPage + page;
    window.location.href = newURL;
}
function goBack() {
    const newURL = mainPage;
    window.location.href = newURL;
}
function runSizeChange(small, mobile) {
    let sizeNameSize;
    if (small) {
        sizeNameSize = "small";
    } else {
        sizeNameSize = "large";
    }
    let sizeNameDevice;
    if (mobile) {
        sizeNameDevice = "mobile";
    } else {
        sizeNameDevice = "pc";
    }
    const sizeName = sizeNameSize + "-" + sizeNameDevice;
    switch (sizeName) {
        case "small-mobile":
            document.getElementById("navbar").style.borderRadius = "0.6rem";
            document.getElementById("navbar-logo").style.width = "4.8rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "0.5rem";
                document.getElementById("navbar-username").style.paddingInline = "0.75rem";
            }
            break;
        case "small-pc":
            document.getElementById("navbar").style.borderRadius = "1rem";
            document.getElementById("navbar-logo").style.width = "5.6rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "0.8rem";
                document.getElementById("navbar-username").style.paddingInline = "1.2rem";
            }
            document.getElementById("navbar-account").style.fontSize = "1.2rem";
            break;
        case "large-mobile":
            document.getElementById("navbar").style.borderRadius = "1rem";
            document.getElementById("navbar-logo").style.width = "6.4rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "0.8rem";
                document.getElementById("navbar-username").style.paddingInline = "1.2rem";
            }
            break;
        case "large-pc":
            document.getElementById("navbar").style.borderRadius = "1.6rem";
            document.getElementById("navbar-logo").style.width = "10rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "1rem";
                document.getElementById("navbar-username").style.paddingInline = "1.5rem";
            }
            document.getElementById("navbar-account").style.fontSize = "1.3rem";
            break;
        default:
            break;
    }

}
function changeNavbarSize(size) {
    let setSizeTo;
    if (!size) {
        setSizeTo = !navbarSmall;
    } else {
        switch (size) {
            case "small":
                setSizeTo = true;
                break;
            case "large":
                setSizeTo = false;
                break;
            default:
                setSizeTo = !navbarSmall;
                break;
        }
    }
    if (permanentlySmall) { setSizeTo = true; }
    if (navbarSmall == setSizeTo) { return; }
    runSizeChange(setSizeTo, isMobile);
    navbarSmall = !navbarSmall;
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
        changeNavbarSize("small");
    } else {
        changeNavbarSize("large");
    }
});
if (!permanentlySmall) {
    runSizeChange(false, isMobile);
} else {
    runSizeChange(true, isMobile);
}
if (hasSpacer && isMobile) {
    if (!permanentlySmall) {
        document.getElementById("navbar-spacer").style.height = "5.2rem";
    } else {
        document.getElementById("navbar-spacer").style.height = "4rem";
    }
}
if (hasSpacer && !isMobile && permanentlySmall) {
    document.getElementById("navbar-spacer").style.height = "4.6rem";
}
document.getElementById('navbar-logo').addEventListener("click", (event) => {
    changeColorScheme()
});

function showAlert(textContent, options) {
    let preText = "";
    let alertSpeed = 3200;
    let actuallyShow = options.show == undefined || options.show == true;
    if (options.type) {
        switch (options.type) {
            case "error":
                preText = `<i class="fa-regular fa-xmark-circle"></i>`;
                break;
            case "confirmation":
                preText = `<i class="fa-regular fa-check-circle"></i>`;
                break;
            case "general":
                preText = `<i class="fa-regular fa-circle"></i>`;
                break;
        }
    }
    if (options.time) {
        alertSpeed = options.time + 200;
    }
    document.getElementById("alert-system").innerHTML = preText + "<span>" + textContent + "</span>";
    if (actuallyShow) {
        document.getElementById("alert-system-container").classList.add("showing");
        setTimeout(() => {
            document.getElementById("alert-system-container").classList.remove("showing");
        }, alertSpeed)
    }
}

if (isMobile) {
    document.body.classList.add('mobile');
}
showAlert("Alert! <code>You shouldn't be seeing this</code>", {type: "general", show: false})
window.showAlert = showAlert;
addEventListener("DOMContentLoaded", (event) => { setTimeout(() => { document.body.dataset.transitions = "true"; }, transitionActivationDelay); });