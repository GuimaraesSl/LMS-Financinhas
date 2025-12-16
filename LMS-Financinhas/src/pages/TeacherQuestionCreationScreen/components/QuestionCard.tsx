import React from 'react'
import EditIcon from '../../../assets/edit-icon.svg'
import DeleteIcon from '../../../assets/delete-icon.svg'
import IconeChat from '../../../assets/icon-chat.svg'
import { useNavigate } from 'react-router-dom'
import './QuestionCard.style.css'

interface Question {
  id: string
  enunciado: string
  correta: string
  justificativa: string
}

interface QuestionCardProps {
  question: Question
  onDelete?: () => void
  onEdit?: (id: string) => void
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onDelete }) => {
  const navigate = useNavigate()

  return (
    <div className="questionCard">
      <div className="questionContent">
        <h3 className="questionText">{question.enunciado}</h3>
        <div className="answerQuestion">
          <img src={IconeChat} className="chatIcon" alt="chat"/>
          <p className="answerCard">{question.correta}</p>
        </div>
      </div>
      <div className="actionsQuestion">
        <button
          className="editQuestion"
          onClick={() => navigate(`/edit-question/${encodeURIComponent(question.enunciado)}`)}
          >
          <img src={EditIcon} className="editIcon" alt="edit"/>
        </button>
        <button className="deleteQuestionButton" onClick={onDelete}>
          <img src={DeleteIcon} className="deleteIcon" alt="delete"/>
        </button>
      </div>
    </div>
  )
}

export default QuestionCard
