function onUse(event) {
    const player = event.getPlayer();
    const currentLevel = player.getLevel();
    if (currentLevel >= 80) {
        player.sendMessage("☢ 经过pinksheepYTG检测您已超出上限等级 ☢");
    } else if (currentLevel <= 78) {
        player.setLevel(currentLevel + 2);
    } else {
        player.setLevel(80);
        player.sendMessage("☢ 经过pinksheepYTG检测您已超出上限等级 ☢");
    }
}
