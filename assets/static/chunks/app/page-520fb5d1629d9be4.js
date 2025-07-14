(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[974], {
		1867: (e, s, t) => {
			"use strict";
			t.r(s), t.d(s, {
				default: () => P
			});
			var a = t(5155),
				i = t(2115),
				n = t(4624),
				l = t(2085),
				r = t(2596),
				o = t(9688);
			let c = (0, l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
					variants: {
						variant: {
							default: "bg-primary text-primary-foreground hover:bg-primary/90",
							destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
							outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
							secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
							ghost: "hover:bg-accent hover:text-accent-foreground",
							link: "text-primary underline-offset-4 hover:underline"
						},
						size: {
							default: "h-10 px-4 py-2",
							sm: "h-9 rounded-md px-3",
							lg: "h-11 rounded-md px-8",
							icon: "h-10 w-10"
						}
					},
					defaultVariants: {
						variant: "default",
						size: "default"
					}
				}),
				d = i.forwardRef((e, s) => {
					let {
						className: t,
						variant: i,
						size: l,
						asChild: d = !1,
						...m
					} = e, h = d ? n.DX : "button";
					return (0, a.jsx)(h, {
						className: function() {
							for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
							return (0, o.QP)((0, r.$)(s))
						}(c({
							variant: i,
							size: l,
							className: t
						})),
						ref: s,
						...m
					})
				});
			d.displayName = "Button";
			var m = t(9099),
				h = t(2894),
				x = t(1788),
				p = t(9621),
				g = t(8136),
				u = t(4516),
				b = t(9074),
				v = t(6767),
				f = t(4869),
				j = t(3786),
				N = t(7949),
				y = t(9037),
				w = t(8883),
				k = t(9420),
				C = t(9881);

			function A(e) {
				return (0, a.jsxs)("svg", {
					...e,
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					children: [(0, a.jsx)("path", {
						d: "M4 14v-4h16v4"
					}), (0, a.jsx)("path", {
						d: "M8 18v-4h8v4"
					}), (0, a.jsx)("path", {
						d: "M12 22v-4h0"
					}), (0, a.jsx)("path", {
						d: "M16 10V6L8 2v4"
					}), (0, a.jsx)("path", {
						d: "M18 10V6L6 2v4"
					})]
				})
			}

			function S(e) {
				return (0, a.jsx)("svg", {
					...e,
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					children: (0, a.jsx)("path", {
						d: "M17.472 14.572c-.298-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.669.149-.198.298-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.13-.13.297-.347.446-.521.15-.173.2-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198-.005-.529-.005-.811.372-.283.372-1.075 1.05-1.075 2.563s1.102 2.963 1.251 3.159c.149.198 2.107 3.221 5.075 4.451.713.3 1.271.48 1.612.629.559.242 1.06.203 1.46-.025.399-.223 1.758-.715 2.006-1.394.248-.679.248-1.259.173-1.394-.074-.149-.272-.224-.57-.373zM12.001 2.001C6.475 2.001 2 6.476 2 12.001c0 1.773.458 3.445 1.25 4.89l-1.25 4.583 4.75-1.25c1.38.75 2.93 1.167 4.5 1.167 5.526 0 10.001-4.475 10.001-10.001C22.001 6.476 17.526 2.001 12.001 2.001z"
					})
				})
			}
			async function M(e) {

				const formData = {
					firstName: document.getElementById('firstName')?.value.trim(),
					lastName: document.getElementById('lastName')?.value.trim(),
					email: document.getElementById('email')?.value.trim(),
					phone: document.getElementById('phone')?.value.trim(),
					subject: document.getElementById('subject')?.value.trim(),
					message: document.getElementById('message')?.value.trim(),
				};

				// 🧠 Structured plain-text message

			const body =
				"You have received a new message via your portfolio website contact form:\n\n" +
				"Name: " + formData.firstName + " " + formData.lastName + "\n" +
				"Email: " + formData.email + "\n" +
				"Phone: " + (formData.phone || 'N/A') + "\n" +
				"Subject: " + formData.subject + "\n\n" +
				"Message:\n" + formData.message + "\n\n" +
				"---\n" +
				"Sent from Portfolio Contact Form\n" +
				"Website: https://muhammadfarhanhchand.github.io";


			const mailto = `mailto:farhan.chnd88@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
			window.location.href = mailto;
			}

			function P() {
				let e = e => {
						let s = document.getElementById(e);
						s && s.scrollIntoView({
							behavior: "smooth",
							block: "start"
						})
					},
					[s, t] = (0, i.useState)(!1),
					[n, l, r] = (0, i.useActionState)(M, null);


				return (0, i.useEffect)(() => {
					let e = () => {
						window.scrollY > 300 ? t(!0) : t(!1)
					};
					return window.addEventListener("scroll", e), () => {
						window.removeEventListener("scroll", e)
					}
				}, []), (0, a.jsxs)("div", {
					className: "min-h-screen bg-[#1a1a2e] text-white font-sans",
					children: [(0, a.jsxs)("header", {
						className: "flex items-center justify-between p-6 max-w-7xl mx-auto",
						children: [(0, a.jsx)("div", {
							className: "text-3xl font-bold text-white",
							children: "Portfolio."
						}), (0, a.jsxs)("nav", {
							className: "hidden md:flex items-center space-x-8",
							children: [(0, a.jsx)("button", {
								onClick: () => e("home"),
								className: "text-white hover:text-[#00e6e6] transition-colors",
								children: "Home"
							}), (0, a.jsx)("button", {
								onClick: () => e("about"),
								className: "text-white hover:text-[#00e6e6] transition-colors",
								children: "About"
							}), (0, a.jsx)("button", {
								onClick: () => e("skills"),
								className: "text-white hover:text-[#00e6e6] transition-colors",
								children: "Skills"
							}), (0, a.jsx)("button", {
								onClick: () => e("projects"),
								className: "text-white hover:text-[#00e6e6] transition-colors",
								children: "Portfolio"
							}), (0, a.jsx)("button", {
								onClick: () => e("contact"),
								className: "text-[#00e6e6] font-semibold",
								children: "Contact"
							})]
						})]
					}), (0, a.jsx)("main", {
						id: "home",
						className: "max-w-7xl mx-auto px-6 py-12",
						children: (0, a.jsxs)("div", {
							className: "grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]",
							children: [(0, a.jsxs)("div", {
								className: "space-y-8",
								children: [(0, a.jsxs)("div", {
									className: "space-y-4",
									children: [(0, a.jsx)("h1", {
										className: "text-3xl font-semibold text-white",
										children: "Hello, It's Me"
									}), (0, a.jsx)("h2", {
										className: "text-6xl lg:text-7xl font-bold text-white leading-tight",
										children: "Muhammad Farhan"
									}), (0, a.jsxs)("h3", {
										className: "text-3xl lg:text-4xl font-semibold text-white leading-tight",
										children: ["And I'm a", " ", (0, a.jsxs)("span", {
											className: "text-[#00e6e6] relative inline-block",
											children: ["Sr. Mobile App Developer", (0, a.jsx)("span", {
												className: "absolute bottom-0 left-0 w-full h-1 bg-[#00e6e6] opacity-50"
											})]
										}), (0, a.jsx)("span", {
											className: "text-[#00e6e6] text-opacity-50",
											children: "|"
										})]
									})]
								}), (0, a.jsx)("p", {
									className: "text-lg text-gray-300 max-w-2xl leading-relaxed",
									children: "Senior Mobile Application Developer with extensive experience across iOS, Android, and Windows Phone platforms. Currently focused on integrating advanced Natural Language Processing (NLP) techniques into iOS apps using Swift’s NaturalLanguage framework—handling tasks such as pattern matching, sentence parsing, and key element extraction. Skilled in building intelligent text processing solutions and developing custom CocoaPods libraries for modular and reusable architecture. Actively expanding domain expertise in AI integration and working with cross-platform technologies like React Native and Flutter to enhance development versatility."
								}), (0, a.jsxs)("div", {
									className: "flex space-x-4 pt-8",
									children: [(0, a.jsx)(d, {
										variant: "outline",
										size: "icon",
										className: "rounded-full border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-white transition-colors w-12 h-12 bg-transparent",
										onClick: () => window.open("https://github.com/muhammadfarhanhchand", "_blank"),
										children: (0, a.jsx)(m.A, {
											className: "h-6 w-6"
										})
									}), (0, a.jsx)(d, {
										variant: "outline",
										size: "icon",
										className: "rounded-full border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-white transition-colors w-12 h-12 bg-transparent",
										onClick: () => window.open("https://www.linkedin.com/in/muhammedfarhan/", "_blank"),
										children: (0, a.jsx)(h.A, {
											className: "h-6 w-6"
										})
									}), (0, a.jsx)(d, {
										variant: "outline",
										size: "icon",
										className: "rounded-full border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-white transition-colors w-12 h-12 bg-transparent",
										onClick: () => window.open("https://stackoverflow.com/users/10266165/chandaboy", "_blank"),
										children: (0, a.jsx)(A, {
											className: "h-6 w-6"
										})
									})]
								}), (0, a.jsx)("div", {
									className: "flex flex-col sm:flex-row gap-4",
									children: (0, a.jsxs)(d, {
										className: "bg-[#00e6e6] text-gray-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-[#00e6e6]/50 transition-all duration-300",
										onClick: () => {
											let e = document.createElement("a");
											e.href = "/Muhammad_Farhan_Resume.pdf", e.download = "Muhammad_Farhan_Resume.pdf", document.body.appendChild(e), e.click(), document.body.removeChild(e)
										},
										children: [(0, a.jsx)(x.A, {
											className: "mr-2 h-5 w-5"
										}), "Download CV"]
									})
								})]
							}), (0, a.jsx)("div", {
								className: "flex justify-center lg:justify-end",
								children: (0, a.jsx)("div", {
									className: "relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] flex items-center justify-center",
									children: (0, a.jsx)("div", {
										className: "relative w-full h-full rounded-full p-[20px]",
										style: {
											background: "linear-gradient(45deg, #00e6e6, #00b3b3)",
											filter: "drop-shadow(0 0 20px rgba(0, 230, 230, 0.7))"
										},
										children: (0, a.jsx)("div", {
											className: "w-full h-full rounded-full overflow-hidden border-4 border-[#1a1a2e]",
											children: (0, a.jsx)("img", {
												src: "./images/my-profile.png",
												alt: "Muhammad Farhan's Profile",
												className: "w-full h-full object-cover rounded-full"
											})
										})
									})
								})
							})]
						})
					}), (0, a.jsxs)("section", {
						id: "about",
						className: "max-w-7xl mx-auto px-6 py-20",
						children: [(0, a.jsxs)("div", {
							className: "text-center mb-16",
							children: [(0, a.jsxs)("h2", {
								className: "text-4xl lg:text-5xl font-bold mb-4",
								children: ["About ", (0, a.jsx)("span", {
									className: "text-[#00e6e6]",
									children: "Me"
								})]
							}), (0, a.jsx)("p", {
								className: "text-lg text-gray-300 max-w-2xl mx-auto",
								children: "Get to know more about who I am, what I do, and what skills I have"
							})]
						}), (0, a.jsxs)("div", {
							className: "grid lg:grid-cols-2 gap-16 items-center",
							children: [(0, a.jsxs)("div", {
								className: "space-y-6",
								children: [(0, a.jsx)("h3", {
									className: "text-2xl font-bold mb-4",
									children: "Get to know me!"
								}), (0, a.jsx)("div", {
									className: "space-y-4 text-gray-300 leading-relaxed",
									children: (0, a.jsx)("p", {
										children: "A highly ambitious and innovative iOS developer with 12+ years of experience in designing, developing, and optimizing high-performance mobile applications. Proficient in Swift, Objective-C, and modern iOS frameworks, with a strong focus on building scalable, user-centric solutions. Experienced in leading development teams, architecting robust applications, and integrating cutting-edge technologies. Passionate about innovation, continuous learning, and delivering exceptional mobile experiences."
									})
								}), (0, a.jsx)(d, {
									className: "bg-[#00e6e6] text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-[#00e6e6]/50 transition-all duration-300",
									onClick: () => e("contact"),
									children: "Contact Me"
								})]
							}), (0, a.jsxs)("div", {
								className: "space-y-6",
								children: [(0, a.jsx)("h3", {
									className: "text-2xl font-bold mb-4",
									children: "Key Achievements"
								}), (0, a.jsx)("div", {
									className: "grid grid-cols-1 gap-4",
									children: [{
										title: "Delivered 100+ Apps",
										description: "Exceeded client expectations by delivering 100+ high-quality apps within specified timelines."
									}, {
										title: "Boosted Customer Satisfaction",
										description: "Increased customer satisfaction by 25% through timely app updates and issue resolutions."
									}, {
										title: "Cut Crash Rates",
										description: "Reduced app crashes by 40% with effective issue analysis and bug fixes."
									}, {
										title: "Developed Restaurant Solutions",
										description: "Led a team to create a solution adopted by 5 top restaurants, enhancing digital presence."
									}].map((e, s) => (0, a.jsxs)("div", {
										className: "p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700",
										children: [(0, a.jsx)("h4", {
											className: "font-bold text-lg text-white mb-1",
											children: e.title
										}), (0, a.jsx)("p", {
											className: "text-sm text-gray-300",
											children: e.description
										})]
									}, s))
								})]
							})]
						})]
					}), (0, a.jsx)("section", {
						id: "skills",
						className: "py-20 bg-[#1a1a2e]",
						children: (0, a.jsxs)("div", {
							className: "max-w-7xl mx-auto px-6",
							children: [(0, a.jsxs)("div", {
								className: "text-center mb-16",
								children: [(0, a.jsxs)("h2", {
									className: "text-4xl lg:text-5xl font-bold mb-4",
									children: ["Technical ", (0, a.jsx)("span", {
										className: "text-[#00e6e6]",
										children: "Skills"
									})]
								}), (0, a.jsx)("p", {
									className: "text-lg text-gray-300 max-w-2xl mx-auto",
									children: "A comprehensive overview of my technical expertise and proficiency levels"
								})]
							}), (0, a.jsxs)("div", {
								className: "space-y-8",
								children: [(0, a.jsxs)("h3", {
									className: "text-2xl font-bold mb-6 flex items-center",
									children: [(0, a.jsx)(p.A, {
										className: "mr-3 h-6 w-6 text-[#00e6e6]"
									}), "My Skills"]
								}), (0, a.jsx)("div", {
									className: "flex flex-wrap gap-3",
									children: ["Android", "BitBucket", "Firebase", "Flutter", "Github", "IOS", "ITunes", "MapKit", "Mobile Apps", "Natural Language Processing", "Objective C", "socket", "Sqlite", "svn", "Swift", "UIKit", "Custom Pods"].map(e => (0, a.jsx)("span", {
										className: "px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-white hover:bg-gray-700 transition-colors cursor-default",
										children: e
									}, e))
								})]
							})]
						})
					}), (0, a.jsxs)("section", {
						id: "competency",
						className: "max-w-7xl mx-auto px-6 py-20",
						children: [(0, a.jsxs)("div", {
							className: "text-center mb-16",
							children: [(0, a.jsxs)("h2", {
								className: "text-4xl lg:text-5xl font-bold mb-4",
								children: ["Professional ", (0, a.jsx)("span", {
									className: "text-[#00e6e6]",
									children: "Competency"
								})]
							}), (0, a.jsx)("p", {
								className: "text-lg text-gray-300 max-w-2xl mx-auto",
								children: "Core professional skills and competencies that drive successful project delivery and team collaboration"
							})]
						}), (0, a.jsxs)("div", {
							className: "grid lg:grid-cols-2 gap-16",
							children: [(0, a.jsxs)("div", {
								className: "space-y-8",
								children: [(0, a.jsx)("h3", {
									className: "text-2xl font-bold mb-8 text-center lg:text-left",
									children: "Core Competencies"
								}), (0, a.jsx)("div", {
									className: "grid gap-6",
									children: [{
										title: "Leadership & Team Management",
										level: 90,
										description: "Leading cross-functional teams and mentoring junior developers",
										icon: "\uD83D\uDC65"
									}, {
										title: "Project Management",
										level: 85,
										description: "Agile methodologies, sprint planning, and delivery management",
										icon: "\uD83D\uDCCB"
									}, {
										title: "Client Communication",
										level: 88,
										description: "Stakeholder management and requirement gathering",
										icon: "\uD83E\uDD1D"
									}, {
										title: "Problem Solving",
										level: 92,
										description: "Analytical thinking and innovative solution development",
										icon: "\uD83E\uDDE9"
									}, {
										title: "Code Review & Quality Assurance",
										level: 90,
										description: "Ensuring code quality and best practices implementation",
										icon: "\uD83D\uDD0D"
									}, {
										title: "Technical Documentation",
										level: 85,
										description: "Creating comprehensive technical documentation and guides",
										icon: "\uD83D\uDCDA"
									}].map(e => (0, a.jsx)("div", {
										className: "bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300",
										children: (0, a.jsxs)("div", {
											className: "flex items-start space-x-4",
											children: [(0, a.jsx)("div", {
												className: "text-3xl",
												children: e.icon
											}), (0, a.jsxs)("div", {
												className: "flex-1",
												children: [(0, a.jsxs)("div", {
													className: "flex justify-between items-center mb-2",
													children: [(0, a.jsx)("h4", {
														className: "font-bold text-lg",
														children: e.title
													}), (0, a.jsxs)("span", {
														className: "text-sm font-medium text-[#00e6e6]",
														children: [e.level, "%"]
													})]
												}), (0, a.jsx)("p", {
													className: "text-gray-300 text-sm mb-3",
													children: e.description
												}), (0, a.jsx)("div", {
													className: "w-full bg-gray-700 rounded-full h-2",
													children: (0, a.jsx)("div", {
														className: "bg-[#00e6e6] h-2 rounded-full transition-all duration-1000 ease-out",
														style: {
															width: "".concat(e.level, "%")
														}
													})
												})]
											})]
										})
									}, e.title))
								})]
							}), (0, a.jsxs)("div", {
								className: "space-y-8",
								children: [(0, a.jsx)("h3", {
									className: "text-2xl font-bold mb-8 text-center lg:text-left",
									children: "Professional Skills"
								}), (0, a.jsx)("div", {
									className: "grid grid-cols-2 gap-8",
									children: [{
										name: "Strategic Thinking",
										level: 85,
										color: "text-blue-500"
									}, {
										name: "Innovation",
										level: 90,
										color: "text-purple-500"
									}, {
										name: "Mentoring",
										level: 88,
										color: "text-green-500"
									}, {
										name: "Business Acumen",
										level: 80,
										color: "text-orange-500"
									}].map(e => (0, a.jsxs)("div", {
										className: "text-center",
										children: [(0, a.jsxs)("div", {
											className: "relative w-24 h-24 mx-auto mb-4",
											children: [(0, a.jsxs)("svg", {
												className: "w-24 h-24 transform -rotate-90",
												viewBox: "0 0 100 100",
												children: [(0, a.jsx)("circle", {
													cx: "50",
													cy: "50",
													r: "40",
													stroke: "currentColor",
													strokeWidth: "8",
													fill: "transparent",
													className: "text-gray-700"
												}), (0, a.jsx)("circle", {
													cx: "50",
													cy: "50",
													r: "40",
													stroke: "currentColor",
													strokeWidth: "8",
													fill: "transparent",
													strokeDasharray: "".concat(2 * Math.PI * 40),
													strokeDashoffset: "".concat(2 * Math.PI * 40 * (1 - e.level / 100)),
													className: e.color,
													strokeLinecap: "round"
												})]
											}), (0, a.jsx)("div", {
												className: "absolute inset-0 flex items-center justify-center",
												children: (0, a.jsxs)("span", {
													className: "text-xl font-bold ".concat(e.color),
													children: [e.level, "%"]
												})
											})]
										}), (0, a.jsx)("h4", {
											className: "font-medium text-sm",
											children: e.name
										})]
									}, e.name))
								}), (0, a.jsxs)("div", {
									className: "mt-12",
									children: [(0, a.jsx)("h4", {
										className: "text-xl font-bold mb-6",
										children: "Methodologies & Practices"
									}), (0, a.jsx)("div", {
										className: "space-y-4",
										children: [{
											category: "Development Methodologies",
											items: ["Agile/Scrum", "Kanban", "DevOps", "CI/CD", "Test-Driven Development"]
										}, {
											category: "Management Practices",
											items: ["Sprint Planning", "Code Reviews", "Risk Assessment", "Quality Assurance", "Performance Optimization"]
										}, {
											category: "Communication Skills",
											items: ["Technical Presentations", "Client Meetings", "Team Standups", "Documentation", "Cross-team Collaboration"]
										}].map(e => (0, a.jsxs)("div", {
											className: "space-y-2",
											children: [(0, a.jsx)("h5", {
												className: "font-semibold text-[#00e6e6] mb-2",
												children: e.category
											}), (0, a.jsx)("div", {
												className: "flex flex-wrap gap-2",
												children: e.items.map(e => (0, a.jsx)("span", {
													className: "px-3 py-1 bg-gray-800 text-sm rounded-full border border-gray-700 hover:shadow-md transition-all duration-200",
													children: e
												}, e))
											})]
										}, e.category))
									})]
								}), (0, a.jsxs)("div", {
									className: "mt-12",
									children: [(0, a.jsx)("h4", {
										className: "text-xl font-bold mb-6",
										children: "Key Achievements"
									}), (0, a.jsx)("div", {
										className: "space-y-4",
										children: [{
											achievement: "Natural Language Processing Integration",
											description: "Integrated advanced NLP using Apple’s NaturalLanguage framework for pattern recognition, sentence parsing, and key element extraction in iOS apps",
											icon: "\uD83C\uDFC6"
										}, {
											achievement: "Successful App Store & Play Store Launches",
											description: "Launched multiple apps with 100K+ downloads, maintaining high performance and positive user feedback.",
											icon: "\uD83D\uDCF1"
										}, {
											achievement: "Custom CocoaPods Development",
											description: "Designed and published reusable custom CocoaPods libraries to streamline development across iOS projects.",
											icon: "⚡"
										}, {
											achievement: "Cross-Platform Development with React Native & Flutter",
											description: "Worked on hybrid apps to reduce development time and maintain code consistency across platforms.",
											icon: "⚡"
										}, {
											achievement: "Technical Leadership & Mentorship",
											description: "Mentored junior developers and led mobile teams, promoting clean architecture, performance optimization, and UI/UX standards.",
											icon: "\uD83C\uDF93"
										}].map(e => (0, a.jsxs)("div", {
											className: "flex items-start space-x-3 p-4 bg-gray-800 rounded-lg",
											children: [(0, a.jsx)("div", {
												className: "text-2xl",
												children: e.icon
											}), (0, a.jsxs)("div", {
												children: [(0, a.jsx)("h5", {
													className: "font-semibold text-white text-sm",
													children: e.achievement
												}), (0, a.jsx)("p", {
													className: "text-sm text-gray-300",
													children: e.description
												})]
											})]
										}, e.achievement))
									})]
								})]
							})]
						}), (0, a.jsxs)("div", {
							className: "mt-16",
							children: [(0, a.jsx)("h3", {
								className: "text-2xl font-bold mb-8 text-center",
								children: "Professional Values"
							}), (0, a.jsx)("div", {
								className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
								children: [{
									title: "Excellence",
									description: "Committed to delivering high-quality solutions that exceed expectations",
									icon: "⭐",
									color: "from-yellow-400 to-orange-500"
								}, {
									title: "Innovation",
									description: "Constantly exploring new technologies and creative problem-solving approaches",
									icon: "\uD83D\uDCA1",
									color: "from-blue-400 to-purple-500"
								}, {
									title: "Collaboration",
									description: "Fostering teamwork and knowledge sharing for collective success",
									icon: "\uD83E\uDD1D",
									color: "from-green-400 to-blue-500"
								}, {
									title: "Growth",
									description: "Continuous learning and helping others develop their potential",
									icon: "\uD83C\uDF31",
									color: "from-purple-400 to-pink-500"
								}].map(e => (0, a.jsxs)("div", {
									className: "text-center p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300",
									children: [(0, a.jsx)("div", {
										className: "w-16 h-16 bg-gradient-to-r ".concat(e.color, " rounded-full flex items-center justify-center mx-auto mb-4"),
										children: (0, a.jsx)("span", {
											className: "text-2xl",
											children: e.icon
										})
									}), (0, a.jsx)("h4", {
										className: "font-bold text-lg mb-2",
										children: e.title
									}), (0, a.jsx)("p", {
										className: "text-gray-300 text-sm",
										children: e.description
									})]
								}, e.title))
							})]
						})]
					}), (0, a.jsx)("section", {
						id: "experience",
						className: "py-20 bg-[#1a1a2e]",
						children: (0, a.jsxs)("div", {
							className: "max-w-7xl mx-auto px-6",
							children: [(0, a.jsxs)("div", {
								className: "text-center mb-16",
								children: [(0, a.jsxs)("h2", {
									className: "text-4xl lg:text-5xl font-bold mb-4",
									children: ["Work ", (0, a.jsx)("span", {
										className: "text-[#00e6e6]",
										children: "Experience"
									})]
								}), (0, a.jsx)("p", {
									className: "text-lg text-gray-300 max-w-2xl mx-auto",
									children: "My professional journey and key contributions in mobile application development"
								})]
							}), (0, a.jsxs)("div", {
								className: "relative",
								children: [(0, a.jsx)("div", {
									className: "absolute left-8 top-0 bottom-0 w-0.5 bg-[#00e6e6]"
								}), (0, a.jsx)("div", {
									className: "space-y-12",
									children: [{
										title: "Senior Mobile Application Developer",
										company: "Golootlo",
										location: "Karachi, Pakistan",
										period: "10/2022 - Present",
										description: "Designed and developed a custom framework enabling clients to integrate the Golootlo SDK seamlessly into their applications, improving integration efficiency and client onboarding. Implemented Natural Language Processing (NLP) for advanced voice search and voice-based ordering, enhancing user engagement and accessibility. Optimized the app's codebase, reducing crash rates by 60% and improving overall performance and stability. Managed and maintained existing mobile applications, ensuring timely updates and high-quality user experiences.",
										technologies: ["Swift", "Objective-C", "NLP", "SDK Integration"]
									}, {
										title: "Senior Mobile Application Developer",
										company: "Aion Digital",
										location: "Remote",
										period: "10/2020 - 10/2022",
										description: "Remote company providing digital solutions. Creating and supporting mobile applications for Kuwait Finance House. Managing and supporting existing mobile apps.",
										technologies: ["iOS", "Android", "Mobile App Support"]
									}, {
										title: "Team Lead - Mobile Apps",
										company: "Digitonics",
										location: "Karachi, Pakistan",
										period: "01/2017 - 10/2020",
										description: "Company specializing in mobile applications for restaurants. Met regularly with clients to discuss project specifications, milestones and provide updates on progress. Designed, developed and tested embedded software applications for use in the Food Delivery industry. Provided dedicated support and timely issue resolution to clients following successful app launch.",
										technologies: ["Mobile Apps", "Embedded Software", "Client Management"]
									}, {
										title: "Team Lead - Mobile Apps",
										company: "Cooperative Computing",
										location: "Karachi, Pakistan",
										period: "11/2013 - 01/2017",
										description: "Technology solutions firm focusing on social media applications. Managed team tasks effectively, ensuring timely delivery of projects while exploring and implementing new technologies to meet client requirements. Developed an automatic attendance application, streamlining attendance tracking and improving operational efficiency. Contributed to the development of a hospital and patient management application, enhancing healthcare service delivery and administrative processes.",
										technologies: ["Social Media Apps", "Attendance Systems", "Healthcare Apps"]
									}, {
										title: "Senior Mobile Application Developer",
										company: "Ephlux Private Limited",
										location: "Karachi, Pakistan",
										period: "04/2012 - 10/2013",
										description: "A firm specializing in iOS application development. Involved in all aspects of the iOS app lifecycle from research and planning through deployment and post-launch support. Tested applications prior to final review to ensure that all issues were resolved in the most efficient manner. Provided dedicated support and timely issue resolution to clients following successful app launch. Devised all documentation for each app, detailing all aspects, functions, capabilities, and features. Created custom mobile applications using native technologies as per client specifications.",
										technologies: ["iOS Development", "App Lifecycle", "Documentation"]
									}, {
										title: "Mobile App Developer",
										company: "Cubix Labs",
										location: "Karachi, Pakistan",
										period: "07/2010 - 11/2011",
										description: "Mobile app development company. Created custom mobile applications using native technologies as per client specifications. Brought multiple apps to market, including managing the submission process.",
										technologies: ["Mobile App Development", "App Store Submission"]
									}].map((e, s) => (0, a.jsxs)("div", {
										className: "relative flex items-start",
										children: [(0, a.jsx)("div", {
											className: "absolute left-6 w-4 h-4 bg-[#00e6e6] rounded-full border-4 border-[#1a1a2e]"
										}), (0, a.jsxs)("div", {
											className: "ml-16 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300",
											children: [(0, a.jsxs)("div", {
												className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4",
												children: [(0, a.jsxs)("div", {
													children: [(0, a.jsx)("h3", {
														className: "text-xl font-bold text-white mb-1",
														children: e.title
													}), (0, a.jsxs)("div", {
														className: "flex items-center space-x-4 text-gray-300",
														children: [(0, a.jsxs)("div", {
															className: "flex items-center",
															children: [(0, a.jsx)(g.A, {
																className: "h-4 w-4 mr-1"
															}), (0, a.jsx)("span", {
																className: "font-medium",
																children: e.company
															})]
														}), (0, a.jsxs)("div", {
															className: "flex items-center",
															children: [(0, a.jsx)(u.A, {
																className: "h-4 w-4 mr-1"
															}), (0, a.jsx)("span", {
																children: e.location
															})]
														})]
													})]
												}), (0, a.jsx)("div", {
													className: "mt-2 lg:mt-0 flex flex-col lg:items-end",
													children: (0, a.jsxs)("div", {
														className: "flex items-center text-[#00e6e6] font-medium",
														children: [(0, a.jsx)(b.A, {
															className: "h-4 w-4 mr-1"
														}), (0, a.jsx)("span", {
															children: e.period
														})]
													})
												})]
											}), (0, a.jsx)("p", {
												className: "text-gray-300 mb-4 leading-relaxed",
												children: e.description
											}), (0, a.jsxs)("div", {
												children: [(0, a.jsx)("h4", {
													className: "font-semibold text-white mb-2",
													children: "Technologies Used:"
												}), (0, a.jsx)("div", {
													className: "flex flex-wrap gap-2",
													children: e.technologies.map(e => (0, a.jsx)("span", {
														className: "px-3 py-1 bg-gray-700 text-sm rounded-full border border-gray-600",
														children: e
													}, e))
												})]
											})]
										})]
									}, s))
								})]
							})]
						})
					}), (0, a.jsxs)("section", {
						id: "projects",
						className: "max-w-7xl mx-auto px-6 py-20",
						children: [(0, a.jsxs)("div", {
							className: "text-center mb-16",
							children: [(0, a.jsxs)("h2", {
								className: "text-4xl lg:text-5xl font-bold mb-4",
								children: ["Featured ", (0, a.jsx)("span", {
									className: "text-[#00e6e6]",
									children: "Projects"
								})]
							}), (0, a.jsx)("p", {
								className: "text-lg text-gray-300 max-w-2xl mx-auto",
								children: "A showcase of my most impactful mobile applications and development projects"
							})]
						}), (0, a.jsx)("div", {
							className: "grid lg:grid-cols-2 gap-8",
							children: [{
								title: "Golootlo",
								category: "Mobile Application Development",
								description: "Designed and developed a custom framework enabling clients to integrate the Golootlo SDK seamlessly into their applications, improving integration efficiency and client onboarding. Implemented Natural Language Processing (NLP) for advanced voice search and voice-based ordering, enhancing user engagement and accessibility. Optimized the app's codebase, reducing crash rates by 60% and improving overall performance and stability. Managed and maintained existing mobile applications, ensuring timely updates and high-quality user experiences.",
								// image: "/placeholder.svg?height=300&width=400",
								image:"./images/golootlo.webp",
								technologies: ["SDK Integration", "NLP", "Voice Search", "Performance Optimization", "Mobile App Maintenance"],
								features: ["Seamless SDK integration framework", "Advanced voice search and ordering", "60% crash rate reduction", "Timely app updates and maintenance"],
								links: {
									linkedin: "https://apps.apple.com/us/app/golootlo/id1422671852?ls=1"
								},
								status: "Live",
								downloads: "1M+"
							}, {
								title: "KFH Jazeel Banking",
								category: "Mobile Banking Application",
								description: "Developed and maintained the KFH Jazeel Banking mobile application, focusing on secure transactions, user experience, and integration with core banking systems. Implemented features for account management, fund transfers, bill payments, and biometric authentication. Ensured compliance with banking security standards and regulatory requirements.",
								image:"./images/kfh_online.webp",
								technologies: ["iOS", "Android", "Swift", "Kotlin", "Security", "API Integration", "Biometric Authentication"],
								features: ["Secure transaction processing", "Account management", "Fund transfers", "Bill payments", "Biometric authentication", "Regulatory compliance"],
								links: {
									linkedin: "https://apps.apple.com/pk/app/kfh-jazeel-banking/id1369601727"
								},
								status: "Live",
								downloads: "500K+"
							}, {
								title: "KFH Cooperate",
								category: "Corporate Banking Solution",
								description: "Led the development of KFH Cooperate, a comprehensive mobile application for corporate banking clients. Focused on delivering robust features for corporate finance, trade finance, and treasury management. Collaborated with business analysts to translate complex requirements into intuitive mobile interfaces and ensured seamless integration with enterprise systems.",
								image: "./images/kfh_cooperate.webp",
								technologies: ["iOS", "Android", "Enterprise Mobility", "Corporate Finance", "Trade Finance", "Treasury Management", "System Integration"],
								features: ["Corporate finance features", "Trade finance capabilities", "Treasury management tools", "Intuitive corporate interfaces", "Seamless enterprise system integration"],
								links: {
									linkedin: "https://apps.apple.com/pk/app/kfhb-online/id1440573687"
								},
								status: "Live",
								downloads: "5K+"
							}].map((e, s) => (0, a.jsxs)("div", {
								className: "bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105",
								children: [(0, a.jsxs)("div", {
									className: "relative h-48 bg-gray-700",
									children: [(0, a.jsx)("img", {
										src: e.image || "/placeholder.svg",
										alt: e.title,
										className: "w-full h-full object-cover"
									}), (0, a.jsx)("div", {
										className: "absolute top-4 left-4",
										children: (0, a.jsx)("span", {
											className: "px-3 py-1 bg-gray-900 text-sm font-medium rounded-full",
											children: e.category
										})
									}), (0, a.jsx)("div", {
										className: "absolute top-4 right-4",
										children: (0, a.jsx)("span", {
											className: "px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full",
											children: e.status
										})
									})]
								}), (0, a.jsxs)("div", {
									className: "p-6",
									children: [(0, a.jsxs)("div", {
										className: "flex items-center justify-between mb-3",
										children: [(0, a.jsx)("h3", {
											className: "text-xl font-bold text-white",
											children: e.title
										}), (0, a.jsx)("span", {
											className: "text-sm text-[#00e6e6] font-medium",
											children: e.downloads
										})]
									}), (0, a.jsx)("p", {
										className: "text-gray-300 text-sm mb-4 leading-relaxed",
										children: e.description
									}), (0, a.jsxs)("div", {
										className: "mb-4",
										children: [(0, a.jsx)("h4", {
											className: "font-semibold text-white mb-2 text-sm",
											children: "Technologies:"
										}), (0, a.jsx)("div", {
											className: "flex flex-wrap gap-1",
											children: e.technologies.map(e => (0, a.jsx)("span", {
												className: "px-2 py-1 bg-gray-700 text-xs rounded-md",
												children: e
											}, e))
										})]
									}), (0, a.jsxs)("div", {
										className: "mb-4",
										children: [(0, a.jsx)("h4", {
											className: "font-semibold text-white mb-2 text-sm",
											children: "Key Features:"
										}), (0, a.jsx)("ul", {
											className: "space-y-1",
											children: e.features.slice(0, 3).map((e, s) => (0, a.jsxs)("li", {
												className: "flex items-start text-gray-300",
												children: [(0, a.jsx)("span", {
													className: "text-[#00e6e6] mr-2 mt-0.5",
													children: "•"
												}), (0, a.jsx)("span", {
													className: "text-xs",
													children: e
												})]
											}, s))
										})]
									}), (0, a.jsxs)("div", {
										className: "flex items-center space-x-3 pt-4 border-t border-gray-700",
										children: [e.links.github && (0, a.jsx)(d, {
											variant: "ghost",
											size: "sm",
											className: "p-2 text-gray-300 hover:text-[#00e6e6]",
											children: (0, a.jsx)(m.A, {
												className: "h-4 w-4"
											})
										}), e.links.appstore && (0, a.jsx)(d, {
											variant: "ghost",
											size: "sm",
											className: "p-2 text-gray-300 hover:text-[#00e6e6]",
											children: (0, a.jsx)(v.A, {
												className: "h-4 w-4"
											})
										}), e.links.playstore && (0, a.jsx)(d, {
											variant: "ghost",
											size: "sm",
											className: "p-2 text-gray-300 hover:text-[#00e6e6]",
											children: (0, a.jsx)(f.A, {
												className: "h-4 w-4"
											})
										}), e.links.demo && (0, a.jsx)(d, {
											variant: "ghost",
											size: "sm",
											className: "p-2 text-gray-300 hover:text-[#00e6e6]",
											children: (0, a.jsx)(j.A, {
												className: "h-4 w-4"
											})
										}), e.links.linkedin && (0, a.jsx)(d, {
											variant: "outline",
											size: "sm",
											className: "ml-auto text-xs border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 bg-transparent",
											onClick: () => window.open(e.links.linkedin, "_blank"),
											children: "View Details"
										})]
									})]
								})]
							}, s))
						}), (0, a.jsx)("div", {
							className: "text-center mt-12",
							children: (0, a.jsx)(d, {
								className: "bg-[#00e6e6] text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-[#00e6e6]/50 transition-all duration-300",
								onClick: () => window.open("https://www.linkedin.com/in/muhammedfarhan/details/projects/", "_blank"),
								children: "View All Projects"
							})
						})]
					}), (0, a.jsx)("section", {
						id: "education",
						className: "py-20 bg-[#1a1a2e]",
						children: (0, a.jsxs)("div", {
							className: "max-w-7xl mx-auto px-6",
							children: [(0, a.jsxs)("div", {
								className: "text-center mb-16",
								children: [(0, a.jsxs)("h2", {
									className: "text-4xl lg:text-5xl font-bold mb-4",
									children: ["Education & ", (0, a.jsx)("span", {
										className: "text-[#00e6e6]",
										children: "Qualifications"
									})]
								}), (0, a.jsx)("p", {
									className: "text-lg text-gray-300 max-w-2xl mx-auto",
									children: "My academic background and continuous learning journey in technology and software development"
								})]
							}), (0, a.jsxs)("div", {
								className: "grid lg:grid-cols-2 gap-12",
								children: [(0, a.jsxs)("div", {
									children: [(0, a.jsxs)("h3", {
										className: "text-2xl font-bold mb-8 flex items-center",
										children: [(0, a.jsx)(N.A, {
											className: "mr-3 h-6 w-6 text-[#00e6e6]"
										}), "Formal Education"]
									}), (0, a.jsx)("div", {
										className: "space-y-6",
										children: [{
											degree: "Bachelor Of Computer Science (BSCS)",
											school: "University Of Karachi",
											location: "Karachi, Sindh",
											period: "01/2006 - 12/2010",
											description: "",
											coursework: [],
											achievements: []
										}, {
											degree: "HSSC Pre-Engineering",
											school: "St. Patrick College",
											location: "Karachi, Sindh",
											period: "01/2004 - 12/2006",
											description: "",
											coursework: [],
											achievements: []
										}, {
											degree: "SSC Medical Science",
											school: "Nasra School",
											location: "Karachi, Sindh",
											period: "01/2002 - 12/2004",
											description: "",
											coursework: [],
											achievements: []
										}].map((e, s) => (0, a.jsxs)("div", {
											className: "bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700",
											children: [(0, a.jsxs)("div", {
												className: "flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4",
												children: [(0, a.jsxs)("div", {
													className: "flex-1",
													children: [(0, a.jsx)("h4", {
														className: "text-lg font-bold text-white mb-1",
														children: e.degree
													}), (0, a.jsxs)("div", {
														className: "flex items-center space-x-4 text-gray-300 mb-2",
														children: [(0, a.jsxs)("div", {
															className: "flex items-center",
															children: [(0, a.jsx)(g.A, {
																className: "h-4 w-4 mr-1"
															}), (0, a.jsx)("span", {
																className: "font-medium",
																children: e.school
															})]
														}), (0, a.jsxs)("div", {
															className: "flex items-center",
															children: [(0, a.jsx)(u.A, {
																className: "h-4 w-4 mr-1"
															}), (0, a.jsx)("span", {
																children: e.location
															})]
														})]
													})]
												}), (0, a.jsx)("div", {
													className: "mt-2 lg:mt-0 flex flex-col lg:items-end",
													children: (0, a.jsxs)("div", {
														className: "flex items-center text-gray-300",
														children: [(0, a.jsx)(b.A, {
															className: "h-4 w-4 mr-1"
														}), (0, a.jsx)("span", {
															children: e.period
														})]
													})
												})]
											}), e.description && (0, a.jsx)("p", {
												className: "text-gray-300 text-sm mb-4 leading-relaxed",
												children: e.description
											}), (e.coursework.length > 0 || e.achievements.length > 0) && (0, a.jsxs)("div", {
												className: "grid md:grid-cols-2 gap-4",
												children: [e.coursework.length > 0 && (0, a.jsxs)("div", {
													children: [(0, a.jsx)("h5", {
														className: "font-semibold text-white mb-2 text-sm",
														children: "Relevant Coursework:"
													}), (0, a.jsx)("ul", {
														className: "space-y-1",
														children: e.coursework.map((e, s) => (0, a.jsxs)("li", {
															className: "text-xs text-gray-300",
															children: ["• ", e]
														}, s))
													})]
												}), e.achievements.length > 0 && (0, a.jsxs)("div", {
													children: [(0, a.jsx)("h5", {
														className: "font-semibold text-white mb-2 text-sm",
														children: "Achievements:"
													}), (0, a.jsx)("ul", {
														className: "space-y-1",
														children: e.achievements.map((e, s) => (0, a.jsxs)("li", {
															className: "text-xs text-gray-300",
															children: ["• ", e]
														}, s))
													})]
												})]
											})]
										}, s))
									})]
								}), (0, a.jsxs)("div", {
									children: [(0, a.jsxs)("h3", {
										className: "text-2xl font-bold mb-8 flex items-center",
										children: [(0, a.jsx)(y.A, {
											className: "mr-3 h-6 w-6 text-[#00e6e6]"
										}), "Continuous Learning"]
									}), (0, a.jsx)("div", {
										className: "space-y-6",
										children: (0, a.jsxs)("div", {
											className: "bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700",
											children: [(0, a.jsx)("h4", {
												className: "text-lg font-bold text-white mb-4",
												children: "Online Learning"
											}), (0, a.jsx)("div", {
												className: "space-y-4",
												children: [{
													category: "Mobile Development",
													courses: ["Advanced iOS Development with SwiftUI", "Android Development with Kotlin", "React Native: The Complete Guide", "Flutter & Dart Development", "Software Architecture Design"],
													platform: "Self-Paced Learning through YouTube tutorials.",
													practicalImplementation: "Currently exploring concepts and actively working towards practical implementation"
												}, {
													category: "AI & Machine Learning",
													courses: ["Machine Learning for Mobile Applications", "Natural Language Processing with Swift", "Core ML and Vision Framework", "Integrating Siri Actions in iOS Apps"],
													platform: "Self-Paced Learning through YouTube tutorials",
													practicalImplementation: "Successfully implemented a dedicated AI-based voice input module in the Golootlo mobile app. The system converts user voice commands to text, processes them using Natural Language Processing (NLP) techniques, and intelligently extracts actionable items. Based on the extracted intent, users are redirected to the relevant section or offer within the app—enabling a seamless voice-driven experience."
												}].map((e, s) => (0, a.jsxs)("div", {
													className: "border-l-4 border-[#00e6e6] pl-4",
													children: [(0, a.jsx)("h5", {
														className: "font-semibold text-[#00e6e6] mb-2",
														children: e.category
													}), (0, a.jsx)("div", {
														className: "space-y-1",
														children: e.courses.map((e, s) => (0, a.jsxs)("p", {
															className: "text-sm text-gray-300",
															children: ["• ", e]
														}, s))
													}), (0, a.jsxs)("p", {
														className: "text-xs text-gray-400 mt-2",
														children: ["Platform: ", e.platform]
													}), e.practicalImplementation && (0, a.jsxs)("div", {
														className: "mt-2",
														children: [(0, a.jsx)("h6", {
															className: "font-semibold text-white text-sm mb-1",
															children: "Practical Implementation:"
														}), (0, a.jsx)("p", {
															className: "text-xs text-gray-300",
															children: e.practicalImplementation
														})]
													})]
												}, s))
											})]
										})
									})]
								})]
							}), (0, a.jsxs)("div", {
								className: "mt-16",
								children: [(0, a.jsx)("h3", {
									className: "text-2xl font-bold mb-8 text-center",
									children: "Learning & Development Timeline"
								}), (0, a.jsxs)("div", {
									className: "relative",
									children: [(0, a.jsx)("div", {
										className: "absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#00e6e6]"
									}), (0, a.jsx)("div", {
										className: "space-y-8",
										children: [{
											year: "2010",
											title: "Objective-C Development",
											description: "I have expanded my skills in Objective-C to deepen my expertise in iOS development.",
											side: "left"
										}, {
											year: "2015",
											title: "Swift Development",
											description: "Alongside Objective-C, I have expanded my expertise in Swift to build modern and efficient iOS applications.",
											side: "right"
										}, {
											year: "2016",
											title: "Leadership & Management",
											description: "I have grown my skills over time, taking on greater responsibilities and advancing into a Team Lead position.",
											side: "left"
										}, {
											year: "2025",
											title: "Expanding Technical Expertise in AI and Cross-Platform Development",
											description: "I am continuously expanding my skill set and domain expertise, particularly in AI integration using Natural Language Processing (NLP). Additionally, I am also working with other technologies such as React Native and Flutter to broaden my development capabilities.",
											side: "right"
										}].map((e, s) => (0, a.jsxs)("div", {
											className: "relative flex items-center",
											children: [(0, a.jsx)("div", {
												className: "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00e6e6] rounded-full border-4 border-[#1a1a2e]"
											}), (0, a.jsx)("div", {
												className: "w-1/2 ".concat("left" === e.side ? "pr-8 text-right" : "pl-8 ml-auto"),
												children: (0, a.jsxs)("div", {
													className: "bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700",
													children: [(0, a.jsx)("div", {
														className: "text-[#00e6e6] font-bold text-sm mb-1",
														children: e.year
													}), (0, a.jsx)("h4", {
														className: "font-semibold text-white mb-2",
														children: e.title
													}), (0, a.jsx)("p", {
														className: "text-sm text-gray-300",
														children: e.description
													})]
												})
											})]
										}, s))
									})]
								})]
							})]
						})
					}), (0, a.jsxs)("section", {
						id: "contact",
						className: "max-w-7xl mx-auto px-6 py-20",
						children: [(0, a.jsxs)("div", {
							className: "text-center mb-16",
							children: [(0, a.jsxs)("h2", {
								className: "text-4xl lg:text-5xl font-bold mb-4",
								children: ["Get In ", (0, a.jsx)("span", {
									className: "text-[#00e6e6]",
									children: "Touch"
								})]
							}), (0, a.jsx)("p", {
								className: "text-lg text-gray-300 max-w-2xl mx-auto",
								children: "Ready to start your next mobile project? Let's discuss how I can help bring your ideas to life."
							})]
						}), (0, a.jsxs)("div", {
							className: "grid lg:grid-cols-2 gap-12",
							children: [(0, a.jsxs)("div", {
								className: "space-y-8",
								children: [(0, a.jsxs)("div", {
									children: [(0, a.jsx)("h3", {
										className: "text-2xl font-bold mb-6",
										children: "Let's Connect"
									}), (0, a.jsx)("p", {
										className: "text-gray-300 mb-8 leading-relaxed",
										children: "I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you need a mobile app developed, want to discuss AI integration, or are looking for technical leadership, I'd love to hear from you."
									})]
								}), (0, a.jsxs)("div", {
									className: "space-y-6",
									children: [(0, a.jsxs)("div", {
										className: "flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300",
										children: [(0, a.jsx)("div", {
											className: "w-12 h-12 bg-[#00e6e6] rounded-full flex items-center justify-center",
											children: (0, a.jsx)(w.A, {
												className: "h-6 w-6 text-gray-900"
											})
										}), (0, a.jsxs)("div", {
											className: "flex-1",
											children: [(0, a.jsx)("h4", {
												className: "font-semibold text-white",
												children: "Email"
											}), (0, a.jsx)("a", {
												href: "mailto:farhan.chnd88@gmail.com",
												className: "text-[#00e6e6] hover:text-[#00b3b3] transition-colors",
												children: "farhan.chnd88@gmail.com"
											})]
										}), (0, a.jsx)(d, {
											variant: "outline",
											size: "sm",
											onClick: () => window.open("mailto:farhan.chnd88@gmail.com"),
											className: "border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 bg-transparent",
											children: "Send Email"
										})]
									}), (0, a.jsxs)("div", {
										className: "flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300",
										children: [(0, a.jsxs)("div", {
											className: "w-12 h-12 bg-[#00e6e6] rounded-full flex items-center justify-center",
											children: [(0, a.jsx)(k.A, {
												className: "h-6 w-6 text-gray-900"
											}), " "]
										}), (0, a.jsxs)("div", {
											className: "flex-1",
											children: [(0, a.jsx)("h4", {
												className: "font-semibold text-white",
												children: "Phone"
											}), (0, a.jsx)("a", {
												href: "tel:+923333065190",
												className: "text-[#00e6e6] hover:text-[#00b3b3] transition-colors",
												children: "+92 333 306 5190"
											})]
										}), (0, a.jsx)(d, {
											variant: "outline",
											size: "sm",
											onClick: () => window.open("tel:+923333065190"),
											className: "border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 bg-transparent",
											children: "Call Now"
										})]
									}), (0, a.jsxs)("div", {
										className: "flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300",
										children: [(0, a.jsxs)("div", {
											className: "w-12 h-12 bg-[#00e6e6] rounded-full flex items-center justify-center",
											children: [(0, a.jsx)(k.A, {
												className: "h-6 w-6 text-gray-900"
											}), " "]
										}), (0, a.jsxs)("div", {
											className: "flex-1",
											children: [(0, a.jsx)("h4", {
												className: "font-semibold text-white",
												children: "Alternate Phone"
											}), (0, a.jsx)("a", {
												href: "tel:+923332290604",
												className: "text-[#00e6e6] hover:text-[#00b3b3] transition-colors",
												children: "+92 333 229 0604"
											})]
										}), (0, a.jsx)(d, {
											variant: "outline",
											size: "sm",
											onClick: () => window.open("tel:+923332290604"),
											className: "border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 bg-transparent",
											children: "Call Now"
										})]
									}), (0, a.jsxs)("div", {
										className: "flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700",
										children: [(0, a.jsx)("div", {
											className: "w-12 h-12 bg-[#00e6e6] rounded-full flex items-center justify-center",
											children: (0, a.jsx)(u.A, {
												className: "h-6 w-6 text-gray-900"
											})
										}), (0, a.jsxs)("div", {
											className: "flex-1",
											children: [(0, a.jsx)("h4", {
												className: "font-semibold text-white",
												children: "Location"
											}), (0, a.jsx)("p", {
												className: "text-gray-300",
												children: "Pakistan"
											})]
										})]
									}), (0, a.jsxs)("div", {
										className: "flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700",
										children: [(0, a.jsx)("div", {
											className: "w-12 h-12 bg-[#00e6e6] rounded-full flex items-center justify-center",
											children: (0, a.jsx)("span", {
												className: "text-gray-900 text-xl",
												children: "⚡"
											})
										}), (0, a.jsxs)("div", {
											className: "flex-1",
											children: [(0, a.jsx)("h4", {
												className: "font-semibold text-white",
												children: "Response Time"
											}), (0, a.jsx)("p", {
												className: "text-gray-300",
												children: "Usually within 24 hours"
											})]
										})]
									})]
								}), (0, a.jsxs)("div", {
									children: [(0, a.jsx)("h4", {
										className: "font-semibold text-white mb-4",
										children: "Follow Me"
									}), (0, a.jsxs)("div", {
										className: "flex space-x-4",
										children: [(0, a.jsx)(d, {
											variant: "ghost",
											size: "icon",
											className: "rounded-full border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 w-12 h-12",
											onClick: () => window.open("https://github.com/muhammadfarhanhchand", "_blank"),
											children: (0, a.jsx)(m.A, {
												className: "h-6 w-6"
											})
										}), (0, a.jsx)(d, {
											variant: "ghost",
											size: "icon",
											className: "rounded-full border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 w-12 h-12",
											onClick: () => window.open("https://linkedin.com/in/muhammedfarhan", "_blank"),
											children: (0, a.jsx)(h.A, {
												className: "h-6 w-6"
											})
										}), (0, a.jsx)(d, {
											variant: "ghost",
											size: "icon",
											className: "rounded-full border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 w-12 h-12",
											onClick: () => window.open("mailto:farhan.chnd88@gmail.com"),
											children: (0, a.jsx)(w.A, {
												className: "h-6 w-6"
											})
										})]
									})]
								})]
							}), (0, a.jsxs)("div", {
								className: "bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700",
								children: [(0, a.jsx)("h3", {
									className: "text-2xl font-bold mb-6",
									children: "Send Me a Message"
								}), (0, a.jsxs)("form", {
									action: l,
									className: "space-y-6",
									children: [" ", (0, a.jsxs)("div", {
										className: "grid md:grid-cols-2 gap-6",
										children: [(0, a.jsxs)("div", {
											children: [(0, a.jsx)("label", {
												htmlFor: "firstName",
												className: "block text-sm font-medium text-gray-300 mb-2",
												children: "First Name"
											}), (0, a.jsx)("input", {
												type: "text",
												id: "firstName",
												name: "firstName",
												required: !0,
												className: "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00e6e6] focus:border-transparent bg-gray-700 text-white",
												placeholder: "John"
											})]
										}), (0, a.jsxs)("div", {
											children: [(0, a.jsx)("label", {
												htmlFor: "lastName",
												className: "block text-sm font-medium text-gray-300 mb-2",
												children: "Last Name"
											}), (0, a.jsx)("input", {
												type: "text",
												id: "lastName",
												name: "lastName",
												required: !0,
												className: "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00e6e6] focus:border-transparent bg-gray-700 text-white",
												placeholder: "Doe"
											})]
										})]
									}), (0, a.jsxs)("div", {
										children: [(0, a.jsx)("label", {
											htmlFor: "email",
											className: "block text-sm font-medium text-gray-300 mb-2",
											children: "Email Address"
										}), (0, a.jsx)("input", {
											type: "email",
											id: "email",
											name: "email",
											required: !0,
											className: "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00e6e6] focus:border-transparent bg-gray-700 text-white",
											placeholder: "john@example.com"
										})]
									}), (0, a.jsxs)("div", {
										children: [(0, a.jsx)("label", {
											htmlFor: "phone",
											className: "block text-sm font-medium text-gray-300 mb-2",
											children: "Phone Number (Optional)"
										}), (0, a.jsx)("input", {
											type: "tel",
											id: "phone",
											name: "phone",
											maxlength:"15",
											required: !0,
											className: "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00e6e6] focus:border-transparent bg-gray-700 text-white",
											placeholder: "+1 (555) 123-4567"
										})]
									}), (0, a.jsxs)("div", {
										children: [(0, a.jsx)("label", {
											htmlFor: "subject",
											className: "block text-sm font-medium text-gray-300 mb-2",
											children: "Subject"
										}), (0, a.jsxs)("select", {
											id: "subject",
											name: "subject",
											required: !0,
											className: "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00e6e6] focus:border-transparent bg-gray-700 text-white",
											children: [(0, a.jsx)("option", {
												value: "",
												children: "Select a subject"
											}), (0, a.jsx)("option", {
												value: "mobile-app",
												children: "Mobile App Development"
											}), (0, a.jsx)("option", {
												value: "consultation",
												children: "Technical Consultation"
											}), (0, a.jsx)("option", {
												value: "collaboration",
												children: "Project Collaboration"
											}), (0, a.jsx)("option", {
												value: "job-opportunity",
												children: "Job Opportunity"
											}), (0, a.jsx)("option", {
												value: "other",
												children: "Other"
											})]
										})]
									}), (0, a.jsxs)("div", {
										children: [(0, a.jsx)("label", {
											htmlFor: "message",
											className: "block text-sm font-medium text-gray-300 mb-2",
											children: "Message"
										}), (0, a.jsx)("textarea", {
											id: "message",
											name: "message",
											rows: 5,
											required: !0,
											className: "w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00e6e6] focus:border-transparent bg-gray-700 text-white resize-none",
											placeholder: "Tell me about your project or how I can help you..."
										})]
									}), (0, a.jsxs)("div", {
										className: "flex items-center",
										// children: [(0, a.jsx)("input", {
										// 	id: "privacy",
										// 	name: "privacy",
										// 	type: "checkbox",
										// 	className: "h-4 w-4 text-[#00e6e6] focus:ring-[#00e6e6] border-gray-600 rounded"
										// }), (0, a.jsx)("label", {
										// 	htmlFor: "privacy",
										// 	className: "ml-2 block text-sm text-gray-300",
										// 	children: "I agree to the privacy policy and terms of service"
										// })]

									}), (0, a.jsx)(d, {
										type: "submit",
										disabled: r,
										variant: "outline",
										className: "w-full border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 py-3 px-6 rounded-full text-lg font-medium bg-transparent transition-all duration-300",
										children: r ? "Sending..." : "Send Message"
									}), n && n.message && (0, a.jsx)("p", {
										className: "mt-4 text-center ".concat(n.success ? "text-green-400" : "text-red-400"),
										children: n.message
									})]
								})]
							})]
						}), (0, a.jsxs)("div", {
							className: "mt-16 text-center",
							children: [(0, a.jsx)("h3", {
								className: "text-xl font-bold mb-6",
								children: "Prefer Direct Contact?"
							}), (0, a.jsxs)("div", {
								className: "flex flex-col sm:flex-row gap-4 justify-center",
								children: [(0, a.jsxs)(d, {
									variant: "outline",
									className: "border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 px-8 py-3 rounded-full text-lg bg-transparent transition-all duration-300",
									onClick: () => window.open("mailto:farhan.chnd88@gmail.com?subject=Project Inquiry&body=Hi Muhammad Farhan,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0ABest regards,"),
									children: [(0, a.jsx)(w.A, {
										className: "mr-2 h-5 w-5"
									}), "Email Me Directly"]
								}), (0, a.jsxs)(d, {
									variant: "outline",
									className: "border-[#00e6e6] text-[#00e6e6] hover:bg-[#00e6e6] hover:text-gray-900 px-8 py-3 rounded-full text-lg bg-transparent",
									onClick: () => window.open("tel:+923333065190"),
									children: [(0, a.jsx)(k.A, {
										className: "mr-2 h-5 w-5"
									}), " ", "Call Now"]
								})]
							})]
						})]
					}), (0, a.jsxs)("footer", {
						className: "bg-[#1a1a2e] py-12 px-6 border-t border-gray-700 relative",
						children: [(0, a.jsxs)("div", {
							className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300",
							children: [(0, a.jsxs)("div", {
								children: [(0, a.jsx)("h3", {
									className: "text-3xl font-bold mb-4 text-[#00e6e6]",
									children: "M.Farhan"
								}), (0, a.jsx)("p", {
									className: "text-sm leading-relaxed",
									children: "Lead Mobile Application Developer passionate about creating exceptional digital experiences that scale."
								}), (0, a.jsxs)("div", {
									className: "flex space-x-4 mt-6",
									children: [(0, a.jsx)(d, {
										variant: "ghost",
										size: "icon",
										className: "rounded-full border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-[#00e6e6] w-10 h-10",
										onClick: () => window.open("https://github.com/muhammadfarhanhchand", "_blank"),
										children: (0, a.jsx)(m.A, {
											className: "h-5 w-5"
										})
									}), (0, a.jsx)(d, {
										variant: "ghost",
										size: "icon",
										className: "rounded-full border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-[#00e6e6] w-10 h-10",
										onClick: () => window.open("https://www.linkedin.com/in/muhammedfarhan/", "_blank"),
										children: (0, a.jsx)(h.A, {
											className: "h-5 w-5"
										})
									}), (0, a.jsx)(d, {
										variant: "ghost",
										size: "icon",
										className: "rounded-full border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-[#00e6e6] w-10 h-10",
										onClick: () => window.open("mailto:farhan.chnd88@gmail.com", "_blank"),
										children: (0, a.jsx)(w.A, {
											className: "h-5 w-5"
										})
									})]
								})]
							}), (0, a.jsxs)("div", {
								children: [(0, a.jsx)("h3", {
									className: "text-xl font-bold text-white mb-4",
									children: "Quick Links"
								}), (0, a.jsxs)("ul", {
									className: "space-y-2",
									children: [(0, a.jsx)("li", {
										children: (0, a.jsx)("button", {
											onClick: () => e("about"),
											className: "hover:text-[#00e6e6] transition-colors",
											children: "About"
										})
									}), (0, a.jsx)("li", {
										children: (0, a.jsx)("button", {
											onClick: () => e("projects"),
											className: "hover:text-[#00e6e6] transition-colors",
											children: "Projects"
										})
									}), (0, a.jsx)("li", {
										children: (0, a.jsx)("button", {
											onClick: () => e("experience"),
											className: "hover:text-[#00e6e6] transition-colors",
											children: "Experience"
										})
									}), (0, a.jsx)("li", {
										children: (0, a.jsx)("button", {
											onClick: () => e("contact"),
											className: "hover:text-[#00e6e6] transition-colors",
											children: "Contact"
										})
									})]
								})]
							}), (0, a.jsxs)("div", {
								children: [(0, a.jsx)("h3", {
									className: "text-xl font-bold text-white mb-4",
									children: "Get In Touch"
								}), (0, a.jsxs)("ul", {
									className: "space-y-2",
									children: [(0, a.jsx)("li", {
										children: (0, a.jsx)("a", {
											href: "mailto:farhan.chnd88@gmail.com",
											className: "hover:text-[#00e6e6] transition-colors",
											children: "farhan.chnd88@gmail.com"
										})
									}), (0, a.jsxs)("li", {
										children: [(0, a.jsx)("a", {
											href: "tel:+923333065190",
											className: "hover:text-[#00e6e6] transition-colors",
											children: "+92 333 306 5190"
										}), (0, a.jsx)(d, {
											variant: "ghost",
											size: "icon",
											className: "rounded-full border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-[#00e6e6] w-10 h-10 ml-2",
											onClick: () => window.open("https://wa.me/923333065190?text=Aslam%20o%20alikum", "_blank"),
											children: (0, a.jsx)(S, {
												className: "h-5 w-5"
											})
										})]
									}), (0, a.jsxs)("li", {
										children: [(0, a.jsx)("a", {
											href: "tel:+923332290604",
											className: "hover:text-[#00e6e6] transition-colors",
											children: "+92 333 229 0604"
										}), (0, a.jsx)(d, {
											variant: "ghost",
											size: "icon",
											className: "rounded-full border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-[#00e6e6] w-10 h-10 ml-2",
											onClick: () => window.open("https://wa.me/923332290604?text=Aslam%20o%20alikum", "_blank"),
											children: (0, a.jsx)(S, {
												className: "h-5 w-5"
											})
										})]
									}), (0, a.jsx)("li", {
										children: "Karachi, Pakistan"
									})]
								})]
							})]
						}), (0, a.jsxs)("div", {
							className: "mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400",
							children: [(0, a.jsx)("span", {
								children: "\xa9 2025 Muhammad Farhan. All rights reserved."
							}), (0, a.jsxs)("span", {
								className: "mt-4 md:mt-0 flex items-center",
								children: ["Made with ", (0, a.jsx)("span", {
									className: "text-red-500 mx-1",
									children: "❤️"
								}), " and lots of coffee"]
							})]
						}), s && (0, a.jsx)(d, {
							variant: "ghost",
							size: "icon",
							className: "fixed bottom-8 right-8 bg-[#00e6e6] text-gray-900 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 z-50",
							onClick: () => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								})
							},
							"aria-label": "Scroll to top",
							children: (0, a.jsx)(C.A, {
								className: "h-6 w-6"
							})
						})]
					})]
				})
			}
		},
		7351: (e, s, t) => {
			Promise.resolve().then(t.bind(t, 1867))
		}
	},
	e => {
		var s = s => e(e.s = s);
		e.O(0, [859, 441, 684, 358], () => s(7351)), _N_E = e.O()
	}
]);