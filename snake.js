const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height /scale;
const columns = canvas.width /scale;

//our snake
var snake;
var interval = 120;

//setup function
(function setup()
{
    //make the snake and draw it
    snake = new Snake();
    fruit = new Fruit();
    
    fruit.pickLocation();
    
    snake.draw();
    window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw();
        snake.draw();
        
        if(snake.eat(fruit))
        {
            console.log("EATING FOOD")
            fruit.pickLocation();
        }
    }, interval);
}());

function Snake()
{
    this.score = 0;


    this.x = 0;
    this.y = 0; 

    this.dx = scale * 1;
    this.dy = 0;
    this.update = function()
    {
        this.x += this.dx;
        this.y += this.dy;
    }
    this.draw = function()
    {    
        context.fillStyle = "#41a3f4";
        let i = 0;
       
        context.fillRect(this.x, this.y, scale, scale);

    }

    this.eat = function(fruit)
    {
        if(this.x === fruit.x && this.y === fruit.y)
        {
            return true;
        }
        return false;
    }

    this.changeDirection = function(direction)
    {
        //up, down,left or right
        switch(direction)
        {
            case "ArrowUp":
                this.dx = 0;
                this.dy = - scale * 1;
            break;
            case "w":
                this.dx = 0;
                this.dy = - scale * 1;
            break;
            case "ArrowDown" :
                this.dx = 0;
                this.dy = scale * 1;
            break;
            case "s" :
                this.dx = 0;
                this.dy = scale * 1;
            break;
            case "ArrowLeft" :
                this.dx = scale * -1;
                this.dy = 0;
            break;
            case "a" :
                this.dx = scale * -1;
                this.dy = 0;
            break;
            case "ArrowRight" : 
                this.dx = scale * 1;
                this.dy = 0;
            break;
            case "d" : 
                this.dx = scale * 1;
                this.dy = 0;
            break;
        }
    }
}

//make the fruit
function Fruit()
{
    this.x;
    this.y;

    this.pickLocation = function()
    {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }
    
    this.draw =  function()
    {
        context.fillStyle = "#47ff69";
        context.fillRect(this.x, this.y, scale, scale);
    }
}
window.addEventListener("keydown", ((event) =>{
    const direction = event.key;
    console.log(direction);
    snake.changeDirection(direction);
}))

