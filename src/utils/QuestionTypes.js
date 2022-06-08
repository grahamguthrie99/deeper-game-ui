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

  export const QuestionGifs = {
    1 : "url('https://media2.giphy.com/media/SubxWZRX3TQnz79NML/giphy.gif?cid=ecf05e47hcqx13qxsb2o9gd278fqgsb11srxgt2lh6o6l3yz&rid=giphy.gif&ct=s')",
    2 : "url('https://media3.giphy.com/media/UTdkITFMWI9fwFxpph/giphy.gif?cid=ecf05e47ab8wya3gay9uk7pbo2bo8ld6uoq44yatlzjz31jk&rid=giphy.gif&ct=s')",
    3 : "url('https://media0.giphy.com/media/PguLT2q1kG9ODEIeuc/giphy.gif?cid=ecf05e47ur1j5e4mz16dl95at4zbshdp1as0wddjc8liq6zd&rid=giphy.gif&ct=s')",
    5 : "url('https://media1.giphy.com/media/iXUgk0FKAlJ3rXb7Cg/giphy.gif?cid=ecf05e47a9xo0atap3z1hs03bdza6t3fl5cedj9sz3b668dn&rid=giphy.gif&ct=s')",
    7: "url('https://media1.giphy.com/media/xlX5X25BLlzfta9sL9/giphy.gif?cid=ecf05e47hu771a8regboao98pjsypya8slew742y98cyepiu&rid=giphy.gif&ct=s')"
  };


