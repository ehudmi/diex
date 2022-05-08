// Daily Challenge : Creating Objects

// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader, time) {
    this.title = String(title);
    this.uploader = String(uploader);
    this.time = Number(time);
  }
  watch = () =>
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
}

const video1 = new Video("2 girls 1 cup", "Alfred Hitchcock", 15);
video1.watch();

const video2 = new Video("Debby does Dallas", "Brian De-Palm", 125);
video2.watch();

let vidArray = [
  ["Night Porter", "Weird Al", 130],
  ["Taxi Driver", "Bobby Bones", 155],
  ["Behind the brown door", "Assman", 225],
  ["The devil in Miss Jones", "William Friedkin", 150],
  ["Deep Throat", "Linda Lovelace", 95],
];

vid = [];
for (i in vidArray) {
  vid[i] = new Video(vidArray[i][0], vidArray[i][1], vidArray[i][2]);
  console.log(vid[i]);
}
