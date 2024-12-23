import Effect_id from 'cactbot/resources/effect_id'
// 战士
const surgingTempestImage = '../resources/images/000264.png' // 红斩
// 白魔
const diaImage = '../resources/images/002641.png' // 天辉
// 学者
const biolysisImage = '../resources/images/002820.png' // 蛊毒法
// 占星
const combustIIIImage = '../resources/images/003554.png' // 焚灼
// 贤者
const eukrasianDosisIiiImage = '../resources/images/003682.png' // 焚灼
// 龙骑
const chaosThrustIiiImage = '../resources/images/000308.png' // 樱花怒放
const chaoticSpringImage = '../resources/images/chaotic_spring.png' // 樱花2
// 武士
const higanbanaImage = '../resources/images/003160.png' // 彼岸花
// 钐镰客
const deathsDesignImage = '../resources/images/003606.png'
// 诗人
const stormbiteImage = '../resources/images/002614.png'
const causticBiteImage = '../resources/images/002613.png'
// 黑魔
const thunderIiiImage = '../resources/images/000459.png'
const highThunderImage = '../resources/images/high_thunder.png'

// https://xivapi.com/docs/Icons 图标来源

export interface DotInfo {
  name: string
  gainEffect: string[]
  loseEffect: string[]
  icon: string
  borderColor: string
  sortKey: number
  attackType: 'none' | 'physical' | 'magic'
  tts: boolean
  aoeEffect?: boolean // 是否群体判定
}

export class DotInfoList {
  static dotInfo: { [s: string]: Omit<DotInfo, 'name'> } = {
    // 战士 红斩
    surgingTempest: {
      gainEffect: [Effect_id.SurgingTempest],
      loseEffect: [Effect_id.SurgingTempest],
      icon: surgingTempestImage,
      borderColor: '#e9874a',
      sortKey: 0,
      attackType: 'none',
      tts: true,
    },
    // 白魔
    dia: {
      gainEffect: [
        Effect_id.Dia_74F,
        Effect_id.Aero,
        Effect_id.AeroIi,
        Effect_id.AeroIii,
      ],
      loseEffect: [
        Effect_id.Dia_74F,
        Effect_id.Aero,
        Effect_id.AeroIi,
        Effect_id.AeroIii,
      ],
      icon: diaImage,
      borderColor: '#3eb9fa',
      sortKey: 0,
      attackType: 'magic',
      tts: true,
    },
    // 学者
    biolysis: {
      gainEffect: [Effect_id.Biolysis_767],
      loseEffect: [Effect_id.Biolysis_767],
      icon: biolysisImage,
      borderColor: '#2e1fc4',
      sortKey: 0,
      attackType: 'magic',
      tts: true,
    },
    // 占星
    combustIII: {
      gainEffect: [
        Effect_id.Combust,
        Effect_id.CombustIi,
        Effect_id.CombustIii_759,
      ],
      loseEffect: [
        Effect_id.Combust,
        Effect_id.CombustIi,
        Effect_id.CombustIii_759,
      ],
      icon: combustIIIImage,
      borderColor: '#62daf8',
      sortKey: 0,
      attackType: 'magic',
      tts: true,
    },
    // 贤者
    eukrasianDosisIii: {
      gainEffect: [
        Effect_id.EukrasianDosis,
        Effect_id.EukrasianDosisIi,
        Effect_id.EukrasianDosisIii_A38,
      ],
      loseEffect: [
        Effect_id.EukrasianDosis,
        Effect_id.EukrasianDosisIi,
        Effect_id.EukrasianDosisIii_A38,
      ],
      icon: eukrasianDosisIiiImage,
      borderColor: '#c4acf6',
      sortKey: 0,
      attackType: 'magic',
      tts: true,
    },
    eukrasianDyskrasia: {
      gainEffect: [Effect_id.EukrasianDyskrasia],
      loseEffect: [Effect_id.EukrasianDyskrasia],
      icon: eukrasianDosisIiiImage,
      borderColor: '#c4acf6',
      sortKey: 0,
      attackType: 'magic',
      tts: true,
      aoeEffect: true, // aoe判定
    },
    // 龙骑
    chaosThrust: {
      gainEffect: [Effect_id.ChaosThrust_76],
      loseEffect: [Effect_id.ChaosThrust_76],
      icon: chaosThrustIiiImage,
      borderColor: '#83598c',
      sortKey: 0,
      attackType: 'physical',
      tts: false,
    },
    chaoticSpring: {
      gainEffect: [Effect_id.ChaoticSpring],
      loseEffect: [Effect_id.ChaoticSpring],
      icon: chaoticSpringImage,
      borderColor: '#83598c',
      sortKey: 0,
      attackType: 'physical',
      tts: false,
    },
    // 武士
    higanbana: {
      gainEffect: [Effect_id.Higanbana_4CC],
      loseEffect: [Effect_id.Higanbana_4CC],
      icon: higanbanaImage,
      borderColor: '#d9542a',
      sortKey: 0,
      attackType: 'physical',
      tts: true,
    },
    // 镰刀   DeathsDesign
    deathsDesign: {
      gainEffect: [Effect_id.DeathsDesign],
      loseEffect: [Effect_id.DeathsDesign],
      icon: deathsDesignImage,
      borderColor: '#49298c',
      sortKey: 0,
      attackType: 'none',
      tts: true,
    },
    // 诗人
    stormbite: {
      gainEffect: [Effect_id.Stormbite_4B1],
      loseEffect: [Effect_id.Stormbite_4B1],
      icon: stormbiteImage,
      borderColor: '#3df6fd',
      sortKey: 0,
      attackType: 'physical',
      tts: true,
    },
    causticBite: {
      gainEffect: [Effect_id.CausticBite_4B0],
      loseEffect: [Effect_id.CausticBite_4B0],
      icon: causticBiteImage,
      borderColor: '#e053bb',
      sortKey: 0,
      attackType: 'physical',
      tts: false,
    },
    // 黑魔
    thunderIII: {
      gainEffect: [
        Effect_id.ThunderIi_A2,
        Effect_id.ThunderIii,
        Effect_id.ThunderIv,
      ],
      loseEffect: [
        Effect_id.ThunderIi_A2,
        Effect_id.ThunderIii,
        Effect_id.ThunderIv,
      ],
      icon: thunderIiiImage,
      borderColor: '#93d5fd',
      sortKey: 0,
      attackType: 'magic',
      tts: true,
    },
    highThunder: {
      gainEffect: [Effect_id.HighThunder_F1F],
      loseEffect: [Effect_id.HighThunder_F1F],
      icon: highThunderImage,
      borderColor: '#b850e8',
      sortKey: 0,
      attackType: 'magic',
      tts: true,
    },
  }
}
