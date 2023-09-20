import React from 'react'
import ProjectItem from './ProjectItem'

const projects = [
	{
		title	: 'CaliberX',
		description: 'Powering end-to-end alternative investing experiences. Our APIs connect your customers to top private equity and venture capital funds while unlocking new recurring revenue streams.',
		url		: 'https://www.caliberexchange.com/',
		date	: new Date(),
	},
	{
		title	: 'Poolit Web',
		url		: 'https://www.poolit.com/',
		date	: new Date(),
	},
	{
		title	: 'Poolit Mobile',
		description: 'Poolit delivers exclusive access to premium private equity and venture capital investments, from top fund managers. Accredited investors can invest with low minimums.',
		url		: 'https://apps.apple.com/uz/app/poolit-access-alt-investments/id1621546981',
		date	: new Date(),
	},
	{
		title	: 'Pearson+',
		description: 'Your eTextbooks, study videos, and more — all in one place',
		url		: 'https://www.pearson.com/en-us/pearsonplus.html',
		date	: new Date(),
	},
	{
		title	: 'Rize',
		description: 'Rize is where founders help each other win faster through honest 1:1 interactions that are light enough to fit around the chaos.',
		url		: 'https://play.google.com/store/apps/details?id=com.joinrize.rize',
		date	: new Date(),
	},
	{
		title	: 'sdb.uz',
		description: 'A chain of home appliances and electronics stores at affordable prices',
		url		: 'https://sdb.uz/',
		date	: new Date(),
	},
]

const ProjectsPageNew = ()=>{

	return (
		<div>
			<ul className="bullet">
				{projects.map((x, i) => <ProjectItem key={i} project={x}/> )}
			</ul>
		</div>
	)
}

export default ProjectsPageNew
