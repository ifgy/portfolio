let lang = sessionStorage.getItem('lang');
if (lang === null) {
    change_text(0);
} else {
    change_text(lang);
}
fr_button = () => {
    sessionStorage.setItem('lang', 0);
    lang = sessionStorage.getItem('lang');
    change_text(lang);
}
eng_button = () => {
    sessionStorage.setItem('lang', 1);
    lang = sessionStorage.getItem('lang');
    change_text(lang);
}