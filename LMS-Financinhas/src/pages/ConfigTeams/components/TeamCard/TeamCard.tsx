import type { FC } from 'react'
import deleteIcon from '../../../../assets/delete-icon.svg'
import './TeamCard.style.css'
import type Team from '../../../../models/Team'

interface TeamCardProps {
    index: number
    team: Team
    handleDeleteTeam: (index: number) => void
}

const TeamCard: FC<TeamCardProps> = ({ index, team, handleDeleteTeam }) => {
    return (
        <div className="teamCard">
            <div className="teamContent">
                <div className="teamRow">
                    <img src={team.image} className="teamIcon" alt={`Ícone ${team.name}`} />
                    <div className="interColumn">
                        <span className="teamName">{team.name}</span>
                        <span className="teamPoints">{team.points} pontos</span>
                    </div>
                </div>
            </div>
            <div className="deleteButtonContainer">
                <button
                    className="deleteButton"
                    onClick={() => handleDeleteTeam(index)}
                    type="button"
                    aria-label={`Deletar ${team.name}`}
                >
                    <img src={deleteIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default TeamCard