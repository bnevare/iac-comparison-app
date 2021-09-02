import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Are you/do you want your application to be Serverless?',
			answerOptions: [
				{ answerText: 'Yes', SAM: true, CDK: true, CF: false },
				{ answerText: 'No', SAM: false, CDK: false, CF: true },
			],
		},
		{
			questionText: 'Are you/do you plan to use containers?',
			answerOptions: [
				{ answerText: 'Yes', SAM: false, CDK: true, CF: false},
				{ answerText: 'No', SAM: true, CDK: false, CF: true},
			],
		},
		{
			questionText: 'Are you comfortable with YAML?',
			answerOptions: [
				{ answerText: 'Yes', SAM: true, CDK: false, CF: true},
				{ answerText: 'No', SAM: false, CDK: true, CF: false},
			],
		},
		{
			questionText: 'Are you defining infrastructure and writing application in the same time? ',
			answerOptions: [
				{ answerText: 'Yes', SAM: true, CDK: true, CF: false },
				{ answerText: 'No', SAM: false, CDK: false, CF: true},
			],
		},
		{
			questionText: ' A) Are you looking for CLI to build an application or B) You already have an infrastructure? ',
			answerOptions: [
				{ answerText: 'A', SAM: true, CDK: true, CF: false },
				{ answerText: 'B', SAM: false, CDK: false, CF: true},
			],
		},
		{
			questionText: 'Speed: Do you need an IaC solution which will procure the fastest method of deployment in an application lifecycle?',
			answerOptions: [
				{ answerText: 'Yes', SAM: true, CDK: true, CF: false },
				{ answerText: 'No', SAM: false, CDK: false, CF: true },
			],
		},
		{
			questionText: 'Do you need greater freedom in regards of testing? For instance, capabilities to deploy and test locally?',
			answerOptions: [
				{ answerText: 'Yes', SAM: true, CDK: true, CF: false },
				{ answerText: 'No', SAM: false, CDK: false, CF: true},
			],
		},
		{
			questionText: 'Deployment: Do you need ease in managing updates? For instance an application which includes pipeline and using CLI tools? ',
			answerOptions: [
				{ answerText: 'Yes', SAM: true, CDK: true, CF: false },
				{ answerText: 'No', SAM: false, CDK: false, CF: true},
			],
		},
		{
			questionText: 'Do you need ease with multiple account or multiple region deployment?',
			answerOptions: [
				{ answerText: 'Yes', SAM: false, CDK: true, CF: false},
				{ answerText: 'No', SAM: true, CDK: false, CF: true},
			],
		},
		{
			questionText: 'A) Do you want complete control in your application or B) do you want an opinionated, best practice solution?',
			answerOptions: [
				{ answerText: 'A', SAM: false, CDK: false, CF: true},
				{ answerText: 'B', SAM: true, CDK: true, CF: false},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showCDKScore, setShowCDKScore] = useState(false);
	const [CDKscore, setCDKScore] = useState(0);
	const [showCFScore, setShowCFScore] = useState(false);
	const [CFscore, setCFScore] = useState(0);

	const handleAnswerOptionClick = (SAM,CDK,CF) => {
		if (SAM) {
			setScore(score + 1);
		}
		if (CDK) {
			setCDKScore(CDKscore + 1);
		}
		if(CF){
			setCFScore(CFscore + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setShowCDKScore(true);
			setShowCFScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You SAM scored is : {score/ 10 * 100}% <br></br>
					Your CDK score is : {CDKscore/10 * 100}% <br></br>
					Your CF score is : {CFscore/10 * 100}%
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.SAM,answerOption.CDK,answerOption.CF)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
