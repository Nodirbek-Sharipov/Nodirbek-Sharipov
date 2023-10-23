import React, {
	useEffect, useMemo, useState,
} from 'react'
import { NavLink, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

import './App.css'

import HomePage from './components/HomePage'
import ContactsPage from './components/ContactsPage'
import ProjectsPage from './components/ProjectsPage'
import SkillsPage from './components/SkillsPage'
import ProjectsPageNew from './components/ProjectsPageNew';

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		const location = useLocation();
		const navigate = useNavigate();
		const params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

const versions = ['2018-2022', '2023']

const ages = new Date().getFullYear() - new Date(1998, 7, 20).getFullYear()

const versionChanges = {
	[versions[0]]: {
		bg: '/icons/images/BG-2018-2022.jpg',
		fg: '/icons/images/FG-2018-2022.png',
		resume: (
			<span className="header__title">
				Résumé:&nbsp;
				<a
					target='_blank'
					rel="noopener noreferrer"
					className="link js-link"
					href='/Nodirbek_Sharipov_Resume_2022.pdf'
					download
				>• Brief</a>
				&nbsp;
				<a
					target='_blank'
					rel="noopener noreferrer"
					className="link js-link"
					href='https://matching.turing.com/developer-resume-preview/b5d9a657ebfcfec7f0b43f276d884b38b45dd851520515'
				>• Full</a>
			</span>
		),
		bio: `I'm a ${ages}y.o. software engineer from Uzbekistan, specialized in scalability, security, immersive user experiences and full-stack development.`,
		contacts: [
			{
				icon : '/icons/svgs/mail.svg',
				url : 'mailto:sharipovn4@gmail.com',
				text : 'sharipovn4@gmail.com',
			},
			{
				icon : '/icons/svgs/linkedin.svg',
				url	: 'https://www.linkedin.com/in/nodirdev/',
				text : 'nodirdev',
			},
			{
				icon : '/icons/svgs/phone.svg',
				url	: 'tel:+998905572240',
				text : '+998(90)-557-2240',
			},
			{
				icon : '/icons/svgs/github.svg',
				url	: 'https://github.com/nodirbek-sharipov',
				text : '@nodirbek-sharipov',
			},
			{
				icon : '/icons/svgs/twitter.svg',
				url	: 'https://twitter.com/nodir_dev',
				text : '@nodir_dev',
			},
			{
				icon : '/icons/svgs/telegram.svg',
				url	: 'https://t.me/nodirbek_sharipov',
				text : '@nodirbek_sharipov',
			},
		],
		projects: <ProjectsPage />,
		skills: [
			'System architecture',
			'NodeJS',
			'React Native',
			'ReactJS',
			'asp.net core',
			'DBMS - MySQL, MsSQL, SQLite',
			'DevOps - CI/CD, Docker, Kubernetes, AWS, GCP',
		],
	},
	[versions[1]]: {
		bg: '/icons/images/BG-2023.jpg',
		fg: '/icons/images/FG-2023.png',
		resume: (
			<span className="header__title">
				<a
					target='_blank'
					rel="noopener noreferrer"
					className="link js-link"
					href='/Nodirbek_Sharipov_Resume_2023.pdf'
					download
				>Download Résumé</a>
			</span>
		),
		bio: (
			<span>
				Product oriented mobile/web engineer. Front-end web and mobile development specialist, system architecture generalist. Designed mobile and web apps at CaliberX, built a design system and mobile apps at Epam Systems, architected the system infrastructure and mobile apps at RizeTogether LLC.
				<br /><br />
				Obsessed with building valuable products that improve lives
			</span>
		),
		contacts: [
			{
				icon : '/icons/svgs/mail.svg',
				url : 'mailto:sharipovn4@gmail.com',
				text : 'sharipovn4@gmail.com',
			},
			{
				icon : '/icons/svgs/phone.svg',
				url	: 'tel:+998905572240',
				text : '+998(90)-557-2240',
			},
			{
				icon : '/icons/svgs/linkedin.svg',
				url	: 'https://www.linkedin.com/in/nodirdev/',
				text : 'LinkedIn: nodirdev',
			},
			{
				icon : '/icons/svgs/github.svg',
				url	: 'https://github.com/nodir-js',
				text : 'GitHub: @nodir-js',
			},
			{
				icon : '/icons/svgs/twitter.svg',
				url	: 'https://twitter.com/nodir_dev',
				text : 'Twitter: @nodir_dev',
			},
			{
				icon : '/icons/svgs/telegram.svg',
				url	: 'https://t.me/nodirbek_sharipov',
				text : 'Telegram: @nodirbek_sharipov',
			},
		],
		projects: <ProjectsPageNew />,
		skills: [
			'Stack: TypeScript, React, ReactNative, Context API, Redux, ES6+, NodeJS, JWT, REST APIs CMS: Contentful, Strapi',
			'DB: MySQL, MS SQL Server',
			'Tools: Asana, Jira, Slack, Github, Git, Gitlab, Figma, Heap, Sentry, Postman, Android Studio, Xcode',
		],
	}
}

const App = ({ history }) => {

	const { pathname } = useLocation();

	const [version, setVersion] = useState(versions[versions.length - 1]);

	const { resume, fg, bg, bio, contacts, projects, skills } = useMemo(() => versionChanges[version], [version]);

	useEffect(() => {
		document.body.style.backgroundImage = `url(.${bg})`;
	}, [bg, version])

	let options = {}

	let elements = {}

	let transformPrefix = ''

	useEffect(() => {
		// eslint-disable-next-line
		options = {
			pointerFine: window.matchMedia("(pointer: fine)"),
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			windowResizeTimer: null,
			windowResizeTimeout: 100,
		}

		// eslint-disable-next-line
		elements = {
			overlay: document.querySelector(".js-overlay"),
			site: document.querySelector(".js-site"),
			container: document.querySelector(".js-container"),
			links: document.querySelectorAll(".js-link"),
			animins: document.querySelectorAll(".js-animin"),
			portrait: document.querySelector(".js-portrait"),
			portraitCanvas: document.querySelector(".js-portraitCanvas"),
			cursorSmall: document.querySelector(".js-cursorSmall"),
			cursorBig: document.querySelector(".js-cursorBig"),
			cursorInner: document.querySelector(".js-cursorInner"),
		}

		// eslint-disable-next-line
		transformPrefix = (()=>{
			let e = document.createElement("div")
			if (null == e.style.transform) {
				let t = ["Webkit", "Moz", "ms"]
				for (let n in t){
					if (e.style[t[n] + "Transform"] !== undefined){
						return t[n] + "Transform"
					}
				}
			}
			return "transform"
		})()

		const cursor = function() {
			let t = {
					x: options.windowWidth / 2,
					y: options.windowHeight / 2,
					lazyX: options.windowWidth / 2,
					lazyY: options.windowWidth / 2,
					ease: .2
				},
				e = {
					moveX: 0,
					moveY: 0,
					siteX: 0,
					siteY: 0,
					siteMulti: 20,
					portraitX: 0,
					portraitY: 0,
					portraitMulti: 10
				},
				o = {
					isVisible: false,
					isVisibleTimer: null,
					isVisibleTimeout: 1e3,
					isHovering: false,
					isClicked: false
				}

			function n(e) {
				t.x = e.clientX
				t.y = e.clientY
				o.isVisible = true
				if(o.isVisible){
					null !== o.isVisibleTimer && clearTimeout(o.isVisibleTimer)
				}
				o.isVisibleTimer = setTimeout(function() {
					o.isHovering || (o.isVisible = false)
				}, o.isVisibleTimeout)
			}

			function i(){
				t.lazyX += (t.x - t.lazyX) * t.ease
				t.lazyY += (t.y - t.lazyY) * t.ease
				elements.cursorSmall.style[transformPrefix] = "translate(" + t.x.toFixed(2) + "px, " + t.y.toFixed(2) + "px)"
				elements.cursorBig.style[transformPrefix] = "translate(" + t.lazyX.toFixed(2) + "px, " + t.lazyY.toFixed(2) + "px)"
				if(o.isVisible){
					elements.cursorSmall.style.opacity = "1"
					if(o.isHovering){
						elements.cursorBig.style.opacity = "0"
						if(o.isClicked){
							elements.cursorInner.style[transformPrefix] = "scale(3)"
						}else{
							elements.cursorInner.style[transformPrefix] = "scale(5)"
						}
					}else{
						elements.cursorInner.style[transformPrefix] = "scale(1)"
						elements.cursorBig.style.opacity = "0.25"
					}
				}else{
					elements.cursorSmall.style.opacity = "0"
					elements.cursorBig.style.opacity = "0"
				}
				e.moveX = (t.lazyX - options.windowWidth / 2) / (options.windowWidth / 2)
				e.moveY = (t.lazyY - options.windowHeight / 2) / (options.windowHeight / 2)
				e.siteX = e.moveX * -e.siteMulti
				e.siteY = e.moveY * -e.siteMulti
				e.portraitX = e.moveX * -e.portraitMulti
				e.portraitY = e.moveY * -e.portraitMulti
				elements.site.style[transformPrefix] = "translate(" + e.siteX.toFixed(2) + "px, " + e.siteY.toFixed(2) + "px)"
				elements.portrait.style[transformPrefix] = "translate(" + e.portraitX.toFixed(2) + "px, " + e.portraitY.toFixed(2) + "px)"
				requestAnimationFrame(i)
			}

			return {
				init: () => {
					const mouseMove = (e) => n(e);
					const mouseLeave = (e) => {
						o.isVisible = false
					}
					const mouseDown = (e) => {
						o.isClicked = true
						n(e)
					}
					const mouseUp = (e) => {
						o.isClicked = false
					}
					const mouseEnter = (e) => {
						o.isHovering = true
					}
					const mouseLeaveItem = (e) => {
						o.isHovering = false
					}

					document.addEventListener("mousemove", mouseMove, false)
					document.addEventListener("mouseleave", mouseLeave, false)
					document.addEventListener("mousedown", mouseDown, false)
					document.addEventListener("mouseup", mouseUp, false)
					elements.links.forEach(function(t) {
						t.addEventListener("mouseenter", mouseEnter, false)
						t.addEventListener("mouseleave", mouseLeaveItem, false)
					})
					requestAnimationFrame(i)
				}
			}
		}()

		if(options.pointerFine.matches){
			cursor.init()
		}
	})

	useEffect(()=>{

		const updateWindow = (t = options)=>{
			t.windowWidth = window.innerWidth
			t.windowHeight = window.innerHeight
		}

		const intro = function() {
			let t = {
				overlayDelay: 2e3,
				animDelay: 125,
				animIndex: 0
			}
			return {
				init: function() {
					elements.overlay.style.opacity = 0
					setTimeout(function() {
						elements.animins.forEach(function(e) {
							setTimeout(function() {
								e.style.opacity = "1"
								e.style[transformPrefix] = "translateY(0) skewY(0deg)"
							}, t.animDelay * t.animIndex)
							t.animIndex++
						})
						elements.overlay.style.display = "none"
					}, t.overlayDelay)
				}
			}
		}()

		const canvasProps = {
			ctx: elements.portraitCanvas.getContext("2d"),
			image: null,
			imageData: null,
			imageSrc: elements.portraitCanvas.getAttribute("data-src"),
			imageLoaded: false,
			sliceX: 0,
			sliceY: 0,
			sliceHeight: 0,
			minGlitches: 2,
			maxGlitches: 8,
			delayGlitchMin: 50,
			delayGlitchMax: 100,
			delayRestartMin: 1e3,
			delayRestartMax: 5e3,
		}

		const reDraw = function() {
			elements.portraitCanvas.width = options.windowHeight
			elements.portraitCanvas.height = options.windowHeight
			requestAnimationFrame(function () {
				if(canvasProps.imageLoaded){
					canvasProps.ctx.drawImage(canvasProps.image, 0, 0, elements.portraitCanvas.height, elements.portraitCanvas.height)
				}
			})
		}

		const onResize = () => {
			if(null !== options.windowResizeTimer){
				clearTimeout(options.windowResizeTimer)
			}
			options.windowResizeTimer = setTimeout(function() {
				updateWindow()
				reDraw()
			}, options.windowResizeTimeout)
		}

		const onLoad = () => intro.init()

		window.addEventListener("resize", onResize, false)
		window.addEventListener("load", onLoad, false)

		canvasProps.image = new Image()
		canvasProps.image.src = canvasProps.imageSrc
		const loadImage = () => {
			canvasProps.imageLoaded = true
			reDraw()
		}
		canvasProps.image.addEventListener("load", loadImage)

		return () => {
			window.removeEventListener("resize", onResize);
			window.removeEventListener("load", onLoad)
			canvasProps.image.removeEventListener("load", loadImage)
		}

	// eslint-disable-next-line
	}, [pathname, version])

	return (
	<>
		<div className="overlay js-overlay"></div>
		<div className="site js-site">
			<div className="container js-container">
				<header className="header js-animin">
					<h1 className="header__heading">
						<span className="header__name">
							Nodirbek Sharipov
							<span className="header__title"> - Software engineer</span>
						</span>
						{resume}
					</h1>
					<select value={version} onChange={(e) => setVersion(e.target.value)}>
						{versions.map(v => (
							<option value={v} key={v}>{v}</option>
						))}
					</select>
				</header>
				<div className="bottom">
					<main className="main js-animin">
						<Routes>
							<Route
								path="/"
								element={<HomePage bio={bio} />}
								exact="true"
							/>

							<Route
								path="/contacts"
								element={<ContactsPage contacts={contacts} />}
							/>

							<Route
								path="/projects"
								element={projects}
							/>

							<Route
								path="/skills"
								element={<SkillsPage skills={skills} />}
							/>
						</Routes>
					</main>
					<footer className="footer js-animin">
						<ul className="footer__connect">
							<li>
								<NavLink
									className={({ isActive }) => `link js-link ${isActive ? 'activeLink' : ''}`}
									to="/"
									exact="true"
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => `link js-link ${isActive ? 'activeLink' : ''}`}
									to="/contacts"
								>
									Contacts
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => `link js-link ${isActive ? 'activeLink' : ''}`}
									to="/projects"
								>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => `link js-link ${isActive ? 'activeLink' : ''}`}
									to="/skills"
								>
									Skills
								</NavLink>
							</li>
						</ul>
					</footer>
				</div>
			</div>
		</div>
		<div className="portrait js-portrait">
			<div className="portrait__inner">
				<canvas
					className="portrait__canvas js-portraitCanvas"
					data-src={fg}
				/>
			</div>
		</div>
		<div className="cursor cursor--small js-cursorSmall">
			<div className="cursor__inner js-cursorInner"></div>
		</div>
		<div className="cursor cursor--big js-cursorBig"></div>
	</>
	)
}

export default withRouter(App)
