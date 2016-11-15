var song;

function setup() {
  song = loadSound('jaesoo/나는 재수가 좋아_노브레인(No Brain)_320k.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}
