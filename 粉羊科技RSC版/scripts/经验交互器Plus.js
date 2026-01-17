function onUse(event) {
    const player = event.getPlayer();
    const currentLevel = player.getLevel();
    if (currentLevel >= 10000000) {
        player.sendMessage("☢ 经过pinksheepYTG检测您已超出上限等级，已超限 ☢");
    } else if (currentLevel <= 10000000) {
        player.setLevel(currentLevel + 10);
    } else {
        player.setLevel(10000000);
        player.sendMessage("☢ 经过pinksheepYTG检测您已超出上限等级，已超限 ☢");
    }
}
