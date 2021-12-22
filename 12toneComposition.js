
/*
TODO list:
- READLINE
- RANDOM RANGE FUNKTIONEN
- STOCKPILES fur EDM/IDM GENRES (RHYTHM)
- SAMPLE FUNKTIONEN FUr ETURNING RANDOM ARRAYS
- L184, for (const offset of [12, 0, -12, -24]) {
    - i'd have to add or remove 'trackX' variables and all the associated copy/pastes for each one? USING ARRAYS
    - REFACTORING CODE
    */
    
    const fs = require('fs');
    const Midi = require('jsmidgen');
    const rl = require('readline')
    
    //******************************************* */
    
    const numMIDIfiles=10;
    
    const rhythmicMeasures = [16, 24, 32, 48, 64, 96, 128, 192, 256];
    const rhythmicMeasuresFast = [16, 24, 32, 48, 64];
    const rhythmicMeasuresSlow = [96, 128, 192, 256];
    
    const oten=Math.trunc(128*(1/3));
    
    // stockpileRhythm
    let rhythmicStockpile12tone1=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rythms = [rhythmicStockpile12tone1, rhythmicStockpile12tone1, rhythmicStockpile12tone1, rhythmicStockpile12tone1];
    
    
    //********************************************* */
    
    function myRhythm() {return rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];}
    
    
    function myKode() {
        for(let i=0; i<32; i++) {rythms[0][i]=myRhythm(); rythms[1][i]=myRhythm(); rythms[2][i]=myRhythm(); rythms[3][i]=myRhythm();}
        console.log(rythms[0]); console.log(rythms[1]); console.log(rythms[2]); console.log(rythms[3]);
    }
    
    //******************************************* */    
    // reading and mapping root key
    
    console.log("select a root key");
    // let myRootKey = rl.createInterface(process.stdin, process.stdout);
    
    let myRootKey=58;
    
    //******************************************* */
    
    let pieceLength=rhythmicStockpile12tone1.length*16*5;
    
    function event(track, rhythmicStockpile12tone) {
        track.addNote(0, 64 + Math.floor(Math.random() * Math.floor(24) - 12) + 0, rhythmicStockpile12tone[1][rhythmicStockpile12tone.length]);
    }
    function conlonNancarrowMidiStyle1() {
        for(let z=0; z<numMIDIfiles; z++) {
            let file = new Midi.File();                         // instantiating Class FIle
            
            //******************************************* */
            
            let tracks = [new Midi.Track(), new Midi.Track(), new Midi.Track(), new Midi.Track()]
            
            //******************************************* */
            
            tracks.forEach(track => {file.addTrack(track);})
            
            myKode();
            
            function myNote() {
                tracks.forEach(track => rythms.forEach(rhythmicStockpile12tone => event(track, rhythmicStockpile12tone)))
            }
            
            for(let i=0; i<pieceLength; i++) {                
                for(let j=0; j<6; j++) if(i > Math.trunc(pieceLength*(j/5)) && i<Math.trunc(pieceLength*((j+1)/5))) myNote();
            }
            fs.writeFileSync('./midiCompositions2/test' + z + '.mid', file.toBytes(), 'binary');
        }
    }
    
    //******************************************* */
    
    // select AC funktionen
    
    let switcher = 3;
    
    conlonNancarrowMidiStyle1();
