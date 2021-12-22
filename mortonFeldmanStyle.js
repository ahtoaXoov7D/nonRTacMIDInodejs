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
       
       const numMIDIfiles=1000;
       
       const rhythmicMeasures = 512;
       const rhythmicMeasuresFast = [16, 24, 32, 48, 64];
       const rhythmicMeasuresSlow = [96, 128, 192, 256];
       
       const oten=Math.trunc(128*(1/3));
       
       //******************************************* */
       
       let file = new Midi.File();                         // instantiating Class FIle
       
       //******************************************* */
       
       let track1 = new Midi.Track();                      // instantiating Class track 
       let track2 = new Midi.Track();                      // instantiating Class track
       let track3 = new Midi.Track();                      // instantiating Class track
       let track4 = new Midi.Track();                      // instantiating Class track
       
       //******************************************* */
       
       file.addTrack(track1);                              // pointing file to track
       file.addTrack(track2);                              // pointing file to track
       file.addTrack(track3);                              // pointing file to track
       file.addTrack(track4);                              // pointing file to track
       
        let myRootKey=58;
        
        //******************************************* */

        function mortonFeldmanStyle() {
            
            for(let z=0; z<numMIDIfiles; z++) {
                let file = new Midi.File();                         // instantiating Class FIle
                
                //******************************************* */
                
                let track1 = new Midi.Track();                      // instantiating Class track 
                let track2 = new Midi.Track();                      // instantiating Class track
                let track3 = new Midi.Track();                      // instantiating Class track
                let track4 = new Midi.Track();                      // instantiating Class track
                
                //******************************************* */
                
                file.addTrack(track1);                              // pointing file to track
                file.addTrack(track2);                              // pointing file to track
                file.addTrack(track3);                              // pointing file to track
                file.addTrack(track4);                              // pointing file to track
                
                console.log(z);
                
                for(let i=0; i<64*2; i++) {  
                    track1.addNote(0, 64 + Math.floor(Math.random() * Math.floor(24) - 12) + 12, rhythmicMeasures);
                    track2.addNote(0, 64 + Math.floor(Math.random() * Math.floor(24) - 12) + 0, rhythmicMeasures);
                    track3.addNote(0, 64 + Math.floor(Math.random() * Math.floor(24) - 12) - 12, rhythmicMeasures);
                    track4.addNote(0, 64 + Math.floor(Math.random() * Math.floor(24) - 12) - 24, rhythmicMeasures);
                } 
                fs.writeFileSync('./midiCompositions4/test' + z + '.mid', file.toBytes(), 'binary');
            }
        }

        mortonFeldmanStyle();