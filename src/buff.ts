import UserConfig from 'cactbot/resources/user_config'
import defaultOptions, { BuffOptions } from './buff_options'
import { JobsEventEmitter } from './lib/event_emitter'
import { Player } from './lib/player'
import PartyTracker from 'cactbot/resources/party'
import { Bars } from './lib/bars'
import { ComponentManager } from './components'

import './styles/defaults.css'
import './styles/buff.css'
import { getQueryVariable, loadConfig } from './lib/utils'

// let emit: JobsEventEmitter
// let play: Player;

UserConfig.getUserConfigLocation('buff', defaultOptions, () => {
  let options = { ...defaultOptions }
  // 配置文件改写
  options = rewriteOption(options)

  // Because Chinese/Korean regions are still on older version of FF14,
  // set this value to whether or not we should treat this as 5.x or 6.x.
  // This affects things like entire jobs (smn) or combo durations.
  // const is5x = ['ko'].includes(options.ParserLanguage);

  const emitter = new JobsEventEmitter()
  const partyTracker = new PartyTracker({
    ...options,
    DefaultPlayerLabel: 'nick',
    PlayerNicks: {},
  })
  const player = new Player(emitter, partyTracker)
  const bars = new Bars(options, { emitter, player })

  // emit = emitter
  // play = player

  new ComponentManager({ bars, emitter, options, partyTracker, player })

  let menuDiv = document.getElementById('menu')
  if (!menuDiv) {
    menuDiv = document.createElement('div')
    menuDiv.id = 'menu'
    // Set element display to none in case the page has not included defaults.css.
    menuDiv.style.display = 'none'

    let btn_settings = document.createElement('button')
    btn_settings.id = 'settings'
    btn_settings.innerHTML = '设置'
    btn_settings.addEventListener('click', function () {
      let iTop = (1080 - 30 - 470) / 2
      let iLeft = (1920 - 10 - 670) / 2
      window.open(
        './settings.html',
        '_blank',
        'width=720,height=570,top=' + iTop + ',left=' + iLeft
      )
    })
    menuDiv.append(btn_settings)

    document.body.append(menuDiv)
  }
})

function rewriteOption(options: BuffOptions): BuffOptions {
  const config = loadConfig()
  options.Scale = config.Scale
  options.BigBuffNoticeTTSOn = config.BigBuffNoticeTTSOn
  options.DotNoticeLessThanSecond = config.DotNoticeLessThanSecond
  options.DotNoticeTTSOn = config.DotNoticeTTSOn
  options.DotNoticeTTS = config.DotNoticeTTS

  options.TTSGoringBlade = config.TTSGoringBlade
  options.TTSSurgingTempest = config.TTSSurgingTempest
  options.TTSDia = config.TTSDia
  options.TTSBiolysis = config.TTSBiolysis
  options.TTSCombustIII = config.TTSCombustIII
  options.TTSEukrasianDosisIii = config.TTSEukrasianDosisIii
  options.TTSDemolish = config.TTSDemolish
  options.TTSChaoticSpring = config.TTSChaoticSpring
  options.TTSHiganbana = config.TTSHiganbana
  options.TTSDeathsDesign = config.TTSDeathsDesign
  options.TTSStormbite = config.TTSStormbite
  options.TTSThunderIii = config.TTSThunderIii

  // 缩放比例
  const uscale = decodeURI(getQueryVariable('scaling'))
  if (uscale != '') {
    options.Scale = Number(uscale)
  }

  // tts总开关
  const uttsOn = decodeURI(getQueryVariable('tts'))
  if (uttsOn === '0') {
    options.BigBuffNoticeTTSOn = false
    options.DotNoticeTTSOn = false
  }
  // 小于多少秒提醒
  const uDotNoticeLess = decodeURI(getQueryVariable('dotnoticeless'))
  if (uDotNoticeLess != '') {
    options.DotNoticeLessThanSecond = Number(uDotNoticeLess)
  }
  // TTS文字
  const uDotTTS = decodeURI(getQueryVariable('dotnoticetts'))
  if (uDotTTS != '') {
    options.DotNoticeTTS = uDotTTS
  }

  if (options.Scale > 100) {
    options.Scale = options.Scale / 100
    options.PhysicalFontSize *= options.Scale
    options.MagicFontSize *= options.Scale

    options.BigBuffIconWidth *= options.Scale
    options.BigBuffIconHeight *= options.Scale
    options.BigBuffBarHeight *= options.Scale

    options.DotIconWidth *= options.Scale
    options.DotIconHeight *= options.Scale
    options.DotBarHeight *= options.Scale
  }
  return options
}
