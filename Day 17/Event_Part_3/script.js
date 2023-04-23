const funBtn = document.querySelector("#one");

funBtn.addEventListener('click', function(e){
    console.log("you click")
    console.log(e)
})

// The Value of e is:

// PointerEvent {isTrusted: true, pointerId: 5, width: 1, height: 1, pressure: 0, …}
// isTrusted: true
// altKey: false
// altitudeAngle: 1.5707963267948966
// azimuthAngle: 0
// bubbles: true
// button: 0
// buttons: 0
// cancelBubble: false
// cancelable: true
// clientX: 40
// clientY: 19
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 1
// eventPhase: 0
// fromElement: null
// height: 1
// isPrimary: false
// layerX: 40
// layerY: 19
// metaKey: false
// movementX: 0
// movementY: 0
// offsetX: 30
// offsetY: 9
// pageX: 40
// pageY: 19
// pointerId: 5
// pointerType: "touch"
// pressure: 0
// relatedTarget: null
// returnValue: true
// screenX: 60
// screenY: 157
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvent: true}
// srcElement: button#one
// tangentialPressure: 0
// target: button#one
// tiltX: 0
// tiltY: 0
// timeStamp: 6188.600000023842
// toElement: null
// twist: 0
// type: "click"
// view: Window {window: Window, self: Window, document: document, name: '', locatio: Location, …}
// which: 1
// width: 1
// x: 40
// y: 19
// [[Prototype]]: PointerEvent

const funBtn2 = document.querySelectorAll("button")

for(let bton2 of funBtn2){
bton2.addEventListener('click', function(e){
    console.log(e.currentTarget)//We can pass anything inside the arguement and this will provide some menthod like currentTarget which means what ever ever button we click it will give us the html object;
    })
}
    // outpurt: <button id="one">Button 1</button>; <button id="two">Button 2</button>; <button id="three">Button 3</button>

for(let bton3 of funBtn2){
    bton3.addEventListener('click', function(e){
        console.log(e.currentTarget.textContent)//We can pass anything inside the arguement and this will provide some menthod like currentTarget which means what ever ever button we click it will give us the html object;
        })
    }
    // Output: Button 1; Button 2; Button 3;