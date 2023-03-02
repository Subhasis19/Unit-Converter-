// Unit Converter Feet to Inches
var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function(){
    let f = this.value;
    let i = f * 12;
    inch.value = i;
});

inch.addEventListener('input', function(){
    let i = this.value;
    let f = i / 12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});


// Unit Converter Meters to Centimeters

var Meter = document.getElementById('Meter');
var Cent = document.getElementById('Cent');

Meter.addEventListener('input', function(){
    let f = this.value;
    let i = f * 100;
    Cent.value = i;
});

Cent.addEventListener('input', function(){
    let i = this.value;
    let f = i / 100;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    Meter.value = f;
});


// Unit Converter Miles to Km
var mile = document.getElementById('mile');
var km = document.getElementById('km');

mile.addEventListener('input', function(){
    let f = this.value;
    let i = f * 1.61;
    km.value = i;
});

km.addEventListener('input', function(){
    let i = this.value;
    let f = i / 1.61;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    mile.value = f;
});


// Unit Converter Meters to Centimeters

var ud = document.getElementById('ud');
var ir = document.getElementById('ir');

ud.addEventListener('input', function(){
    let f = this.value;
    let i = f * 82.64;
    ir.value = i;
});

ir.addEventListener('input', function(){
    let i = this.value;
    let f = i / 82.64;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    ud.value = f;
});