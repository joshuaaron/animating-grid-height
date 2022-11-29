import './style.scss';

const qs = (s) => document.querySelector(s);
const wrapper = qs('.wrapper');
const icon = qs('.icon');
const grid = qs('.grid');
wrapper.onclick = () => {
    icon.classList.toggle('expanded');
    grid.classList.toggle('expanded');
};
