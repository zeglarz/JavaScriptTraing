class Stopwatch {
    constructor() {
        this.duration = 0;
        this.interval = false;
    };

    start() {
        if (this.interval) {
            console.log('timer is already running');
            return;
        }
        this.interval = setInterval(() => {
            this.duration++;
            console.log(this.duration);
        }, 1000);
    };

    stop() {
        if (!this.interval) {
            console.log('Cannot stop, stopwatch is not running');
            return;
        }
        clearInterval(this.interval);
        this.interval = false;
    };

    reset() {
        this.duration = 0;

    }
}

let sw = new Stopwatch();
sw.start();
