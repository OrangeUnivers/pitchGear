const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isArcSearch = navigator.userAgent.includes("ArcSearch");
// const isArcSearch = true;

if (isMobile) {
    document.documentElement.classList.add('mobile');
}
if (isArcSearch) {
    document.documentElement.classList.add('arc');
}