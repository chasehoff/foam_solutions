class Application{
    constructor(){
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