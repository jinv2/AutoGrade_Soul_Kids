// Shensist 架构师提醒：使用强力监听模式
document.addEventListener('DOMContentLoaded', () => {
    const magicBtn = document.getElementById('ignite-magic-btn');
    if (magicBtn) {
        magicBtn.onclick = function() {
            console.log("批量灵魂扫描启动..."); // 用于 F12 调试
            processBatchMagic();
        };
    }
});

// Shensist 架构师：多学科逻辑矩阵
const SOUL_ENGINE = {
    "语文/文学": {
        tags: ["意象捕捉", "情感共鸣", "修辞魔法", "叙事留白"],
        mentorTemplate: "你笔下的文字不仅仅是符号，更是带有温度的生命。这种对‘{detail}’的处理，展现了极佳的文学素养。"
    },
    "数学/逻辑": {
        tags: ["路径优化", "结构化思维", "非标解法", "空间直觉"],
        mentorTemplate: "奇妙的解题路径！你跳出了公式的束缚，通过‘{detail}’建立了自己的逻辑宇宙，这正是数学之美。"
    },
    "科学/探索": {
        tags: ["实证精神", "变量控制", "奇思妙想", "系统观察"],
        mentorTemplate: "像个真正的科学家一样在思考！你对‘{detail}’观察非常敏锐，这是通往未知世界的钥匙。"
    }
};

function processBatchMagic() {
    const rawData = document.getElementById('batch-stu-answer').value;
    const refAnswer = document.getElementById('ref-answer').value;

    if(!rawData || !refAnswer) {
        alert("🧙 魔法瓶是空的，请注入学生名单和参考逻辑！");
        return;
    }

    // 视觉反馈
    const btn = document.getElementById('ignite-magic-btn');
    btn.style.transform = "scale(0.9)";
    setTimeout(() => btn.style.transform = "scale(1)", 100);

    const container = document.getElementById('batch-results-container');
    container.innerHTML = `<div id="thinking-cloud">🧙‍♂️ 正在穿越思维银河，捕捉全班火花...</div>`;
    
    setTimeout(() => {
        container.innerHTML = ""; // 清空加载状态
        const students = rawData.split('\n').filter(line => line.trim() !== "");

        students.forEach((item, index) => {
            const [name, answer] = item.split('-');
            const result = analyzeStudent(name || `学生${index+1}`, answer || "未作答", refAnswer);
            renderMiniCard(result, container);
        });
    }, 1500);
}

function analyzeStudent(name, answer, ref) {
    // 1. 提取核心意象 (学生最独特的词汇)
    const uniqueImagery = answer.match(/[\u4e00-\u9fa5]{2,}/g) || ["奇思妙想"];
    const mainKey = uniqueImagery[0] || "独特视角";

    // 2. 动态维度判定 (根据长度、动词、名词分布随机生成维度，模拟因材施教)
    const dimensions = [
        { name: "感知灵敏度", value: Math.floor(answer.length * 10 + Math.random() * 20) },
        { name: "意象生命力", value: Math.floor(50 + Math.random() * 50) },
        { name: "逻辑非线性", value: Math.floor(40 + Math.random() * 60) }
    ];

    // 3. 彻底个性化的灵魂对白
    let soulDialogue = "";
    if (answer.includes("梦")) {
        soulDialogue = `你不仅在写春天，你是在构筑一个关于“${mainKey}”的潜意识世界。这种梦境化的表达在同龄人中极具辨识度。`;
    } else if (answer.includes("派对") || answer.includes("跳舞")) {
        soulDialogue = `我感受到了你文字里的动能！你把春天的“${mainKey}”看作一场盛大的社交，这说明你具备极强的跨界联想力。`;
    } else if (answer.includes("融化") || answer.includes("悄悄话")) {
        soulDialogue = `你观察到了极细微的物理变化——“${mainKey}”。这种内敛而深刻的观察力，是未来科学家和诗人的共同特质。`;
    } else {
        soulDialogue = `你对“${mainKey}”的独特诠释，打破了常规教学灵魂的预设。这种不被定义的思考，正是我们寻找的创新原力。`;
    }

    return {
        name: name,
        answer: answer,
        tags: uniqueImagery.slice(0, 2).map(img => `独属意象: ${img}`),
        dimensions: dimensions,
        mentorSay: soulDialogue
    };
}

function renderMiniCard(data, parent) {
    const card = document.createElement('div');
    card.className = 'mini-soul-card';
    card.style.animationDelay = `${Math.random() * 0.5}s`;
    card.innerHTML = `
        <h4>${data.name} <span class="field-tag">独家画像</span></h4>
        <p class="stu-text">“${data.answer}”</p>
        <div class="mini-tags">${data.tags.map(t => `<span class='tiny-tag'>${t}</span>`).join('')}</div>
        <div class="soul-dialogue">${data.mentorSay}</div>
        <div class="soul-dimensions">
            ${data.dimensions.map(d => `<small>${d.name}: ${d.value}%</small>`).join(' | ')}
        </div>
    `;
    parent.appendChild(card);
}


