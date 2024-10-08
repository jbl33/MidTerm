import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const QuizPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    const correctAnswers = {
      question1: 'javascript',
      question2: 'html',
      question3: 'usenavigate',
    };

    // Converting all the user answers to lower case so that case doesn't matter
    if (answers.question1.toLowerCase() === correctAnswers.question1 &&
        answers.question2.toLowerCase() === correctAnswers.question2 &&
        answers.question3.toLowerCase() === correctAnswers.question3) {
      setIsCorrect(true);
      navigate('/welcome'); // Navigate to the Welcome page if all answers are correct
    } else {
      alert('Incorrect answers. You must pass before you are qualified for the hackathon.');
    }
  };

  return (
    <div>
      <h1>Take Quiz to Qualify</h1>
      <p>Welcome to the qualifier quiz</p>
      <div>
        <label htmlFor="question1">Question 1: What is the primary programming language used for building modern web applications? </label>
        <input type="text" id="question1" name="question1" value={answers.question1} onChange={handleAnswerChange} />
      </div>
      <div>
        <label htmlFor="question2">Question 2: What language is used to structure the content and layout of a web page? </label>
        <input type="text" id="question2" name="question2" value={answers.question2} onChange={handleAnswerChange} />
      </div>
      <div>
        <label htmlFor="question3">Question 3: What React hook is used to navigate a user to a different page? </label>
        <input type="text" id="question3" name="question3" value={answers.question3} onChange={handleAnswerChange} />
      </div>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;