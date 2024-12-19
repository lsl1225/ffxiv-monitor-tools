import EffectId from "cactbot/resources/effect_id";

import { kAbility } from "./constants";

const potionImage = "../resources/images/000000.png";
// 骑士
const fightOrFlightImage = "../resources/images/000166.png"; // 战逃反应
// 枪刃
const noMercyImage = "../resources/images/003402.png"; // 无情
// 学者
const chainStratagemImage = "../resources/images/002815.png"; // 连环计
// 占星
const divinationImage = "../resources/images/003553.png"; // 占卜
const theBalanceImage = "../resources/images/003110.png"; // 太阳神
const theSpearImage = "../resources/images/003111.png"; // 战争神
// 武僧
const riddleOfFireImage = "../resources/images/002541.png"; // 红莲
const brotherhoodImage = "../resources/images/002542.png"; // 义结金兰
// 龙骑
const lanceChargeImage = "../resources/images/000309.png"; // 猛枪
const battleLitanyImage = "../resources/images/002585.png"; // 战斗连祷
//忍者
const mugImage = "../resources/images/000613.png"; // 夺取
const dokumoriImage = "../resources/images/dokumori.png"; // 夺取

// 钐镰客
const arcaneCircleImage = "../resources/images/003633.png"; // 秘环
// 诗人
const ragingStrikesImage = "../resources/images/000352.png"; // 猛者强击
const battleVoiceImage = "../resources/images/002601.png"; // 战斗之声
const radiantFinaleImage = "../resources/images/002622.png"; // 最终乐章
// 舞娘
const devilmentImage = "../resources/images/003471.png"; // 探戈
const technicalFinishImage = "../resources/images/003474.png"; // 技巧舞步
// 召唤
const searingLightImage = "../resources/images/002752.png"; // 灼热之光
// 赤魔
const emboldenImage = "../resources/images/003218.png"; // 鼓励
const starryMuseImage = "../resources/images/starry_muse.png"; // 星空构想

export interface BuffInfo {
    name: string;
    activeAbility?: string[];
    cooldownAbility?: string[];
    gainEffect?: string[];
    loseEffect?: string[];
    mobGainsEffect?: string;
    mobLosesEffect?: string;
    durationSeconds?: number;
    useEffectDuration?: boolean;
    icon: string;
    side?: 'left' | 'right';
    borderColor: string;
    sortKey: number;
    cooldown?: number;
    sharesCooldownWith?: string[];
    hide?: boolean;
    stack?: number;
    partyOnly?: boolean;

    target?: 'you' | 'boss'; // 赋给自己? true:给自己, false:给boss
    physicalUp?: number; //物理增伤百分比
    magicUp?: number; // 魔法增伤百分比
    physicalUpCount?: { [s: string]: number }; //物理增伤百分比
    magicUpCount?: { [s: string]: number }; // 魔法增伤百分比
    meleeUp?: number; // 近战增伤比
    rangedUp?: number; // 远程增伤
    tts?: string; // tts播报
    aoeEffect?: boolean; // 是否群体判定
}

export class BuffInfoList {
    static buffInfo: { [s: string]: Omit<BuffInfo, 'name'> } = {
        // 强化药
        potion: {
            gainEffect: [EffectId.Medicated],
            loseEffect: [EffectId.Medicated],
            useEffectDuration: true,
            icon: potionImage,
            borderColor: '#AA41B2',
            sortKey: 0,
            cooldown: 270, //CD
            target: 'you',
            physicalUp: 8,
            magicUp: 8,
        },
        // 骑士
        fightOrFlight: {
            gainEffect: [EffectId.FightOrFlight],
            loseEffect: [EffectId.FightOrFlight],
            useEffectDuration: true,
            icon: fightOrFlightImage,
            borderColor: '#cc392a',
            sortKey: 0,
            cooldown: 60,
            target: 'you',
            physicalUp: 25,
            magicUp: 0,
        },
        // 战士
        // 黑骑
        // 枪刃
        noMercy: { // 无情
            gainEffect: [EffectId.NoMercy_727],
            loseEffect: [EffectId.NoMercy_727],
            useEffectDuration: true,
            icon: noMercyImage,
            borderColor: '#345ec4',
            sortKey: 0,
            cooldown: 60,
            target: 'you',
            physicalUp: 20,
            magicUp: 20,
        },
        // 学者
        chain: { // 连环计
            activeAbility: [kAbility.ChainStratagem],
            partyOnly: true,
            durationSeconds: 20,
            icon: chainStratagemImage,
            borderColor: '#849dfd',
            sortKey: 0,
            cooldown: 120,
            target: 'boss',
            physicalUp: 5,
            magicUp: 5,
            tts: '连环计',
        },
        // 占星
        divination: { // 占卜
            gainEffect: [EffectId.Divination_756],
            loseEffect: [EffectId.Divination_756],
            useEffectDuration: true,
            icon: divinationImage,
            borderColor: '#e8c353',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 6,
            magicUp: 6,
            tts: '占卜',
        },
        balance: { // 太阳神之衡
            gainEffect: [EffectId.TheBalance_F2F, EffectId.TheBalance_33D],
            loseEffect: [EffectId.TheBalance_F2F, EffectId.TheBalance_33D],
            useEffectDuration: true,
            icon: theBalanceImage,
            borderColor: '#ff5900',
            sortKey: 0,
            target: 'you',
            meleeUp: 6,
            rangedUp: 3,
            tts: '近卡',
        },
        spear: { // 战争神之枪
            gainEffect: [EffectId.TheSpear_F31, EffectId.TheSpear_340],
            loseEffect: [EffectId.TheSpear_F31, EffectId.TheSpear_340],
            useEffectDuration: true,
            icon: theSpearImage,
            borderColor: '#4477dd',
            sortKey: 0,
            target: 'you',
            meleeUp: 3,
            rangedUp: 6,
            tts: '远卡',
        },
        // 武僧
        riddleOfFire: { // 红莲
            gainEffect: [EffectId.FiresRumination_F03, EffectId.RiddleOfFire_49D],
            loseEffect: [EffectId.FiresRumination_F03, EffectId.RiddleOfFire_49D],
            useEffectDuration: true,
            icon: riddleOfFireImage,
            borderColor: '#dc625a',
            sortKey: 0,
            cooldown: 60,
            target: 'you',
            physicalUp: 15,
            magicUp: 15,
        },
        brotherhood: { // 义结金兰：斗气/攻击
            gainEffect: [EffectId.Brotherhood_4A1],
            loseEffect: [EffectId.Brotherhood_4A1],
            useEffectDuration: true,
            icon: brotherhoodImage,
            borderColor: '#994200',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 5,
            magicUp: 5,
            tts: '桃园',
        },
        // 龙骑
        lanceCharge: { // 猛枪
            gainEffect: [EffectId.LanceCharge_748],
            loseEffect: [EffectId.LanceCharge_748],
            useEffectDuration: true,
            icon: lanceChargeImage,
            borderColor: '#831819',
            sortKey: 0,
            cooldown: 60,
            target: 'you',
            physicalUp: 10,
            magicUp: 10,
        },
        litany: { //战斗连祷
            gainEffect: [EffectId.BattleLitany_312],
            loseEffect: [EffectId.BattleLitany_312],
            useEffectDuration: true,
            icon: battleLitanyImage,
            borderColor: '#009999',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 5,
            magicUp: 5,
            tts: '连祷',
        },
        // 忍者
        mug: { // 夺取
            activeAbility: [kAbility.Mug],
            partyOnly: true,
            durationSeconds: 20,
            icon: mugImage,
            borderColor: '#e2b640',
            sortKey: 0,
            cooldown: 120,
            target: 'boss',
            physicalUp: 5,
            magicUp: 5,
            tts: '夺取',
        },
        dokumori: { // 介毒之术
            activeAbility: [kAbility.Dokumori],
            partyOnly: true,
            durationSeconds: 20,
            icon: dokumoriImage,
            borderColor: '#ab5ed9',
            sortKey: 0,
            cooldown: 120,
            target: 'boss',
            physicalUp: 5,
            magicUp: 5,
            tts: '夺取',
            aoeEffect: true, // aoe判定
        },
        // 钐镰客
        arcaneCircle: { // 秘环
            gainEffect: [EffectId.ArcaneCircle],
            loseEffect: [EffectId.ArcaneCircle],
            useEffectDuration: true,
            icon: arcaneCircleImage,
            borderColor: '#d459dd',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 3,
            magicUp: 3,
            tts: '秘环',
        },
        // 诗人
        raging: { // 猛者
            gainEffect: [EffectId.RagingStrikes],
            loseEffect: [EffectId.RagingStrikes],
            useEffectDuration: true,
            icon: ragingStrikesImage,
            borderColor: '#db6509',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 15,
            magicUp: 15,
        },
        battlevoice: { // 战斗之声
            gainEffect: [EffectId.BattleVoice],
            loseEffect: [EffectId.BattleVoice],
            useEffectDuration: true,
            icon: battleVoiceImage,
            borderColor: '#D6371E',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 4,
            magicUp: 4,
            tts: '战斗之声',
        },
        radiantFinale: { // 终章
            gainEffect: [EffectId.RadiantFinale_AA2, EffectId.RadiantFinale_B94],
            loseEffect: [EffectId.RadiantFinale_AA2, EffectId.RadiantFinale_B94],
            useEffectDuration: true,
            icon: radiantFinaleImage,
            borderColor: '#fdf55a',
            sortKey: 0,
            cooldown: 110,
            target: 'you',
            physicalUp: 6,
            magicUp: 6,
            tts: '终章',
        },
        // 舞娘
        devilment: { // 进攻之探戈
            gainEffect: [EffectId.Devilment],
            loseEffect: [EffectId.Devilment],
            useEffectDuration: true,
            icon: devilmentImage,
            borderColor: '#006400',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 15,
            magicUp: 15,
            tts: '探戈',
        },
        technicalFinish: { // 技巧舞步结束
            gainEffect: [EffectId.TechnicalFinish_71E],
            loseEffect: [EffectId.TechnicalFinish_71E],
            useEffectDuration: true,
            icon: technicalFinishImage,
            borderColor: '#E0757C',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 5,
            magicUp: 5,
            tts: '技巧',
        },
        // 召唤
        searingLight: { // 灼热之光
            gainEffect: [EffectId.SearingLight],
            loseEffect: [EffectId.SearingLight],
            useEffectDuration: true,
            icon: searingLightImage,
            borderColor: '#fdd4fe',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 5,
            magicUp: 5,
            tts: '灼热',
        },
        emboldenIsMe: { // 鼓励(自己给自己) 4d7
            gainEffect: [EffectId.Embolden_4D7],
            loseEffect: [EffectId.Embolden_4D7],
            useEffectDuration: true,
            icon: emboldenImage,
            borderColor: '#bcbce3',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 0,
            magicUp: 5,
            tts: '鼓励',
        },
        emboldenToMe: { // 鼓励(从赤魔得到) 511
            gainEffect: [EffectId.Embolden_511],
            loseEffect: [EffectId.Embolden_511],
            useEffectDuration: true,
            icon: emboldenImage,
            borderColor: '#bcbce3',
            sortKey: 1,
            cooldown: 120,
            target: 'you',
            physicalUp: 5,
            magicUp: 5,
            tts: '鼓励',
        },
        starryMuse: {
            gainEffect: [EffectId.StarryMuse],
            loseEffect: [EffectId.StarryMuse],
            useEffectDuration: true,
            icon: starryMuseImage,
            borderColor: '#cc86ef',
            sortKey: 0,
            cooldown: 120,
            target: 'you',
            physicalUp: 5,
            magicUp: 5,
            tts: '星空',
        },
    }

    // 5.x版本
    static buffInfoV5: { [s: string]: Omit<BuffInfo, 'name'> } = {}
}

