
var context = document.getElementById("coolLookingThing").getContext("2d")

var resizeCanvas = function()
{
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
    context.imageSmoothingEnabled = false;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// actual code here ---------------------------------------------------------------------

var intBetwNums = function(a, b)
{
    // I think this is pretty elegant.
    if (a * b < 0) {return true}
    else
    {
        // Checks if both numbers are on the same tooth on a sawtooth wave
        return (b % 1) != ((b - a) + a % 1)
    }
}

var divideScreen = function(array, i, resolution)
{
    array[0] = 0;
    array[1] = context.canvas.width / resolution;
    array[0] = array[1] * i;
}

var model = {

    thingy : [
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1
      ],

    getHeight : function(x, z)
    {
        x = Math.floor(x);
        z = Math.floor(z);
        // return Math.max(Math.floor(z) - 2, 0);
        // return Math.sqrt(x * x + z * z)
        // return 20 - Math.abs(x) - Math.abs(z - 30)
        return Math.sqrt(z/5) * 5 - (Math.cos(x) + Math.cos(z))

        // return this.thingy[z] * 5;
    },

    getHeight2 : function(x1, z1, x2, z2)
    {
        return this.getHeight(Math.floor((x1 + x2)/2), Math.floor((z1 + z2)/2))
    },

    followRay : function(zOrig, angle)
    {
        lastX = 0
        lastZ = zOrig;
        lastHeight = 0;
        lastDistance = 0;
        result = [];
        steps = 0;
        for (x = 1; x < 20; x++)
        {
            z = Math.tan(angle) * x + zOrig;
            if (intBetwNums(z, lastZ))
            {
                theZ = Math.floor(Math.max(lastZ, z));
                theX = x + (theZ - z)/Math.tan(angle);

                height = this.getHeight2(theZ, theX, lastZ, lastX);
                if (height != lastHeight)
                {
                    distance = Math.sqrt(lastZ * lastZ + lastX * lastX);
                    result.push({
                        distance : distance,
                        distanceChange : distance - lastDistance,
                        x : lastX,
                        z : lastZ,
                        heightBefore : lastHeight,
                        heightChange : height - lastHeight
                    })
                    lastDistance = distance;
                    lastHeight = height;
                };

                lastX = theX;
                lastZ = theZ;
            }

            height = this.getHeight2(z, x, lastZ, lastX);
            if (height != lastHeight)
            {
                distance = Math.sqrt(lastZ * lastZ + lastX * lastX);
                result.push({
                    distance : distance,
                    distanceChange : Math.sqrt(lastZ * lastZ + lastX * lastX) - lastDistance,
                    x : lastX,
                    z : lastZ,
                    heightBefore : lastHeight,
                    heightChange : height - lastHeight
                });
                lastDistance = distance;
                lastHeight = height;
            }

            lastX = x;
            lastZ = z;

            // if (result.length > 8)
            // {
            //     break;
            // }
        }

        return result;
    }
}

var badOrtho = {
    temp : [0, 0],
    height : 10,
    frustrumHeight : 10,
    angle : -45 * Math.PI/180,

    getThingy : function(distance, height)
    {
        return height - Math.tan(this.angle) * distance; 
    },

    getScreenY : function(distance, height)
    {
        return context.canvas.height * (1 - (this.getThingy(distance, height) - this.height + this.frustrumHeight/2)/this.frustrumHeight)
    },

    drawWall : function(wall, i, resolution)
    {
        // if (wall.heightChange > 0)
        {
            divideScreen(this.temp, i, resolution);
            context.fillStyle = "hsl(" + (30 * (wall.heightBefore)) + ", 70%, 30%)";
            context.fillRect(this.temp[0], this.getScreenY(wall.distance, wall.heightChange + wall.heightBefore),
                this.temp[1], 10000);
            // console.log(this.getScreenY(wall.distance, wall.heightChange + wall.heightBefore))
        }
    },

    drawFloor : function(wall, i, resolution)
    {
        // if (wall.heightBefore < h)
        {
            divideScreen(this.temp, i, resolution);
            context.fillStyle = "hsl(" + (30 * (wall.heightBefore)) + ", 70%, 50%)";
            context.fillRect(this.temp[0], this.getScreenY(wall.distance, wall.heightBefore),
                this.temp[1], 10000);
            // console.log(this.getScreenY(wall.distance, wall.heightChange + wall.heightBefore))
        }
    }
}

var view = {
    fov : 60 * Math.PI/180,
    resolution : 300,
    heading : 0 * Math.PI/180,
    z : 0,
    projection : badOrtho,

    drawRay : function(angle, i, resolution)
    {
        walls = model.followRay(this.z, angle)
        // console.log(walls);
        
        for (j = walls.length - 1; j >= 0; j--)
        {
            wall = walls[j]; // would do pop but whatever
            // Draw the wall
            this.projection.drawWall(wall, i, resolution)
            // Draw the ground before it
            this.projection.drawFloor(wall, i, resolution)
        }
        // this.debug(walls)
    },

    drawCamera : function()
    {
        context.fillStyle = "hsl(200, 50%, 70%)"
        context.fillRect(0, 0, window.innerWidth, window.innerHeight)

        step = this.fov / this.resolution;
        bound = this.resolution/2 - 0.5;
        for (i = -bound; i <= bound; i++)
        {
            this.drawRay(step * i + this.heading, i + bound, this.resolution)
            // console.log(i);
            
        }
    },

    debug : function(walls)
    {
        context.save()
        context.translate(20, 400);
        context.scale(40, 40)
        context.lineWidth = 1/40

        // context.moveTo(0, 0);
        // context.lineTo(20, Math.tan(this.heading) * 20)
        // context.stroke();

        for (x = 0; x <= 10; x++)
        {
            context.moveTo(x, -10);
            context.lineTo(x, 10);
            context.stroke(); 
        }
        for (z = -10; z <= 10; z++)
        {
            context.moveTo(0, z);
            context.lineTo(10, z);
            context.stroke(); 
        }

        // context.strokeStyle = "#AA0000"
        context.moveTo(0, 0);
        for (wall in walls)
        {
            context.lineTo(walls[wall].x, walls[wall].z);
            context.stroke();
        }

        context.restore();
    },
}


var update = function()
{
    view.drawCamera();
}

update();
// setInterval(update, 100/6);
// addEventListener("resize", update);

var onMouseMove = function(e) {
    badOrtho.angle = 2 * (0.5 - e.pageY/window.innerHeight) * 70 * Math.PI/180;
    view.heading = (-2 * (0.5 - e.pageX/window.innerWidth) * 60) * Math.PI/180;
    update();
}
document.addEventListener('mousemove', onMouseMove);



// context.fillRect(0, 0, 100, 100000)

// var getHeight = function(x, y)
// {
//     return x * x + y * y - 3
// }

// var followRay = function(angle, callback)
// {
//     lastY = Math.tan(angle) * 5
//     endEarly = 0
//     for (x = 5; x > 0; x--)
//     {
//         y = Math.tan(angle) * x;
//         callback([x, y, 0])
//         // TODO: Will break for multiple Y changes inbetween the step
//         if (intBetwNums(lastY, y))
//         {
//             theY = Math.floor(Math.max(lastY, y))
//             callback([(x - 1) + (theY - lastY)/(y - lastY) , theY, Math.sign(angle)])
//             endEarly++
//         }
//         lastY = y
//     }
// }

// var drawARect = function(height, list, resolution, slice)
// {
//     width = context.canvas.width / resolution

//     // angle = Math.atan2(height, Math.sqrt(list[0] * list[0] + list[1] * list[1]))
//     y = -height * 10 - Math.sqrt(list[0] * list[0] + list[1] * list[1]) * 10
//     y += context.canvas.height / 2
    
//     context.strokeStyle = context.fillStyle
//     context.fillRect(slice * width, y, width, 1000)
//     context.strokeRect(slice * width, y, width, 1000)
// }

// var drawRects = function(list, resolution, slice)
// {
//     console.log(list)

//     if (list[2] == 0)
//     {
//         context.fillStyle = "#CCCCCC"
//         drawARect(getHeight(list[0], Math.floor(list[1])), list, resolution, slice) // wall
//         context.fillStyle = "#555555"
//         drawARect(getHeight(list[0]-1, Math.floor(list[1])), list, resolution, slice) // floor
//     }
//     else
//     {
//         context.fillStyle = "#CCCCCC"
//         drawARect(getHeight(Math.floor(list[0]), list[1] - (list[2] != 1)), list, resolution, slice) // wall
//         context.fillStyle = "#555555"
//         drawARect(getHeight(Math.floor(list[0]), list[1] - (list[2] == 1)), list, resolution, slice) // floor
//     }
// }

// var RESOLUTION = 90
// var FOV = 40 * Math.PI/180

// var drawView = function()
// {
//     for (i = 0; i < RESOLUTION; i++)
//     {
//         followRay(((i / RESOLUTION) - 0.5) * FOV, function(lists) {drawRects(lists, RESOLUTION, i)})
//     }
// }