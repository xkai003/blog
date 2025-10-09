// 当按下确认按钮之后将阻止表单默认提交行为; 使用 addEventListener 监听按钮的 click 事件
document.getElementById('tijiao').addEventListener('click', function(event) {
    event.preventDefault(); 
    let a = document.getElementsByClassName('a')[0].value;
    
            // 创建一个新的 <span> 元素
            
    // 获取表单信息
    let text = document.getElementById('text').value
    let result = a.length; // 获取输入框中字符串的长度

    // 创建表格用来包裹住获取来的信息
    let tableConten = `
    <table border="1" cellpadding="5" cellspacing="0" align="center">
        <tr>
            <th>您提交的信息是</th>
        </tr>
        <tr>
            <td>${text}</td>
        </tr>
    </table>`;

    // 弹窗
    alert('提交成功，一个有 ' + result +' 个字' + '确认内容无误后点击确认按钮即可查看最终结果');
    
    
    // 打印表格内容到网页上
    document.write(tableConten);
});