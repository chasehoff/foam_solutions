class Application{
    constructor(){
        this.carousel();
    }
    carousel(){
        let images = ["maxresdefault.jpg", "frank-mckenna-127338-unsplash.jpg", "andre-robillard-298-unsplash.jpg"];
    }
    static getInstance() {
        if (!Application._instance) {
            Application._instance = new Application();
            return Application._instance;
        } else {
            throw 'Application already exists!';
        }
    }
}