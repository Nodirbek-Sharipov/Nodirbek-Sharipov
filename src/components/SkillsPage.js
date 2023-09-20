import React from 'react'

const SkillsPage = ({ skills = [] })=>{

	return (
		<ul className="skills-container bullet text-shadow">
			{skills.map(x => (<li key={x}>{x}</li>))}
		</ul>
	)
}

export default SkillsPage