class Views {
    constructor () {
        this.sidenavInit();
    }

    sidenavInit () {
        const elem = document.querySelector('.sidenav');
        const instance = M.Sidenav.init(elem, {});
    }
};