function w(){
    document.getElementById('1').textContent = "Mr.OSKAR";
  
    document.getElementById('2').textContent = "Editor and live viewer for html, css and javascript codes";
    
    
   
    
}
w();
        const editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/html");

       
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
        });

        function updateOutput() {
            const code = editor.getValue();
            const output = document.getElementById('output');
            output.contentDocument.open();
            output.contentDocument.write(code);
            output.contentDocument.close();
        }

        editor.session.on('change', updateOutput);

        
        updateOutput();

        
        const copyButton = document.getElementById('copy-btn');
        copyButton.addEventListener('click', () => {
            const code = editor.getValue();
            navigator.clipboard.writeText(code).then(() => {
                copyButton.textContent = "Done!";
                setTimeout(() => {
                    copyButton.textContent = "Copy";
                }, 2000);
            }).catch(() => {
                alert("Copying has not been done! ");
            });
        });

        
        const fullscreenButton = document.getElementById('fullscreen-btn');
        fullscreenButton.addEventListener('click', () => {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { // Firefox
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { // IE/Edge
                elem.msRequestFullscreen();
                
                
            }
        });

    
