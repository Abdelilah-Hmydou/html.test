// Quiz Application Logic

class Quiz {
    constructor() {
        this.questions = new Questions();
        this.currentQuestion = null;
        this.questionCount = 0;
        this.correctCount = 0;
        // Hidden minimum requirements - not visible to user
        this.minQuestions = 10;
        this.minScore = 80;
        this.isQuizComplete = false;
        
        this.initializeElements();
        this.bindEvents();
        this.loadNextQuestion();
    }

    initializeElements() {
        // Quiz elements
        this.questionTextEl = document.getElementById('questionText');
        this.answersContainerEl = document.getElementById('answersContainer');
        this.feedbackEl = document.getElementById('feedback');
        this.feedbackIconEl = document.getElementById('feedbackIcon');
        this.feedbackTextEl = document.getElementById('feedbackText');
        this.nextButtonEl = document.getElementById('nextButton');
        
        // Progress elements
        this.questionCountEl = document.getElementById('questionCount');
        this.correctCountEl = document.getElementById('correctCount');
        this.scorePercentageEl = document.getElementById('scorePercentage');
        this.questionsRequirementEl = document.getElementById('questionsRequirement');
        this.scoreRequirementEl = document.getElementById('scoreRequirement');
        
        // Settings elements removed - now hardcoded
        
        // Completion elements
        this.completionMessageEl = document.getElementById('completionMessage');
        this.finalScoreEl = document.getElementById('finalScore');
        this.finalQuestionsEl = document.getElementById('finalQuestions');
        this.restartButtonEl = document.getElementById('restartButton');
    }

    bindEvents() {
        // Next button event
        this.nextButtonEl.addEventListener('click', () => this.loadNextQuestion());
        
        // Restart button event
        this.restartButtonEl.addEventListener('click', () => this.restartQuiz());
    }

    // Settings are now hardcoded - no need for updateSettings method

    updateRequirements() {
        const questionsNeeded = Math.max(0, this.minQuestions - this.questionCount);
        const currentScore = this.questionCount > 0 ? Math.round((this.correctCount / this.questionCount) * 100) : 0;
        const scoreNeeded = Math.max(0, this.minScore - currentScore);
        
        // Show generic progress messages without revealing minimum requirements
        this.questionsRequirementEl.textContent = questionsNeeded > 0 ? 
            'Blijf vragen beantwoorden' : 
            '✓ Vragen vereiste behaald';
        
        this.scoreRequirementEl.textContent = scoreNeeded > 0 ? 
            'Blijf je score verbeteren' : 
            '✓ Score vereiste behaald';
        
        // Update requirement styling
        this.questionsRequirementEl.className = questionsNeeded > 0 ? 'requirement pending' : 'requirement met';
        this.scoreRequirementEl.className = scoreNeeded > 0 ? 'requirement pending' : 'requirement met';
    }

    loadNextQuestion() {
        if (this.isQuizComplete) return;
        
        this.currentQuestion = this.questions.getRandomQuestion();
        this.displayQuestion();
        this.hideFeedback();
    }

    displayQuestion() {
        if (!this.currentQuestion) return;
        
        // Display question text
        this.questionTextEl.textContent = this.currentQuestion.question;
        
        // Clear and populate answers
        this.answersContainerEl.innerHTML = '';
        this.currentQuestion.answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.className = 'answer-button';
            answerButton.textContent = answer.text;
            answerButton.dataset.correct = answer.correct;
            answerButton.addEventListener('click', (e) => this.selectAnswer(e.target));
            this.answersContainerEl.appendChild(answerButton);
        });
    }

    selectAnswer(selectedButton) {
        if (this.feedbackEl.classList.contains('hidden')) {
            const isCorrect = selectedButton.dataset.correct === 'true';
            
            // Disable all answer buttons
            const allButtons = this.answersContainerEl.querySelectorAll('.answer-button');
            allButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.correct === 'true') {
                    btn.classList.add('correct-answer');
                } else if (btn === selectedButton && !isCorrect) {
                    btn.classList.add('incorrect-answer');
                }
            });
            
            // Update counters
            this.questionCount++;
            if (isCorrect) {
                this.correctCount++;
            }
            
            // Show feedback
            this.showFeedback(isCorrect);
            
            // Update progress
            this.updateProgress();
            
            // Check if quiz is complete
            this.checkCompletion();
        }
    }

    showFeedback(isCorrect) {
        this.feedbackEl.classList.remove('hidden');
        
        if (isCorrect) {
            this.feedbackIconEl.innerHTML = '✓';
            this.feedbackIconEl.className = 'feedback-icon correct';
            this.feedbackTextEl.textContent = 'Correct!';
            this.feedbackTextEl.className = 'feedback-text correct';
        } else {
            this.feedbackIconEl.innerHTML = '✗';
            this.feedbackIconEl.className = 'feedback-icon incorrect';
            this.feedbackTextEl.textContent = 'Fout!';
            this.feedbackTextEl.className = 'feedback-text incorrect';
        }
        
        // Show explanation if available
        if (this.currentQuestion.explanation) {
            const explanationEl = document.createElement('div');
            explanationEl.className = 'explanation';
            explanationEl.textContent = this.currentQuestion.explanation;
            this.feedbackEl.appendChild(explanationEl);
        }
        
        this.nextButtonEl.classList.remove('hidden');
    }

    hideFeedback() {
        this.feedbackEl.classList.add('hidden');
        this.nextButtonEl.classList.add('hidden');
        
        // Remove any existing explanation
        const existingExplanation = this.feedbackEl.querySelector('.explanation');
        if (existingExplanation) {
            existingExplanation.remove();
        }
    }

    updateProgress() {
        this.questionCountEl.textContent = this.questionCount;
        this.correctCountEl.textContent = this.correctCount;
        
        const scorePercentage = this.questionCount > 0 ? 
            Math.round((this.correctCount / this.questionCount) * 100) : 0;
        this.scorePercentageEl.textContent = scorePercentage;
        
        this.updateRequirements();
    }

    checkCompletion() {
        const currentScore = this.questionCount > 0 ? 
            Math.round((this.correctCount / this.questionCount) * 100) : 0;
        
        const hasMinQuestions = this.questionCount >= this.minQuestions;
        const hasMinScore = currentScore >= this.minScore;
        
        if (hasMinQuestions && hasMinScore) {
            this.completeQuiz();
        }
    }

    completeQuiz() {
        this.isQuizComplete = true;
        this.finalScoreEl.textContent = Math.round((this.correctCount / this.questionCount) * 100);
        this.finalQuestionsEl.textContent = this.questionCount;
        this.completionMessageEl.classList.remove('hidden');
        
        // Hide the quiz container
        document.querySelector('.quiz-container').style.display = 'none';
    }

    restartQuiz() {
        // Reset all counters and state
        this.questionCount = 0;
        this.correctCount = 0;
        this.isQuizComplete = false;
        
        // Hide completion message
        this.completionMessageEl.classList.add('hidden');
        
        // Show quiz container
        document.querySelector('.quiz-container').style.display = 'block';
        
        // Reset progress
        this.updateProgress();
        
        // Load first question
        this.loadNextQuestion();
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quiz = new Quiz();
});
