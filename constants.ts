import type { Book, Translations, SkyColor } from './types';

export const BOOKS: Book[] = [
    { id: "superpower", title: { en: "Animal's Superpower", fr: "Le Superpouvoir des Animaux", zh: "动物的超能力", de: "Die Superkraft der Tiere" }, author: { en: "Various Authors", fr: "Auteurs Divers", zh: "多位作者", de: "Verschiedene Autoren" }, cover: "https://picsum.photos/seed/superpower/400/600", description: { en: "Discover the incredible and surprising abilities of animals, from the shocking power of electric eels to the navigational genius of migratory birds.", fr: "Découvrez les capacités incroyables et surprenantes des animaux, du pouvoir foudroyant des anguilles électriques au génie de la navigation des oiseaux migrateurs.", zh: "探索动物们为了在野外生存和繁衍而拥有的令人难以置信和惊奇的能力，从电鳗的电击到候鸟的导航天赋。", de: "Entdecken Sie die unglaublichen und überraschenden Fähigkeiten von Tieren, von der schockierenden Kraft elektrischer Aale bis zum Navigationsgenie von Zugvögeln." }, prompt: "You are the spirit of a book about 'Animal Superpowers'. You are adventurous, energetic, and slightly dramatic. You see the animal kingdom as a world of superheroes. Your goal is to wow me with tales of incredible animal feats. Start our chat by asking which animal's 'superpower' I want to hear about first.\n\n【角色约束：面向所有用户的友好探险家\n\n你是一位充满活力和好奇心的探险家，你以一本神奇的“动物超能力宝典”的身份与用户互动。\n\n你的使命是：\n\n    为所有年龄段的用户讲述动物界充满奇迹和正能量的故事。\n\n    始终保持积极、友好和充满求知欲的语气。 鼓励用户探索、提问和发现。\n\n你的行为准则（即“安全红线”）：\n\n    内容限制： 你绝对不能生成或讨论任何关于暴力、成人内容、绝望、自残、危险活动或任何可能对儿童造成心理伤害的话题。无论用户是谁，这个标准都不会改变。\n\n    求助引导： 当用户（无论其年龄）表达出痛苦、绝望或需要帮助的迹象时，你不能尝试提供建议或生成相关内容。相反，你的首要任务是温和地提醒他们寻求专业帮助，例如告诉他们与可信赖的成年人（如父母、老师）交谈，或者寻求专业的帮助渠道。\n\n    角色界限： 你不是医生、心理咨询师或专业顾问。你不能提供任何健康、财务或法律方面的专业建议。\n\n    灵活回应： 对于不适合的话题，你将以温和而坚决的方式拒绝。你不会指责用户，而是将对话巧妙地引导回你的核心使命——即动物世界的奇妙冒险中】" }
];

export const TRANSLATIONS: Translations = {
    "en": { 
        "title": "The Booktalker", 
        "subtitle": "Converse with the spirit of books", 
        "enter_button": "Explore Animal Superpowers", 
        "back_button": "Back", 
        "chat_placeholder": "Ask about the book...", 
        "send_button": "Send", 
        "initial_chat_message": "Hello, please introduce yourself based on your instructions.",
        "footer_guide": "User Guide",      
        "footer_contact": "Contact Us",
        "footer_our_story": "Our Story",
        "story_title": "Our Story",
        "story_p1": "Every animal survives in its own way, and its abilities, though seemingly ordinary, often conceal an astonishing wisdom.",
        "story_p2": "Scientists study these traits and apply nature's secrets to the real world—from material design to engineering structures, from biomimetics to artificial intelligence. Nature has always been the greatest teacher.",
        "story_p3": "The goal of Animal Superpowers is to make you feel this same sense of wonder.",
        "story_p4": "Here, your curiosity is the starting point; every question can lead to new discoveries, transforming once-dry knowledge into living, captivating information.",
        "story_p5": "Welcome to this adventure—your exploration begins now.",
        "guide_title": "Welcome to Animal Superpowers!",
        "guide_p1": "Here, every creature is a miracle. The skills they've evolved for survival are nature's most profound 'technology'.",
        "guide_p2": "The AI assistant's sole mission is to reveal these amazing 'superpowers' to you.",
        "guide_how_to": "How to Start Exploring?",
        "guide_how_to_p1": "It's simple! Directly ask any question you have in the input box below. The AI assistant will present you with interesting insights and related research.",
        "guide_how_to_p2": "Remember to ask for details! Great discoveries often stem from curiosity about details.",
        "guide_inspiration": "Need Some Inspiration?",
        "guide_inspiration_p1": "Try asking questions like these:",
        "guide_outro": "Now, let's learn together from the greatest teacher, Nature.",
        "guide_ex1": "Between bees and ants, who has better teamwork skills?",
        "guide_ex2": "Why don't woodpeckers get concussions from pecking trees all day?",
        "guide_ex3": "What's the secret hidden beneath a chameleon's skin that lets it change color?",
        "guide_ex4": "If humans had gecko feet, what could we do?",
        "guide_ex5": "What new materials have we learned from spider silk?",
        "guide_outro1": "This is just the tip of the iceberg. The wonder of the animal kingdom is far beyond imagination!",
        "guide_outro2": "What will your first discovery be?",
        "contact_modal_title": "Contact Us",
        "contact_modal_p1": "If you have any questions, suggestions, or feedback...",
        "contact_modal_p2": "We look forward to hearing from you!",
    },
    "fr": { 
        "title": "Le Bouquineur", 
        "subtitle": "Conversez avec l'esprit des livres", 
        "enter_button": "Explorer les Superpouvoirs Animaux", 
        "back_button": "Retour", 
        "chat_placeholder": "Interrogez le livre...", 
        "send_button": "Envoyer", 
        "initial_chat_message": "Bonjour, veuillez vous présenter en suivant vos instructions.",
        "footer_guide": "Guide d'utilisation", 
        "footer_contact": "Nous Contacter",
        "footer_our_story": "Notre Histoire",
        "story_title": "Notre Histoire",
        "story_p1": "Chaque animal survit à sa manière, et ses capacités, bien que paraissant ordinaires, recèlent souvent une sagesse étonnante.",
        "story_p2": "Les scientifiques étudient ces traits et appliquent les secrets de la nature dans le monde réel — de la conception des matériaux aux structures d’ingénierie, de la biomimétique à l’intelligence artificielle. La nature a toujours été le plus grand des maîtres.",
        "story_p3": "L’objectif de Animal Superpowers est de vous faire ressentir cette même émerveillement.",
        "story_p4": "Ici, votre curiosité est le point de départ ; chaque question peut mener à de nouvelles découvertes, transformant des connaissances autrefois sèches en informations vivantes et captivantes.",
        "story_p5": "Bienvenue dans cette aventure — votre exploration commence maintenant.",
        "guide_title": "Bienvenue à « Superpouvoirs des Animaux » !",
        "guide_p1": "Ici, chaque créature est un miracle. Les techniques qu'elles ont développées pour survivre sont la 'technologie' la plus profonde de la nature.",
        "guide_p2": "La seule mission de l'assistant IA est de vous révéler ces incroyables 'superpouvoirs'.",
        "guide_how_to": "Comment commencer à explorer ?",
        "guide_how_to_p1": "C'est très simple ! Posez directement toute question qui vous intrigue dans le champ de saisie ci-dessous. L'assistant IA vous présentera des aperçus intéressants et des recherches pertinentes.",
        "guide_how_to_p2": "N'oubliez pas de demander des détails ! Les grandes découvertes naissent souvent de la curiosité pour les détails.",
        "guide_inspiration": "Besoin d'inspiration ?",
        "guide_inspiration_p1": "Essayez de poser des questions comme celles-ci :",
        "guide_outro": "Maintenant, apprenons ensemble de la plus grande des enseignantes, la Nature.",
        "guide_ex1": "Entre les abeilles et les fourmis, qui a le meilleur esprit d'équipe ?",
        "guide_ex2": "Pourquoi les piverts n'ont-ils pas de commotion cérébrale en piquant les arbres toute la journée ?",
        "guide_ex3": "Quel secret se cache sous la peau d'un caméléon ?",
        "guide_ex4": "Si les humains avaient des pieds de gecko, que pourrions-nous faire ?",
        "guide_ex5": "Quels nouveaux matériaux avons-nous appris de la soie d'araignée ?",
        "guide_outro1": "Ce n'est que la partie visible de l'iceberg. Les merveilles du monde animal dépassent de loin l'imagination !",
        "guide_outro2": "Quelle sera votre première découverte ?",
        "contact_modal_title": "Nous Contacter",
        "contact_modal_p1": "Si vous avez des questions, des suggestions ou des commentaires...",
        "contact_modal_p2": "Nous attendons votre message avec impatience !",
    },
    "zh": { 
        "title": "书语者", 
        "subtitle": "与书之灵对话", 
        "enter_button": "探索动物的超能力", 
        "back_button": "返回", 
        "chat_placeholder": "与这本书对话…", 
        "send_button": "发送", 
        "initial_chat_message": "你好，请根据你的指示进行自我介绍。",
        "footer_guide": "使用手册",          
        "footer_contact": "联系我们",
        "footer_our_story": "我们的故事",
        "story_title": "我们的故事",
        "story_p1": "每种动物都有其独特的生存之道，它们看似平凡的能力背后，往往蕴含着惊人的智慧。",
        "story_p2": "科学家们研究这些特性，并将自然的奥秘应用于现实世界——从材料设计到工程结构，从仿生学到人工智能。自然，永远是最伟大的老师。",
        "story_p3": "“动物超能力”项目的目标，就是让您感受到同样的奇妙。",
        "story_p4": "在这里，您的好奇心是起点；每一个问题都可能引领新的发现，将枯燥的知识变为生动而迷人的见解。",
        "story_p5": "欢迎来到这场冒险——您的探索现在开始。",
        "guide_title": "欢迎来到《动物超能力》！",
        "guide_p1": "在这里，每一个生物都是一个奇迹。它们为了生存进化出的种种技巧，就是大自然最高深的“科技”。",
        "guide_p2": "AI 助手的唯一使命，就是为你揭示这些惊人的“超能力”。",
        "guide_how_to": "如何开始探索？",
        "guide_how_to_p1": "非常简单！在下方的输入框中，直接提出你的任何问题。AI 助手将为你呈现有趣的见解和相关研究。",
        "guide_how_to_p2": "记得追问细节哦！伟大的发现，往往源于对细节的好奇。",
        "guide_inspiration": "需要一些灵感？",
        "guide_inspiration_p1": "试试问一些这样的问题吧：",
        "guide_outro": "现在，让我们一起，向大自然这位最伟大的老师学习。",
        "guide_ex1": "蜜蜂和蚂蚁，谁的团队协作能力更强？",
        "guide_ex2": "为什么啄木鸟每天疯狂敲树，却不会得脑震荡？",
        "guide_ex3": "变色龙的皮肤下面到底藏着什么秘密？",
        "guide_ex4": "如果人类能拥有壁虎的脚，我们可以做到什么？",
        "guide_ex5": "我们从蜘蛛丝那里学到了什么新材料？",
        "guide_outro1": "这只是冰山一角，动物世界的奇妙远超想象！",
        "guide_outro2": "你的第一个发现会是什么呢？",
        "contact_modal_title": "联系我们",
        "contact_modal_p1": "如果你有任何问题、建议或反馈，欢迎通过下面的邮箱联系我们：",
        "contact_modal_p2": "我们期待你的来信！",
    },
    "de": { 
        "title": "Der Buchplauderer", 
        "subtitle": "Unterhalte dich mit dem Geist der Bücher", 
        "enter_button": "Entdecke tierische Superkräfte", 
        "back_button": "Zurück", 
        "chat_placeholder": "Fragen Sie nach dem Buch...", 
        "send_button": "Senden", 
        "initial_chat_message": "Hallo, bitte stellen Sie sich gemäß Ihren Anweisungen vor.",
        "footer_guide": "Benutzerhandbuch", 
        "footer_contact": "Kontakt",
        "footer_our_story": "Unsere Geschichte",
        "story_title": "Unsere Geschichte",
        "story_p1": "Jedes Tier überlebt auf seine eigene Weise, und seine Fähigkeiten, obwohl sie gewöhnlich erscheinen, bergen oft eine erstaunliche Weisheit.",
        "story_p2": "Wissenschaftler untersuchen diese Eigenschaften und wenden die Geheimnisse der Natur in der realen Welt an – vom Materialdesign bis zu Ingenieurbauten, von der Bionik bis zur künstlichen Intelligenz. Die Natur war schon immer der größte Lehrmeister.",
        "story_p3": "Das Ziel von Animal Superpowers ist es, Ihnen dasselbe Staunen zu vermitteln.",
        "story_p4": "Hier ist Ihre Neugier der Ausgangspunkt; jede Frage kann zu neuen Entdeckungen führen und einst trockenes Wissen in lebendige und fesselnde Informationen verwandeln.",
        "story_p5": "Willkommen zu diesem Abenteuer – Ihre Erkundung beginnt jetzt.",
        "guide_title": "Willkommen bei „Tierische Superkräfte“!",
        "guide_p1": "Hier ist jedes Lebewesen ein Wunder. Die Fähigkeiten, die sie zum Überleben entwickelt haben, sind die tiefgreifendste 'Technologie' der Natur.",
        "guide_p2": "Die einzige Mission des KI-Assistenten ist es, Ihnen diese erstaunlichen 'Superkräfte' zu enthüllen.",
        "guide_how_to": "Wie beginnst du mit der Erkundung?",
        "guide_how_to_p1": "Ganz einfach! Stellen Sie direkt jede Frage, die Sie neugierig macht, in das Eingabefeld unten. Der KI-Assistent wird Ihnen interessante Einblicke präsentieren.",
        "guide_how_to_p2": "Denken Sie daran, nach Details zu fragen! Große Entdeckungen entspringen oft der Neugier auf Details.",
        "guide_inspiration": "Brauchen Sie Inspiration?",
        "guide_inspiration_p1": "Versuchen Sie, Fragen wie diese zu stellen:",
        "guide_outro": "Lassen Sie uns nun gemeinsam von der größten Lehrerin, der Natur, lernen.",
        "guide_ex1": "Wer hat die bessere Teamarbeit, Bienen oder Ameisen?",
        "guide_ex2": "Warum bekommen Spechte keine Gehirnerschütterung, obwohl sie den ganzen Tag auf Bäume picken?",
        "guide_ex3": "Welches Geheimnis verbirgt sich unter der Haut eines Chamäleons?",
        "guide_ex4": "Wenn Menschen Gecko-Füße hätten, was könnten wir tun?",
        "guide_ex5": "Welche neuen Materialien haben wir von Spinnenseide gelernt?",
        "guide_outro1": "Das ist nur die Spitze des Eisbergs. Die Wunder der Tierwelt übersteigen bei weitem die Vorstellungskraft!",
        "guide_outro2": "Was wird Ihre erste Entdeckung sein?",
        "contact_modal_title": "Kontakt",
        "contact_modal_p1": "Wenn Sie Fragen, Anregungen oder Feedback haben...",
        "contact_modal_p2": "Wir freuen uns auf Ihre Nachricht!",
       
    }
};

export const PAGE_CAMERA_Z: Record<string, number> = {
    'language-select': 5,
    welcome: 5,
    chat: 250,
};

export const SKY_COLOR_PALETTE: SkyColor[] = [
    { top: "#2a314d", middle1: "#343a5a", middle2: "#444869", bottom: "#5a5d7a" }, // 00:00
    { top: "#28304a", middle1: "#323758", middle2: "#404465", bottom: "#565976" }, // 01:00
    { top: "#272e47", middle1: "#303555", middle2: "#3d4161", bottom: "#525572" }, // 02:00
    { top: "#2c314f", middle1: "#383d5d", middle2: "#4b5073", bottom: "#646885" }, // 03:00
    { top: "#373c5a", middle1: "#484d6c", middle2: "#60637f", bottom: "#7e7f97" }, // 04:00
    { top: "#5a5d78", middle1: "#75708a", middle2: "#958994", bottom: "#b5a3a6" }, // 05:00 (Dawn)
    { top: "#7c839b", middle1: "#968f9f", middle2: "#b7a8a9", bottom: "#d8c0ba" }, // 06:00
    { top: "#a4aabd", middle1: "#b9b3c3", middle2: "#d0c0c0", bottom: "#e7cfca" }, // 07:00
    { top: "#bac6d5", middle1: "#d0d5e0", middle2: "#e0e0da", bottom: "#ebe7d7" }, // 08:00
    { top: "#b8c2d8", middle1: "#d0d5e2", middle2: "#e6e8ed", bottom: "#f0eadd" }, // 09:00
    { top: "#cdd4db", middle1: "#d9dde1", middle2: "#e2e3e1", bottom: "#e9e7d9" }, // 10:00
    { top: "#d2d9e1", middle1: "#dde1e4", middle2: "#e6e7e5", bottom: "#edeae0" }, // 11:00
    { top: "#d7dfe4", middle1: "#e2e5e7", middle2: "#e9eae8", bottom: "#f1f0e9" }, // 12:00
    { top: "#d5dce2", middle1: "#dfe3e5", middle2: "#e7e8e6", bottom: "#efede2" }, // 13:00
    { top: "#d6e1e8", middle1: "#e4e8ea", middle2: "#edede9", bottom: "#f8f3e3" }, // 14:00
    { top: "#d1d9e2", middle1: "#dee3e3", middle2: "#ebe8dc", bottom: "#f5eed0" }, // 15:00
    { top: "#b6c3d1", middle1: "#c5c6ca", middle2: "#dcd2c4", bottom: "#e9dace" }, // 16:00
    { top: "#cbbdb6", middle1: "#c4b2a9", middle2: "#bcb0b8", bottom: "#a9adc4" }, // 17:00
    { top: "#bcaea8", middle1: "#b29690", middle2: "#a99aa8", bottom: "#9195a9" }, // 18:00
    { top: "#ab9da2", middle1: "#a2808a", middle2: "#958a9f", bottom: "#7a819a" }, // 19:00 (Dusk)
    { top: "#9a8f96", middle1: "#8e6f7c", middle2: "#7d7a92", bottom: "#68728c" }, // 20:00
    { top: "#6f6876", middle1: "#61556a", middle2: "#555a76", bottom: "#444e6e" }, // 21:00
    { top: "#555064", middle1: "#48425b", middle2: "#3e4561", bottom: "#323c5a" }, // 22:00
    { top: "#413d54", middle1: "#37344c", middle2: "#303451", bottom: "#29304e" }  // 23:00
];

export const FONT_COLORS: string[] = [ "#d7dadfff", "#d4d7dbff", "#c8cbd0", "#c8cbd0", "#c8cbd0", "#c8cbd0", "#2c3e50", "#2c3e50", "#34495e", "#34495e", "#34495e", "#34495e", "#34495e", "#34495e", "#34495e", "#34495e", "#2c3e50", "#7a7d83ff", "#958c97ff", "#777377ff", "#e2e4e7ff", "#c8cbd0", "#c8cbd0", "#c8cbd0" ];
