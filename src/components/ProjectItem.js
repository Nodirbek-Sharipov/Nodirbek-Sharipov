import React from 'react'

export default function ProjectItem({ project }) {

	const { title, url, description } = project

	return (
		<li>
			<a
				className="link js-link text-shadow"
				target="_blank"
				rel="noopener noreferrer"
				href={url}
			>
				{title}
			</a>
			{description && <div className='project-description text-shadow'>{description}</div>}
		</li>
	)
}
