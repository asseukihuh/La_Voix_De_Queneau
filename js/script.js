const audio = document.getElementById('audio');
const source = document.getElementById('audio-source');
const stations = document.getElementsByName('station');

for (let i = 0; i < stations.length; i++) {
  stations[i].addEventListener('click', function() {
    source.src = this.value;
    audio.load();
    audio.play();
  });
}

