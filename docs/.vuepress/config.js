module.exports = {
	title: 'Neat',
	description: '人的一切痛苦，本质上都是对自己无能的愤怒',
	theme: 'reco',
	themeConfig: {
		type: 'blog',
		author: '六六',
		authorAvatar: 'https://file.neatman.club/20ffb44a8bc12c06dea7/%E5%AE%87%E8%88%AA%E5%91%982.png',
		sidebar: {
			'/中国近现代史纲要/': [
				'目录',
				'第一章-反对外国侵略的斗争',
				'第二章-对国家出路的早期探索',
				'第三章-辛亥革命',
				'第四章-开天辟地的大事变',
				'第五章-中国革命的新道路',
				'第六章-中华民族的抗日战争'
			],
			'/代码相关/': [
				'Docker使用',
				'docker的常用命令',
				'Docker安装Nginx',
				'Nginx实现负载均衡的几种方法',
				'Docker中nginx开启https',
				'Markdown语法',
				'MyBatis',
				'Spring注解',
				'Tomcat部署多项目'
			],
			'/软件工程/': [
				'第一章-绪论',
				'第二章-软件需求与软件需求规约',
				'第三章-结构化方法',
				'第四章-面向对象方法',
				'第五章-软件测试',
				'第六章-软件生存周期过程与管理',
				'第七章-集成化能力成熟度模型'
			],
			'/计算机网络技术/': [
				'第一章-计算机网络技术概论',
				'第二章-数据通信基础',
				'第三章-网络协议和体系结构',
				'第四章-局域网技术',
				'第五章-网络互联技术',
				'第六章-网络应用技术',
				'第七章-网络管理技术',
				'第八章-网络操作系统',
				'第九章-计算机网络安全'
			]
		},
		sidebarDepth: 1,
		nextLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
		prevLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
		record: '豫ICP备19030164号-2',
		recordLink: 'http://beian.miit.gov.cn/',
		cyberSecurityRecord: '豫公网安备 41088302410902号',
		cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41088302410902',
		startYear: '2019', // 项目开始时间，只填写年份
		valineConfig: {
			appId: 'BX3locaPJFzm8FDckhoObFw7-gzGzoHsz', // your appId
			appKey: 'suhWtka1QQwEaxryJ8LBoxAv', // your appKey
		},
		// 博客配置
		blogConfig: {
			category: {
				location: 1, // 在导航栏菜单中所占的位置，默认2
				text: '分类' // 默认文案 “分类”
			},
			tag: {
				location: 2, // 在导航栏菜单中所占的位置，默认3
				text: '标签' // 默认文案 “标签”
			}
		},
		nav: [{
				text: '归档',
				link: '/timeline/',
				icon: 'reco-date'
			},
			{
				text: '文档',
				icon: 'reco-document',
				items: [{
						text: 'Java SE API Documentation',
						link: 'https://docs.oracle.com/javase/8/docs/api/index.html'
					},
					{
						text: 'Spring',
						link: 'https://spring.io/'
					},
					{
						text: 'Vue.js',
						link: 'https://cn.vuejs.org/v2/guide/'
					}
				]
			},
			{
				text: '工具',
				icon: 'reco-other',
				items: [{
						text: 'linux命令大全',
						link: 'https://www.linuxcool.com/'
					},
					{
						text: 'Stackoverflow',
						link: 'https://stackoverflow.com/'
					},
					{
						text: 'Programcreek',
						link: 'https://www.programcreek.com/'
					},
					{
						text: 'Leetcode',
						link: 'https://leetcode-cn.com/'
					},
					{
						text: 'wallhaven壁纸',
						link: 'https://wallhaven.cc/'
					},
				]
			},
			{
				text: '关于',
				link: '/about/',
				icon: 'reco-faq'
			}
		],
		aplayer: {
			autoplay: false,
			lrcType: false,
			mutex: true,
			theme: '#ad7a86',
			order: 'random',
			audio: [{
				name: '温柔',
				artist: '五月天',
				url: 'https://file.neatman.club/11d40dadd3784e2e62e8/%E6%B8%A9%E6%9F%94.mp3',
				cover: 'https://file.neatman.club/7cd640b5c7a1fab16a35/%E6%B8%A9%E6%9F%94.jpg'
			}]
		},
		friendLink: [{
			title: '阮一峰',
			desc: '阮一峰的个人网站',
			link: 'http://www.ruanyifeng.com/',
			logo: 'http://www.ruanyifeng.com/blog/images/person2.jpg'
		}, {
			title: 'DmxZ',
			desc: 'DmxZ 的自留地！',
			link: 'https://dmx.pub/',
			logo: 'https://dmx.pub/img/avatar.png'
		}, {
			title: '豆皮寿司',
			desc: '哈喽~ 小姐，你喜欢吃青椒吗?',
			link: 'https://kenyonyan.cn/',
			logo: 'https://cdn.jsdelivr.net/gh/KenyonYan/cdn@1.32/img/AboutMe/avatar.png'
		}, {
			title: '知否',
			desc: '一吃一大碗，一睡一整天。',
			link: 'https://darrenclover.gitee.io/',
			logo: 'https://darrenclover.gitee.io/img/touxiang.jpg'
		}, {
			title: 'Vince’s Blog ',
			desc: '努力学习技术的 Vince',
			link: 'https://i.vince.pub/',
			logo: 'https://cdn.jsdelivr.net/gh/vinceying/blog-file/photo/vince_logo.jpg'
		}, {
			title: '吃白饭的休伯利安号',
			desc: '一只努力的考研狗',
			link: 'https://eatrice.top/',
			logo: 'https://eatrice.top/img/favcion.png'
		}]
	},
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}],
		['link', {
			rel: 'shortcut icon',
			type: "image/x-icon",
			href: `https://file.neatman.club/52da35270cde4dd40831/neatman.png`
		}],
		['link', {
			rel: 'manifest',
			href: '/Manifest.json'
		}],
		['link', {
			rel: 'icon',
			href: 'https://file.neatman.club/52da35270cde4dd40831/neatman.png'
		}],
		['meta', {
			name: 'theme-color',
			content: '#3eaf7c'
		}],
		['meta', {
			name: 'apple-mobile-web-app-capable',
			content: 'yes'
		}],
		['meta', {
			name: 'apple-mobile-web-app-status-bar-style',
			content: 'black'
		}],
		['link', {
			rel: 'apple-touch-icon',
			href: 'https://file.neatman.club/52da35270cde4dd40831/neatman.png'
		}],
		['link', {
			rel: 'mask-icon',
			href: 'https://file.neatman.club/52da35270cde4dd40831/neatman.png',
			color: '#000000'
		}],
		['meta', {
			name: 'msapplication-TileImage',
			content: 'https://file.neatman.club/52da35270cde4dd40831/neatman.png'
		}],
		['meta', {
			name: 'msapplication-TileColor',
			content: '#000000'
		}],
		['script', {},
			`
		    var _hmt = _hmt || [];
		    (function() {
		        var hm = document.createElement("script");
		        hm.src = "https://hm.baidu.com/hm.js?d56ac95859faae795a8e53cf1f618b27";
		        var s = document.getElementsByTagName("script")[0]; 
		        s.parentNode.insertBefore(hm, s);
		    })();
		`
		]
	],
	plugins: [
		['aplayer'],
		["@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
				clean: false,
				messages: {
					welcome: '欢迎来到Neat',
					home: '心里的花，我想要带你回家。',
					theme: '好吧，希望你能喜欢我的其他小伙伴。',
					close: '你知道我喜欢吃什么吗？痴痴地望着你。'
				},
				btnStyle:{
				  left: '145px',
				  bottom: '50px'
				},
				messageStyle:{
				  left: '5px',
				  bottom: '190px'
				},
				modelStyle: {
					position: "fixed",
					left: "0px",
					bottom: "10px",
					opacity: "0.9",
					zIndex: 99999
				}
			}
		],
		['@vuepress/active-header-links', {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		}],
		['@vuepress/last-updated'],
		['flowchart'],
		['cursor-effects'],
		[
			"dynamic-title",
			{
				showIcon: "https://file.neatman.club/52da35270cde4dd40831/neatman.png",
				showText: "(/≧▽≦/)爱你呀！",
				hideIcon: "https://file.neatman.club/52da35270cde4dd40831/neatman.png",
				hideText: "(●—●)你到底爱不爱我！",
				recoverTime: 2000
			}
		],
		['@vuepress/pwa', {
			serviceWorker: true,
			updatePopup: {
				message: "有新内容",
				buttonText: "刷新"
			}
		}],
		/* ['vuepress-plugin-helper-live2d', {
			// 是否开启控制台日志打印(default: false)
			log: false,
			live2d: {
				// 是否启用(关闭请设置为false)(default: true)
				enable: true,
				// 模型名称(default: hibiki)>>>取值请参考：
				// https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
				model: 'hijiki',
				display: {
					position: "right", // 显示位置：left/right(default: 'right')
					width: 80, // 模型的长度(default: 135)
					height: 150, // 模型的高度(default: 300)
					hOffset: 1, //  水平偏移(default: 65)
					vOffset: 100, //  垂直偏移(default: 0)
				},
				mobile: {
					show: true
				},
				react: {
					opacity: 1 // 模型透明度(default: 0.8)
				}
			}
		}], */
	]
}
