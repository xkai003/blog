 // 复制到剪贴板功能
 function copyToClipboard(elementId) {
    // 获取要复制的元素
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // 创建临时文本区域用于复制
    const textArea = document.createElement('textarea');
    textArea.value = element.textContent;
    document.body.appendChild(textArea);
    
    // 选择并复制文本
    textArea.select();
    document.execCommand('copy');
    
    // 清理临时元素
    document.body.removeChild(textArea);

    // 复制成功按钮
    const hint = document.getElementById("toast")
    hint.style.display = "block"
    setTimeout(() => {
        hint.style.display = "none"
    }, 1500);
}