import React from 'react'
import SoundBoard from './components/SoundBoard/SoundBoard'
import Correct from './audio/Correct.m4a'
import Wrong from './audio/Wrong.m4a'
import SadTrombone from './audio/sad-trombone.mp3'
import Tada from './audio/tada.mp3'
import OwenWilsonWow from './audio/Owen-Wilson-wow.m4a'
import JordanYay from './audio/Jordan-yay.m4a'
import JordanSuccessfulStart from './audio/Jordan-successful-start.m4a'
import JordanFantasticDay from './audio/Jordan-fantastic-day.m4a'
import JordanThankYou from './audio/Jordan-thank-you.m4a'
import JordanSoundOfSilence from './audio/Jordan-sound-of-silence.m4a'
import JordanAnypersonalwins from './audio/Jordan-Any-personal-wins.m4a'
import JordanBossin from './audio/Jordan-Bossin.m4a'
import JordanErOKthatshardtobeat from './audio/Jordan-Er-OK-thats-hard-to-beat.m4a'
import JordanErwriteyourwillseveryone from './audio/Jordan-Er-write-your-wills-everyone.m4a'
import JordanGetin from './audio/Jordan-Get-in.m4a'
import JordanHappydayscleansweep from './audio/Jordan-Happy-days-clean-sweep.m4a'
import JordanHappydays from './audio/Jordan-Happy-days.m4a'
import JordanHiDave from './audio/Jordan-Hi-Dave.m4a'
import JordanHiMark from './audio/Jordan-Hi-Mark.m4a'
import JordanImprettyhappywiththatgoodwork from './audio/Jordan-Im-pretty-happy-with-that-good-work.m4a'
import JordanStrongstufflovethat from './audio/Jordan-Strong-stuff-love-that.m4a'
import JordanThankssomuch from './audio/Jordan-Thanks-so-much.m4a'
import JordanThatsoundsincredible from './audio/Jordan-That-sounds-incredible.m4a'
// import EmotionalDamage from './audio/emotional-damage.mp3'
// import Cheering from './audio/Cheering.m4a'
// import DrumRollFancy from './audio/Drum-Roll-Fancy.m4a'
// import DrumRoll from './audio/Drum-Roll.m4a'
// import MarioLostLife from './audio/mario-lost-life.mp3'
// import DeathFlute from './audio/death-flute-heart-will-go-on.mp3'
// import DeathEnthusiasm from './audio/death-curb-your-enthusiasm-theme.mp3'
// import ObiWanHelloThere from './audio/obi-wan-hello-there.mp3'
// import haha from './audio/ha-ha.mp3'
// import Airhorn from './audio/airhorn.mp3'
// import Aww from './audio/aww.mp3'
// import JingleHouseNews from './audio/Jingle-House-News.m4a'
// import JingleGongLong from './audio/Jingle-Gong-Long.m4a'
// import JingleGongShort from './audio/Jingle-Gong-Short.m4a'
// import Countdown from './audio/20-sec-countdown.mp3'
// import JohnCena from './audio/john-cena.mp3'

const sounds = [
  {
    audio: JordanAnypersonalwins,
    soundName: 'JordanAnypersonalwins',
    colour: '#d5521a',
    keyCode: 32,
    label: 'Space',
  },
  {
    audio: JordanBossin,
    soundName: 'JordanBossin',
    colour: '#d5521a',
    keyCode: 49,
    label: '1',
  },
  {
    audio: JordanErOKthatshardtobeat,
    colour: '#d5521a',
    keyCode: 50,
    label: '2',
    soundName: 'JordanErOKthatshardtobeat',
  },
  {
    audio: JordanErwriteyourwillseveryone,
    colour: '#d5521a',
    keyCode: 51,
    label: '3',
    soundName: 'JordanErwriteyourwillseveryone',
  },
  {
    audio: JordanGetin,
    colour: '#d5521a',
    keyCode: 52,
    label: '4',
    soundName: 'JordanGetin',
  },
  {
    audio: JordanHappydayscleansweep,
    colour: '#d5521a',
    keyCode: 65,
    label: 'A',
    soundName: 'JordanHappydayscleansweep',
    height: 2,
  },
  {
    audio: JordanHappydays,
    colour: '#d5521a',
    keyCode: 83,
    label: 'S',
    soundName: 'JordanHappydays',
    height: 2,
  },
  {
    audio: JordanHiDave,
    colour: '#d5521a',
    keyCode: 68,
    label: 'd',
    soundName: 'JordanHiDave',
    height: 2,
  },
  {
    audio: JordanHiMark,
    colour: '#d5521a',
    keyCode: 70,
    label: 'F',
    soundName: 'JordanHiMark',
  },
  {
    audio: JordanImprettyhappywiththatgoodwork,
    colour: '#d5521a',
    keyCode: 71,
    label: 'G',
    soundName: 'JordanImprettyhappywiththatgoodwork',
  },
  {
    audio: JordanStrongstufflovethat,
    colour: '#d5521a',
    keyCode: 85,
    label: 'U',
    soundName: 'JordanStrongstufflovethat',
  },
  {
    audio: JordanThankssomuch,
    colour: '#d5521a',
    keyCode: 73,
    label: 'I',
    soundName: 'JordanThankssomuch',
  },
  {
    audio: JordanThatsoundsincredible,
    colour: '#d5521a',
    keyCode: 79,
    label: 'O',
    soundName: 'JordanThatsoundsincredible',
  },
  // {
  //   audio: Cheering,
  //   colour: '#d5521a',
  //   keyCode: 32,
  //   label: 'Space',
  //   soundName: 'Crowd Cheer',
  //   volume: 0.5,
  //   height: 1,
  // },
  // {
  //   audio: Airhorn,
  //   colour: '#43bab2',
  //   keyCode: 49,
  //   label: '1',
  //   soundName: 'Airhorn',
  // },
  // {
  //   audio: Aww,
  //   colour: '#43bab2',
  //   keyCode: 50,
  //   label: '2',
  //   soundName: 'Aww',
  // },
  // {
  //   audio: ObiWanHelloThere,
  //   colour: '#43bab2',
  //   keyCode: 51,
  //   label: '3',
  //   soundName: 'Obi Wan Hello There',
  // },
  // {
  //   audio: haha,
  //   colour: '#43bab2',
  //   keyCode: 52,
  //   label: '4',
  //   soundName: 'Ha ha',
  // },
  // {
  //   audio: JingleHouseNews,
  //   colour: '#535791',
  //   keyCode: 65,
  //   label: 'A',
  //   soundName: 'House News Jingle',
  //   height: 2,
  //   volume: 0.7,
  // },
  // {
  //   audio: JingleGongShort,
  //   colour: '#535791',
  //   keyCode: 83,
  //   label: 'S',
  //   soundName: 'Gong Jingle Short',
  //   height: 2,
  //   volume: 0.7,
  // },
  // {
  //   audio: JingleGongLong,
  //   colour: '#535791',
  //   keyCode: 68,
  //   label: 'd',
  //   soundName: 'Gong Jingle Long',
  //   height: 2,
  //   volume: 0.7,
  // },
  // {
  //   audio: Countdown,
  //   colour: '#535791',
  //   keyCode: 70,
  //   label: 'F',
  //   soundName: 'Countdown',
  // },
  // {
  //   audio: JohnCena,
  //   colour: '#535791',
  //   keyCode: 71,
  //   label: 'G',
  //   soundName: 'John Cena',
  //   volume: 0.6,
  // },
  {
    audio: JordanYay,
    colour: '#a8216e',
    keyCode: 81,
    label: 'Q',
    soundName: 'Jordan - Yay',
  },
  {
    audio: JordanSuccessfulStart,
    colour: '#a8216e',
    keyCode: 87,
    label: 'W',
    soundName: 'Jordan - Successful Start',
  },
  {
    audio: JordanFantasticDay,
    colour: '#a8216e',
    keyCode: 69,
    label: 'E',
    soundName: 'Jordan - Fantastic Day',
  },
  {
    audio: JordanThankYou,
    colour: '#a8216e',
    keyCode: 82,
    label: 'R',
    soundName: 'Jordan - Thank You',
  },
  {
    audio: JordanSoundOfSilence,
    colour: '#a8216e',
    keyCode: 84,
    label: 'T',
    soundName: 'Jordan - Sound of Silence',
  },
  {
    audio: OwenWilsonWow,
    colour: '#53915e',
    keyCode: 89,
    label: 'Y',
    soundName: 'Owen Wilson - Wow',
  },
  // {
  //   audio: EmotionalDamage,
  //   colour: '#53915e',
  //   keyCode: 85,
  //   label: 'U',
  //   soundName: 'Emotional Damage',
  //   volume: 0.7,
  // },
  // {
  //   audio: DeathFlute,
  //   colour: '#53915e',
  //   keyCode: 73,
  //   label: 'I',
  //   soundName: 'Death Flute',
  // },
  // {
  //   audio: DeathEnthusiasm,
  //   colour: '#53915e',
  //   keyCode: 79,
  //   label: 'O',
  //   soundName: 'Death Enthusiasm',
  //   volume: 0.7,
  // },
  {
    audio: Correct,
    colour: '#d2d51a',
    keyCode: 90,
    label: 'Z',
    soundName: 'Correct',
    volume: 0.5,
  },
  {
    audio: Wrong,
    colour: '#d2d51a',
    keyCode: 88,
    label: 'X',
    soundName: 'Wrong',
    volume: 0.5,
  },
  // {
  //   audio: DrumRoll,
  //   colour: '#d2d51a',
  //   keyCode: 67,
  //   label: 'C',
  //   soundName: 'Drum Roll',
  // },
  // {
  //   audio: DrumRollFancy,
  //   colour: '#d2d51a',
  //   keyCode: 86,
  //   label: 'V',
  //   soundName: 'Drum Roll Fancy',
  // },
  {
    audio: SadTrombone,
    colour: '#d2d51a',
    keyCode: 66,
    label: 'B',
    soundName: 'Sad Trombone',
  },
  {
    audio: Tada,
    colour: '#d2d51a',
    keyCode: 78,
    label: 'N',
    soundName: 'Tada',
    volumw: 0.8,
  },
  // {
  //   audio: MarioLostLife,
  //   colour: '#d2d51a',
  //   keyCode: 77,
  //   label: 'M',
  //   soundName: 'Mario Lost Life',
  // },
  // Add more sounds here
]

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Soundboard</p>
      </header>
      <main>
        <SoundBoard sounds={sounds} />
      </main>
    </div>
  )
}

export default App
