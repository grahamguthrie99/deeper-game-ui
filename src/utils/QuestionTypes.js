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
    3 : "Top X",
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