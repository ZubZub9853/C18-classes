var kid1;
function setup() {
  createCanvas(400,400);
  kid1 = new Student("John", 16, 10);

}

function draw() 
{
  background(30);
  kid1.Show();

}