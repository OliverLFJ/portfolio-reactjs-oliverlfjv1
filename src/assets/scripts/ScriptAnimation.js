const ScriptAnimation = () => {
    const eyeLeft = document.getElementById('iris-container');
    const open = document.getElementById('open-mouth');
    const close = document.getElementById('close-mouth');
    if (eyeLeft && open && close) {

        setInterval(() => {
            eyeLeft.classList.add('iris-left-animate');
            setTimeout(() => {
                eyeLeft.classList.remove('iris-left-animate');
            }, 4000);
        }, 3000);

        setTimeout(() => {
            setInterval(() => {
                eyeLeft.classList.add('move-left-animate');
                setTimeout(() => {
                    eyeLeft.classList.remove('move-left-animate');
                }, 6000);
            }, 10000);
        }, 4000);

        setInterval(() => {
            open.style.display = "none"
            close.style.display = "inline-flex"
            setTimeout(() => {
                open.style.display = "inline-flex"
                close.style.display = "none"
            }, 2000);
        }, 10000);

    }




}

export default ScriptAnimation