export const bossConfig = {
    name: '雾门收票人',
    maxHp: 240000,
    stageNode: 0.6,
    stageTitle: '主线调查 · 异常 01',
    roundTitle: '调查阶段 1',
    shieldBase: 36000,
};
export const investigatorConfig = [
    { id: 'luchen', name: '陆沉', role: '防护', maxHp: 4620, maxEnergy: 100, dps: 520, color: '#65c9ff' },
    { id: 'fangjin', name: '方烬', role: '输出', maxHp: 4110, maxEnergy: 100, dps: 1120, color: '#ff5e5e' },
    { id: 'ningkui', name: '宁葵', role: '治疗', maxHp: 3580, maxEnergy: 100, dps: 360, color: '#70ffe7' },
];
export const skillConfig = {
    ticketInterval: 7,
    ticketDuration: 6,
    ticketSanityLoss: 7,
    ticketEnergyLoss: 18,
    denyPassageInterval: 10,
    denyLockDuration: 5,
    denySanityLoss: 10,
    vulnerableDuration: 5,
    shieldInterval: 13,
    shieldDamageReduction: 0.45,
    pulseInterval: 6,
    pulseHeal: 360,
    pulseSanityRestore: 3,
    guardInterval: 8,
    guardShield: 520,
};
export const statusConfig = {
    wrongTicket: '错误车票',
    locked: '技能封锁',
    shield: '护盾',
    vulnerable: '易伤',
    sealedGate: '封印检票口',
    lastBroadcast: '末班广播',
    drowningBoost: '沉沦增伤',
    healing: '治疗恢复',
};
export const interventionCards = [
    { id: 'seal', title: '封印检票口', desc: '8 秒内不再产生错误车票', tag: '稳定 · 降低理智压力' },
    { id: 'analyze', title: '解析闸门结构', desc: '下一次闸门护盾强度降低 60%', tag: '针对 · 创造输出窗口' },
    { id: 'drown', title: '沉沦通行证', desc: '理智 -15，全队伤害 +50%，持续 10 秒', tag: '高风险 · 短时爆发' },
];
export const battleNumbers = { initialSanity: 100, tickMs: 100, victoryFadeHp: 0 };
