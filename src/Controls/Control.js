export class Control {
    constructor(player) {
        this.player = player;

        this._boot();
    }

    options(player) {
        //
    }

    mounted(player) {
        //
    }

    _boot() {
        this._createElement();
        this._registerEvents();
        this.mounted(this.player);
    }

    _createElement() {
        this.element = this._tap(
            document.createElement(this._getOption("element")),
            (control) => {
                control.classList.add(this._getOption("classList"));
            },
        );
    }

    _registerEvents() {
        for (let [event, handler] of Object.entries(this._getOption("on"))) {
            this.element.addEventListener(event, handler);
        }
    }

    _getOption(key) {
        return this.options(this.player)[key];
    }

    _tap(value, callback) {
        callback(value);
        return value;
    }
}
