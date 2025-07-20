document.addEventListener('DOMContentLoaded', () => {
  // === YouTube Video Map ===
const videoMap = {
  0: "https://www.youtube.com/embed/34Na4j8AVgA",
  1: "https://www.youtube.com/embed/SlPhMPnQ58k",
  2: "https://www.youtube.com/embed/mzB1VGEGcSU",
  3: "https://www.youtube.com/embed/xpVfcZ0ZcFM"
};



  // === Dummy Lyrics ===
const lyricsMap = {
  0: `I'm tryna put you in the worst mood, ah
P1 cleaner than your church shoes, ah
Milli point two just to hurt you, ah
All red Lamb' just to tease you, ah
None of these toys on lease too, ah
Made your whole year in a week too, yeah
Main bitch outta your league too, ah
Side bitch out of your league too, ah

House so empty, need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face, man, I love my baby, ah
You talkin' money, need a hearing aid
You talkin' 'bout me, I don't see the shade
Switch up my style, I take any lane
I switch up my cup, I kill any pain
Look what you've done

I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Every day a nigga try to test me, ah
Every day a nigga try to end me, ah
Pull off in that Roadster SV, ah
Pockets overweight, gettin' hefty, ah
Coming for the king, that's a far cry, ah
I come alive in the fall time, I
The competition, I don't really listen
I'm in the blue Mulsanne bumping New Edition
House so empty, need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face, man, I love my baby, ah
You talkin' money, need a hearing aid
You talkin' 'bout me, I don't see the shade
Switch up my style, I take any lane
I switch up my cup, I kill any pain
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Let a nigga brag Pitt
Legend of the fall, took the year like a bandit
Bought mama a crib and a brand new wagon
Now she hit the grocery shop looking lavish
Star Trek roof in that Wraith of Khan
Girls get loose when they hear this song
A hundred on the dash get me close to God
We don't pray for love, we just pray for cars
House so empty, need a centerpiece
Twenty racks a table cut from ebony
Cut that ivory into skinny pieces
Then she clean it with her face, man, I love my baby, ah
You talkin' money, need a hearing aid
You talkin' 'bout me, I don't see the shade
Switch up my style, I take any lane
I switch up my cup, I kill any pain
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
Look what you've done
I'm a motherfuckin' starboy
`,

  1: `Yeah, yeah
Yeah (Hey)

My mama called, seen you on TV, son
Said shit done changed ever since we was on
I dreamed it all ever since I was young
They said I wouldn't be nothing
Now they always say, "Congratulations" (Uh, uh, uh)

Worked so hard, forgot how to vacation (Uh-huh)
They ain't never had the dedication (Uh, uh)
People hatin', say we changed and look, we made it (Uh, uh)
Yeah, we made it (Uh, uh, uh)They was never friendly, yeah
Now I'm jumping out the Bentley, yeah
And I know I sound dramatic, yeah
But I know I had to have it, yeah
For the money, I'm a savage, yeah
I be itching like an addict, yeah
I'm surround by twenty bad bitch, yeah
But they didn't know me last year, yeah
Everyone wanna act like they important (Yeah-yeah-yeah, yeah-yeah-yeah)
But all that mean nothing when I saw my dough, yeah (Yeah-yeah-yeah, yeah-yeah-yeah)
Everyone countin' on me drop the ball, yeah (Yeah-yeah-yeah, yeah-yeah-yeah)
Everything custom like I'm at the border, yeah, yeah
If you fuck with winning, put your lighters to the sky
How could I make cents when I got millions on my mind?
Coming with that bullshit, I just put it to the side
Balling since a baby, they could see it in my eyes`,

  2: `The world on drugs
Ten (Yeah) thousand dollar plates
Thousand dollar plates
Thousand dollar plates, fine china
Shorty like a, uh
Shorty like a
(Wheezy outta here)

Shorty like a thousand dollar plate, fine china
Tell her that she beautiful every day, I remind her
Then I jump in her pussy like a lake, I'm a diver
And her last man was a pussy, had a vagina
I get lost in her eyes, like dust from the skies
It's her body or nobody, I refuse to compromise
So if she leaves, I'ma kill her, oh, she'll die
Did I say that out loud? I'm so crazy about mine

Goin' insane, feel you pickin' up and movin' things inside my brain
I know I don't have to argue about everything
But we don't have the same soul
Would've sold yours too and got a bigger bankroll
You tell me that you love me, baby, say it again
Repeat it over and over until it's in my brain
Picked up the drugs so I let my brain go
Woulda fried yours too, but I'm selfish about my Percs, oh
See upcoming rap shows
Get tickets for your favorite artists

Shorty like a thousand dollar plate, fine china
Tell her that she beautiful every day, I remind her
Then I jump in her pussy like a lake, I'm a diver
And her last man was a pussy, had a vagina
I get lost in her eyes, like dust from the skies
It's her body or nobody, I refuse to compromise
So if she leaves, I'ma kill her, oh, she'll die
Did I say that out loud? I'm so crazy about mine`,

  3: `Hold on, hold on, fuck that
Fuck that shit
Hold on, I got to start this motherfuckin' record over again
Wait a minute
Fuck that shit
Still on this motherfuckin' record
I'ma play this motherfucka for y'all
Ayy, y'all get some more drinks goin' on
I'll sound a whole lot better
Listen
Seeing you got ritualistic
Cleansin' my soul of addiction for now
'Cause I'm fallin' apart
Yeah, tension
Between us just like picket fences
You got issues that I won't mention for now
'Cause we're fallin' apart
Passionate from miles away
Passive with the things you say
Passin' up on my old ways
I can't blame you, no, no
Passionate from miles away
Passive with the things you say
Passin' up on my old ways
I can't blame you, no, no
Listen
Harder buildin' trust from a distance
I think we should rule out commitment for now
'Cause we're fallin' apart
Leavin'
You're just doing that to get even
Don't pick up the pieces, just leave it for now
They keep fallin' apart
Passionate from miles away
Passive with the things you say
Passin' up on my old ways
I can't blame you, no, no
Passionate from miles away
Passive with the things you say
Passin' up on my old ways
I can't blame you, no, no
Um, trying to think of the right thing to say`
};


  // === DOM Elements ===
const youtubeContainer = document.getElementById('youtube-player-container');
const youtubeIframe = document.getElementById('youtube-player');
  const lyricsContainer = document.getElementById('lyrics-container');
  const lyricsTextBox = document.getElementById('lyrics-text');
  document.querySelectorAll('.recommendations .card').forEach(card => {
  card.addEventListener('click', () => {
    const index = parseInt(card.getAttribute('data-index'));
    const videoUrl = videoMap[index];
    if (videoUrl) {
      youtubeContainer.style.display = 'block';
      youtubeIframe.src = videoUrl + "?autoplay=1";
    }
  });
});

  const audio = document.getElementById('audio');
  const seekBar = document.querySelector('.seek-bar');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const volumeIcon = document.querySelector('.volume-icon');
  const volumeSlider = document.getElementById('volume-slider');

  const madeForYouCards = document.querySelectorAll('.recommendations .card');
  const quickCards = document.querySelectorAll('.quick-card');

  // === Home Button Reset ===
const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', () => {
  youtubeContainer.style.display = "none";
  youtubeIframe.src = "";

  lyricsContainer.style.display = "none";
  lyricsContainer.classList.remove('show');
  lyricsTextBox.textContent = "";

  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;
  playPauseBtn.textContent = '▶';
  seekBar.value = 0;

  document.querySelector('.main-content').scrollTo({ top: 0, behavior: 'smooth' });
});


// === Library Card Click to Play ===
const libraryItems = document.querySelectorAll('.library-card li');

libraryItems.forEach(item => {
  item.addEventListener('click', () => {
    const index = parseInt(item.getAttribute('data-index'));
    if (!isNaN(index) && playlist[index]) {
      currentTrack = index;
      loadTrack(currentTrack);
    }
  });
});

  // === Playlist ===
const playlist = [
  {
    title: "Starboy",
    artist: "Weeknd",
    src: "https://ia600407.us.archive.org/9/items/Starboy_201801/Starboy.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"
  },
  {
    title: "Stoney",
    artist: "Post Malone",
    src: "https://ia800305.us.archive.org/0/items/PostMaloneCongratulationsFt.Quavo_201811/Post%20Malone%20-%20Congratulations%20ft.%20Quavo.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg"
  },
  {
    title: "Fine China",
    artist: "Juice Wrld",
    src: "https://ia803100.us.archive.org/0/items/futurejuicewrldfinechinaaudio192kbps/Future%2C%20Juice%20WRLD%20-%20Fine%20China%20%28Audio%29%20%28192%20%20kbps%29.mp3",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/02/Wrld_on_Drugs.jpg"
  },
  {
  title: "PassionFruit",
  artist: "Drake",
  src: "https://ia803409.us.archive.org/12/items/passionfruit_202103/passionfruit.mp3", // ✅ MP3 audio
  cover: "https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg" // ✅ Drake's cover
},
  {
  title: "Sunflower",
  artist: "Post Malone",
  src: "https://ia801303.us.archive.org/17/items/postmaloneswaeleesunflowerspidermanintothespiderverse_201907/Post%20Malone%2C%20Swae%20Lee%20-%20Sunflower%20%28Spider-Man%20Into%20the%20Spider-Verse%29.mp3", // ✅ MP3 audio
  cover: "https://static.wikia.nocookie.net/postmalone/images/9/9e/Spider-Man_Into_the_Spider-Verse_Soundtrack_Cover.jpg" // ✅ Drake's cover
},
  {
  title: "One Dance",
  artist: "Drake",
  src: "https://ia601906.us.archive.org/17/items/onedance_drake/12.%20One%20Dance%20%28Ft.%20Wizkid%20%26%20Kyla%29.mp3", // ✅ MP3 audio
  cover: "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg" // ✅ Drake's cover
}

];

  let currentTrack = 0;
  let isPlaying = false;

  function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    document.querySelector('.player-left img').src = track.cover;
    document.querySelector('.player-left strong').textContent = track.title;
    document.querySelector('.player-left span').textContent = track.artist;
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '❚❚';
  }

  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.textContent = '▶';
    } else {
      audio.play();
      playPauseBtn.textContent = '❚❚';
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      seekBar.value = (audio.currentTime / audio.duration) * 100;
    }
  });

  seekBar.addEventListener('input', () => {
    if (audio.duration) {
      audio.currentTime = (seekBar.value / 100) * audio.duration;
    }
  });

  volumeIcon.addEventListener('click', () => {
    volumeSlider.style.display = (volumeSlider.style.display === 'block') ? 'none' : 'block';
  });

  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });

  document.addEventListener('click', (e) => {
    if (!volumeIcon.contains(e.target) && e.target !== volumeSlider) {
      volumeSlider.style.display = 'none';
    }
  });

  prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
  });

  nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
  });

  madeForYouCards.forEach(card => {
    card.addEventListener('click', () => {
      const index = card.getAttribute('data-index');
      const videoUrl = videoMap[index];

      youtubeIframe.src = videoUrl + "?autoplay=1";
      youtubeContainer.style.display = "block";

      lyricsContainer.style.display = "none";
      lyricsTextBox.textContent = "";
    });
  });

quickCards.forEach(card => {
  card.addEventListener('click', () => {
    const index = card.getAttribute('data-index');

    // Hide YouTube player
    youtubeContainer.style.display = "none";
    youtubeIframe.src = "";

    // Show matching lyrics
    lyricsTextBox.textContent = lyricsMap[index] || "Lyrics not available.";
    lyricsContainer.style.display = "block";

    requestAnimationFrame(() => {
      lyricsContainer.classList.add('show');
    });

    lyricsContainer.scrollIntoView({ behavior: 'smooth' });
  });
});



  // Load initial track
  loadTrack(currentTrack);
});
