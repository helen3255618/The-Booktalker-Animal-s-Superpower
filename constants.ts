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
        "footer_contact": "Contact Us"
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
        "footer_contact": "Nous Contacter"
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
        "footer_contact": "联系我们"
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
        "footer_contact": "Kontakt"
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
