function Control(
    el,
    {   value = 0, 
        min = 0,
        max = 100,
        minAngle = 0, 
        maxAngle = 360, 
        wheelSpeed = 0.05, 
        step = 1 
    } = {}
) {
    const img = document.createElement("img");
    img.src = "1@3x.png";
    el.append(img);

    const ratio = (maxAngle - minAngle) / (max - min);
    const getAngle = () => (value - min) * ratio + minAngle;

    this.setValue = (newValue) => {
        if (newValue > max) newValue = max;
        if (newValue < min) newValue = min;

        if (typeof this.onchange === "function" && newValue !== value) this.onchange(newValue);

        value = newValue;

        img.style.transform = `rotate(${getAngle()}deg)`;
    };

    img.onmousewheel = (e) => {
        const { deltaY } = e;
        //console.log(deltaY)
        this.setValue(value + deltaY * wheelSpeed);
        e.preventDefault();
    };

    img.onclick = (e) => {
        const { layerX } = e;
        if (layerX < img.width / 2) this.setValue(value - step);
        else this.setValue(value + step);
        e.preventDefault();
    };

    const e2deg = (e) => {
        const { layerX, layerY } = e;
        const { width, height } = img;
        const x = layerX - width / 2;
        const y = height / 2 - layerY;

        //console.log(x, y, width, height)

        return ((Math.atan2(y, x) / (2 * Math.PI)) * 360 + 360) % 360;
    };

    let prevAngle = null;

    img.onmousedown = (e) => {
        prevAngle = e2deg(e);
    };

    img.onmousemove = (e) => {
        if (prevAngle === null) return;

        const currentAngle = e2deg(e);
        const deltaValue = (prevAngle - currentAngle) / ratio;
        //console.log(prevAngle - currentAngle, deltaValue)
        this.setValue(value + deltaValue);
        prevAngle = currentAngle;
        e.preventDefault();
    };

    img.onmouseup = (e) => {
        prevAngle = null;
    };
    img.onmouseleave = (e) => {
        prevAngle = null;
    };

    this.setValue(value);
    this.getValue = () => value;
}

function setRGB() {
    document.body.style.backgroundColor = `rgba(${red.getValue()},${green.getValue()},${blue.getValue()},1)`;
}

const red = new Control(container1, { min: 0, max: 255 });
red.onchange = setRGB;
const green = new Control(container1, { min: 0, max: 255 });
green.onchange = setRGB;
const blue = new Control(container1, { min: 0, max: 255 });
blue.onchange = setRGB;

const audio = document.createElement("audio");
audio.id = "audio1";
audio.src = "audio_file.mp3";
audio.controls = true;
container1.append(audio);

const volumeControl = new Control(container1, {
    value: 0.1,
    min: 0,
    max: 1,
    step: 0.02,
    wheelSpeed: 0.0002,
});
volumeControl.onchange = () => {
    audio.volume = volumeControl.getValue();
    console.log(volumeControl.getValue());
};
audio.volume = volumeControl.getValue();
console.log(volumeControl.getValue());



