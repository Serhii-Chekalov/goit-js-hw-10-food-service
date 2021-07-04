import refs from '../js/refs';
import menu from '../data/menu.json';
import menuListTempl from '../template/menuListTempl.hbs';

const buildMenu = () => {
refs.menuList.insertAdjacentHTML('beforeend', menuListTempl(menu));
};

export default buildMenu();