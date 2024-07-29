# ffxiv-monitor-tools
FFXIV 团辅、DoT监控工具

## 团辅Buff计算监控

计算目前团辅提供的增伤. 如果是诗人会计算buff刷新时机, 以及当前DOT快照的增伤情况.

![image](buff_show.gif)

### 使用方式：
1. 在源代码根目录下运行 `npm install`
2. 使用 `npm run build` 构建
3. 在ACT中添加新的自定悬浮窗（数据统计）.
4. 在悬浮窗路径中填写: `源代码所在路径\ffxiv-monitor-tools\dist\src\buff.html` 或使用本仓库构建好的地址: `https://lsl1225.github.io/ffxiv-monitor-tools/src/buff.html`

### DOT提示说明
- DOT的剩余TTS提示目前仅针对以下职业技能有效: `诗人:狂风蚀箭`, `白魔:天辉`, `学者:蛊毒法`, `占星:焚灼`, `武士:彼岸花`, `黑魔:暴雷`, `召唤:剧毒菌`
- 剩余职业DOT技能没有添加原因多为`必要性不大`或`DOT本身持续时间太短(骑士)`或`规划在正常循环中(如武僧)`

### 个性化配置
在未锁定悬浮窗的状态下，使用悬浮窗页面上的设置按钮修改。
