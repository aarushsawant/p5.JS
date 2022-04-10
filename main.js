function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    color="";
}

function draw()
{
    image(video,0,0,640,480);
    tint(color);
}

function fill_it()
{
    color=document.getElementById("color").value;
}

    function take_snapshot()
    {
      save('student.png');
    }