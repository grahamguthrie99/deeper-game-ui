import QuizIcon from '@mui/icons-material/Quiz';
import Looks5Icon from '@mui/icons-material/Looks5';
import FlakyIcon from '@mui/icons-material/Flaky';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CloudIcon from '@mui/icons-material/Cloud';
import AbcRoundedIcon from '@mui/icons-material/AbcRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

export const QuestionTypes = {
    1 : "Would You Rather",
    2 : "Open Ended",
    3 : "Top 5",
    4 : "Anonymous Answer",
    5 : "Mini Game",
    6: "Secret Word", 
    7: "Punishment"
  };

export const QuestionIcons = {
    1 : <FlakyIcon />,
    2 : <CloudIcon />,
    3 : <Looks5Icon />,
    4 : <QuizIcon />,
    5 : <VideogameAssetIcon />,
    6 : <AbcRoundedIcon />, 
    7: <ErrorOutlineRoundedIcon /> 
  };

  export const InteractiveQuestions = {
    1 : false,
    2 : false,
    3 : false,
    4 : true,
    5 : false,
    6 : true, 
    7: false
  };


const QuestionGiftsType1 = [
  "url('https://media2.giphy.com/media/SubxWZRX3TQnz79NML/giphy.gif?cid=ecf05e47hcqx13qxsb2o9gd278fqgsb11srxgt2lh6o6l3yz&rid=giphy.gif&ct=s')",
  "url('https://media2.giphy.com/media/Jmn4d9Q6tq34JUB6nt/giphy.gif?cid=ecf05e4722kpuld0imaxaex7uliihijhdec95faz0b2uktl5&rid=giphy.gif&ct=s')", 
  "url('https://media3.giphy.com/media/Tj7C9tflAbX6F97W2e/giphy.gif?cid=ecf05e47q8peyfwa7sddiuim3r84w56agd7f7xgtdi23z9v5&rid=giphy.gif&ct=s')", 
  "url('https://media0.giphy.com/media/xWUOwzqqtfKi33fOxi/giphy.gif?cid=ecf05e47sr1fok3kfdhlbral07fs39qm3xuuala2eo64wy83&rid=giphy.gif&ct=s')", 
  "url('https://media3.giphy.com/media/95QR2Z8XsKrFBLIAfV/giphy.gif?cid=ecf05e47ydqk8d09mjc13nmk05qw9g4cgfvnm7gozyi1ct6d&rid=giphy.gif&ct=s')"


]
const QuestionGiftsType2 = [
  "url('https://media3.giphy.com/media/UTdkITFMWI9fwFxpph/giphy.gif?cid=ecf05e47ab8wya3gay9uk7pbo2bo8ld6uoq44yatlzjz31jk&rid=giphy.gif&ct=s')",
  "url('https://media2.giphy.com/media/IgDYxKjkJoRx6MKC9s/giphy.gif?cid=790b761178a68a0f958d3e889a72c0190ad34c483010ca36&rid=giphy.gif&ct=s')", 
  "url('https://media0.giphy.com/media/c2xgDZmuNXnsBv5DnR/giphy.webp?cid=ecf05e47xc1qchv9y3tr9w72lbrzilxtcrbani4wydrtbm3e&rid=giphy.webp&ct=s')", 
  "url('https://media1.giphy.com/media/WQCL5dzFsMzlrlYIew/giphy.gif?cid=ecf05e47xc1qchv9y3tr9w72lbrzilxtcrbani4wydrtbm3e&rid=giphy.gif&ct=s')", 
  "url('https://media1.giphy.com/media/RNKgfVob2kfF1Qzo4h/giphy.gif?cid=ecf05e47tgb05rl4jbsbggj3snkde1t5wbndrbeamfu2xm5b&rid=giphy.gif&ct=s')", 
  "url('https://media1.giphy.com/media/Wt42JLMCrSvqxnOPE4/giphy.gif?cid=ecf05e47hwhwakz8v293beumsyu82x0i5cq63336s2pie5yh&rid=giphy.gif&ct=s')"
  
]
const QuestionGiftsType3 = [
  "url('https://media0.giphy.com/media/PguLT2q1kG9ODEIeuc/giphy.gif?cid=ecf05e47ur1j5e4mz16dl95at4zbshdp1as0wddjc8liq6zd&rid=giphy.gif&ct=s')", 
  "url('https://media3.giphy.com/media/pWTuBmOoxCtslrLB2k/giphy.gif?cid=ecf05e47zxiourlisybeixa215y5uqc1kpkrsfjjrdjqfzge&rid=giphy.gif&ct=s')", 
  "url('https://media4.giphy.com/media/uTCtCulO9K9yyH0eEO/giphy.gif?cid=ecf05e47zxiourlisybeixa215y5uqc1kpkrsfjjrdjqfzge&rid=giphy.gif&ct=s')", 
  "url('https://media0.giphy.com/media/kmFvjBPQgBV4Ap6Kce/giphy.gif?cid=ecf05e47zxiourlisybeixa215y5uqc1kpkrsfjjrdjqfzge&rid=giphy.gif&ct=s')", 
  "url('https://media1.giphy.com/media/S6Z6hsx0QIc2T3bEYY/giphy.gif?cid=ecf05e47neukelsnm95trdsdabw74ne9aoimy6e4lygjx6n2&rid=giphy.gif&ct=s')"
  
]

const QuestionGiftsType5 = [
  "url('https://media1.giphy.com/media/iXUgk0FKAlJ3rXb7Cg/giphy.gif?cid=ecf05e47a9xo0atap3z1hs03bdza6t3fl5cedj9sz3b668dn&rid=giphy.gif&ct=s')", 
  "url('https://media3.giphy.com/media/Sr3SQ9qqCvrTwbLtwq/giphy.gif?cid=ecf05e479bbs0cub0x2kjucqbqdqpwihbd0nn0idnluwp3wx&rid=giphy.gif&ct=s')", 
  "url('https://media1.giphy.com/media/4jHPFYQcWbsi3i9SqP/giphy.gif?cid=ecf05e47yu1bhh9dppkspbhnf6jjl5wxwt5uoeelzzrqpn07&rid=giphy.gif&ct=s')"
  
]
const QuestionGiftsType7 = [
  "url('https://media1.giphy.com/media/xlX5X25BLlzfta9sL9/giphy.gif?cid=ecf05e47hu771a8regboao98pjsypya8slew742y98cyepiu&rid=giphy.gif&ct=s')", 
  "url('https://media2.giphy.com/media/YSMI1pIQgGW9WYrYQZ/giphy.gif?cid=ecf05e476xfw7stzr5s8pi4web1sggwka9fnrd0cwm6e00ez&rid=giphy.gif&ct=s')", 
  "url('https://media0.giphy.com/media/jQiJ51QXPaphkVNXd1/giphy.gif?cid=ecf05e476xfw7stzr5s8pi4web1sggwka9fnrd0cwm6e00ez&rid=giphy.gif&ct=s')", 
  "url('https://media3.giphy.com/media/mEadKaCltzequOgfSX/giphy.gif?cid=ecf05e47eps9az9fhh9kvfv3b5d1rr8dibjdplx29by6y4g9&rid=giphy.gif&ct=s')", 
  "url('https://media3.giphy.com/media/8PQAKJQhqNgc9uicSe/giphy.gif?cid=ecf05e47ibi6qhhl4n73yusv44cwfj5w2vh51qc5wrnj38wc&rid=giphy.gif&ct=s')", 
  "url('https://media2.giphy.com/media/Vbr2yy6DO3jusYSeZA/giphy.gif?cid=ecf05e47koupjsmp925c0s68aeil6b37k2o02nj029vcevwg&rid=giphy.gif&ct=s')"
]



  export const QuestionGifs = {
    1 : QuestionGiftsType1,
    2 : QuestionGiftsType2,
    3 : QuestionGiftsType3,
    5 : QuestionGiftsType5,
    7 : QuestionGiftsType7
  };


  



