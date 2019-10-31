class Application{
    constructor(){
        new Noty({
            type: 'error',
            layout: 'centerRight',
            text: 'This site is currently under construction!',
            timeout: '4000',
            progressBar: 'true',
            theme: 'semanticui'
        }).show();
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