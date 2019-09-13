class Application{
    constructor(){
        this.index = 1;
        this.images = ["image_carousel_1.png", "Group\ 43.png", "image_carousel_2.png"];
        this.headerBg = document.querySelector('#crh-index-header');
        this.bubbles = document.querySelectorAll('.crh-carousel-circle');
        document.querySelector('.next').addEventListener('click', this.next.bind(this));
        document.querySelector('.prev').addEventListener('click', this.prev.bind(this));
    }
    next(){
        this.bubbles[this.index].classList.remove('crh-carousel-active');
        this.index++;
        if(this.index == 3){
            this.index = 0;
        }
        this.bubbles[this.index].classList.add('crh-carousel-active');
        console.log(this.index);
        $(".next").click(function(){
            console.log('this is a test');
            $("#crh-index-header").css('background-image', 'url(' + this.images[this.index] + ')').fadeIn();
        })
        this.setImage(this.index);
    }
    prev(){
        this.bubbles[this.index].classList.remove('crh-carousel-active');
        this.index--;
        if(this.index == -1){
            this.index = 2
        }
        this.bubbles[this.index].classList.add('crh-carousel-active');
        this.setImage(this.index);
    }
    setImage(index){
        this.headerBg.style.background = "url(\'../images/" + this.images[index] + "\')";
        this.headerBg.style.backgroundSize = "cover";
        this.headerBg.style.backgroundPosition = "center";
        this.headerBg.style.backgroundRepeat = "no-repeat";
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