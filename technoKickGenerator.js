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
       const rl = require('readline');
       
       //******************************************* */
       
        const numMIDIfiles=10000;

        const rhythmicMeasures = [16, 24, 32, 48, 64, 96, 128, 192, 256];
        const rhythmicMeasuresFast = [16, 24, 32, 48, 64];
        const rhythmicMeasuresSlow = [96, 128, 192, 256];
        
        const oten=Math.trunc(128*(1/3));
        
        const technoRhythms1    = [128, 128, 128, 128];
        const technoRhythms2    = [128, 64, 64, 128, 128];
        const technoRhythms3    = [128, 128, oten, oten, oten, oten, oten, oten];
        const technoRhythms4    = [128, 128, oten, oten, oten, oten, oten, oten];
        const technoRhythms5    = [128, 128, oten, oten, oten, oten, oten, oten];
        const technoRhythms6    = [128, 128, oten, oten, oten, 128];
        const technoRhythms7    = [32, 32, 32, 32, 128, 32, 32, 32, 32, 32, 32, 32, 32];
        const technoRhythms8    = [64, 64, 32, 32, 64, 64, 64, 32, 32, 64];
        const technoRhythms9    = [128, 128, 32, 32, 64, 32, 32, 6];
        const technoRhythms10   = [32, 32, 64, 128, 32, 32, 32, 32, 32, 32, 32, 32];
        
        //******************************************* */

        function technoRiffSwitcher() {
            let switchRhythm = Math.trunc(Math.floor(Math.random() * Math.floor(9) + 1));
            switch(switchRhythm) {
                case 0: return technoRhythms10;
                case 1: return technoRhythms1;
                case 2: return technoRhythms2;
                case 3: return technoRhythms3;
                case 4: return technoRhythms4;
                case 5: return technoRhythms5;
                case 6: return technoRhythms6;
                case 7: return technoRhythms7;
                case 8: return technoRhythms8;
                case 9: return technoRhythms9;
            }
        }

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

        //******************************************* */
        
        // reading and mapping root key
        
        // console.log("select a root key");
        // let myRootKey = rl.createInterface(process.stdin, process.stdout);
        
        let myRootKey=58;

        //******************************************* */
        
        let myRhythmMaster;
        
        // ccurrently debugging malfunctioning behavior
        function technoKickWorkInProgress() {
            for(let z=0; z<numMIDIfiles; z++) {
                let file = new Midi.File();                         // instantiating Class FIle
                let track1 = new Midi.Track();                      // instantiating Class track 
                file.addTrack(track1);                              // pointing file to track
                myRhythm1 = technoRiffSwitcher();
                myRhythm2 = technoRiffSwitcher();
                myRhythm3 = technoRiffSwitcher();
                let myRhythmMaster=myRhythm1;   
                for(let i1 = 0; i1<15; i1++) {myRhythmMaster=myRhythmMaster.concat(myRhythm1);}
                for(let i2 = 0; i2<16; i2++) {myRhythmMaster=myRhythmMaster.concat(myRhythm2);}
                for(let i3 = 0; i3<16; i3++) {myRhythmMaster=myRhythmMaster.concat(myRhythm1);}
                for(let i4 = 0; i4<16; i4++) {myRhythmMaster=myRhythmMaster.concat(myRhythm3);}
                //console.log("myrhythm", myRhythmMaster);
                //console.log("z", z);
                for(let i=0; i<myRhythmMaster.length; i++) {
                    //console.log("adding note with value myRhythmMaster[i]", myRhythmMaster[i]);
                    track1.addNote(0, 36, myRhythmMaster[i]);
                    //console.log("note added", "i", i);
                } //console.log(z);
                fs.writeFileSync('./midiKicks/test' + z + '.mid', file.toBytes(), 'binary');                       
            }
        }

        technoKickWorkInProgress();

        
