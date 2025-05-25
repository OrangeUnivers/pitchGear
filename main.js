let darkMode = false;
let navbarSmall = false;
const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
function goToPage(page) {
    const newURL = mainPage + page;
    window.location.href = newURL;
}
function goBack() {
    const newURL = mainPage;
    window.location.href = newURL;
}
function changeColorScheme(mode) {
    let setModeTo;
    if (!mode) {
        setModeTo = !darkMode;
    } else {
        switch (mode) {
            case "dark":
                setModeTo = true;
                break;
            case "light":
                setModeTo = false;
                break;
            default:
                setModeTo = !darkMode;
                break;
        }
    }
    if (darkMode == setModeTo) { return; }
    if (setModeTo) {
        document.body.classList = "dark";
        document.getElementById("navbar-logo").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("navbar-logo").src = "resources/logo-dark.png";
            document.getElementById("navbar-logo").style.opacity = 1;
        }, 300)
    } else {
        document.body.classList = "";
        document.getElementById("navbar-logo").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("navbar-logo").src = "resources/logo-light.png";
            document.getElementById("navbar-logo").style.opacity = 1;
        }, 300)
    }
    darkMode = !darkMode
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
    if (setSizeTo) {
        if (isMobile) {
            document.getElementById("navbar").style.borderRadius = "0.6rem";
            document.getElementById("navbar-logo").style.width = "4.8rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "0.5rem";
                document.getElementById("navbar-username").style.paddingInline = "0.75rem";
            }
        } else {
            document.getElementById("navbar").style.borderRadius = "1rem";
            document.getElementById("navbar-logo").style.width = "5.6rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "0.8rem";
                document.getElementById("navbar-username").style.paddingInline = "1.2rem";
            }
            document.getElementById("navbar-account").style.fontSize = "1.2rem";
        }
    } else {
        if (isMobile) {
            document.getElementById("navbar").style.borderRadius = "1rem";
            document.getElementById("navbar-logo").style.width = "6.4rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "0.8rem";
                document.getElementById("navbar-username").style.paddingInline = "1.2rem";
            }
        } else {
            document.getElementById("navbar").style.borderRadius = "1.6rem";
            document.getElementById("navbar-logo").style.width = "10rem";
            if (navbarItems.includes("username")) {
                document.getElementById("navbar-username").style.paddingBlock = "1rem";
                document.getElementById("navbar-username").style.paddingInline = "1.5rem";
            }
            document.getElementById("navbar-account").style.fontSize = "1.3rem";
        }
    }
    navbarSmall = !navbarSmall
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
        changeNavbarSize("small");
    } else {
        changeNavbarSize("large");
    }
});
if (isMobile) {
    document.getElementById("navbar").style.borderRadius = "1rem";
    document.getElementById("navbar-logo").style.width = "6.4rem";
    if (navbarItems.includes("username")) {
        document.getElementById("navbar-username").style.paddingBlock = "0.8rem";
        document.getElementById("navbar-username").style.paddingInline = "1.2rem";
    }
    document.getElementById("navbar-spacer").style.height = "5.2rem";
}