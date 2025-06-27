document.addEventListener('DOMContentLoaded', () => {
    // --- OBJETO DE TRADUCCIONES INCRUSTADO ---
    const translations = {
      "en": {
        "pageTitle": "Fractal Studio",
        "selectLangTitle": "Select Your Language",
        "selectLangPrompt": "Please choose your preferred language to continue.",
        "langBtnEn": "English",
        "langBtnEs": "Español",
        "langBtnHi": "हिन्दी",
        "langBtnRu": "Русский",
        "langBtnPt": "Português",
        "langBtnFr": "Français",
        "introTitle": "Fractal Studio",
        "siteName": "Fractal Studio",
        "navServices": "Services",
        "navIllu": "Illustration",
        "navIlluDesc": "Custom visuals and mascots.",
        "navVideo": "Video Editing",
        "navVideoDesc": "Engaging stories from raw footage.",
        "navComm": "Community Mgmt",
        "navCommDesc": "Build and manage online communities.",
        "navChatter": "Chatter/Hype Team",
        "navChatterDesc": "Keep your community active and visible.",
        "navTwitter": "Twitter Marketing",
        "navTwitterDesc": "Boost engagement with viral content.",
        "navWebsite": "Website Custom",
        "navWebsiteDesc": "Visually impressive and functional sites.",
        "navDifference": "The Difference",
        "navExpertise": "Expertise",
        "navWeb3": "Web3 Projects",
        "navWeb3Desc": "Propel your project in the crypto space.",
        "navBusiness": "Business Projects",
        "navBusinessDesc": "Grow your business with our digital services.",
        "navCases": "Cases",
        "navAbout": "About",
        "navWorkWithUs": "work with us",
        "btnTalkToUs": "Talk to us",
        "heroTitle": "We build faster than the <span class=\"highlight\">market moves.</span>",
        "heroSubtitle": "Our work has helped memecoins go viral, DeFi protocols earn trust, and Web3 projects stand out in the noisiest markets.",
        "teaserIlluTitle": "Illustration",
        "teaserIlluDesc": "We bring your ideas to life with custom illustrations in any style, from 3D Art and Pixar-style to minimalist designs.",
        "teaserVideoTitle": "Video Editing",
        "teaserVideoDesc": "We transform raw footage into compelling stories that captivate audiences and drive results on any platform.",
        "teaserCommTitle": "Community Management",
        "teaserCommDesc": "We build and manage dynamic online communities that drive engagement, organic growth, and long-term brand loyalty.",
        "teaserChatterTitle": "Chatter/Hype Team",
        "teaserChatterDesc": "Our team keeps your community active, sparks meaningful conversations, and builds hype to keep your project visible.",
        "teaserTwitterTitle": "Twitter Marketing",
        "teaserTwitterDesc": "We craft strategies that boost your engagement organically through memes and viral content to make your brand stand out.",
        "teaserWebsiteTitle": "Custom Websites",
        "teaserWebsiteDesc": "Your website is your digital flagship. We design and develop custom sites that are visually impressive and highly functional.",
        "casesLabel": "Results",
        "casesTitle": "Trusted by projects that need to move faster than the market.",
        "casesDesc": "We've helped memecoins go viral, Web3 projects earn trust, and businesses grow their digital presence. Explore our impactful collaborations to see how we deliver results.",
        "casesBtnCrypto": "Crypto Cases",
        "casesBtnBusiness": "Business Cases",
        "compareLabel": "Compare",
        "compareTitle": "The Fractal Studio Difference",
        "compareSubtitle": "The digital world is noisy. Standard solutions are not enough. Here’s how we provide real value where other agencies fall short.",
        "compareHeaderTypical": "Typical Agencies",
        "compareHeaderFractal": "Fractal Studio",
        "compareMinus1": "Relies on generic templates and outdated strategies.",
        "comparePlus1": "Delivers custom-designed solutions tailored to your brand's unique identity.",
        "compareMinus2": "Slow, bureaucratic processes that miss market opportunities.",
        "comparePlus2": "Builds faster than the market moves, ensuring speed and agility.",
        "compareMinus3": "Sees community management as simple moderation.",
        "comparePlus3": "Provides up to 16 hours of active support and hype teams to create dynamic communities.",
        "compareMinus4": "Focuses on vanity metrics like likes and followers.",
        "comparePlus4": "Drives real business outcomes: 5x Ad Spend ROI and 150% revenue growth.",
        "compareMinus5": "Creates content that gets lost in the noise.",
        "comparePlus5": "Specializes in viral content and organic growth hacking to make your brand stand out.",
        "portfolioTitle": "Our Full Portfolio",
        "portfolioDesc": "The result? Work that speaks for itself. Explore our complete collection of projects.",
        "btnBackToMain": "← Back to Main",
        "realProblemsTitle": "Real Problems. Fractal Solutions.",
        "fractalSolution": "Fractal solution:",
        "illuDetailTitle": "Our Illustration Services",
        "illuDetailIntro": "We bring your ideas to life with custom illustrations in any style. From 3D Art, Pixar-style, Cartoon, and anime, to tech or minimalist designs, we create visuals that reflect your brand. Skilled in Blender, Adobe Illustrator, and Paint Tool SAI, we adapt to any concept or platform to deliver unique results.",
        "illuContentTitle": "Illustration That Converts",
        "illuFeature1": "<strong>Styles for Every Need:</strong> 3D elements, 3D characters, cartoon style, professional and minimalist designs, expressive caricatures, ultra-realism, manga or anime, and the popular Pixar animated style. You choose!",
        "illuFeature2": "<strong>Our Process:</strong> We create GIFs and animated videos that add motion and personality to your ideas.",
        "illuVision": "Your vision is our canvas. We fully adapt to your idea, delivering fast and high-quality results.",
        "illuProblem1": "“I'm launching a product and I need it to look professional.”",
        "illuSolution1": "We create custom illustrations to capture attention and strengthen your brand across all platforms.",
        "illuProblem2": "“I want a mascot for my brand, but not generic.”",
        "illuSolution2": "We design unique, fully customized brand mascots that reflect your identity and purpose.",
        "videoDetailTitle": "Our Video Editing Services",
        "videoDetailIntro": "We transform raw footage into compelling stories. From dynamic promotional videos, engaging social media content, and professional corporate presentations to cinematic style project explainers, we deliver impact videos that capture attention and results.",
        "videoContentTitle": "Video Editing That Captivates",
        "videoFeature1": "<strong>Versatile Styles:</strong> Promotional videos, social media shorts (Reels, TikToks), corporate training, animated explainers, crypto project showcases with trends or memes content, event recaps, and more.",
        "videoFeature2": "<strong>Our Process:</strong> From storyboarding and script refinement to editing, color grading, sound design, and motion graphics, we ensure a seamless and FAST workflow.",
        "videoProblem1": "“I have followers, but I’m not getting clients”",
        "videoSolution1": "Our edits are designed to go viral, build authority, and convert views into real clients.",
        "videoProblem2": "“My project's content is too complex to explain in a video.”",
        "videoSolution2": "We specialize in turning complex ideas into clear, engaging visuals.",
        "commDetailTitle": "Our Community Management Services",
        "commDetailIntro": "We build and manage dynamic online communities that drive engagement, organic growth, and long-term brand loyalty. From moderating technical discussions and organizing events to coordinating partnerships and activations on Discord, Telegram, and Twitter.",
        "commBotsSubtitle": "Telegram and Discord Custom Bots",
        "commContentTitle": "Community Growth Through Engagement",
        "commFeature1": "<strong>Engagement & Activity Strategies:</strong> We include community events, interactive campaigns, coordinated raids, and consistent daily activity for up to 16 hours.",
        "commFeature2": "<strong>Moderation & Support:</strong> We ensure a safe and well-managed environment using the right tools and automation systems.",
        "commFeature3": "<strong>Custom Tools & Bots:</strong> We build fully tailored bots based on your needs. You define the functions; we develop and deploy them.",
        "commFeature4": "<strong>Reports & Insights:</strong> We deliver regular reports with metrics on growth, engagement, and more.",
        "commProblem1": "“I want to start a community, but I don’t have time to manage it.”",
        "commSolution1": "We handle your community with up to 16 hours of active support daily so your project grows even when you’re offline.",
        "commProblem2": "“There are too many scammers, and I need a protected community.”",
        "commSolution2": "We build custom bots and security tools that protect your community 24/7.",
        "chatterDetailTitle": "Our Chatter/Hype Team Services",
        "chatterDetailIntro": "Our Chatter Team keeps your community active and engaged. We spark meaningful conversations, build hype, and keep your channels buzzing so your project stays visible, exciting, and full of organic chatters.",
        "chatterContentTitle": "Generating Buzz and Sustained Engagement",
        "chatterFeature1": "<strong>Strategic Hype Campaigns:</strong> We design and execute targeted campaigns to build anticipation ahead of launches, announcements, or major events.",
        "chatterFeature2": "<strong>Active Community Engagement:</strong> Our team actively participates in discussions and fosters a positive atmosphere on any selected platform.",
        "chatterFeature3": "<strong>Consistent Presence:</strong> We provide up to 14 hours of daily activity to ensure your community always looks alive and welcoming.",
        "chatterProblem1": "“My project launch is approaching, but there’s no buzz.”",
        "chatterSolution1": "We create interactive discussions that generate anticipation and ensure your launch is a success.",
        "chatterProblem2": "“Our community channels feel inactive and engagement is low.”",
        "chatterSolution2": "Our team joins your community organically to spark conversations and encourage interaction.",
        "twitterDetailTitle": "Our Twitter Marketing Services",
        "twitterDetailIntro": "We specialize in crafting strategies that boost your post engagement organically through memes and viral content, amplify your brand voice, and generate real interaction. From viral posts to fully customized campaigns, we make your presence stand out.",
        "twitterContentTitle": "Elevate Your Twitter Presence",
        "twitterFeature1": "<strong>Strategic Content Creation:</strong> Tweets, threads, and visual content tailored to today's attention span to connect with your audience.",
        "twitterFeature2": "<strong>Organic Growth Hacking:</strong> Proven techniques to authentically boost your reach and attract real followers within your niche.",
        "twitterFeature3": "<strong>Engagement Campaigns & Raids:</strong> Dynamics that increase visibility and interaction across your posts.",
        "twitterFeature4": "<strong>Analytics & Reporting:</strong> Frequent insights into your account performance to refine your strategy.",
        "twitterProblem1": "“Our tweets get lost in the noise and aren’t reaching our audience.”",
        "twitterSolution1": "We develop focused content strategies to ensure your message stands out.",
        "twitterProblem2": "“Our follower count is stagnant.”",
        "twitterSolution2": "We implement organic growth strategies and value-driven content that attracts and retains a genuine audience.",
        "webDetailTitle": "Our Custom Website Services",
        "webDetailIntro": "Your website is your digital flagship. We design and develop custom websites that are not only visually impressive but also highly functional, intuitive, and performance-optimized. We build exactly what your project needs.",
        "webContentTitle": "Websites Tailored to Your Vision",
        "webFeature1": "<strong>Bespoke Design & UX/UI:</strong> Creating visually engaging and intuitive interfaces that provide an exceptional user experience.",
        "webFeature2": "<strong>Responsive & Mobile-First Development:</strong> Ensuring your website looks and performs flawlessly on all devices.",
        "webFeature3": "<strong>SEO Optimization & Performance:</strong> Building websites with search engine visibility and speed in mind.",
        "webFeature4": "<strong>E-commerce & Custom Functionality:</strong> Integrating robust online store capabilities, custom tools, or any specific features.",
        "webProblem1": "“Our current website looks outdated and doesn't represent our brand.”",
        "webSolution1": "We'll design a modern, visually compelling website that captures your brand's essence.",
        "webProblem2": "“Users find our website confusing to navigate.”",
        "webSolution2": "We focus on intuitive navigation and user-centric design for a seamless experience.",
        "cryptoSuccessTitle": "Case Studies: Crypto Projects",
        "cryptoSuccessIntro": "We help crypto projects grow by offering complete support: from building a strong presence on Twitter and crafting a unique visual identity, to developing user-friendly websites, growing engaged communities, and providing expert guidance backed by custom tools and code.",
        "fenixTitle": "Fenix Finance",
        "fenixDesc": "We helped Fenix Finance, previously known as Chronos, build their main brand by creating all visual content for Twitter and Discord, providing custom tools and bots, and achieving real user conversion through organic Twitter growth and full community moderation.",
        "followers": "Followers",
        "illustrations": "Illustrations",
        "tokenValueIncrease": "Token Value Increase",
        "viewOnTwitter": "View on Twitter",
        "carbonTitle": "Carbon Terminal",
        "carbonDesc": "We helped Carbon Terminal adapt to market trends by managing support tickets with AI, fostering partnerships, deploying custom bots for Telegram, and delivering meme content along with website design.",
        "followersGained": "Followers Gained",
        "customBotsCreated": "Custom Bots Created",
        "illustrationsSent": "Illustrations Sent",
        "bizSuccessTitle": "Case Studies: Business Growth",
        "bizSuccessIntro": "We help local and online businesses grow by creating custom websites, setting up sales systems, organizing customer lists (CRM), adding online stores features, using chatbots, and making visual content for promotion.",
        "yimTitle": "Young Indian Method",
        "yimDesc": "We supported Young Indian Method with social media marketing, daily content creation, client management, and optimized systems to turn attention into real sales.",
        "conversionRate": "Conversion Rate",
        "revenueGrowth": "Revenue Growth",
        "adSpendROI": "Ad Spend ROI",
        "viewOnTikTok": "View on TikTok",
        "daleTitle": "Dale forma a tu exito",
        "daleDesc": "We helped \"Dale forma a tu éxito\" attract more clients and retain their audience. Thanks to our systems and client conversion strategies, they achieved at least a 5x return on their marketing investment.",
        "optimized": "Optimized",
        "userExperience": "User Experience",
        "portfolioTitleIllu": "Illustration Portfolio",
        "portfolioTitleVideo": "Video Editing Portfolio",
        "portfolioTitleComm": "Community Mgmt Portfolio",
        "portfolioTitleChatter": "Chatter/Hype Team Portfolio",
        "portfolioTitleTwitter": "Twitter Marketing Portfolio",
        "portfolioTitleWebsite": "Website Custom Portfolio",
        "privacyTitle": "Privacy Policy",
        "lastUpdated": "Last updated:",
        "privacyP1": "At Fractal Studio, we value the trust of everyone who visits and uses our platform. We are committed to maintaining a professional, transparent, and secure environment at all times. This policy reflects our dedication to providing a clear and responsible experience for all users.",
        "privacyP2": "For any questions, feel free to contact us at: fractalcapitalnetwork@gmail.com",
        "termsTitle": "Terms and Conditions",
        "effectiveDate": "Effective Date:",
        "termsP1": "By using this platform, you agree to the terms outlined below. Fractal Studio reserves the right to modify, suspend, or update any part of the site or its services without prior notice. All content is protected and may not be reused without permission. Access to our products and services must always remain fair, legal, and respectful.",
        "termsP2": "We reserve the right to limit or suspend access for any user who violates these terms. For support or inquiries, contact us at fractalcapitalnetwork@gmail.com",
        "footerContact": "Contact Fractal",
        "footerContactEmail": "fractalcapitalnetwork@gmail.com",
        "footerContactTelegram": "Talk to us on Telegram",
        "footerServices": "Services",
        "footerExpertise": "Expertise",
        "footerCompany": "Company",
        "footerAbout": "About",
        "footerCases": "Cases",
        "footerCareers": "Careers",
        "footerHelp": "Get Help",
        "footerRights": "© 2025 Fractal Studio",
        "footerPrivacy": "Privacy Policy",
        "footerTerms": "Terms and Conditions"
      },
      "es": {
        "pageTitle": "Fractal Studio",
        "selectLangTitle": "Seleccione su idioma",
        "selectLangPrompt": "Por favor, elija su idioma preferido para continuar.",
        "langBtnEn": "English",
        "langBtnEs": "Español",
        "langBtnHi": "हिन्दी",
        "langBtnRu": "Русский",
        "langBtnPt": "Português",
        "langBtnFr": "Français",
        "introTitle": "Fractal Studio",
        "siteName": "Fractal Studio",
        "navServices": "Servicios",
        "navIllu": "Ilustración",
        "navIlluDesc": "Visuales y mascotas personalizadas.",
        "navVideo": "Edición de Video",
        "navVideoDesc": "Historias atractivas a partir de metraje en bruto.",
        "navComm": "Gestión de Comunidad",
        "navCommDesc": "Construye y gestiona comunidades en línea.",
        "navChatter": "Equipo de Chatter/Hype",
        "navChatterDesc": "Mantén tu comunidad activa y visible.",
        "navTwitter": "Marketing en Twitter",
        "navTwitterDesc": "Impulsa la interacción con contenido viral.",
        "navWebsite": "Webs a Medida",
        "navWebsiteDesc": "Sitios visualmente impresionantes y funcionales.",
        "navDifference": "La Diferencia",
        "navExpertise": "Experiencia",
        "navWeb3": "Proyectos Web3",
        "navWeb3Desc": "Impulsa tu proyecto en el espacio cripto.",
        "navBusiness": "Proyectos de Negocios",
        "navBusinessDesc": "Haz crecer tu negocio con nuestros servicios digitales.",
        "navCases": "Casos",
        "navAbout": "Nosotros",
        "navWorkWithUs": "trabaja con nosotros",
        "btnTalkToUs": "Habla con nosotros",
        "heroTitle": "Construimos más rápido que los <span class=\"highlight\">movimientos del mercado.</span>",
        "heroSubtitle": "Nuestro trabajo ha ayudado a memecoins a volverse virales, a protocolos DeFi a ganar confianza y a proyectos Web3 a destacar en los mercados más ruidosos.",
        "teaserIlluTitle": "Ilustración",
        "teaserIlluDesc": "Damos vida a tus ideas con ilustraciones personalizadas en cualquier estilo, desde Arte 3D y estilo Pixar hasta diseños minimalistas.",
        "teaserVideoTitle": "Edición de Video",
        "teaserVideoDesc": "Transformamos metraje en bruto en historias convincentes que cautivan al público e impulsan resultados en cualquier plataforma.",
        "teaserCommTitle": "Gestión de Comunidad",
        "teaserCommDesc": "Construimos y gestionamos comunidades en línea dinámicas que impulsan la interacción, el crecimiento orgánico y la lealtad a la marca a largo plazo.",
        "teaserChatterTitle": "Equipo de Chatter/Hype",
        "teaserChatterDesc": "Nuestro equipo mantiene tu comunidad activa, genera conversaciones significativas y crea expectación para mantener tu proyecto visible.",
        "teaserTwitterTitle": "Marketing en Twitter",
        "teaserTwitterDesc": "Creamos estrategias que aumentan tu interacción orgánicamente a través de memes y contenido viral para que tu marca destaque.",
        "teaserWebsiteTitle": "Sitios Web a Medida",
        "teaserWebsiteDesc": "Tu sitio web es tu buque insignia digital. Diseñamos y desarrollamos sitios personalizados que son visualmente impresionantes y altamente funcionales.",
        "casesLabel": "Resultados",
        "casesTitle": "Con la confianza de proyectos que necesitan moverse más rápido que el mercado.",
        "casesDesc": "Hemos ayudado a memecoins a volverse virales, a proyectos Web3 a ganar confianza y a empresas a hacer crecer su presencia digital. Explora nuestras colaboraciones de impacto para ver cómo entregamos resultados.",
        "casesBtnCrypto": "Casos Cripto",
        "casesBtnBusiness": "Casos de Negocios",
        "compareLabel": "Compara",
        "compareTitle": "La Diferencia de Fractal Studio",
        "compareSubtitle": "El mundo digital es ruidoso. Las soluciones estándar no son suficientes. Así es como proporcionamos valor real donde otras agencias se quedan cortas.",
        "compareHeaderTypical": "Agencias Típicas",
        "compareHeaderFractal": "Fractal Studio",
        "compareMinus1": "Se basan en plantillas genéricas y estrategias obsoletas.",
        "comparePlus1": "Entrega soluciones diseñadas a medida y adaptadas a la identidad única de tu marca.",
        "compareMinus2": "Procesos lentos y burocráticos que pierden oportunidades de mercado.",
        "comparePlus2": "Construye más rápido que los movimientos del mercado, asegurando velocidad y agilidad.",
        "compareMinus3": "Consideran la gestión de la comunidad como una simple moderación.",
        "comparePlus3": "Proporciona hasta 16 horas de soporte activo y equipos de Hype para crear comunidades dinámicas.",
        "compareMinus4": "Se centran en métricas de vanidad como 'me gusta' y seguidores.",
        "comparePlus4": "Impulsa resultados de negocio reales: 5x de ROI en publicidad y 150% de crecimiento en ingresos.",
        "compareMinus5": "Crean contenido que se pierde en el ruido.",
        "comparePlus5": "Se especializa en contenido viral y 'growth hacking' orgánico para hacer que tu marca destaque.",
        "portfolioTitle": "Nuestro Portafolio Completo",
        "portfolioDesc": "¿El resultado? Un trabajo que habla por sí mismo. Explora nuestra colección completa de proyectos.",
        "btnBackToMain": "← Volver al Inicio",
        "realProblemsTitle": "Problemas Reales. Soluciones Fractales.",
        "fractalSolution": "Solución Fractal:",
        "illuDetailTitle": "Nuestros Servicios de Ilustración",
        "illuDetailIntro": "Damos vida a tus ideas con ilustraciones personalizadas en cualquier estilo. Desde Arte 3D, estilo Pixar, Cartoon y anime, hasta diseños tecnológicos o minimalistas, creamos visuales que reflejan tu marca. Con habilidades en Blender, Adobe Illustrator y Paint Tool SAI, nos adaptamos a cualquier concepto o plataforma para entregar resultados únicos.",
        "illuContentTitle": "Ilustración que Convierte",
        "illuFeature1": "<strong>Estilos para cada necesidad:</strong> Elementos 3D, personajes 3D, estilo de dibujos animados, diseños profesionales y minimalistas, caricaturas expresivas, ultrarrealismo, manga o anime, y el popular estilo animado de Pixar. ¡Tú eliges!",
        "illuFeature2": "<strong>Nuestro proceso:</strong> Creamos GIFs y videos animados que añaden movimiento y personalidad a tus ideas.",
        "illuVision": "Tu visión es nuestro lienzo. Nos adaptamos completamente a tu idea, entregando resultados rápidos y de alta calidad.",
        "illuProblem1": "“Estoy lanzando un producto y necesito que se vea profesional.”",
        "illuSolution1": "Creamos ilustraciones personalizadas para captar la atención y fortalecer tu marca en todas las plataformas.",
        "illuProblem2": "“Quiero una mascota para mi marca, pero que no sea genérica.”",
        "illuSolution2": "Diseñamos mascotas de marca únicas y totalmente personalizadas que reflejan tu identidad y propósito.",
        "videoDetailTitle": "Nuestros Servicios de Edición de Video",
        "videoDetailIntro": "Transformamos metraje en bruto en historias convincentes. Desde videos promocionales dinámicos, contenido atractivo para redes sociales y presentaciones corporativas profesionales hasta explicadores de proyectos de estilo cinematográfico, entregamos videos de impacto que captan la atención y los resultados.",
        "videoContentTitle": "Edición de Video que Cautiva",
        "videoFeature1": "<strong>Estilos versátiles:</strong> Videos promocionales, cortos para redes sociales (Reels, TikToks), capacitación corporativa, explicadores animados, exhibiciones de proyectos cripto con contenido de tendencias o memes, resúmenes de eventos y más.",
        "videoFeature2": "<strong>Nuestro proceso:</strong> Desde el guion gráfico y el refinamiento del guion hasta la edición, la gradación de color, el diseño de sonido y los gráficos en movimiento, aseguramos un flujo de trabajo rápido y sin interrupciones.",
        "videoProblem1": "“Tengo seguidores, pero no consigo clientes”",
        "videoSolution1": "Nuestras ediciones están diseñadas para volverse virales, construir autoridad y convertir vistas en clientes reales.",
        "videoProblem2": "“El contenido de mi proyecto es demasiado complejo para explicarlo en un video.”",
        "videoSolution2": "Nos especializamos en convertir ideas complejas en visuales claros y atractivos.",
        "commDetailTitle": "Nuestros Servicios de Gestión de Comunidad",
        "commDetailIntro": "Construimos y gestionamos comunidades en línea dinámicas que impulsan la interacción, el crecimiento orgánico y la lealtad a la marca a largo plazo. Desde la moderación de discusiones técnicas y la organización de eventos hasta la coordinación de asociaciones y activaciones en Discord, Telegram y Twitter.",
        "commBotsSubtitle": "Bots Personalizados para Telegram y Discord",
        "commContentTitle": "Crecimiento de la Comunidad a través de la Interacción",
        "commFeature1": "<strong>Estrategias de interacción y actividad:</strong> Incluimos eventos comunitarios, campañas interactivas, raids coordinados y actividad diaria constante durante hasta 16 horas.",
        "commFeature2": "<strong>Moderación y soporte:</strong> Garantizamos un entorno seguro y bien gestionado utilizando las herramientas y sistemas de automatización adecuados.",
        "commFeature3": "<strong>Herramientas y bots personalizados:</strong> Construimos bots totalmente adaptados a tus necesidades. Tú defines las funciones; nosotros las desarrollamos e implementamos.",
        "commFeature4": "<strong>Informes y análisis:</strong> Entregamos informes periódicos con métricas sobre crecimiento, interacción y más.",
        "commProblem1": "“Quiero iniciar una comunidad, pero no tengo tiempo para gestionarla.”",
        "commSolution1": "Gestionamos tu comunidad con hasta 16 horas de soporte activo diario para que tu proyecto crezca incluso cuando no estás conectado.",
        "commProblem2": "“Hay demasiados estafadores y necesito una comunidad protegida.”",
        "commSolution2": "Construimos bots y herramientas de seguridad personalizados que protegen a tu comunidad 24/7.",
        "chatterDetailTitle": "Nuestros Servicios de Equipo de Chatter/Hype",
        "chatterDetailIntro": "Nuestro equipo de Chatter mantiene tu comunidad activa e involucrada. Iniciamos conversaciones significativas, creamos expectación y mantenemos tus canales activos para que tu proyecto se mantenga visible, emocionante y lleno de conversadores orgánicos.",
        "chatterContentTitle": "Generando Interés y Compromiso Sostenido",
        "chatterFeature1": "<strong>Campañas de Hype estratégicas:</strong> Diseñamos y ejecutamos campañas dirigidas para generar anticipación antes de lanzamientos, anuncios o eventos importantes.",
        "chatterFeature2": "<strong>Participación activa de la comunidad:</strong> Nuestro equipo participa activamente en las discusiones y fomenta una atmósfera positiva en cualquier plataforma seleccionada.",
        "chatterFeature3": "<strong>Presencia constante:</strong> Proporcionamos hasta 14 horas de actividad diaria para asegurar que tu comunidad siempre parezca viva y acogedora.",
        "chatterProblem1": "“Se acerca el lanzamiento de mi proyecto, pero no hay interés.”",
        "chatterSolution1": "Creamos discusiones interactivas que generan anticipación y aseguran que tu lanzamiento sea un éxito.",
        "chatterProblem2": "“Nuestros canales comunitarios se sienten inactivos y la participación es baja.”",
        "chatterSolution2": "Nuestro equipo se une a tu comunidad de forma orgánica para iniciar conversaciones y fomentar la interacción.",
        "twitterDetailTitle": "Nuestros Servicios de Marketing en Twitter",
        "twitterDetailIntro": "Nos especializamos en la creación de estrategias que impulsan la participación de tus publicaciones de forma orgánica a través de memes y contenido viral, amplifican la voz de tu marca y generan interacción real. Desde publicaciones virales hasta campañas totalmente personalizadas, hacemos que tu presencia destaque.",
        "twitterContentTitle": "Eleva tu Presencia en Twitter",
        "twitterFeature1": "<strong>Creación de contenido estratégico:</strong> Tweets, hilos y contenido visual adaptados a la capacidad de atención actual para conectar con tu audiencia.",
        "twitterFeature2": "<strong>Growth hacking orgánico:</strong> Técnicas probadas para aumentar auténticamente tu alcance y atraer seguidores reales dentro de tu nicho.",
        "twitterFeature3": "<strong>Campañas de interacción y raids:</strong> Dinámicas que aumentan la visibilidad y la interacción en tus publicaciones.",
        "twitterFeature4": "<strong>Análisis e informes:</strong> Información frecuente sobre el rendimiento de tu cuenta para refinar tu estrategia.",
        "twitterProblem1": "“Nuestros tweets se pierden en el ruido y no llegan a nuestra audiencia.”",
        "twitterSolution1": "Desarrollamos estrategias de contenido enfocadas para asegurar que tu mensaje destaque.",
        "twitterProblem2": "“Nuestro número de seguidores está estancado.”",
        "twitterSolution2": "Implementamos estrategias de crecimiento orgánico y contenido de valor que atrae y retiene a una audiencia genuina.",
        "webDetailTitle": "Nuestros Servicios de Sitios Web a Medida",
        "webDetailIntro": "Tu sitio web es tu buque insignia digital. Diseñamos y desarrollamos sitios web personalizados que no solo son visualmente impresionantes, sino también altamente funcionales, intuitivos y optimizados para el rendimiento. Construimos exactamente lo que tu proyecto necesita.",
        "webContentTitle": "Sitios Web a Medida de tu Visión",
        "webFeature1": "<strong>Diseño a medida y UX/UI:</strong> Creando interfaces visualmente atractivas e intuitivas que proporcionan una experiencia de usuario excepcional.",
        "webFeature2": "<strong>Desarrollo responsive y mobile-first:</strong> Asegurando que tu sitio web se vea y funcione perfectamente en todos los dispositivos.",
        "webFeature3": "<strong>Optimización SEO y rendimiento:</strong> Construyendo sitios web con la visibilidad en los motores de búsqueda y la velocidad en mente.",
        "webFeature4": "<strong>E-commerce y funcionalidad personalizada:</strong> Integrando sólidas capacidades de tienda en línea, herramientas personalizadas o cualquier característica específica.",
        "webProblem1": "“Nuestro sitio web actual parece anticuado y no representa nuestra marca.”",
        "webSolution1": "Diseñaremos un sitio web moderno y visualmente atractivo que capture la esencia de tu marca.",
        "webProblem2": "“Los usuarios encuentran nuestro sitio web confuso de navegar.”",
        "webSolution2": "Nos centramos en la navegación intuitiva y el diseño centrado en el usuario para una experiencia sin interrupciones.",
        "cryptoSuccessTitle": "Casos de Éxito: Proyectos Cripto",
        "cryptoSuccessIntro": "Ayudamos a los proyectos de criptomonedas a crecer ofreciendo un soporte completo: desde la construcción de una fuerte presencia en Twitter y la creación de una identidad visual única, hasta el desarrollo de sitios web fáciles de usar, el crecimiento de comunidades comprometidas y la orientación experta respaldada por herramientas y código personalizados.",
        "fenixTitle": "Fenix Finance",
        "fenixDesc": "Ayudamos a Fenix Finance, anteriormente conocido como Chronos, a construir su marca principal creando todo el contenido visual para Twitter y Discord, proporcionando herramientas y bots personalizados, y logrando la conversión real de usuarios a través del crecimiento orgánico de Twitter y la moderación completa de la comunidad.",
        "followers": "Seguidores",
        "illustrations": "Ilustraciones",
        "tokenValueIncrease": "Aumento del Valor del Token",
        "viewOnTwitter": "Ver en Twitter",
        "carbonTitle": "Carbon Terminal",
        "carbonDesc": "Ayudamos a Carbon Terminal a adaptarse a las tendencias del mercado gestionando tickets de soporte con IA, fomentando asociaciones, desplegando bots personalizados para Telegram y entregando contenido de memes junto con el diseño del sitio web.",
        "followersGained": "Seguidores Ganados",
        "customBotsCreated": "Bots Personalizados Creados",
        "illustrationsSent": "Ilustraciones Enviadas",
        "bizSuccessTitle": "Casos de Éxito: Crecimiento Empresarial",
        "bizSuccessIntro": "Ayudamos a empresas locales y en línea a crecer mediante la creación de sitios web personalizados, la configuración de sistemas de ventas, la organización de listas de clientes (CRM), la adición de funciones de tiendas en línea, el uso de chatbots y la creación de contenido visual para la promoción.",
        "yimTitle": "Young Indian Method",
        "yimDesc": "Apoyamos a Young Indian Method con marketing en redes sociales, creación de contenido diario, gestión de clientes y sistemas optimizados para convertir la atención en ventas reales.",
        "conversionRate": "Tasa de Conversión",
        "revenueGrowth": "Crecimiento de Ingresos",
        "adSpendROI": "ROI en Publicidad",
        "viewOnTikTok": "Ver en TikTok",
        "daleTitle": "Dale forma a tu éxito",
        "daleDesc": "Ayudamos a \"Dale forma a tu éxito\" a atraer más clientes y retener a su audiencia. Gracias a nuestros sistemas y estrategias de conversión de clientes, lograron al menos un retorno 5x de su inversión en marketing.",
        "optimized": "Optimizado",
        "userExperience": "Experiencia de Usuario",
        "portfolioTitleIllu": "Portafolio de Ilustración",
        "portfolioTitleVideo": "Portafolio de Edición de Video",
        "portfolioTitleComm": "Portafolio de Gestión de Comunidad",
        "portfolioTitleChatter": "Portafolio de Equipo Chatter/Hype",
        "portfolioTitleTwitter": "Portafolio de Marketing en Twitter",
        "portfolioTitleWebsite": "Portafolio de Webs a Medida",
        "privacyTitle": "Política de Privacidad",
        "lastUpdated": "Última actualización:",
        "privacyP1": "En Fractal Studio, valoramos la confianza de todos los que visitan y utilizan nuestra plataforma. Estamos comprometidos a mantener un entorno profesional, transparente y seguro en todo momento. Esta política refleja nuestra dedicación a proporcionar una experiencia clara y responsable para todos los usuarios.",
        "privacyP2": "Para cualquier pregunta, no dude en contactarnos en: fractalcapitalnetwork@gmail.com",
        "termsTitle": "Términos y Condiciones",
        "effectiveDate": "Fecha de vigencia:",
        "termsP1": "Al utilizar esta plataforma, usted acepta los términos que se detallan a continuación. Fractal Studio se reserva el derecho de modificar, suspender o actualizar cualquier parte del sitio o sus servicios sin previo aviso. Todo el contenido está protegido y no puede ser reutilizado sin permiso. El acceso a nuestros productos y servicios debe ser siempre justo, legal y respetuoso.",
        "termsP2": "Nos reservamos el derecho de limitar o suspender el acceso a cualquier usuario que viole estos términos. Para soporte o consultas, contáctenos en fractalcapitalnetwork@gmail.com",
        "footerContact": "Contacta con Fractal",
        "footerContactEmail": "fractalcapitalnetwork@gmail.com",
        "footerContactTelegram": "Habla con nosotros en Telegram",
        "footerServices": "Servicios",
        "footerExpertise": "Experiencia",
        "footerCompany": "Compañía",
        "footerAbout": "Nosotros",
        "footerCases": "Casos",
        "footerCareers": "Carreras",
        "footerHelp": "Obtener Ayuda",
        "footerRights": "© 2025 Fractal Studio",
        "footerPrivacy": "Política de Privacidad",
        "footerTerms": "Términos y Condiciones"
      },
      "fr": {
        "pageTitle": "Fractal Studio",
        "selectLangTitle": "Choisissez votre langue",
        "selectLangPrompt": "Veuillez choisir votre langue préférée pour continuer.",
        "langBtnEn": "English",
        "langBtnEs": "Español",
        "langBtnHi": "हिन्दी",
        "langBtnRu": "Русский",
        "langBtnPt": "Português",
        "langBtnFr": "Français",
        "introTitle": "Fractal Studio",
        "siteName": "Fractal Studio",
        "navServices": "Services",
        "navIllu": "Illustration",
        "navIlluDesc": "Visuels et mascottes personnalisés.",
        "navVideo": "Montage Vidéo",
        "navVideoDesc": "Des histoires captivantes à partir de séquences brutes.",
        "navComm": "Gestion de Communauté",
        "navCommDesc": "Construire et gérer des communautés en ligne.",
        "navChatter": "Équipe Chatter/Hype",
        "navChatterDesc": "Gardez votre communauté active et visible.",
        "navTwitter": "Marketing sur Twitter",
        "navTwitterDesc": "Augmentez l'engagement avec du contenu viral.",
        "navWebsite": "Sites Web Personnalisés",
        "navWebsiteDesc": "Sites visuellement impressionnants et fonctionnels.",
        "navDifference": "La Différence",
        "navExpertise": "Expertise",
        "navWeb3": "Projets Web3",
        "navWeb3Desc": "Propulsez votre projet dans l'espace crypto.",
        "navBusiness": "Projets d'Entreprise",
        "navBusinessDesc": "Développez votre entreprise avec nos services numériques.",
        "navCases": "Études de Cas",
        "navAbout": "À propos",
        "navWorkWithUs": "travaillez avec nous",
        "btnTalkToUs": "Parlez-nous",
        "heroTitle": "Nous construisons plus vite que les <span class=\"highlight\">mouvements du marché.</span>",
        "heroSubtitle": "Notre travail a aidé des memecoins à devenir viraux, des protocoles DeFi à gagner la confiance et des projets Web3 à se démarquer sur les marchés les plus bruyants.",
        "teaserIlluTitle": "Illustration",
        "teaserIlluDesc": "Nous donnons vie à vos idées avec des illustrations personnalisées dans tous les styles, de l'art 3D et du style Pixar aux designs minimalistes.",
        "teaserVideoTitle": "Montage Vidéo",
        "teaserVideoDesc": "Nous transformons des séquences brutes en histoires captivantes qui séduisent le public et génèrent des résultats sur n'importe quelle plateforme.",
        "teaserCommTitle": "Gestion de Communauté",
        "teaserCommDesc": "Nous construisons et gérons des communautés en ligne dynamiques qui stimulent l'engagement, la croissance organique et la fidélité à la marque à long terme.",
        "teaserChatterTitle": "Équipe Chatter/Hype",
        "teaserChatterDesc": "Notre équipe maintient votre communauté active, suscite des conversations pertinentes et crée de l'engouement pour garder votre projet visible.",
        "teaserTwitterTitle": "Marketing sur Twitter",
        "teaserTwitterDesc": "Nous élaborons des stratégies qui augmentent votre engagement de manière organique grâce à des mèmes et du contenu viral pour faire ressortir votre marque.",
        "teaserWebsiteTitle": "Sites Web Personnalisés",
        "teaserWebsiteDesc": "Votre site web est votre fleuron numérique. Nous concevons et développons des sites personnalisés qui sont visuellement impressionnants et hautement fonctionnels.",
        "casesLabel": "Résultats",
        "casesTitle": "Approuvé par des projets qui doivent avancer plus vite que le marché.",
        "casesDesc": "Nous avons aidé des memecoins à devenir viraux, des projets Web3 à gagner la confiance et des entreprises à développer leur présence numérique. Explorez nos collaborations percutantes pour voir comment nous obtenons des résultats.",
        "casesBtnCrypto": "Cas Crypto",
        "casesBtnBusiness": "Cas d'Entreprise",
        "compareLabel": "Comparer",
        "compareTitle": "La Différence Fractal Studio",
        "compareSubtitle": "Le monde numérique est bruyant. Les solutions standard ne suffisent pas. Voici comment nous apportons une valeur réelle là où d'autres agences échouent.",
        "compareHeaderTypical": "Agences Typiques",
        "compareHeaderFractal": "Fractal Studio",
        "compareMinus1": "S'appuie sur des modèles génériques et des stratégies obsolètes.",
        "comparePlus1": "Fournit des solutions sur mesure adaptées à l'identité unique de votre marque.",
        "compareMinus2": "Processus lents et bureaucratiques qui manquent les opportunités du marché.",
        "comparePlus2": "Construit plus vite que les mouvements du marché, garantissant rapidité et agilité.",
        "compareMinus3": "Considère la gestion de communauté comme une simple modération.",
        "comparePlus3": "Fournit jusqu'à 16 heures de support actif et des équipes de Hype pour créer des communautés dynamiques.",
        "compareMinus4": "Se concentre sur des métriques de vanité comme les 'j'aime' et les abonnés.",
        "comparePlus4": "Génère de vrais résultats commerciaux : ROI de 5x sur les dépenses publicitaires et 150% de croissance des revenus.",
        "compareMinus5": "Crée du contenu qui se perd dans le bruit.",
        "comparePlus5": "Se spécialise dans le contenu viral et le 'growth hacking' organique pour faire ressortir votre marque.",
        "portfolioTitle": "Notre Portefeuille Complet",
        "portfolioDesc": "Le résultat ? Un travail qui parle de lui-même. Explorez notre collection complète de projets.",
        "btnBackToMain": "← Retour à l'accueil",
        "realProblemsTitle": "Problèmes Réels. Solutions Fractales.",
        "fractalSolution": "Solution Fractale :",
        "illuDetailTitle": "Nos Services d'Illustration",
        "illuDetailIntro": "Nous donnons vie à vos idées avec des illustrations personnalisées dans n'importe quel style. De l'art 3D, du style Pixar, du dessin animé et de l'anime, aux designs techniques ou minimalistes, nous créons des visuels qui reflètent votre marque. Compétents sur Blender, Adobe Illustrator et Paint Tool SAI, nous nous adaptons à tout concept ou plateforme pour livrer des résultats uniques.",
        "illuContentTitle": "L'Illustration Qui Convertit",
        "illuFeature1": "<strong>Des styles pour tous les besoins :</strong> Éléments 3D, personnages 3D, style cartoon, designs professionnels et minimalistes, caricatures expressives, ultra-réalisme, manga ou anime, et le populaire style animé Pixar. À vous de choisir !",
        "illuFeature2": "<strong>Notre processus :</strong> Nous créons des GIF et des vidéos animées qui ajoutent du mouvement et de la personnalité à vos idées.",
        "illuVision": "Votre vision est notre toile. Nous nous adaptons entièrement à votre idée, en fournissant des resultados rapides et de haute qualité.",
        "illuProblem1": "« Je lance un produit et j'ai besoin qu'il ait l'air professionnel. »",
        "illuSolution1": "Nous créons des illustrations personnalisées pour capter l'attention et renforcer votre marque sur toutes les plateformes.",
        "illuProblem2": "« Je veux une mascotte pour ma marque, mais pas quelque chose de générique. »",
        "illuSolution2": "Nous concevons des mascottes de marque uniques et entièrement personnalisées qui reflètent votre identité et votre objectif.",
        "videoDetailTitle": "Nos Services de Montage Vidéo",
        "videoDetailIntro": "Nous transformons des séquences brutes en histoires captivantes. Des vidéos promotionnelles dynamiques, du contenu engageant pour les médias sociaux et des présentations d'entreprise professionnelles aux explications de projet de style cinématographique, nous livrons des vidéos percutantes qui captent l'attention et génèrent des résultats.",
        "videoContentTitle": "Un Montage Vidéo Qui Captive",
        "videoFeature1": "<strong>Styles polyvalents :</strong> Vidéos promotionnelles, courts métrages pour les médias sociaux (Reels, TikToks), formations d'entreprise, explications animées, vitrines de projets crypto avec du contenu tendance ou des mèmes, récapitulatifs d'événements, et plus encore.",
        "videoFeature2": "<strong>Notre processus :</strong> Du storyboarding et de l'affinage du script au montage, à l'étalonnage des couleurs, à la conception sonore et aux graphiques animés, nous assurons un flux de travail fluide et RAPIDE.",
        "videoProblem1": "« J'ai des abonnés, mais je n'obtiens pas de clients »",
        "videoSolution1": "Nos montages sont conçus pour devenir viraux, renforcer l'autorité et convertir les vues en clients réels.",
        "videoProblem2": "« Le contenu de mon projet est trop complexe à expliquer en vidéo. »",
        "videoSolution2": "Nous sommes spécialisés dans la transformation d'idées complexes en visuels clairs et attrayants.",
        "commDetailTitle": "Nos Services de Gestion de Communauté",
        "commDetailIntro": "Nous construisons et gérons des communities en ligne dynamiques qui stimulent l'engagement, la croissance organique et la fidélité à la marque à long terme. De la modération des discussions techniques et l'organisation d'événements à la coordination de partenariats et d'activations sur Discord, Telegram et Twitter.",
        "commBotsSubtitle": "Bots Personnalisés pour Telegram et Discord",
        "commContentTitle": "Croissance de la Communauté par l'Engagement",
        "commFeature1": "<strong>Stratégies d'engagement et d'activité :</strong> Nous incluons des événements communautaires, des campagnes interactives, des raids coordonnés et une activité quotidienne constante jusqu'à 16 heures.",
        "commFeature2": "<strong>Modération et support :</strong> Nous assurons un environnement sûr et bien géré en utilisant les bons outils et systèmes d'automatisation.",
        "commFeature3": "<strong>Outils et bots personnalisés :</strong> Nous construisons des bots entièrement adaptés à vos besoins. Vous définissez les fonctions ; nous les développons et les déployons.",
        "commFeature4": "<strong>Rapports et analyses :</strong> Nous fournissons des rapports réguliers avec des métriques sur la croissance, l'engagement, et plus encore.",
        "commProblem1": "« Je veux créer une communauté, mais je n'ai pas le temps de la gérer. »",
        "commSolution1": "Nous gérons votre communauté avec jusqu'à 16 heures de support actif quotidien pour que votre projet se développe même lorsque vous êtes hors ligne.",
        "commProblem2": "« Il y a trop d'escrocs, et j'ai besoin d'une communauté protégée. »",
        "commSolution2": "Nous construisons des bots et des outils de sécurité personnalisés qui protègent votre communauté 24/7.",
        "chatterDetailTitle": "Nos Services d'Équipe Chatter/Hype",
        "chatterDetailIntro": "Notre équipe Chatter maintient votre communauté active et engagée. Nous suscitons des conversations significatives, créons de l'engouement et maintenons vos canaux en effervescence pour que votre projet reste visible, excitant et plein de participants organiques.",
        "chatterContentTitle": "Générer du Buzz et un Engagement Durable",
        "chatterFeature1": "<strong>Campagnes de Hype stratégiques :</strong> Nous concevons et exécutons des campagnes ciblées pour susciter l'anticipation avant les lancements, les annonces ou les événements majeurs.",
        "chatterFeature2": "<strong>Engagement communautaire actif :</strong> Notre équipe participe activement aux discussions et favorise une atmosphère positive sur n'importe quelle plateforme choisie.",
        "chatterFeature3": "<strong>Présence constante :</strong> Nous fournissons jusqu'à 14 heures d'activité quotidienne pour garantir que votre communauté semble toujours vivante et accueillante.",
        "chatterProblem1": "« Le lancement de mon projet approche, mais il n'y a pas d'engouement. »",
        "chatterSolution1": "Nous créons des discussions interactives qui génèrent de l'anticipation et assurent le succès de votre lancement.",
        "chatterProblem2": "« Nos canaux communautaires semblent inactifs et l'engagement est faible. »",
        "chatterSolution2": "Notre équipe rejoint votre communauté de manière organique pour susciter des conversations et encourager l'interaction.",
        "twitterDetailTitle": "Nos Services de Marketing sur Twitter",
        "twitterDetailIntro": "Nous sommes spécialisés dans l'élaboration de stratégies qui stimulent organiquement l'engagement de vos publications grâce à des mèmes et du contenu viral, amplifient la voix de votre marque et génèrent une interaction réelle. Des publications virales aux campagnes entièrement personnalisées, nous faisons en sorte que votre présence se démarque.",
        "twitterContentTitle": "Élevez Votre Présence sur Twitter",
        "twitterFeature1": "<strong>Création de contenu stratégique :</strong> Des tweets, des fils de discussion et du contenu visuel adaptés à la durée d'attention d'aujourd'hui pour vous connecter avec votre public.",
        "twitterFeature2": "<strong>Growth hacking organique :</strong> Des techniques éprouvées pour augmenter authentiquement votre portée et attirer de vrais abonnés dans votre niche.",
        "twitterFeature3": "<strong>Campagnes d'engagement et raids :</strong> Des dynamiques qui augmentent la visibilité et l'interaction sur vos publications.",
        "twitterFeature4": "<strong>Analyses et rapports :</strong> Des informations fréquentes sur les performances de votre compte pour affiner votre stratégie.",
        "twitterProblem1": "« Nos tweets se perdent dans le bruit et n'atteignent pas notre public. »",
        "twitterSolution1": "Nous développons des stratégies de contenu ciblées pour garantir que votre message se démarque.",
        "twitterProblem2": "« Notre nombre d'abonnés stagne. »",
        "twitterSolution2": "Nous mettons en œuvre des stratégies de croissance organique et un contenu de valeur qui attire et fidélise un public authentique.",
        "webDetailTitle": "Nos Services de Sites Web Personnalisés",
        "webDetailIntro": "Votre site web est votre fleuron numérique. Nous concevons et développons des sites web personnalisés qui sont non seulement visuellement impressionnants, mais aussi hautement fonctionnels, intuitifs et optimisés pour la performance. Nous construisons exactement ce dont votre projet a besoin.",
        "webContentTitle": "Des Sites Web Adaptés à Votre Vision",
        "webFeature1": "<strong>Conception sur mesure & UX/UI :</strong> Création d'interfaces visuellement attrayantes et intuitives qui offrent une expérience utilisateur exceptionnelle.",
        "webFeature2": "<strong>Développement responsive & mobile-first :</strong> Assurer que votre site web s'affiche et fonctionne parfaitement sur tous les appareils.",
        "webFeature3": "<strong>Optimisation SEO & performance :</strong> Construire des sites web en pensant à la visibilité sur les moteurs de recherche et à la vitesse.",
        "webFeature4": "<strong>E-commerce & fonctionnalités personnalisées :</strong> Intégration de capacités de boutique en ligne robustes, d'outils personnalisés ou de toute autre fonctionnalité spécifique.",
        "webProblem1": "« Notre site web actuel a l'air démodé et ne représente pas notre marque. »",
        "webSolution1": "Nous concevrons un site web moderne et visuellement attrayant qui capture l'essence de votre marque.",
        "webProblem2": "« Les utilisateurs trouvent notre site web difficile à naviguer. »",
        "webSolution2": "Nous nous concentrons sur une navigation intuitive et une conception centrée sur l'utilisateur pour une expérience transparente.",
        "cryptoSuccessTitle": "Études de Cas : Projets Crypto",
        "cryptoSuccessIntro": "Nous aidons les projets crypto à se développer en offrant un soutien complet : de la construction d'une forte présence sur Twitter et la création d'une identité visuelle unique, au développement de sites web conviviaux, à la croissance de communautés engagées, et à la fourniture de conseils d'experts soutenus par des outils et du code personnalisés.",
        "fenixTitle": "Fenix Finance",
        "fenixDesc": "Nous avons aidé Fenix Finance, anciennement connu sous le nom de Chronos, à construire sa marque principale en créant tout le contenu visuel pour Twitter et Discord, en fournissant des outils et des bots personnalisés, et en réalisant une conversion réelle des utilisateurs grâce à une croissance organique sur Twitter et une modération communautaire complète.",
        "followers": "Abonnés",
        "illustrations": "Illustrations",
        "tokenValueIncrease": "Augmentation de la valeur du jeton",
        "viewOnTwitter": "Voir sur Twitter",
        "carbonTitle": "Carbon Terminal",
        "carbonDesc": "Nous avons aidé Carbon Terminal à s'adapter aux tendances du marché en gérant les tickets de support avec l'IA, en favorisant les partenariats, en déployant des bots personnalisés pour Telegram, et en livrant du contenu mème ainsi que la conception du site web.",
        "followersGained": "Abonnés Gagnés",
        "customBotsCreated": "Bots Personnalisés Créés",
        "illustrationsSent": "Illustrations Envoyées",
        "bizSuccessTitle": "Études de Cas : Croissance d'Entreprise",
        "bizSuccessIntro": "Nous aidons les entreprises locales et en ligne à se développer en créant des sites web personnalisés, en mettant en place des systèmes de vente, en organisant des listes de clients (CRM), en ajoutant des fonctionnalités de boutique en ligne, en utilisant des chatbots et en créant du contenu visuel pour la promotion.",
        "yimTitle": "Young Indian Method",
        "yimDesc": "Nous avons soutenu Young Indian Method avec le marketing des médias sociaux, la création de contenu quotidien, la gestion des clients et des systèmes optimisés pour transformer l'attention en ventes réelles.",
        "conversionRate": "Taux de Conversion",
        "revenueGrowth": "Croissance des Revenus",
        "adSpendROI": "ROI des Dépenses Publicitaires",
        "viewOnTikTok": "Voir sur TikTok",
        "daleTitle": "Dale forma a tu exito",
        "daleDesc": "Nous avons aidé \"Dale forma a tu éxito\" à attirer plus de clients et à fidéliser leur public. Grâce à nos systèmes et à nos stratégies de conversion de clients, ils ont obtenu un retour sur investissement marketing d'au moins 5x.",
        "optimized": "Optimisé",
        "userExperience": "Expérience Utilisateur",
        "portfolioTitleIllu": "Portefeuille d'Illustration",
        "portfolioTitleVideo": "Portefeuille de Montage Vidéo",
        "portfolioTitleComm": "Portefeuille de Gestion de Communauté",
        "portfolioTitleChatter": "Portefeuille de l'Équipe Chatter/Hype",
        "portfolioTitleTwitter": "Portefeuille de Marketing Twitter",
        "portfolioTitleWebsite": "Portefeuille de Sites Web Personnalisés",
        "privacyTitle": "Politique de Confidentialité",
        "lastUpdated": "Dernière mise à jour :",
        "privacyP1": "Chez Fractal Studio, nous apprécions la confiance de tous ceux qui visitent et utilisent notre plateforme. Nous nous engageons à maintenir un environnement professionnel, transparent et sécurisé à tout moment. Cette politique reflète notre dévouement à fournir une expérience claire et responsable à tous les utilisateurs.",
        "privacyP2": "Pour toute question, n'hésitez pas à nous contacter à : fractalcapitalnetwork@gmail.com",
        "termsTitle": "Termes et Conditions",
        "effectiveDate": "Date d'entrée en vigueur :",
        "termsP1": "En utilisant cette plateforme, vous acceptez les termes décrits ci-dessous. Fractal Studio se réserve le droit de modifier, suspendre ou mettre à jour toute partie du site ou de ses services sans préavis. Tout le contenu est protégé et ne peut être réutilisé sans autorisation. L'accès à nos produits et services doit toujours rester juste, légal et respectueux.",
        "termsP2": "Nous nous réservons le droit de limiter ou de suspendre l'accès de tout utilisateur qui enfreint ces termes. Pour obtenir de l'aide ou des renseignements, contactez-nous à fractalcapitalnetwork@gmail.com",
        "footerContact": "Contacter Fractal",
        "footerContactEmail": "fractalcapitalnetwork@gmail.com",
        "footerContactTelegram": "Parlez-nous sur Telegram",
        "footerServices": "Services",
        "footerExpertise": "Expertise",
        "footerCompany": "Entreprise",
        "footerAbout": "À propos",
        "footerCases": "Études de Cas",
        "footerCareers": "Carrières",
        "footerHelp": "Obtenir de l'aide",
        "footerRights": "© 2025 Fractal Studio",
        "footerPrivacy": "Politique de Confidentialité",
        "footerTerms": "Termes et Conditions"
      },
      "hi": {
        "pageTitle": "फ्रैक्टल स्टूडियो",
        "selectLangTitle": "अपनी भाषा चुनें",
        "selectLangPrompt": "जारी रखने के लिए कृपया अपनी पसंदीदा भाषा चुनें।",
        "langBtnEn": "English",
        "langBtnEs": "Español",
        "langBtnHi": "हिन्दी",
        "langBtnRu": "Русский",
        "langBtnPt": "Português",
        "langBtnFr": "Français",
        "introTitle": "फ्रैक्टल स्टूडियो",
        "siteName": "फ्रैक्टल स्टूडियो",
        "navServices": "सेवाएं",
        "navIllu": "चित्रण",
        "navIlluDesc": "कस्टम विजुअल्स और शुभंकर।",
        "navVideo": "वीडियो संपादन",
        "navVideoDesc": "कच्चे फुटेज से आकर्षक कहानियाँ।",
        "navComm": "सामुदायिक प्रबंधन",
        "navCommDesc": "ऑनलाइन समुदायों का निर्माण और प्रबंधन करें।",
        "navChatter": "चैटर/प्रचार टीम",
        "navChatterDesc": "अपने समुदाय को सक्रिय और दृश्यमान रखें।",
        "navTwitter": "ट्विटर मार्केटिंग",
        "navTwitterDesc": "वायरल सामग्री के साथ जुड़ाव बढ़ाएँ।",
        "navWebsite": "कस्टम वेबसाइट",
        "navWebsiteDesc": "दृश्यात्मक रूप से प्रभावशाली और कार्यात्मक साइटें।",
        "navDifference": "अंतर",
        "navExpertise": "विशेषज्ञता",
        "navWeb3": "वेब3 प्रोजेक्ट्स",
        "navWeb3Desc": "क्रिप्टो स्पेस में अपनी परियोजना को आगे बढ़ाएं।",
        "navBusiness": "व्यावसायिक परियोजनाएं",
        "navBusinessDesc": "हमारी डिजिटल सेवाओं के साथ अपना व्यवसाय बढ़ाएँ।",
        "navCases": "मामले",
        "navAbout": "हमारे बारे में",
        "navWorkWithUs": "हमारे साथ काम करें",
        "btnTalkToUs": "हमसे बात करें",
        "heroTitle": "हम <span class=\"highlight\">बाजार के उतार-चढ़ाव</span> से भी तेज निर्माण करते हैं।",
        "heroSubtitle": "हमारे काम ने मीमकोइन्स को वायरल होने, डेफी प्रोटोकॉल को विश्वास अर्जित करने और वेब3 परियोजनाओं को सबसे शोरगुल वाले बाजारों में अलग दिखने में मदद की है।",
        "teaserIlluTitle": "चित्रण",
        "teaserIlluDesc": "हम आपके विचारों को 3डी आर्ट और पिक्सर-शैली से लेकर न्यूनतम डिजाइन तक, किसी भी शैली में कस्टम चित्रों के साथ जीवंत करते हैं।",
        "teaserVideoTitle": "वीडियो संपादन",
        "teaserVideoDesc": "हम कच्चे फुटेज को सम्मोहक कहानियों में बदलते हैं जो दर्शकों को आकर्षित करती हैं और किसी भी मंच पर परिणाम देती हैं।",
        "teaserCommTitle": "सामुदायिक प्रबंधन",
        "teaserCommDesc": "हम गतिशील ऑनलाइन समुदायों का निर्माण और प्रबंधन करते हैं जो जुड़ाव, जैविक विकास और दीर्घकालिक ब्रांड निष्ठा को बढ़ावा देते हैं।",
        "teaserChatterTitle": "चैटर/प्रचार टीम",
        "teaserChatterDesc": "हमारी टीम आपके समुदाय को सक्रिय रखती है, सार्थक बातचीत शुरू करती है, और आपकी परियोजना को दृश्यमान रखने के लिए प्रचार करती है।",
        "teaserTwitterTitle": "ट्विटर मार्केटिंग",
        "teaserTwitterDesc": "हम ऐसी रणनीतियाँ बनाते हैं जो मीम्स और वायरल सामग्री के माध्यम से आपके जुड़ाव को व्यवस्थित रूप से बढ़ाती हैं ताकि आपका ब्रांड अलग दिखे।",
        "teaserWebsiteTitle": "कस्टम वेबसाइट",
        "teaserWebsiteDesc": "आपकी वेबसाइट आपका डिजिटल फ्लैगशिप है। हम कस्टम साइट डिज़ाइन और विकसित करते हैं जो दृश्यात्मक रूप से प्रभावशाली और अत्यधिक कार्यात्मक हैं।",
        "casesLabel": "परिणाम",
        "casesTitle": "उन परियोजनाओं द्वारा विश्वसनीय जिन्हें बाजार से तेज चलने की जरूरत है।",
        "casesDesc": "हमने मीमकोइन्स को वायरल होने, वेब3 परियोजनाओं को विश्वास अर्जित करने और व्यवसायों को अपनी डिजिटल उपस्थिति बढ़ाने में मदद की है। यह देखने के लिए हमारे प्रभावशाली सहयोगों का अन्वेषण करें कि हम कैसे परिणाम देते हैं।",
        "casesBtnCrypto": "क्रिप्टो मामले",
        "casesBtnBusiness": "व्यावसायिक मामले",
        "compareLabel": "तुलना करें",
        "compareTitle": "फ्रैक्टल स्टूडियो का अंतर",
        "compareSubtitle": "डिजिटल दुनिया शोरगुल वाली है। मानक समाधान पर्याप्त नहीं हैं। यहां बताया गया है कि हम वास्तविक मूल्य कैसे प्रदान करते हैं जहां अन्य एजेंसियां ​​कम पड़ जाती हैं।",
        "compareHeaderTypical": "विशिष्ट एजेंसियां",
        "compareHeaderFractal": "फ्रैक्टल स्टूडियो",
        "compareMinus1": "सामान्य टेम्पलेट्स और पुरानी रणनीतियों पर निर्भर करता है।",
        "comparePlus1": "आपके ब्रांड की अनूठी पहचान के अनुरूप कस्टम-डिज़ाइन किए गए समाधान प्रदान करता है।",
        "compareMinus2": "धीमी, नौकरशाही प्रक्रियाएं जो बाजार के अवसरों को चूक जाती हैं।",
        "comparePlus2": "बाजार के उतार-चढ़ाव से तेज निर्माण करता है, गति और चपलता सुनिश्चित करता है।",
        "compareMinus3": "सामुदायिक प्रबंधन को सरल मॉडरेशन के रूप में देखता है।",
        "comparePlus3": "गतिशील समुदाय बनाने के लिए 16 घंटे तक सक्रिय समर्थन और प्रचार दल प्रदान करता है।",
        "compareMinus4": "पसंद और अनुयायियों जैसे व्यर्थ मेट्रिक्स पर ध्यान केंद्रित करता है।",
        "comparePlus4": "वास्तविक व्यावसायिक परिणाम देता है: 5 गुना विज्ञापन खर्च पर आरओआई और 150% राजस्व वृद्धि।",
        "compareMinus5": "ऐसी सामग्री बनाता है जो शोर में खो जाती है।",
        "comparePlus5": "आपके ब्रांड को अलग दिखाने के लिए वायरल सामग्री और जैविक विकास हैकिंग में माहिर है।",
        "portfolioTitle": "हमारा पूरा पोर्टफोलियो",
        "portfolioDesc": "परिणाम? ऐसा काम जो खुद बोलता है। हमारी परियोजनाओं के संपूर्ण संग्रह का अन्वेषण करें।",
        "btnBackToMain": "← मुख्य पर वापस",
        "realProblemsTitle": "वास्तविक समस्याएं। फ्रैक्टल समाधान।",
        "fractalSolution": "फ्रैक्टल समाधान:",
        "illuDetailTitle": "हमारी चित्रण सेवाएं",
        "illuDetailIntro": "हम आपके विचारों को किसी भी शैली में कस्टम चित्रों के साथ जीवंत करते हैं। 3डी आर्ट, पिक्सर-शैली, कार्टून और एनीमे से लेकर तकनीकी या न्यूनतम डिजाइन तक, हम ऐसे दृश्य बनाते हैं जो आपके ब्रांड को दर्शाते हैं। ब्लेंडर, एडोब इलस्ट्रेटर और पेंट टूल साई में कुशल, हम अद्वितीय परिणाम देने के लिए किसी भी अवधारणा या मंच के अनुकूल होते हैं।",
        "illuContentTitle": "चित्रण जो परिवर्तित करता है",
        "illuFeature1": "<strong>हर जरूरत के लिए शैलियाँ:</strong> 3डी तत्व, 3डी वर्ण, कार्टून शैली, पेशेवर और न्यूनतम डिजाइन, अभिव्यंजक व्यंग्य चित्र, अति-यथार्थवाद, मंगा या एनीमे, और लोकप्रिय पिक्सर एनिमेटेड शैली। आप चुनें!",
        "illuFeature2": "<strong>हमारी प्रक्रिया:</strong> हम GIF और एनिमेटेड वीडियो बनाते हैं जो आपके विचारों में गति और व्यक्तित्व जोड़ते हैं।",
        "illuVision": "आपकी दृष्टि हमारा कैनवास है। हम आपके विचार के लिए पूरी तरह से अनुकूल हैं, तेज और उच्च-गुणवत्ता वाले परिणाम देते हैं।",
        "illuProblem1": "“मैं एक उत्पाद लॉन्च कर रहा हूं और मुझे इसे पेशेवर दिखाने की जरूरत है।”.",
        "illuSolution1": "हम सभी प्लेटफार्मों पर ध्यान आकर्षित करने और आपके ब्रांड को मजबूत करने के लिए कस्टम चित्र बनाते हैं।",
        "illuProblem2": "“मुझे अपने ब्रांड के लिए एक शुभंकर चाहिए, लेकिन सामान्य नहीं।”.",
        "illuSolution2": "हम अद्वितीय, पूरी तरह से अनुकूलित ब्रांड शुभंकर डिजाइन करते हैं जो आपकी पहचान और उद्देश्य को दर्शाते हैं।",
        "videoDetailTitle": "हमारी वीडियो संपादन सेवाएं",
        "videoDetailIntro": "हम कच्चे फुटेज को सम्मोहक कहानियों में बदलते हैं। गतिशील प्रचार वीडियो, आकर्षक सोशल मीडिया सामग्री, और पेशेवर कॉर्पोरेट प्रस्तुतियों से लेकर सिनेमाई शैली के परियोजना व्याख्याताओं तक, हम प्रभाव वीडियो वितरित करते हैं जो ध्यान और परिणाम पकड़ते हैं।",
        "videoContentTitle": "वीडियो संपादन जो मोहित करता है",
        "videoFeature1": "<strong>बहुमुखी शैलियाँ:</strong> प्रचार वीडियो, सोशल मीडिया शॉर्ट्स (रील, टिकटॉक), कॉर्पोरेट प्रशिक्षण, एनिमेटेड व्याख्याता, ट्रेंड या मीम्स सामग्री के साथ क्रिप्टो प्रोजेक्ट शोकेस, इवेंट रिकैप्स, और बहुत कुछ।",
        "videoFeature2": "<strong>हमारी प्रक्रिया:</strong> स्टोरीबोर्डिंग और स्क्रिप्ट शोधन से लेकर संपादन, रंग ग्रेडिंग, साउंड डिजाइन और मोशन ग्राफिक्स तक, हम एक सहज और तेज वर्कफ़्लो सुनिश्चित करते हैं।",
        "videoProblem1": "“मेरे पास अनुयायी हैं, लेकिन मुझे ग्राहक नहीं मिल रहे हैं”.",
        "videoSolution1": "हमारे संपादन वायरल होने, अधिकार बनाने और विचारों को वास्तविक ग्राहकों में बदलने के लिए डिज़ाइन किए गए हैं।",
        "videoProblem2": "“मेरी परियोजना की सामग्री एक वीडियो में समझाने के लिए बहुत जटिल है।”.",
        "videoSolution2": "हम जटिल विचारों को स्पष्ट, आकर्षक दृश्यों में बदलने में माहिर हैं।",
        "commDetailTitle": "हमारी सामुदायिक प्रबंधन सेवाएं",
        "commDetailIntro": "हम गतिशील ऑनलाइन समुदायों का निर्माण और प्रबंधन करते हैं जो जुड़ाव, जैविक विकास और दीर्घकालिक ब्रांड निष्ठा को बढ़ावा देते हैं। तकनीकी चर्चाओं को मॉडरेट करने और कार्यक्रमों के आयोजन से लेकर डिस्कॉर्ड, टेलीग्राम और ट्विटर पर साझेदारी और सक्रियणों के समन्वय तक।",
        "commBotsSubtitle": "टेलीग्राम और डिस्कॉर्ड कस्टम बॉट",
        "commContentTitle": "जुड़ाव के माध्यम से सामुदायिक विकास",
        "commFeature1": "<strong>जुड़ाव और गतिविधि रणनीतियाँ:</strong> हम सामुदायिक कार्यक्रम, इंटरैक्टिव अभियान, समन्वित छापे, और 16 घंटे तक की निरंतर दैनिक गतिविधि शामिल करते हैं।",
        "commFeature2": "<strong>मॉडरेशन और समर्थन:</strong> हम सही टूल और स्वचालन प्रणालियों का उपयोग करके एक सुरक्षित और अच्छी तरह से प्रबंधित वातावरण सुनिश्चित करते हैं।",
        "commFeature3": "<strong>कस्टम टूल और बॉट:</strong> हम आपकी आवश्यकताओं के आधार पर पूरी तरह से अनुकूलित बॉट बनाते हैं। आप कार्यों को परिभाषित करते हैं; हम उन्हें विकसित और तैनात करते हैं।",
        "commFeature4": "<strong>रिपोर्ट और अंतर्दृष्टि:</strong> हम विकास, जुड़ाव, और बहुत कुछ पर मेट्रिक्स के साथ नियमित रिपोर्ट देते हैं।",
        "commProblem1": "“मैं एक समुदाय शुरू करना चाहता हूं, लेकिन मेरे पास इसे प्रबंधित करने का समय नहीं है।”.",
        "commSolution1": "हम आपके समुदाय को दैनिक 16 घंटे तक सक्रिय समर्थन के साथ संभालते हैं ताकि आपकी परियोजना तब भी बढ़ती रहे जब आप ऑफ़लाइन हों।",
        "commProblem2": "“बहुत सारे स्कैमर्स हैं, और मुझे एक संरक्षित समुदाय की आवश्यकता है।”.",
        "commSolution2": "हम कस्टम बॉट और सुरक्षा उपकरण बनाते हैं जो आपके समुदाय को 24/7 सुरक्षित रखते हैं।",
        "chatterDetailTitle": "हमारी चैटर/प्रचार टीम सेवाएं",
        "chatterDetailIntro": "हमारी चैटर टीम आपके समुदाय को सक्रिय और व्यस्त रखती है। हम सार्थक बातचीत शुरू करते हैं, प्रचार करते हैं, और आपके चैनलों को गुलजार रखते हैं ताकि आपकी परियोजना दृश्यमान, रोमांचक और जैविक चैटर्स से भरी रहे।",
        "chatterContentTitle": "चर्चा और निरंतर जुड़ाव उत्पन्न करना",
        "chatterFeature1": "<strong>रणनीतिक प्रचार अभियान:</strong> हम लॉन्च, घोषणाओं या प्रमुख घटनाओं से पहले प्रत्याशा बनाने के लिए लक्षित अभियान डिजाइन और निष्पादित करते हैं।",
        "chatterFeature2": "<strong>सक्रिय सामुदायिक जुड़ाव:</strong> हमारी टीम चर्चाओं में सक्रिय रूप से भाग लेती है और किसी भी चयनित मंच पर सकारात्मक माहौल को बढ़ावा देती है।",
        "chatterFeature3": "<strong>लगातार उपस्थिति:</strong> हम यह सुनिश्चित करने के लिए 14 घंटे तक की दैनिक गतिविधि प्रदान करते हैं कि आपका समुदाय हमेशा जीवंत और स्वागत करने वाला दिखे।",
        "chatterProblem1": "“मेरी परियोजना का लॉन्च निकट आ रहा है, लेकिन कोई चर्चा नहीं है।”.",
        "chatterSolution1": "हम इंटरैक्टिव चर्चाएँ बनाते हैं जो प्रत्याशा उत्पन्न करती हैं और सुनिश्चित करती हैं कि आपका लॉन्च सफल हो।",
        "chatterProblem2": "“हमारे सामुदायिक चैनल निष्क्रिय महसूस होते हैं और जुड़ाव कम है।”.",
        "chatterSolution2": "हमारी टीम बातचीत शुरू करने और बातचीत को प्रोत्साहित करने के लिए व्यवस्थित रूप से आपके समुदाय में शामिल होती है।",
        "twitterDetailTitle": "हमारी ट्विटर मार्केटिंग सेवाएं",
        "twitterDetailIntro": "हम ऐसी रणनीतियाँ तैयार करने में माहिर हैं जो मीम्स और वायरल सामग्री के माध्यम से आपकी पोस्ट जुड़ाव को व्यवस्थित रूप से बढ़ाती हैं, आपके ब्रांड की आवाज को बढ़ाती हैं, और वास्तविक बातचीत उत्पन्न करती हैं। वायरल पोस्ट से लेकर पूरी तरह से अनुकूलित अभियानों तक, हम आपकी उपस्थिति को अलग बनाते हैं।",
        "twitterContentTitle": "अपनी ट्विटर उपस्थिति बढ़ाएँ",
        "twitterFeature1": "<strong>रणनीतिक सामग्री निर्माण:</strong> आज के ध्यान अवधि के अनुरूप ट्वीट्स, थ्रेड्स और दृश्य सामग्री आपके दर्शकों से जुड़ने के लिए।",
        "twitterFeature2": "<strong>ऑर्गेनिक ग्रोथ हैकिंग:</strong> आपकी पहुंच को प्रामाणिक रूप से बढ़ाने और आपके आला के भीतर वास्तविक अनुयायियों को आकर्षित करने के लिए सिद्ध तकनीकें।",
        "twitterFeature3": "<strong>जुड़ाव अभियान और छापे:</strong> गतिशीलता जो आपकी पोस्टों में दृश्यता और बातचीत बढ़ाती है।",
        "twitterFeature4": "<strong>एनालिटिक्स और रिपोर्टिंग:</strong> आपकी रणनीति को परिष्कृत करने के लिए आपके खाते के प्रदर्शन में लगातार अंतर्दृष्टि।",
        "twitterProblem1": "“हमारे ट्वीट शोर में खो जाते हैं और हमारे दर्शकों तक नहीं पहुंच रहे हैं।”.",
        "twitterSolution1": "हम यह सुनिश्चित करने के लिए केंद्रित सामग्री रणनीतियाँ विकसित करते हैं कि आपका संदेश अलग दिखे।",
        "twitterProblem2": "“हमारी अनुयायी संख्या स्थिर है।”.",
        "twitterSolution2": "हम जैविक विकास रणनीतियों और मूल्य-चालित सामग्री को लागू करते हैं जो एक वास्तविक दर्शक को आकर्षित और बनाए रखती है।",
        "webDetailTitle": "हमारी कस्टम वेबसाइट सेवाएं",
        "webDetailIntro": "आपकी वेबसाइट आपका डिजिटल फ्लैगशिप है। हम कस्टम वेबसाइट डिजाइन और विकसित करते हैं जो न केवल दृश्यात्मक रूप से प्रभावशाली हैं, बल्कि अत्यधिक कार्यात्मक, सहज और प्रदर्शन-अनुकूलित भी हैं। हम ठीक वही बनाते हैं जो आपकी परियोजना को चाहिए।",
        "webContentTitle": "आपकी दृष्टि के अनुरूप वेबसाइटें",
        "webFeature1": "<strong>बेस्पोक डिजाइन और यूएक्स/यूआई:</strong> दृश्यात्मक रूप से आकर्षक और सहज इंटरफेस बनाना जो एक असाधारण उपयोगकर्ता अनुभव प्रदान करते हैं।",
        "webFeature2": "<strong>उत्तरदायी और मोबाइल-प्रथम विकास:</strong> यह सुनिश्चित करना कि आपकी वेबसाइट सभी उपकरणों पर त्रुटिहीन दिखे और प्रदर्शन करे।",
        "webFeature3": "<strong>एसईओ अनुकूलन और प्रदर्शन:</strong> खोज इंजन दृश्यता और गति को ध्यान में रखकर वेबसाइट बनाना।",
        "webFeature4": "<strong>ई-कॉमर्स और कस्टम कार्यक्षमता:</strong> मजबूत ऑनलाइन स्टोर क्षमताओं, कस्टम टूल, या किसी विशिष्ट सुविधाओं को एकीकृत करना।",
        "webProblem1": "“हमारी वर्तमान वेबसाइट पुरानी दिखती है और हमारे ब्रांड का प्रतिनिधित्व नहीं करती है।”.",
        "webSolution1": "हम एक आधुनिक, दृश्यात्मक रूप से सम्मोहक वेबसाइट डिजाइन करेंगे जो आपके ब्रांड के सार को पकड़ती है।",
        "webProblem2": "“उपयोगकर्ताओं को हमारी वेबसाइट नेविगेट करने में भ्रम होता है।”.",
        "webSolution2": "हम एक सहज अनुभव के लिए सहज ज्ञान युक्त नेविगेशन और उपयोगकर्ता-केंद्रित डिजाइन पर ध्यान केंद्रित करते हैं।",
        "cryptoSuccessTitle": "केस स्टडीज: क्रिप्टो प्रोजेक्ट्स",
        "cryptoSuccessIntro": "हम क्रिप्टो परियोजनाओं को पूर्ण समर्थन प्रदान करके बढ़ने में मदद करते हैं: ट्विटर पर एक मजबूत उपस्थिति बनाने और एक अद्वितीय दृश्य पहचान तैयार करने से लेकर, उपयोगकर्ता के अनुकूल वेबसाइट विकसित करने, लगे हुए समुदायों को बढ़ाने और कस्टम टूल और कोड द्वारा समर्थित विशेषज्ञ मार्गदर्शन प्रदान करने तक।",
        "fenixTitle": "फेनिक्स फाइनेंस",
        "fenixDesc": "हमने फेनिक्स फाइनेंस, जिसे पहले क्रोनोस के नाम से जाना जाता था, को ट्विटर और डिस्कॉर्ड के लिए सभी दृश्य सामग्री बनाकर, कस्टम टूल और बॉट प्रदान करके, और जैविक ट्विटर विकास और पूर्ण सामुदायिक मॉडरेशन के माध्यम से वास्तविक उपयोगकर्ता रूपांतरण प्राप्त करके अपना मुख्य ब्रांड बनाने में मदद की।",
        "followers": "अनुयायी",
        "illustrations": "चित्रण",
        "tokenValueIncrease": "टोकन मूल्य में वृद्धि",
        "viewOnTwitter": "ट्विटर पर देखें",
        "carbonTitle": "कार्बन टर्मिनल",
        "carbonDesc": "हमने कार्बन टर्मिनल को एआई के साथ समर्थन टिकटों का प्रबंधन करके, साझेदारी को बढ़ावा देकर, टेलीग्राम के लिए कस्टम बॉट तैनात करके, और वेबसाइट डिजाइन के साथ-साथ मीम सामग्री वितरित करके बाजार के रुझानों के अनुकूल होने में मदद की।",
        "followersGained": "अनुयायी प्राप्त हुए",
        "customBotsCreated": "कस्टम बॉट बनाए गए",
        "illustrationsSent": "चित्र भेजे गए",
        "bizSuccessTitle": "केस स्टडीज: व्यापार वृद्धि",
        "bizSuccessIntro": "हम स्थानीय और ऑनलाइन व्यवसायों को कस्टम वेबसाइट बनाने, बिक्री प्रणाली स्थापित करने, ग्राहक सूचियों (सीआरएम) को व्यवस्थित करने, ऑनलाइन स्टोर सुविधाएँ जोड़ने, चैटबॉट का उपयोग करने और प्रचार के लिए दृश्य सामग्री बनाने में मदद करते हैं।",
        "yimTitle": "यंग इंडियन मेथड",
        "yimDesc": "हमने यंग इंडियन मेथड को सोशल मीडिया मार्केटिंग, दैनिक सामग्री निर्माण, ग्राहक प्रबंधन और ध्यान को वास्तविक बिक्री में बदलने के लिए अनुकूलित प्रणालियों के साथ समर्थन दिया।",
        "conversionRate": "रूपांतरण दर",
        "revenueGrowth": "राजस्व वृद्धि",
        "adSpendROI": "विज्ञापन खर्च पर आरओआई",
        "viewOnTikTok": "टिकटॉक पर देखें",
        "daleTitle": "Dale forma a tu exito",
        "daleDesc": "हमने \"Dale forma a tu éxito\" को अधिक ग्राहकों को आकर्षित करने और उनके दर्शकों को बनाए रखने में मदद की। हमारी प्रणालियों और ग्राहक रूपांतरण रणनीतियों के लिए धन्यवाद, उन्होंने अपने विपणन निवेश पर कम से कम 5 गुना रिटर्न हासिल किया।",
        "optimized": "अनुकूलित",
        "userExperience": "उपयोगकर्ता अनुभव",
        "portfolioTitleIllu": "चित्रण पोर्टफोलियो",
        "portfolioTitleVideo": "वीडियो संपादन पोर्टफोलियो",
        "portfolioTitleComm": "सामुदायिक प्रबंधन पोर्टफोलIO",
        "portfolioTitleChatter": "चैटर/प्रचार टीम पोर्टफोलियो",
        "portfolioTitleTwitter": "ट्विटर मार्केटिंग पोर्टफोलियो",
        "portfolioTitleWebsite": "कस्टम वेबसाइट पोर्टफोलियो",
        "privacyTitle": "गोपनीयता नीति",
        "lastUpdated": "अंतिम अपडेट:",
        "privacyP1": "फ्रैक्टल स्टूडियो में, हम हर उस व्यक्ति के विश्वास को महत्व देते हैं जो हमारे मंच पर आता है और उसका उपयोग करता है। हम हर समय एक पेशेवर, पारदर्शी और सुरक्षित वातावरण बनाए रखने के लिए प्रतिबद्ध हैं। यह नीति सभी उपयोगकर्ताओं के लिए एक स्पष्ट और जिम्मेदार अनुभव प्रदान करने के प्रति हमारे समर्पण को दर्शाती है।",
        "privacyP2": "किसी भी प्रश्न के लिए, हमसे संपर्क करने में संकोच न करें: fractalcapitalnetwork@gmail.com",
        "termsTitle": "नियम और शर्तें",
        "effectiveDate": "प्रभावी तिथि:",
        "termsP1": "इस प्लेटफ़ॉर्म का उपयोग करके, आप नीचे दिए गए नियमों से सहमत होते हैं। फ्रैक्टल स्टूडियो बिना किसी पूर्व सूचना के साइट या उसकी सेवाओं के किसी भी हिस्से को संशोधित करने, निलंबित करने या अपडेट करने का अधिकार सुरक्षित रखता है। सभी सामग्री सुरक्षित है और बिना अनुमति के इसका पुन: उपयोग नहीं किया जा सकता है। हमारे उत्पादों और सेवाओं तक पहुंच हमेशा निष्पक्ष, कानूनी और सम्मानजनक बनी रहनी चाहिए।",
        "termsP2": "हम इन शर्तों का उल्लंघन करने वाले किसी भी उपयोगकर्ता के लिए पहुंच को सीमित या निलंबित करने का अधिकार सुरक्षित रखते हैं। समर्थन या पूछताछ के लिए, हमसे fractalcapitalnetwork@gmail.com पर संपर्क करें",
        "footerContact": "फ्रैक्टल से संपर्क करें",
        "footerContactEmail": "fractalcapitalnetwork@gmail.com",
        "footerContactTelegram": "टेलीग्राम पर हमसे बात करें",
        "footerServices": "सेवाएं",
        "footerExpertise": "विशेषज्ञता",
        "footerCompany": "कंपनी",
        "footerAbout": "हमारे बारे में",
        "footerCases": "मामले",
        "footerCareers": "करियर",
        "footerHelp": "मदद लें",
        "footerRights": "© 2025 फ्रैक्टल स्टूडियो",
        "footerPrivacy": "गोपनीयता नीति",
        "footerTerms": "नियम और शर्तें"
      },
      "ru": {
        "pageTitle": "Fractal Studio",
        "selectLangTitle": "Выберите ваш язык",
        "selectLangPrompt": "Пожалуйста, выберите предпочитаемый язык для продолжения.",
        "langBtnEn": "English",
        "langBtnEs": "Español",
        "langBtnHi": "हिन्दी",
        "langBtnRu": "Русский",
        "langBtnPt": "Português",
        "langBtnFr": "Français",
        "introTitle": "Fractal Studio",
        "siteName": "Fractal Studio",
        "navServices": "Услуги",
        "navIllu": "Иллюстрация",
        "navIlluDesc": "Пользовательские визуальные эффекты и талисманы.",
        "navVideo": "Видеомонтаж",
        "navVideoDesc": "Увлекательные истории из сырого материала.",
        "navComm": "Управление сообществом",
        "navCommDesc": "Создавайте и управляйте онлайн-сообществами.",
        "navChatter": "Команда по чату/хайпу",
        "navChatterDesc": "Поддерживайте активность и видимость вашего сообщества.",
        "navTwitter": "Маркетинг в Twitter",
        "navTwitterDesc": "Повышайте вовлеченность с помощью вирусного контента.",
        "navWebsite": "Пользовательские сайты",
        "navWebsiteDesc": "Визуально впечатляющие и функциональные сайты.",
        "navDifference": "Разница",
        "navExpertise": "Экспертиза",
        "navWeb3": "Проекты Web3",
        "navWeb3Desc": "Продвигайте свой проект в крипто-пространстве.",
        "navBusiness": "Бизнес-проекты",
        "navBusinessDesc": "Развивайте свой бизнес с помощью наших цифровых услуг.",
        "navCases": "Кейсы",
        "navAbout": "О нас",
        "navWorkWithUs": "работать с нами",
        "btnTalkToUs": "Поговорите с нами",
        "heroTitle": "Мы строим быстрее, чем <span class=\"highlight\">движется рынок.</span>",
        "heroSubtitle": "Наша работа помогла мемкоинам стать вирусными, протоколам DeFi завоевать доверие, а проектам Web3 выделиться на самых шумных рынках.",
        "teaserIlluTitle": "Иллюстрация",
        "teaserIlluDesc": "Мы воплощаем ваши идеи в жизнь с помощью пользовательских иллюстраций в любом стиле, от 3D-арта и стиля Pixar до минималистичного дизайна.",
        "teaserVideoTitle": "Видеомонтаж",
        "teaserVideoDesc": "Мы превращаем сырой материал в захватывающие истории, которые очаровывают аудиторию и приносят результаты на любой платформе.",
        "teaserCommTitle": "Управление сообществом",
        "teaserCommDesc": "Мы создаем и управляем динамичными онлайн-сообществами, которые способствуют вовлеченности, органическому росту и долгосрочной лояльности к бренду.",
        "teaserChatterTitle": "Команда по чату/хайпу",
        "teaserChatterDesc": "Наша команда поддерживает активность вашего сообщества, инициирует содержательные беседы и создает ажиотаж, чтобы ваш проект оставался на виду.",
        "teaserTwitterTitle": "Маркетинг в Twitter",
        "teaserTwitterDesc": "Мы разрабатываем стратегии, которые органично повышают вашу вовлеченность с помощью мемов и вирусного контента, чтобы ваш бренд выделялся.",
        "teaserWebsiteTitle": "Пользовательские сайты",
        "teaserWebsiteDesc": "Ваш сайт - ваш цифровой флагман. Мы проектируем и разрабатываем индивидуальные сайты, которые визуально впечатляют и очень функциональны.",
        "casesLabel": "Результаты",
        "casesTitle": "Нам доверяют проекты, которым нужно двигаться быстрее рынка.",
        "casesDesc": "Мы помогли мемкоинам стать вирусными, проектам Web3 завоевать доверие, а компаниям - развить свое цифровое присутствие. Изучите наши впечатляющие сотрудничества, чтобы увидеть, как мы достигаем результатов.",
        "casesBtnCrypto": "Крипто-кейсы",
        "casesBtnBusiness": "Бизнес-кейсы",
        "compareLabel": "Сравнить",
        "compareTitle": "Разница Fractal Studio",
        "compareSubtitle": "Цифровой мир шумный. Стандартных решений недостаточно. Вот как мы обеспечиваем реальную ценность там, где другие агентства терпят неудачу.",
        "compareHeaderTypical": "Типичные агентства",
        "compareHeaderFractal": "Fractal Studio",
        "compareMinus1": "Полагается на общие шаблоны и устаревшие стратегии.",
        "comparePlus1": "Предоставляет индивидуальные решения, адаптированные к уникальной идентичности вашего бренда.",
        "compareMinus2": "Медленные, бюрократические процессы, упускающие рыночные возможности.",
        "comparePlus2": "Строит быстрее, чем движется рынок, обеспечивая скорость и гибкость.",
        "compareMinus3": "Рассматривает управление сообществом как простую модерацию.",
        "comparePlus3": "Предоставляет до 16 часов активной поддержки и команды по хайпу для создания динамичных сообществ.",
        "compareMinus4": "Сосредотачивается на показателях тщеславия, таких как лайки и подписчики.",
        "comparePlus4": "Обеспечивает реальные бизнес-результаты: 5-кратный ROI на рекламные расходы и 150% рост выручки.",
        "compareMinus5": "Создает контент, который теряется в шуме.",
        "comparePlus5": "Специализируется на вирусном контенте и органическом взломе роста, чтобы ваш бренд выделялся.",
        "portfolioTitle": "Наше полное портфолио",
        "portfolioDesc": "Результат? Работа, которая говорит сама за себя. Ознакомьтесь с нашей полной коллекцией проектов.",
        "btnBackToMain": "← Назад к главному",
        "realProblemsTitle": "Реальные проблемы. Фрактальные решения.",
        "fractalSolution": "Фрактальное решение:",
        "illuDetailTitle": "Наши услуги по иллюстрации",
        "illuDetailIntro": "Мы воплощаем ваши идеи в жизнь с помощью пользовательских иллюстраций в любом стиле. От 3D-арта, стиля Pixar, мультфильмов и аниме до технических или минималистичных дизайнов, мы создаем визуальные эффекты, которые отражают ваш бренд. Владея Blender, Adobe Illustrator и Paint Tool SAI, мы адаптируемся к любой концепции или платформе для достижения уникальных результатов.",
        "illuContentTitle": "Иллюстрация, которая конвертирует",
        "illuFeature1": "<strong>Стили на любой вкус:</strong> 3D-элементы, 3D-персонажи, мультяшный стиль, профессиональные и минималистичные дизайны, выразительные карикатуры, ультрареализм, манга или аниме, а также популярный анимационный стиль Pixar. Выбирайте!",
        "illuFeature2": "<strong>Наш процесс:</strong> Мы создаем GIF-файлы и анимационные видеоролики, которые добавляют движение и индивидуальность вашим идеям.",
        "illuVision": "Ваше видение - наш холст. Мы полностью адаптируемся к вашей идее, обеспечивая быстрые и высококачественные результаты.",
        "illuProblem1": "«Я запускаю продукт, и мне нужно, чтобы он выглядел профессионально».",
        "illuSolution1": "Мы создаем пользовательские иллюстрации, чтобы привлечь внимание и укрепить ваш бренд на всех платформах.",
        "illuProblem2": "«Я хочу талисман для своего бренда, но не стандартный».",
        "illuSolution2": "Мы разрабатываем уникальные, полностью настраиваемые талисманы бренда, которые отражают вашу индивидуальность и цель.",
        "videoDetailTitle": "Наши услуги по видеомонтажу",
        "videoDetailIntro": "Мы превращаем сырой материал в захватывающие истории. От динамичных рекламных видеороликов, увлекательного контента для социальных сетей и профессиональных корпоративных презентаций до объяснений проектов в кинематографическом стиле, мы создаем впечатляющие видеоролики, которые привлекают внимание и приносят результаты.",
        "videoContentTitle": "Видеомонтаж, который захватывает",
        "videoFeature1": "<strong>Универсальные стили:</strong> Рекламные видеоролики, короткие видео для социальных сетей (Reels, TikToks), корпоративное обучение, анимированные объяснения, демонстрация крипто-проектов с трендами или мемами, обзоры событий и многое другое.",
        "videoFeature2": "<strong>Наш процесс:</strong> От раскадровки и доработки сценария до монтажа, цветокоррекции, звукового дизайна и моушн-графики, мы обеспечиваем бесперебойный и БЫСТРЫЙ рабочий процесс.",
        "videoProblem1": "«У меня есть подписчики, но нет клиентов».",
        "videoSolution1": "Наши правки предназначены для того, чтобы стать вирусными, укрепить авторитет и превратить просмотры в реальных клиентов.",
        "videoProblem2": "«Содержание моего проекта слишком сложно объяснить в видео».",
        "videoSolution2": "Мы специализируемся на превращении сложных идей в четкие, увлекательные визуальные эффекты.",
        "commDetailTitle": "Наши услуги по управлению сообществом",
        "commDetailIntro": "Мы создаем и управляем динамичными онлайн-сообществами, которые способствуют вовлеченности, органическому росту и долгосрочной лояльности к бренду. От модерации технических обсуждений и организации мероприятий до координации партнерств и активаций в Discord, Telegram и Twitter.",
        "commBotsSubtitle": "Пользовательские боты для Telegram и Discord",
        "commContentTitle": "Рост сообщества через вовлечение",
        "commFeature1": "<strong>Стратегии вовлечения и активности:</strong> Мы включаем мероприятия сообщества, интерактивные кампании, скоординированные рейды и постоянную ежедневную активность до 16 часов.",
        "commFeature2": "<strong>Модерация и поддержка:</strong> Мы обеспечиваем безопасную и хорошо управляемую среду, используя правильные инструменты и системы автоматизации.",
        "commFeature3": "<strong>Пользовательские инструменты и боты:</strong> Мы создаем полностью настраиваемых ботов в соответствии с вашими потребностями. Вы определяете функции; мы их разрабатываем и развертываем.",
        "commFeature4": "<strong>Отчеты и аналитика:</strong> Мы предоставляем регулярные отчеты с показателями роста, вовлеченности и т.д.",
        "commProblem1": "«Я хочу создать сообщество, но у меня нет времени им управлять».",
        "commSolution1": "Мы управляем вашим сообществом с активной поддержкой до 16 часов в день, чтобы ваш проект рос, даже когда вы не в сети.",
        "commProblem2": "«Слишком много мошенников, и мне нужно защищенное сообщество».",
        "commSolution2": "Мы создаем пользовательских ботов и инструменты безопасности, которые защищают ваше сообщество 24/7.",
        "chatterDetailTitle": "Услуги нашей команды по чату/хайпу",
        "chatterDetailIntro": "Наша команда по чату поддерживает активность и вовлеченность вашего сообщества. Мы инициируем содержательные беседы, создаем ажиотаж и поддерживаем активность ваших каналов, чтобы ваш проект оставался заметным, захватывающим и полным органичных участников чата.",
        "chatterContentTitle": "Создание ажиотажа и устойчивого вовлечения",
        "chatterFeature1": "<strong>Стратегические кампании по созданию ажиотажа:</strong> Мы разрабатываем и проводим целевые кампании для создания ожидания перед запусками, объявлениями или крупными событиями.",
        "chatterFeature2": "<strong>Активное вовлечение сообщества:</strong> Наша команда активно участвует в обсуждениях и способствует созданию позитивной атмосферы на любой выбранной платформе.",
        "chatterFeature3": "<strong>Постоянное присутствие:</strong> Мы обеспечиваем до 14 часов ежедневной активности, чтобы ваше сообщество всегда выглядело живым и гостеприимным.",
        "chatterProblem1": "«Приближается запуск моего проекта, но нет никакого ажиотажа».",
        "chatterSolution1": "Мы создаем интерактивные обсуждения, которые вызывают ожидание и обеспечивают успех вашего запуска.",
        "chatterProblem2": "«Наши каналы сообщества кажутся неактивными, а вовлеченность низкая».",
        "chatterSolution2": "Наша команда органично присоединяется к вашему сообществу, чтобы инициировать разговоры и поощрять взаимодействие.",
        "twitterDetailTitle": "Наши услуги по маркетингу в Twitter",
        "twitterDetailIntro": "Мы специализируемся на разработке стратегий, которые органично повышают вовлеченность ваших постов с помощью мемов и вирусного контента, усиливают голос вашего бренда и генерируют реальное взаимодействие. От вирусных постов до полностью настраиваемых кампаний, мы делаем ваше присутствие заметным.",
        "twitterContentTitle": "Повысьте свое присутствие в Twitter",
        "twitterFeature1": "<strong>Стратегическое создание контента:</strong> Твиты, треды и визуальный контент, адаптированные к современному уровню внимания, для связи с вашей аудиторией.",
        "twitterFeature2": "<strong>Органический взлом роста:</strong> Проверенные методы для аутентичного увеличения вашего охвата и привлечения реальных подписчиков в вашей нише.",
        "twitterFeature3": "<strong>Кампании по вовлечению и рейды:</strong> Динамика, которая увеличивает видимость и взаимодействие с вашими постами.",
        "twitterFeature4": "<strong>Аналитика и отчетность:</strong> Частые аналитические данные о производительности вашего аккаунта для уточнения вашей стратегии.",
        "twitterProblem1": "«Наши твиты теряются в шуме и не доходят до нашей аудитории».",
        "twitterSolution1": "Мы разрабатываем целенаправленные стратегии контента, чтобы ваше сообщение выделялось.",
        "twitterProblem2": "«Число наших подписчиков не растет».",
        "twitterSolution2": "Мы внедряем стратегии органического роста и ценностный контент, который привлекает и удерживает подлинную аудиторию.",
        "webDetailTitle": "Наши услуги по созданию пользовательских сайтов",
        "webDetailIntro": "Ваш сайт - ваш цифровой флагман. Мы проектируем и разрабатываем пользовательские сайты, которые не только визуально впечатляют, но и очень функциональны, интуитивно понятны и оптимизированы для производительности. Мы создаем именно то, что нужно вашему проекту.",
        "webContentTitle": "Сайты, адаптированные под ваше видение",
        "webFeature1": "<strong>Индивидуальный дизайн и UX/UI:</strong> Создание визуально привлекательных и интуитивно понятных интерфейсов, обеспечивающих исключительный пользовательский опыт.",
        "webFeature2": "<strong>Адаптивная и мобильно-ориентированная разработка:</strong> Обеспечение безупречного внешнего вида и производительности вашего сайта на всех устройствах.",
        "webFeature3": "<strong>SEO-оптимизация и производительность:</strong> Создание сайтов с учетом видимости в поисковых системах и скорости.",
        "webFeature4": "<strong>Электронная коммерция и пользовательская функциональность:</strong> Интеграция надежных возможностей интернет-магазина, пользовательских инструментов или любых специфических функций.",
        "webProblem1": "«Наш текущий сайт выглядит устаревшим и не представляет наш бренд».",
        "webSolution1": "Мы разработаем современный, визуально привлекательный сайт, который отражает суть вашего бренда.",
        "webProblem2": "«Пользователям сложно ориентироваться на нашем сайте».",
        "webSolution2": "Мы уделяем особое внимание интуитивно понятной навигации и ориентированному на пользователя дизайну для обеспечения бесперебойного опыта.",
        "cryptoSuccessTitle": "Кейсы: Крипто-проекты",
        "cryptoSuccessIntro": "Мы помогаем крипто-проектам расти, предлагая полную поддержку: от создания сильного присутствия в Twitter и разработки уникальной визуальной идентичности до создания удобных веб-сайтов, развития вовлеченных сообществ и предоставления экспертных рекомендаций, подкрепленных пользовательскими инструментами и кодом.",
        "fenixTitle": "Fenix Finance",
        "fenixDesc": "Мы помогли Fenix Finance, ранее известному как Chronos, создать свой основной бренд, создав весь визуальный контент для Twitter и Discord, предоставив пользовательские инструменты и ботов, и достигнув реальной конверсии пользователей за счет органического роста в Twitter и полной модерации сообщества.",
        "followers": "Подписчики",
        "illustrations": "Иллюстрации",
        "tokenValueIncrease": "Рост стоимости токена",
        "viewOnTwitter": "Посмотреть в Twitter",
        "carbonTitle": "Carbon Terminal",
        "carbonDesc": "Мы помогли Carbon Terminal адаптироваться к рыночным тенденциям, управляя заявками в службу поддержки с помощью ИИ, развивая партнерские отношения, развертывая пользовательских ботов для Telegram и предоставляя мем-контент наряду с дизайном веб-сайта.",
        "followersGained": "Прирост подписчиков",
        "customBotsCreated": "Создано пользовательских ботов",
        "illustrationsSent": "Отправлено иллюстраций",
        "bizSuccessTitle": "Кейсы: Рост бизнеса",
        "bizSuccessIntro": "Мы помогаем местным и онлайн-бизнесам расти, создавая пользовательские веб-сайты, настраивая системы продаж, организуя списки клиентов (CRM), добавляя функции интернет-магазинов, используя чат-ботов и создавая визуальный контент для продвижения.",
        "yimTitle": "Young Indian Method",
        "yimDesc": "Мы поддержали Young Indian Method маркетингом в социальных сетях, ежедневным созданием контента, управлением клиентами и оптимизированными системами для превращения внимания в реальные продажи.",
        "conversionRate": "Коэффициент конверсии",
        "revenueGrowth": "Рост выручки",
        "adSpendROI": "ROI на рекламные расходы",
        "viewOnTikTok": "Посмотреть в TikTok",
        "daleTitle": "Dale forma a tu exito",
        "daleDesc": "Мы помогли «Dale forma a tu éxito» привлечь больше клиентов и удержать их аудиторию. Благодаря нашим системам и стратегиям конверсии клиентов они достигли как минимум 5-кратного возврата инвестиций в маркетинг.",
        "optimized": "Оптимизировано",
        "userExperience": "Пользовательский опыт",
        "portfolioTitleIllu": "Портфолио иллюстраций",
        "portfolioTitleVideo": "Портфолио видеомонтажа",
        "portfolioTitleComm": "Портфолио по управлению сообществом",
        "portfolioTitleChatter": "Портфолио команды по чату/хайпу",
        "portfolioTitleTwitter": "Портфолио по маркетингу в Twitter",
        "portfolioTitleWebsite": "Портфолио пользовательских сайтов",
        "privacyTitle": "Политика конфиденциальности",
        "lastUpdated": "Последнее обновление:",
        "privacyP1": "В Fractal Studio мы ценим доверие каждого, кто посещает и использует нашу платформу. Мы стремимся поддерживать профессиональную, прозрачную и безопасную среду в любое время. Эта политика отражает нашу приверженность обеспечению ясного и ответственного опыта для всех пользователей.",
        "privacyP2": "По любым вопросам обращайтесь к нам по адресу: fractalcapitalnetwork@gmail.com",
        "termsTitle": "Условия и положения",
        "effectiveDate": "Дата вступления в силу:",
        "termsP1": "Используя эту платформу, вы соглашаетесь с изложенными ниже условиями. Fractal Studio оставляет за собой право изменять, приостанавливать или обновлять любую часть сайта или его услуг без предварительного уведомления. Весь контент защищен и не может быть использован повторно без разрешения. Доступ к нашим продуктам и услугам всегда должен оставаться справедливым, законным и уважительным.",
        "termsP2": "Мы оставляем за собой право ограничивать или приостанавливать доступ для любого пользователя, нарушающего эти условия. Для поддержки или запросов свяжитесь с нами по адресу fractalcapitalnetwork@gmail.com",
        "footerContact": "Связаться с Fractal",
        "footerContactEmail": "fractalcapitalnetwork@gmail.com",
        "footerContactTelegram": "Поговорите с нами в Telegram",
        "footerServices": "Услуги",
        "footerExpertise": "Экспертиза",
        "footerCompany": "Компания",
        "footerAbout": "О нас",
        "footerCases": "Кейсы",
        "footerCareers": "Карьера",
        "footerHelp": "Получить помощь",
        "footerRights": "© 2025 Fractal Studio",
        "footerPrivacy": "Политика конфиденциальности",
        "footerTerms": "Условия и положения"
      },
      "pt": {
        "pageTitle": "Fractal Studio",
        "selectLangTitle": "Selecione o seu idioma",
        "selectLangPrompt": "Por favor, escolha o seu idioma preferido para continuar.",
        "langBtnEn": "English",
        "langBtnEs": "Español",
        "langBtnHi": "हिन्दी",
        "langBtnRu": "Русский",
        "langBtnPt": "Português",
        "langBtnFr": "Français",
        "introTitle": "Fractal Studio",
        "siteName": "Fractal Studio",
        "navServices": "Serviços",
        "navIllu": "Ilustração",
        "navIlluDesc": "Visuais e mascotes personalizados.",
        "navVideo": "Edição de Vídeo",
        "navVideoDesc": "Histórias envolventes a partir de filmagens brutas.",
        "navComm": "Gestão de Comunidade",
        "navCommDesc": "Construa e gira comunidades online.",
        "navChatter": "Equipa de Chatter/Hype",
        "navChatterDesc": "Mantenha a sua comunidade ativa e visível.",
        "navTwitter": "Marketing no Twitter",
        "navTwitterDesc": "Aumente o engajamento com conteúdo viral.",
        "navWebsite": "Sites Personalizados",
        "navWebsiteDesc": "Sites visualmente impressionantes e funcionais.",
        "navDifference": "A Diferença",
        "navExpertise": "Experiência",
        "navWeb3": "Projetos Web3",
        "navWeb3Desc": "Impulsione o seu projeto no espaço cripto.",
        "navBusiness": "Projetos Empresariais",
        "navBusinessDesc": "Faça crescer o seu negócio com os nossos serviços digitais.",
        "navCases": "Casos",
        "navAbout": "Sobre",
        "navWorkWithUs": "trabalhe connosco",
        "btnTalkToUs": "Fale connosco",
        "heroTitle": "Construímos mais rápido do que o <span class=\"highlight\">mercado se move.</span>",
        "heroSubtitle": "O nosso trabalho ajudou memecoins a tornarem-se virais, protocolos DeFi a ganhar confiança e projetos Web3 a destacarem-se nos mercados mais ruidosos.",
        "teaserIlluTitle": "Ilustração",
        "teaserIlluDesc": "Damos vida às suas ideias com ilustrações personalizadas em qualquer estilo, desde Arte 3D e estilo Pixar a designs minimalistas.",
        "teaserVideoTitle": "Edição de Vídeo",
        "teaserVideoDesc": "Transformamos filmagens brutas em histórias convincentes que cativam o público e geram resultados em qualquer plataforma.",
        "teaserCommTitle": "Gestão de Comunidade",
        "teaserCommDesc": "Construímos e gerimos comunidades online dinâmicas que impulsionam o engajamento, o crescimento orgânico e a lealdade à marca a longo prazo.",
        "teaserChatterTitle": "Equipa de Chatter/Hype",
        "teaserChatterDesc": "A nossa equipa mantém a sua comunidade ativa, gera conversas significativas e cria entusiasmo para manter o seu projeto visível.",
        "teaserTwitterTitle": "Marketing no Twitter",
        "teaserTwitterDesc": "Criamos estratégias que aumentam o seu engajamento organicamente através de memes e conteúdo viral para que a sua marca se destaque.",
        "teaserWebsiteTitle": "Sites Personalizados",
        "teaserWebsiteDesc": "O seu site é a sua bandeira digital. Desenhamos e desenvolvemos sites personalizados que são visualmente impressionantes e altamente funcionais.",
        "casesLabel": "Resultados",
        "casesTitle": "Aprovado por projetos que precisam de se mover mais rápido que o mercado.",
        "casesDesc": "Ajudámos memecoins a tornarem-se virais, projetos Web3 a ganhar confiança e empresas a expandir a sua presença digital. Explore as nossas colaborações de impacto para ver como entregamos resultados.",
        "casesBtnCrypto": "Casos Cripto",
        "casesBtnBusiness": "Casos de Negócios",
        "compareLabel": "Compare",
        "compareTitle": "A Diferença do Fractal Studio",
        "compareSubtitle": "O mundo digital é barulhento. As soluções padrão não são suficientes. Veja como fornecemos valor real onde outras agências falham.",
        "compareHeaderTypical": "Agências Típicas",
        "compareHeaderFractal": "Fractal Studio",
        "compareMinus1": "Baseia-se em modelos genéricos e estratégias desatualizadas.",
        "comparePlus1": "Entrega soluções personalizadas e adaptadas à identidade única da sua marca.",
        "compareMinus2": "Processos lentos e burocráticos que perdem oportunidades de mercado.",
        "comparePlus2": "Constrói mais rápido do que o mercado se move, garantindo velocidade e agilidade.",
        "compareMinus3": "Vê a gestão da comunidade como simples moderação.",
        "comparePlus3": "Fornece até 16 horas de suporte ativo e equipas de Hype para criar comunidades dinâmicas.",
        "compareMinus4": "Foca-se em métricas de vaidade como gostos e seguidores.",
        "comparePlus4": "Gera resultados de negócio reais: 5x de ROI em publicidade e 150% de crescimento de receita.",
        "compareMinus5": "Cria conteúdo que se perde no ruído.",
        "comparePlus5": "Especializa-se em conteúdo viral e 'growth hacking' orgânico para destacar a sua marca.",
        "portfolioTitle": "O Nosso Portfólio Completo",
        "portfolioDesc": "O resultado? Um trabalho que fala por si. Explore a nossa coleção completa de projetos.",
        "btnBackToMain": "← Voltar ao Início",
        "realProblemsTitle": "Problemas Reais. Soluções Fractais.",
        "fractalSolution": "Solução Fractal:",
        "illuDetailTitle": "Os Nossos Serviços de Ilustração",
        "illuDetailIntro": "Damos vida às suas ideias com ilustrações personalizadas em qualquer estilo. Desde Arte 3D, estilo Pixar, Cartoon e anime, a designs tecnológicos ou minimalistas, criamos visuais que refletem a sua marca. Com competências em Blender, Adobe Illustrator e Paint Tool SAI, adaptamo-nos a qualquer conceito ou plataforma para entregar resultados únicos.",
        "illuContentTitle": "Ilustração que Converte",
        "illuFeature1": "<strong>Estilos para todas as necessidades:</strong> Elementos 3D, personagens 3D, estilo cartoon, designs profissionais e minimalistas, caricaturas expressivas, ultrarrealismo, manga ou anime, e o popular estilo animado da Pixar. Você escolhe!",
        "illuFeature2": "<strong>O nosso processo:</strong> Criamos GIFs e vídeos animados que adicionam movimento e personalidade às suas ideias.",
        "illuVision": "A sua visão é a nossa tela. Adaptamo-nos totalmente à sua ideia, entregando resultados rápidos e de alta qualidade.",
        "illuProblem1": "“Estou a lançar um produto e preciso que pareça profissional.”",
        "illuSolution1": "Criamos ilustrações personalizadas para captar a atenção e fortalecer a sua marca em todas as plataformas.",
        "illuProblem2": "“Quero uma mascote para a minha marca, mas que não seja genérica.”",
        "illuSolution2": "Desenhamos mascotes de marca únicas e totalmente personalizadas que refletem a sua identidade e propósito.",
        "videoDetailTitle": "Os Nossos Serviços de Edição de Vídeo",
        "videoDetailIntro": "Transformamos filmagens brutas em histórias convincentes. Desde vídeos promocionais dinâmicos, conteúdo envolvente para redes sociais e apresentações corporativas profissionais até explicadores de projetos de estilo cinematográfico, entregamos vídeos de impacto que captam a atenção e os resultados.",
        "videoContentTitle": "Edição de Vídeo que Cativa",
        "videoFeature1": "<strong>Estilos versáteis:</strong> Vídeos promocionais, curtas para redes sociais (Reels, TikToks), formação corporativa, explicadores animados, showcases de projetos cripto com conteúdo de tendências ou memes, resumos de eventos e mais.",
        "videoFeature2": "<strong>O nosso processo:</strong> Do storyboard e refinamento do roteiro à edição, color grading, design de som e motion graphics, garantimos um fluxo de trabalho rápido e contínuo.",
        "videoProblem1": "“Tenho seguidores, mas não consigo clientes.”",
        "videoSolution1": "As nossas edições são projetadas para se tornarem virais, construir autoridade e converter visualizações em clientes reais.",
        "videoProblem2": "“O conteúdo do meu projeto é demasiado complexo para explicar num vídeo.”",
        "videoSolution2": "Somos especialistas em transformar ideias complexas em visuais claros e envolventes.",
        "commDetailTitle": "Os Nossos Serviços de Gestão de Comunidade",
        "commDetailIntro": "Construímos e gerimos comunidades online dinâmicas que impulsionam o engajamento, o crescimento orgânico e a lealdade à marca a longo prazo. Desde a moderação de discussões técnicas e organização de eventos até à coordenação de parcerias e ativações no Discord, Telegram e Twitter.",
        "commBotsSubtitle": "Bots Personalizados para Telegram e Discord",
        "commContentTitle": "Crescimento da Comunidade através do Engajamento",
        "commFeature1": "<strong>Estratégias de engajamento e atividade:</strong> Incluímos eventos comunitários, campanhas interativas, raids coordenados e atividade diária consistente por até 16 horas.",
        "commFeature2": "<strong>Moderação e suporte:</strong> Garantimos um ambiente seguro e bem gerido utilizando as ferramentas e sistemas de automação adequados.",
        "commFeature3": "<strong>Ferramentas e bots personalizados:</strong> Construímos bots totalmente adaptados às suas necessidades. Você define as funções; nós as desenvolvemos e implementamos.",
        "commFeature4": "<strong>Relatórios e insights:</strong> Entregamos relatórios periódicos com métricas sobre crescimento, engajamento e mais.",
        "commProblem1": "“Quero iniciar uma comunidade, mas não tenho tempo para a gerir.”",
        "commSolution1": "Gerimos a sua comunidade com até 16 horas de suporte ativo diário para que o seu projeto cresça mesmo quando está offline.",
        "commProblem2": "“Existem demasiados burlões e preciso de uma comunidade protegida.”",
        "commSolution2": "Construímos bots e ferramentas de segurança personalizados que protegem a sua comunidade 24/7.",
        "chatterDetailTitle": "Os Nossos Serviços de Equipa de Chatter/Hype",
        "chatterDetailIntro": "A nossa equipa de Chatter mantém a sua comunidade ativa e envolvida. Iniciamos conversas significativas, criamos entusiasmo e mantemos os seus canais ativos para que o seu projeto se mantenha visível, emocionante e cheio de conversadores orgânicos.",
        "chatterContentTitle": "Gerando Interesse e Envolvimento Sustentado",
        "chatterFeature1": "<strong>Campanhas de Hype estratégicas:</strong> Desenhamos e executamos campanhas dirigidas para gerar antecipação antes de lançamentos, anúncios ou eventos importantes.",
        "chatterFeature2": "<strong>Participação ativa da comunidade:</strong> A nossa equipa participa ativamente nas discussões e fomenta uma atmosfera positiva em qualquer plataforma selecionada.",
        "chatterFeature3": "<strong>Presença constante:</strong> Proporcionamos até 14 horas de atividade diária para garantir que a sua comunidade pareça sempre viva e acolhedora.",
        "chatterProblem1": "“O lançamento do meu projeto aproxima-se, mas não há interesse.”",
        "chatterSolution1": "Criamos discussões interativas que geram antecipação e asseguram que o seu lançamento seja um sucesso.",
        "chatterProblem2": "“Os nossos canais comunitários parecem inativos e o envolvimento é baixo.”",
        "chatterSolution2": "A nossa equipa junta-se à sua comunidade de forma orgânica para iniciar conversas e incentivar a interação.",
        "twitterDetailTitle": "Os Nossos Serviços de Marketing no Twitter",
        "twitterDetailIntro": "Somos especialistas na criação de estratégias que impulsionam a participação das suas publicações de forma orgânica através de memes e conteúdo viral, amplificam a voz da sua marca e geram interação real. Desde publicações virais até campanhas totalmente personalizadas, fazemos com que a sua presença se destaque.",
        "twitterContentTitle": "Eleve a Sua Presença no Twitter",
        "twitterFeature1": "<strong>Criação de conteúdo estratégico:</strong> Tweets, threads e conteúdo visual adaptados à capacidade de atenção atual para conectar com a sua audiência.",
        "twitterFeature2": "<strong>Growth hacking orgânico:</strong> Técnicas comprovadas para aumentar autenticamente o seu alcance e atrair seguidores reais dentro do seu nicho.",
        "twitterFeature3": "<strong>Campanhas de interação e raids:</strong> Dinâmicas que aumentam a visibilidade e a interação nas suas publicações.",
        "twitterFeature4": "<strong>Análise e relatórios:</strong> Informação frequente sobre o desempenho da sua conta para refinar a sua estratégia.",
        "twitterProblem1": "“Os nossos tweets perdem-se no ruído e não chegam à nossa audiência.”",
        "twitterSolution1": "Desenvolvemos estratégias de conteúdo focadas para garantir que a sua mensagem se destaque.",
        "twitterProblem2": "“O nosso número de seguidores está estagnado.”",
        "twitterSolution2": "Implementamos estratégias de crescimento orgânico e conteúdo de valor que atrai e retém uma audiência genuína.",
        "webDetailTitle": "Os Nossos Serviços de Sites Personalizados",
        "webDetailIntro": "O seu site é a sua bandeira digital. Desenhamos e desenvolvemos sites personalizados que não são apenas visualmente impressionantes, mas também altamente funcionais, intuitivos e otimizados para o desempenho. Construímos exatamente o que o seu projeto necessita.",
        "webContentTitle": "Sites à Medida da Sua Visão",
        "webFeature1": "<strong>Design à medida e UX/UI:</strong> Criando interfaces visualmente atraentes e intuitivas que proporcionam uma experiência de utilizador excecional.",
        "webFeature2": "<strong>Desenvolvimento responsivo e mobile-first:</strong> Assegurando que o seu site tenha uma aparência e um desempenho perfeitos em todos os dispositivos.",
        "webFeature3": "<strong>Otimização SEO e desempenho:</strong> Construindo sites com a visibilidade nos motores de busca e a velocidade em mente.",
        "webFeature4": "<strong>E-commerce e funcionalidade personalizada:</strong> Integrando sólidas capacidades de loja online, ferramentas personalizadas ou quaisquer características específicas.",
        "webProblem1": "“O nosso site atual parece antiquado e não representa a nossa marca.”",
        "webSolution1": "Desenvolveremos um site moderno e visualmente atraente que capture a essência da sua marca.",
        "webProblem2": "“Os utilizadores acham o nosso site confuso de navegar.”",
        "webSolution2": "Focamo-nos na navegação intuitiva e no design centrado no utilizador para uma experiência sem interrupções.",
        "cryptoSuccessTitle": "Estudos de Caso: Projetos Cripto",
        "cryptoSuccessIntro": "Ajudamos os projetos de criptomoedas a crescer oferecendo um suporte completo: desde a construção de uma forte presença no Twitter e a criação de uma identidade visual única, até ao desenvolvimento de sites fáceis de usar, ao crescimento de comunidades empenhadas e à orientação especializada apoiada por ferramentas e código personalizados.",
        "fenixTitle": "Fenix Finance",
        "fenixDesc": "Ajudámos a Fenix Finance, anteriormente conhecida como Chronos, a construir a sua marca principal criando todo o conteúdo visual para o Twitter e Discord, fornecendo ferramentas e bots personalizados, e alcançando a conversão real de utilizadores através do crescimento orgânico do Twitter e da moderação completa da comunidade.",
        "followers": "Seguidores",
        "illustrations": "Ilustrações",
        "tokenValueIncrease": "Aumento do Valor do Token",
        "viewOnTwitter": "Ver no Twitter",
        "carbonTitle": "Carbon Terminal",
        "carbonDesc": "Ajudámos o Carbon Terminal a adaptar-se às tendências do mercado gerindo tickets de suporte com IA, fomentando parcerias, implementando bots personalizados para o Telegram e entregando conteúdo de memes juntamente com o design do site.",
        "followersGained": "Seguidores Ganhos",
        "customBotsCreated": "Bots Personalizados Criados",
        "illustrationsSent": "Ilustrações Enviadas",
        "bizSuccessTitle": "Estudos de Caso: Crescimento Empresarial",
        "bizSuccessIntro": "Ajudamos empresas locais e online a crescer através da criação de sites personalizados, da configuração de sistemas de vendas, da organização de listas de clientes (CRM), da adição de funcionalidades de lojas online, do uso de chatbots e da criação de conteúdo visual para promoção.",
        "yimTitle": "Young Indian Method",
        "yimDesc": "Apoiámos o Young Indian Method com marketing nas redes sociais, criação de conteúdo diário, gestão de clientes e sistemas otimizados para transformar a atenção em vendas reais.",
        "conversionRate": "Taxa de Conversão",
        "revenueGrowth": "Crescimento de Receitas",
        "adSpendROI": "ROI em Publicidade",
        "viewOnTikTok": "Ver no TikTok",
        "daleTitle": "Dale forma a tu exito",
        "daleDesc": "Ajudámos a \"Dale forma a tu éxito\" a atrair mais clientes e a reter a sua audiência. Graças aos nossos sistemas e estratégias de conversão de clientes, alcançaram pelo menos um retorno de 5x sobre o seu investimento em marketing.",
        "optimized": "Otimizado",
        "userExperience": "Experiência do Utilizador",
        "portfolioTitleIllu": "Portfólio de Ilustração",
        "portfolioTitleVideo": "Portfólio de Edição de Vídeo",
        "portfolioTitleComm": "Portfólio de Gestão de Comunidade",
        "portfolioTitleChatter": "Portfólio da Equipa Chatter/Hype",
        "portfolioTitleTwitter": "Portfólio de Marketing no Twitter",
        "portfolioTitleWebsite": "Portfólio de Sites Personalizados",
        "privacyTitle": "Política de Privacidade",
        "lastUpdated": "Última atualização:",
        "privacyP1": "No Fractal Studio, valorizamos a confiança de todos os que visitam e utilizam a nossa plataforma. Estamos empenhados em manter um ambiente profissional, transparente e seguro em todos os momentos. Esta política reflete a nossa dedicação em fornecer uma experiência clara e responsável para todos os utilizadores.",
        "privacyP2": "Para qualquer questão, não hesite em contactar-nos em: fractalcapitalnetwork@gmail.com",
        "termsTitle": "Termos e Condições",
        "effectiveDate": "Data de vigência:",
        "termsP1": "Ao utilizar esta plataforma, concorda com os termos descritos abaixo. O Fractal Studio reserva-se o direito de modificar, modificar, suspender ou atualizar qualquer parte do site ou dos seus serviços sem aviso prévio. Todo o conteúdo está protegido e não pode ser reutilizado sem permissão. O acesso aos nossos produtos e serviços deve ser sempre justo, legal e respeitoso.",
        "termsP2": "Reservamo-nos o direito de limitar ou suspender o acesso a qualquer utilizador que viole estes termos. Para suporte ou questões, contacte-nos em fractalcapitalnetwork@gmail.com",
        "footerContact": "Contactar a Fractal",
        "footerContactEmail": "fractalcapitalnetwork@gmail.com",
        "footerContactTelegram": "Fale connosco no Telegram",
        "footerServices": "Serviços",
        "footerExpertise": "Experiência",
        "footerCompany": "Empresa",
        "footerAbout": "Sobre",
        "footerCases": "Casos",
        "footerCareers": "Carreiras",
        "footerHelp": "Obter Ajuda",
        "footerRights": "© 2025 Fractal Studio",
        "footerPrivacy": "Política de Privacidade",
        "footerTerms": "Termos e Condições"
      }
    };

    // --- ELEMENTOS DEL DOM ---
    const languageOverlay = document.getElementById('language-overlay');
    const langButtons = document.querySelectorAll('.lang-btn');
    const introScreen = document.getElementById('intro');
    const appContainer = document.getElementById('app-container');
    const contentWrapper = document.getElementById('content-wrapper');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');
    const dropdowns = document.querySelectorAll('.dropdown');

    // --- FUNCIÓN PARA APLICAR EL IDIOMA ---
    function setLanguage(lang) {
        const langToSet = translations[lang] ? lang : 'en';
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[langToSet] && translations[langToSet][key]) {
                element.innerHTML = translations[langToSet][key];
            }
        });
        document.documentElement.lang = langToSet;
        localStorage.setItem('language', langToSet);
    }
    
    // --- FUNCIÓN PARA LA SECUENCIA VISUAL DE INICIO ---
    function startWebsiteSequence() {
        if (introScreen) {
            introScreen.style.display = 'flex';
        }
        setTimeout(() => {
            if (introScreen) {
                introScreen.style.opacity = '0';
                setTimeout(() => {
                    introScreen.style.visibility = 'hidden';
                    document.body.style.overflow = ''; // Permite el scroll después de la intro
                }, 500);
            }
            if (appContainer) {
                appContainer.style.display = 'block';
            }
        }, 2000);
    }

    // --- LÓGICA DE NAVEGACIÓN INTERNA ---
    const showSection = (targetId) => {
        Array.from(contentWrapper.children).forEach(child => {
            child.style.display = 'none';
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const mainContent = document.getElementById('main-content');
            if (mainContent.contains(targetSection)) {
                mainContent.style.display = 'block';
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                targetSection.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            document.getElementById('main-content').style.display = 'block';
        }
        // Actualiza el glow inmediatamente al cambiar de sección
        setTimeout(handleGlowEffect, 50);
    };

    // --- LÓGICA DEL MENÚ MÓVIL ---
    const closeMobileMenu = () => {
        if (navWrapper.classList.contains('is-active')) {
            navWrapper.classList.remove('is-active');
            document.body.classList.remove('no-scroll');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
        }
    };

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navWrapper.classList.toggle('is-active');
            document.body.classList.toggle('no-scroll', isActive);
            mobileMenuToggle.setAttribute('aria-expanded', isActive);
            mobileMenuToggle.querySelector('i').className = isActive ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    // --- LÓGICA DEL MEGA-MENÚ (ESCRITORIO Y MÓVIL) ---
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        // Comportamiento de Hover para Escritorio
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                if (!document.querySelector('.is-pinned')) {
                    dropdown.classList.add('is-open');
                }
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                if (!dropdown.classList.contains('is-pinned')) {
                    dropdown.classList.remove('is-open');
                }
            }
        });

        // Comportamiento de Clic (Pin en Escritorio, Acordeón en Móvil)
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (window.innerWidth <= 768) { // Lógica de acordeón para móvil
                const isOpen = dropdown.classList.toggle('is-open');
                toggle.setAttribute('aria-expanded', isOpen);
            } else { // Lógica de "pinning" para escritorio
                const wasPinned = dropdown.classList.contains('is-pinned');
                dropdowns.forEach(d => {
                    d.classList.remove('is-open', 'is-pinned');
                    d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                });
                if (!wasPinned) {
                    dropdown.classList.add('is-open', 'is-pinned');
                    toggle.setAttribute('aria-expanded', 'true');
                }
            }
        });
    });

    // --- LÓGICA DE LA GALERÍA DEL PORTAFOLIO ---
    document.querySelectorAll('.portfolio-gallery-section').forEach(gallerySection => {
        const display = gallerySection.querySelector('.gallery-item-display');
        const dataContainer = gallerySection.querySelector('.gallery-data');
        const prevBtn = gallerySection.querySelector('.gallery-nav.prev');
        const nextBtn = gallerySection.querySelector('.gallery-nav.next');
        if (!display || !dataContainer || !prevBtn || !nextBtn) return;
        
        const items = Array.from(dataContainer.children).map(el => ({ type: el.dataset.type, src: el.dataset.src }));
        let currentIndex = 0;

        function renderItem(index) {
            if (items.length === 0) return;
            const item = items[index];
            const oldVideo = display.querySelector('video');
            if (oldVideo) oldVideo.pause();
            
            display.innerHTML = ''; 
            
            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = `Portfolio item ${index + 1}`;
                display.appendChild(img);
            } else if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = item.src;
                video.controls = true; 
                video.autoplay = true; 
                video.muted = true; 
                video.loop = true;
                display.appendChild(video);
            }
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            renderItem(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            renderItem(currentIndex);
        });
        
        if (items.length > 0) {
            renderItem(currentIndex);
        }
    });

    // --- LÓGICA DEL GLOW DINÁMICO ---
    const glowSections = document.querySelectorAll('#main-content > section, .page-detail-section');
    const accentColor = '0, 255, 139';
    const glowStyles = [
        { background: `radial-gradient(ellipse at 50% 0%, rgba(${accentColor}, 0.12) 0%, transparent 50%)` },
        { background: `radial-gradient(ellipse at 80% 20%, rgba(${accentColor}, 0.1) 0%, transparent 55%)` },
        { background: `radial-gradient(ellipse at 20% 40%, rgba(${accentColor}, 0.12) 0%, transparent 60%)` },
        { background: `radial-gradient(circle at 50% 90%, rgba(${accentColor}, 0.1) 0%, transparent 50%)` },
        { background: `radial-gradient(ellipse at 90% 90%, rgba(${accentColor}, 0.12) 0%, transparent 60%)` },
        { background: `radial-gradient(ellipse at 10% 10%, rgba(${accentColor}, 0.1) 0%, transparent 55%)` },
        { background: `radial-gradient(circle at 50% 50%, rgba(${accentColor}, 0.08) 0%, transparent 45%)` },
    ];
    let lastKnownGlowStyle = '';

    const handleGlowEffect = () => {
        let closestSection = null;
        let minDistance = Infinity;

        glowSections.forEach((section) => {
            if (section.offsetParent === null) return;
            
            const rect = section.getBoundingClientRect();
            const sectionCenterY = rect.top + rect.height / 2;
            const screenCenterY = window.innerHeight / 2;
            const distance = Math.abs(screenCenterY - sectionCenterY);

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = section;
                }
            }
        });
        
        if (closestSection) {
            const sectionIndex = Array.from(glowSections).indexOf(closestSection);
            const style = glowStyles[sectionIndex % glowStyles.length];
            
            if (style.background !== lastKnownGlowStyle) {
                document.body.style.setProperty('--glow-background', style.background);
                lastKnownGlowStyle = style.background;
            }
        }
    };

    // --- INICIALIZACIÓN Y EVENT LISTENERS GLOBALES ---

    // 1. Lógica de inicio de la web
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        if (languageOverlay) languageOverlay.style.display = 'none';
        setLanguage(savedLang);
        startWebsiteSequence();
    } else {
        if (languageOverlay) {
            document.body.style.overflow = 'hidden'; // Evita scroll mientras el overlay está visible
            languageOverlay.style.opacity = '1';
            languageOverlay.style.visibility = 'visible';
        }
    }

    // 2. Listeners para botones de idioma
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            setLanguage(selectedLang);
            if (languageOverlay) {
                languageOverlay.style.opacity = '0';
                setTimeout(() => {
                    languageOverlay.style.display = 'none';
                }, 500);
            }
            startWebsiteSequence();
        });
    });

    // 3. Listeners para navegación principal y botones de "atrás"
    appContainer.addEventListener('click', (e) => {
        const navTrigger = e.target.closest('[data-target]');
        if (navTrigger) {
            e.preventDefault();
            const targetId = navTrigger.getAttribute('data-target');
            showSection(targetId);
            // Si el menú móvil está abierto, ciérralo
            if (navWrapper.classList.contains('is-active')) {
                closeMobileMenu();
            }
        }

        if (e.target.closest('.btn-back')) {
            e.preventDefault();
            showSection('main-content');
        }
    });
    
    // 4. Listeners para el Glow y cierre de menús
    window.addEventListener('scroll', handleGlowEffect, { passive: true });
    window.addEventListener('click', (e) => {
        // Cierra los menús desplegables de escritorio si se hace clic fuera
        if (window.innerWidth > 768) {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('is-open', 'is-pinned');
                    dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                });
            }
        }
        // Cierra el menú móvil si se hace clic fuera del nav-wrapper
        if (navWrapper.classList.contains('is-active') && !e.target.closest('#nav-wrapper') && !e.target.closest('#mobile-menu-toggle')) {
            closeMobileMenu();
        }
    });

    // 5. Ejecución inicial de funciones
    handleGlowEffect();
});