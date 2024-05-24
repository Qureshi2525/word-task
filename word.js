document.addEventListener('DOMContentLoaded', () => {
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const textEditor = document.getElementById('textEditor');
    const clock = document.getElementById('clock');
    const boldBtn = document.getElementById('boldBtn');
    const italicBtn = document.getElementById('italicBtn');
    const underlineBtn = document.getElementById('underlineBtn');

    // Update slider value display and text editor font size
    fontSizeSlider.addEventListener('input', () => {
        const fontSize = fontSizeSlider.value + 'px';
        fontSizeValue.textContent = fontSize;
        textEditor.style.fontSize = fontSize;
    });

    // Update clock every second
    setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }, 1000);

    // Toggle bold text
    boldBtn.addEventListener('click', () => {
        document.execCommand('bold');
    });

    // Toggle italic text
    italicBtn.addEventListener('click', () => {
        document.execCommand('italic');
    });

    // Toggle underline text
    underlineBtn.addEventListener('click', () => {
        document.execCommand('underline');
    });
});
